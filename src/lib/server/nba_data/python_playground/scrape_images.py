import json
import os
import requests
from PIL import Image
from io import BytesIO

NBA_CDN_URL = "https://cdn.nba.com/headshots/nba/latest/1040x760/"

teams = {
  "1": {
    "full_name": "Atlanta Hawks",
    "abbreviation": "ATL",
    "conference": "East",
    "division": "Southeast"
  },
  "2": {
    "full_name": "Boston Celtics",
    "abbreviation": "BOS",
    "conference": "East",
    "division": "Atlantic"
  },
  "3": {
    "full_name": "Brooklyn Nets",
    "abbreviation": "BKN",
    "conference": "East",
    "division": "Atlantic"
  },
  "4": {
    "full_name": "Charlotte Hornets",
    "abbreviation": "CHA",
    "conference": "East",
    "division": "Southeast"
  },
  "5": {
    "full_name": "Chicago Bulls",
    "abbreviation": "CHI",
    "conference": "East",
    "division": "Central"
  },
  "6": {
    "full_name": "Cleveland Cavaliers",
    "abbreviation": "CLE",
    "conference": "East",
    "division": "Central"
  },
  "7": {
    "full_name": "Dallas Mavericks",
    "abbreviation": "DAL",
    "conference": "West",
    "division": "Southwest"
  },
  "8": {
    "full_name": "Denver Nuggets",
    "abbreviation": "DEN",
    "conference": "West",
    "division": "Northwest"
  },
  "9": {
    "full_name": "Detroit Pistons",
    "abbreviation": "DET",
    "conference": "East",
    "division": "Central"
  },
  "10": {
    "full_name": "Golden State Warriors",
    "abbreviation": "GSW",
    "conference": "West",
    "division": "Pacific"
  },
  "11": {
    "full_name": "Houston Rockets",
    "abbreviation": "HOU",
    "conference": "West",
    "division": "Southwest"
  },
  "12": {
    "full_name": "Indiana Pacers",
    "abbreviation": "IND",
    "conference": "East",
    "division": "Central"
  },
  "13": {
    "full_name": "LA Clippers",
    "abbreviation": "LAC",
    "conference": "West",
    "division": "Pacific"
  },
  "14": {
    "full_name": "Los Angeles Lakers",
    "abbreviation": "LAL",
    "conference": "West",
    "division": "Pacific"
  },
  "15": {
    "full_name": "Memphis Grizzlies",
    "abbreviation": "MEM",
    "conference": "West",
    "division": "Southwest"
  },
  "16": {
    "full_name": "Miami Heat",
    "abbreviation": "MIA",
    "conference": "East",
    "division": "Southeast"
  },
  "17": {
    "full_name": "Milwaukee Bucks",
    "abbreviation": "MIL",
    "conference": "East",
    "division": "Central"
  },
  "18": {
    "full_name": "Minnesota Timberwolves",
    "abbreviation": "MIN",
    "conference": "West",
    "division": "Northwest"
  },
  "19": {
    "full_name": "New Orleans Pelicans",
    "abbreviation": "NOP",
    "conference": "West",
    "division": "Southwest"
  },
  "20": {
    "full_name": "New York Knicks",
    "abbreviation": "NYK",
    "conference": "East",
    "division": "Atlantic"
  },
  "21": {
    "full_name": "Oklahoma City Thunder",
    "abbreviation": "OKC",
    "conference": "West",
    "division": "Northwest"
  },
  "22": {
    "full_name": "Orlando Magic",
    "abbreviation": "ORL",
    "conference": "East",
    "division": "Southeast"
  },
  "23": {
    "full_name": "Philadelphia 76ers",
    "abbreviation": "PHI",
    "conference": "East",
    "division": "Atlantic"
  },
  "24": {
    "full_name": "Phoenix Suns",
    "abbreviation": "PHX",
    "conference": "West",
    "division": "Pacific"
  },
  "25": {
    "full_name": "Portland Trail Blazers",
    "abbreviation": "POR",
    "conference": "West",
    "division": "Northwest"
  },
  "26": {
    "full_name": "Sacramento Kings",
    "abbreviation": "SAC",
    "conference": "West",
    "division": "Pacific"
  },
  "27": {
    "full_name": "San Antonio Spurs",
    "abbreviation": "SAS",
    "conference": "West",
    "division": "Southwest"
  },
  "28": {
    "full_name": "Toronto Raptors",
    "abbreviation": "TOR",
    "conference": "East",
    "division": "Atlantic"
  },
  "29": {
    "full_name": "Utah Jazz",
    "abbreviation": "UTA",
    "conference": "West",
    "division": "Northwest"
  },
  "30": {
    "full_name": "Washington Wizards",
    "abbreviation": "WAS",
    "conference": "East",
    "division": "Southeast"
  }
}

def download_player_headshots(team_id, player_list):
    for player in player_list.keys():
        if players_json[player]["team_id"] == team_id:
            player_file_name = "_".join(player.split()).lower()
            master_headshot_path = f'../../../../../static/player_headshots/{player_file_name}.png'


            # CHECK IF PLAYER IMAGE ALREADY EXISTS
            if os.path.exists(master_headshot_path):
                print(f'{player} image already exists')
                continue

            # IF NOT, DOWNLOAD IT & SAVE
            response = requests.get(NBA_CDN_URL + str(players_json[player]["nba_player_id"]) + '.png')
            if response.status_code == 200:
                avif_img = BytesIO(response.content)
                with Image.open(avif_img) as img:
                    img_path = f'player_headshots/{player_file_name}.png'
                    img.save(img_path)
                    print(f'Successfully retrieved {player} image')
            else:
                print(f'Failed to retrieve {player} image. Status code: {response.status_code}')



if __name__ == "__main__":
    # with open('raw_nba_stats_data/cleaned_players.json', 'r') as infile:
    #   players_json = json.load(infile)

    with open('merged_data/merged_players.json', 'r') as infile:
        players_json = json.load(infile)

    for team in teams.keys():
      print(f"\nDownloading headshots for {teams[team]['full_name']} \n")
      download_player_headshots(int(team), players_json)
