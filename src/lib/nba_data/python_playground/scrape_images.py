import json
import requests
from PIL import Image
from io import BytesIO

teams = {
    "1610612751": "Brooklyn Nets",
    "1610612766": "Charlotte Hornets",
    "1610612741": "Chicago Bulls",
    "1610612739": "Cleveland Cavaliers",
    "1610612742": "Dallas Mavericks",
    "1610612743": "Denver Nuggets",
    "1610612765": "Detroit Pistons",
    "1610612744": "Golden State Warriors",
    "1610612745": "Houston Rockets",
    "1610612754": "Indiana Pacers",
    "1610612746": "Los Angeles Clippers",
    "1610612747": "Los Angeles Lakers",
    "1610612763": "Memphis Grizzlies",
    "1610612748": "Miami Heat",
    "1610612749": "Milwaukee Bucks",
    "1610612750": "Minnesota Timberwolves",
    "1610612740": "New Orleans Pelicans",
    "1610612752": "New York Knicks",
    "1610612760": "Oklahoma City Thunder",
    "1610612753": "Orlando Magic",
    "1610612755": "Philadelphia 76ers",
    "1610612756": "Phoenix Suns",
    "1610612757": "Portland Trail Blazers",
    "1610612758": "Sacramento Kings",
    "1610612759": "San Antonio Spurs",
    "1610612761": "Toronto Raptors",
    "1610612762": "Utah Jazz",
    "1610612764": "Washington Wizards"
}

def download_player_headshots(team_id, player_list):
    for player in player_list.keys():
        if players_json[player]["team_id"] == team_id:
            response = requests.get(players_json[player]["image_url"])
            if response.status_code == 200:
                player_file_name = "_".join(player.split()).lower()
                avif_img = BytesIO(response.content)
                with Image.open(avif_img) as img:

                    img.save(f'player_headshots/{player_file_name}.png')
                    print(f'Successfully retrieved {player} image')
            else:
                print(f'Failed to retrieve {player} image. Status code: {response.status_code}')



if __name__ == "__main__":
    with open('raw_nba_stats_data/cleaned_players.json', 'r') as infile:
      players_json = json.load(infile)

    for team in teams.keys():
      print(f"\nDownloading headshots for {teams[team]} \n")
      download_player_headshots(int(team), players_json)
