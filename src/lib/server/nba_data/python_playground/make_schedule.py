import os;
import json;

def validateSchedule():
  with(open("FINAL_DATA/NBA_Schedule.json", "r")) as infile:
    schedule = json.load(infile)

  with(open("ball_dont_lie/formatted_teams.json", "r")) as teamFile:
    teams = json.load(teamFile)

  for team_id in range(1,31):
    teams_games = schedule[str(team_id)]
    sum = 0
    for num_games in teams_games:
      sum += num_games

    if sum != 82:
      print(f"ERROR: Team {teams[str(team_id)]['full_name']} has {sum} games, expected 82.")

  print("\n\nSchedule is valid if no errors above this.")



# Has to be called for each week. Adds the num of games for every team in the league for that week.
def addGamesToSchedule(date_label, games):
    if len(games) != 30:
      print(f"ERROR: Invalid number of teams. Input {len(games)}, expected 30.)")
      return

    schedule = {}
    if (os.path.exists('FINAL_DATA/NBA_Schedule.json')):
      with(open("FINAL_DATA/NBA_Schedule.json", "r")) as infile:
        schedule = json.load(infile)

    # add to metadata structure
    if ('metadata' not in schedule):
      schedule['metadata'] = {
        'date_labels': [],
        'num_weeks': 24
      }

    schedule['metadata']['date_labels'].append(date_label)

    # SET GAMES FOR WEEK per team
    for team_id in range(1,31):
      if (str(team_id) not in schedule):
        schedule[str(team_id)] = []
      schedule[str(team_id)].append(games[team_id-1])

    with(open("FINAL_DATA/NBA_Schedule.json", "w")) as outfile:
      json.dump(schedule, outfile, indent=2)

    print(f"\nAdded {date_label} to schedule")

if __name__ == "__main__":
  validateSchedule()
  # week 1
  # addGamesToSchedule("W1: 23 Oct - 29 Oct",[3,2,2,2,3,3,2,3,3,3,3,2,3,3,3,3,2,2,2,3,3,2,3,3,3,3,3,3,3,2])
  # # week 2
  # addGamesToSchedule("W2: 30 Oct - 5 Nov", [3,3,4,4,4,4,4,4,4,4,2,4,2,3,4,3,3,3,4,3,3,4,2,4,4,2,3,4,4,3])
  # # week 3
  # addGamesToSchedule("W3: 6 Nov - 12 Nov", [3,4,4,3,3,2,4,3,4,4,4,4,4,4,3,4,4,4,4,3,4,3,4,3,2,3,4,2,3,4])
  # # week 4
  # addGamesToSchedule("W4: 13 Nov - 19 Nov", [3,4,3,3,4,4,4,3,3,3,2,2,2,4,3,3,4,3,3,4,4,4,4,3,4,4,3,4,3,3])
  # # week 5
  # addGamesToSchedule("W5: 20 Nov - 26 Nov", [4,4,3,3,4,4,2,4,2,3,3,3,4,3,3,4,4,4,4,3,2,4,3,4,3,3,4,4,3,4])
  # # week 6
  # addGamesToSchedule("W6: 27 Nov - 3 Dec", [3,2,3,3,3,3,3,4,4,3,3,3,4,4,3,3,3,3,4,3,3,3,3,3,3,3,2,3,4,3])
  # # week 7
  # addGamesToSchedule("W7: 4 Dec - 10 Dec", [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2])
  # # week 8
  # addGamesToSchedule("W8: 11 Dec - 17 Dec", [4,4,4,4,4,4,4,4,4,4,4,4,4,3,3,4,4,3,4,4,3,3,4,4,4,4,4,3,4,4])
  # # week 9
  # addGamesToSchedule("W9: 18 Dec - 24 Dec", [4,3,4,3,4,4,4,4,3,3,4,4,4,4,4,3,3,4,3,3,3,3,3,2,3,4,3,4,4,3])
  # # week 10
  # addGamesToSchedule("W10: 25 Dec - 31 Dec", [3,4,4,3,3,2,4,3,3,3,3,3,2,4,4,3,3,3,3,4,4,4,4,4,3,3,4,3,3,4])
  # # week 11
  # addGamesToSchedule("W11: 1 Jan - 7 Jan", [3,3,4,3,3,4,4,4,4,4,4,4,4,3,4,3,4,4,4,4,3,4,3,4,4,4,3,4,4,3])
  # # week 12
  # addGamesToSchedule("W12: 8 Jan - 14 Jan", [3,4,1,4,4,1,3,3,3,3,4,4,4,3,3,4,4,4,3,3,4,3,2,3,4,4,3,3,4,3])
  # # week 13
  # addGamesToSchedule("W13: 15 Jan - 21 Jan", [4,4,4,3,3,3,3,3,3,3,4,4,2,4,3,4,2,3,3,4,4,4,4,3,3,2,4,4,4,4])
  # # week 14
  # addGamesToSchedule("W14: 22 Jan - 28 Jan", [4,3,3,4,3,3,4,3,4,3,3,4,3,3,4,3,4,4,3,3,4,3,3,4,4,3,4,3,3,3])
  # # week 15
  # addGamesToSchedule("W15: 29 Jan - 4 Feb", [3,4,3,4,3,4,3,4,3,3,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,3,4,4])
  # # week 16
  # addGamesToSchedule("W16: 5 Feb - 11 Feb", [4,3,4,4,3,4,4,2,3,4,3,3,3,3,3,3,3,2,4,3,3,3,4,3,2,4,3,4,2,3])
  # # week 17
  # addGamesToSchedule("W17: 12 Feb - 25 Feb", [4,4,4,5,4,5,4,5,4,5,5,4,5,5,4,3,5,5,5,4,4,5,5,5,4,4,5,4,4,5])
  # # week 18
  # addGamesToSchedule("W18: 26 Feb - 3 Mar", [3,3,4,4,3,4,4,3,4,4,3,4,3,3,4,4,3,4,3,4,3,3,3,3,3,3,3,4,3,3])
  # # week 19
  # addGamesToSchedule("W19: 4 Mar - 10 Mar", [4,3,5,3,4,4,3,3,3,3,4,3,4,4,4,4,4,4,3,3,4,4,4,3,4,4,3,3,3,4])
  # # week 20
  # addGamesToSchedule("W20: 11 Mar - 17 Mar", [3,4,3,4,4,3,4,4,4,3,3,3,4,2,3,3,3,2,3,3,3,3,3,4,4,3,4,4,3,4])
  # # week 21
  # addGamesToSchedule("W21: 18 Mar - 24 Mar", [3,4,3,2,3,4,2,3,4,4,3,4,3,3,3,4,3,4,4,3,3,3,4,3,4,4,3,3,4,3])
  # # week 22
  # addGamesToSchedule("W22: 25 Mar - 31 Mar", [4,3,4,4,4,4,4,4,3,4,4,3,4,4,3,3,3,3,3,4,4,3,4,3,3,4,4,3,4,4])
  # # week 23
  # addGamesToSchedule("W23: 1 Apr - 7 Apr", [4,4,4,4,3,4,3,3,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,3,4])
  # # week 24
  # addGamesToSchedule("W24: 8 Apr - 14 Apr", [4,4,3,4,4,3,4,4,4,4,4,3,4,3,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,3])
