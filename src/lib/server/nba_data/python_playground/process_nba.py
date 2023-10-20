import pprint
import json

# after copying API response from stats.nba.com call into a file (raw.json), we want to prettify it, so this method does it.
def format_nba_stats_data():
    with open('raw_nba_stats_data/raw.json', 'r') as infile:
        data = json.load(infile)

    with open('raw_nba_stats_data/formatted.json', 'w') as outfile:
        json.dump(data, outfile, indent=2)

# this method takes the formatted data from above and creates the json of players that will be used in the app.
# writes to a new file
def prune_nba_stats_data():
    pruned_data = {}

    with open('raw_nba_stats_data/formatted.json', 'r') as infile:
        data = json.load(infile)
        playerSet = data["resultSets"][0]["rowSet"]
        index = 0
        for player_fields in playerSet:
            isOnACurrentTeam = player_fields[19] == 1.0

            if not isOnACurrentTeam:
                continue

            index += 1
            full_name = player_fields[2] + " " + player_fields[1]
            # add in a filter here to remove any '.' characters from full_name
            full_name = full_name.replace(".", "") # done
            image_url = f"https://cdn.nba.com/headshots/nba/latest/1040x760/{player_fields[0]}.png"
            pruned_data[full_name] = {
                "player_id": player_fields[0],
                "team_id": player_fields[4],
                "image_url": image_url,
                "position": player_fields[11],
                "pts": player_fields[20],
                "reb": player_fields[21],
                "ast": player_fields[22],
                "index": index
            }

        # after looping all rostered players
        with open("raw_nba_stats_data/cleaned_players.json", 'w') as outfile:
            json.dump(pruned_data, outfile, indent=2)

if __name__ == "__main__":
    # format_nba_stats_data()
    prune_nba_stats_data()

# SCHEMA for FORMATTED.JSON
# [
# "PERSON_ID", 0
# "PLAYER_LAST_NAME", 1
# "PLAYER_FIRST_NAME", 2
# "PLAYER_SLUG", 3
# "TEAM_ID", 4
# "TEAM_SLUG", 5
# "IS_DEFUNCT", 6
# "TEAM_CITY", 7
# "TEAM_NAME", 8
# "TEAM_ABBREVIATION", 9
# "JERSEY_NUMBER", 10
# "POSITION", 11
# "HEIGHT", 12
# "WEIGHT", 13
# "COLLEGE", 14
# "COUNTRY", 15
# "DRAFT_YEAR", 16
# "DRAFT_ROUND", 17
# "DRAFT_NUMBER", 18
# "ROSTER_STATUS", 19
# "PTS", 20
# "REB", 21
# "AST", 22
# "STATS_TIMEFRAME", 23
# "FROM_YEAR", 24
# "TO_YEAR" 25
# ],
