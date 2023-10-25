import json
import requests

# Ball don't lie API is paginated. Need to call the API multiple times to get all the data
def get_all_players_json():
    players_endpoint = "https://www.balldontlie.io/api/v1/players"
    error = False
    page = 0

    data = {
        "data": []
    }
    while (not error):
        response = requests.get(players_endpoint, params={"page": page,"per_page": 100})
        if response.status_code == 200:
            page_of_players = response.json()
            list_of_players = page_of_players["data"]
            data["data"].append(list_of_players)
            page += 1
            print(f"Page {page} retrieved")
        else:
            # print(f"Failed to retrieve players. Status code: {response.status_code} | Message: {response.json()['message']}")
            error = True

    with open("ball_dont_lie/compiled_players.json", "w") as outfile:
        json.dump(data, outfile, indent=2)


def get_all_teams():
    teams_endpoint = "https://www.balldontlie.io/api/v1/teams"
    response = requests.get(teams_endpoint)
    if response.status_code == 200:
        with open("ball_dont_lie/teams.json", "w") as outfile:
            json.dump(response.json(), outfile, indent=2)
    else:
        print(f"Failed to retrieve teams. Status code: {response.status_code}")


#  ------------------------------------------------------------------------------------------------------------------------------------------------

def format_player_data():
    with (open("ball_dont_lie/compiled_players.json", "r")) as infile:
        data = json.load(infile)
    player_list = data["data"]


    formatted_json = {}
    for page in player_list:
        for player in page:
            is_valid = player["position"] != ""
            if not is_valid:
                continue
            else:
                full_name = player["first_name"] + " " + player["last_name"]
                formatted_json[full_name] = {
                    "player_id": player["id"],
                    "team_id": player["team"]["id"],
                    "team_name": player["team"]["full_name"],
                }
    with open("ball_dont_lie/formatted_players.json", "w") as outfile:
        json.dump(formatted_json, outfile, indent=2)

def format_teams():
    with (open("ball_dont_lie/raw_teams.json", "r")) as infile:
        data = json.load(infile)
    team_list = data["data"]
    formatted_json = {}
    for team in team_list:
        team_number = int(team["id"])
        formatted_json[team_number] = {
            "full_name": team["full_name"],
            "abbreviation": team["abbreviation"],
            "conference": team["conference"],
            "division": team["division"],
        }

    with open("ball_dont_lie/formatted_teams.json", "w") as outfile:
        json.dump(formatted_json, outfile, indent=2)


#  ------------------------------------------------------------------------------------------------------------------------------------------------

def merge_ball_with_nba_data():
    with (open("raw_nba_stats_data/cleaned_players.json", "r")) as infile:
        nba_players_json = json.load(infile)

    with (open("ball_dont_lie/formatted_players.json", "r")) as infile2:
        ball_dont_lie_players = json.load(infile2)

    merged_players_json = {}

    index = 0
    num_not_found_players = 0
    for player in ball_dont_lie_players:
        clean_player_name = player.replace(".", "").replace("'", "")
        if clean_player_name in nba_players_json:
            merged_players_json[clean_player_name] = {
                "nba_player_id": nba_players_json[clean_player_name]["player_id"],
                "ball_dont_lie_id": ball_dont_lie_players[player]["player_id"],
                "team_id": ball_dont_lie_players[player]["team_id"],
                "team_name": ball_dont_lie_players[player]["team_name"],
                "position": nba_players_json[clean_player_name]["position"],
                # "pts": nba_players_json[player]["pts"],
                # "reb": nba_players_json[player]["reb"],
                # "ast": nba_players_json[player]["ast"],
                "index": index,
            }
            index += 1
        else:
            print(f"[{clean_player_name.upper()}] not found - {num_not_found_players}")
            num_not_found_players += 1

    print(f"\nNumber of players not found: {num_not_found_players}\n")

    with (open("merged_data/merged_players.json", "w")) as outfile:
        json.dump(merged_players_json, outfile, indent=2)

if __name__ == "__main__":
    # merge_ball_with_nba_data()
    format_teams()

    # get_all_players_json()
    # format_player_data()

    print("\nDone")
