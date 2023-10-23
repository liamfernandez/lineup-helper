type NBA_Player = {
	nba_player_id: number;
	ball_dont_lie_id: number;
	team_id: number;
	team_name: string;
	position: string;
	// pts: number | null;
	// reb: number | null;
	// ast: number | null;
	index: number;
};

type NBA_Team = {
	abbreviation: string;
	full_name: string;
	conference: 'East' | 'West';
	division: 'Southeast' | 'Atlantic' | 'Central' | 'Southwest' | 'Northwest' | 'Pacific';
};

// ALL NBA TEAMS ALPHABETICAL SORT
export const TEAMS: { [key: number]: NBA_Team } = {
	1: {
		full_name: 'Atlanta Hawks',
		abbreviation: 'ATL',
		conference: 'East',
		division: 'Southeast'
	},
	2: {
		full_name: 'Boston Celtics',
		abbreviation: 'BOS',
		conference: 'East',
		division: 'Atlantic'
	},
	3: {
		full_name: 'Brooklyn Nets',
		abbreviation: 'BKN',
		conference: 'East',
		division: 'Atlantic'
	},
	4: {
		full_name: 'Charlotte Hornets',
		abbreviation: 'CHA',
		conference: 'East',
		division: 'Southeast'
	},
	5: {
		full_name: 'Chicago Bulls',
		abbreviation: 'CHI',
		conference: 'East',
		division: 'Central'
	},
	6: {
		full_name: 'Cleveland Cavaliers',
		abbreviation: 'CLE',
		conference: 'East',
		division: 'Central'
	},
	7: {
		full_name: 'Dallas Mavericks',
		abbreviation: 'DAL',
		conference: 'West',
		division: 'Southwest'
	},
	8: {
		full_name: 'Denver Nuggets',
		abbreviation: 'DEN',
		conference: 'West',
		division: 'Northwest'
	},
	9: {
		full_name: 'Detroit Pistons',
		abbreviation: 'DET',
		conference: 'East',
		division: 'Central'
	},
	10: {
		full_name: 'Golden State Warriors',
		abbreviation: 'GSW',
		conference: 'West',
		division: 'Pacific'
	},
	11: {
		full_name: 'Houston Rockets',
		abbreviation: 'HOU',
		conference: 'West',
		division: 'Southwest'
	},
	12: {
		full_name: 'Indiana Pacers',
		abbreviation: 'IND',
		conference: 'East',
		division: 'Central'
	},
	13: {
		full_name: 'LA Clippers',
		abbreviation: 'LAC',
		conference: 'West',
		division: 'Pacific'
	},
	14: {
		full_name: 'Los Angeles Lakers',
		abbreviation: 'LAL',
		conference: 'West',
		division: 'Pacific'
	},
	15: {
		full_name: 'Memphis Grizzlies',
		abbreviation: 'MEM',
		conference: 'West',
		division: 'Southwest'
	},
	16: {
		full_name: 'Miami Heat',
		abbreviation: 'MIA',
		conference: 'East',
		division: 'Southeast'
	},
	17: {
		full_name: 'Milwaukee Bucks',
		abbreviation: 'MIL',
		conference: 'East',
		division: 'Central'
	},
	18: {
		full_name: 'Minnesota Timberwolves',
		abbreviation: 'MIN',
		conference: 'West',
		division: 'Northwest'
	},
	19: {
		full_name: 'New Orleans Pelicans',
		abbreviation: 'NOP',
		conference: 'West',
		division: 'Southwest'
	},
	20: {
		full_name: 'New York Knicks',
		abbreviation: 'NYK',
		conference: 'East',
		division: 'Atlantic'
	},
	21: {
		full_name: 'Oklahoma City Thunder',
		abbreviation: 'OKC',
		conference: 'West',
		division: 'Northwest'
	},
	22: {
		full_name: 'Orlando Magic',
		abbreviation: 'ORL',
		conference: 'East',
		division: 'Southeast'
	},
	23: {
		full_name: 'Philadelphia 76ers',
		abbreviation: 'PHI',
		conference: 'East',
		division: 'Atlantic'
	},
	24: {
		full_name: 'Phoenix Suns',
		abbreviation: 'PHX',
		conference: 'West',
		division: 'Pacific'
	},
	25: {
		full_name: 'Portland Trail Blazers',
		abbreviation: 'POR',
		conference: 'West',
		division: 'Northwest'
	},
	26: {
		full_name: 'Sacramento Kings',
		abbreviation: 'SAC',
		conference: 'West',
		division: 'Pacific'
	},
	27: {
		full_name: 'San Antonio Spurs',
		abbreviation: 'SAS',
		conference: 'West',
		division: 'Southwest'
	},
	28: {
		full_name: 'Toronto Raptors',
		abbreviation: 'TOR',
		conference: 'East',
		division: 'Atlantic'
	},
	29: {
		full_name: 'Utah Jazz',
		abbreviation: 'UTA',
		conference: 'West',
		division: 'Northwest'
	},
	30: {
		full_name: 'Washington Wizards',
		abbreviation: 'WAS',
		conference: 'East',
		division: 'Southeast'
	}
};

export const GLOBAL_PLAYERS: { [key: string]: NBA_Player } = {
	'Gary Trent Jr': {
		nba_player_id: 1629018,
		ball_dont_lie_id: 448,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G-F',
		index: 0
	},
	'Trevon Scott': {
		nba_player_id: 1630286,
		ball_dont_lie_id: 24102396,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F',
		index: 1
	},
	'Dante Exum': {
		nba_player_id: 203957,
		ball_dont_lie_id: 151,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 2
	},
	'Jordan Goodwin': {
		nba_player_id: 1630692,
		ball_dont_lie_id: 17895726,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 3
	},
	'Scottie Lindsey': {
		nba_player_id: 1629204,
		ball_dont_lie_id: 17553957,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 4
	},
	'Micah Potter': {
		nba_player_id: 1630695,
		ball_dont_lie_id: 19465584,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'C',
		index: 5
	},
	'Dru Smith': {
		nba_player_id: 1630696,
		ball_dont_lie_id: 19465585,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 6
	},
	'Anthony Black': {
		nba_player_id: 1641710,
		ball_dont_lie_id: 56677827,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 7
	},
	'Joshua Obiesie': {
		nba_player_id: 1629697,
		ball_dont_lie_id: 17553968,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G-F',
		index: 8
	},
	'Gradey Dick': {
		nba_player_id: 1641711,
		ball_dont_lie_id: 56677828,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G',
		index: 9
	},
	'Rayan Rupert': {
		nba_player_id: 1641712,
		ball_dont_lie_id: 56677829,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G-F',
		index: 10
	},
	'Max Heidegger': {
		nba_player_id: 1641972,
		ball_dont_lie_id: 17895722,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 11
	},
	'GG Jackson': {
		nba_player_id: 1641713,
		ball_dont_lie_id: 56677830,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 12
	},
	'Cam Whitmore': {
		nba_player_id: 1641715,
		ball_dont_lie_id: 56677831,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 13
	},
	'Craig Sword': {
		nba_player_id: 1628591,
		ball_dont_lie_id: 24590029,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 14
	},
	'Jarace Walker': {
		nba_player_id: 1641716,
		ball_dont_lie_id: 56677832,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F',
		index: 15
	},
	'Cheick Diallo': {
		nba_player_id: 1627767,
		ball_dont_lie_id: 127,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F-C',
		index: 16
	},
	'Deonte Burton': {
		nba_player_id: 1629126,
		ball_dont_lie_id: 17895762,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G-F',
		index: 17
	},
	'Harry Giles III': {
		nba_player_id: 1628385,
		ball_dont_lie_id: 174,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F-C',
		index: 18
	},
	'Cason Wallace': {
		nba_player_id: 1641717,
		ball_dont_lie_id: 56677833,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 19
	},
	'Chris Paul': {
		nba_player_id: 101108,
		ball_dont_lie_id: 367,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 20
	},
	'Zhaire Smith': {
		nba_player_id: 1629015,
		ball_dont_lie_id: 425,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 21
	},
	'Keyonte George': {
		nba_player_id: 1641718,
		ball_dont_lie_id: 56677834,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 22
	},
	'Jontay Porter': {
		nba_player_id: 1629007,
		ball_dont_lie_id: 2309958,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'C-F',
		index: 23
	},
	'Olivier Sarr': {
		nba_player_id: 1630846,
		ball_dont_lie_id: 24572055,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'C',
		index: 24
	},
	'Alondes Williams': {
		nba_player_id: 1631214,
		ball_dont_lie_id: 38017723,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 25
	},
	'Nate Hinton': {
		nba_player_id: 1630207,
		ball_dont_lie_id: 3547281,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G-F',
		index: 26
	},
	'Jalen Pickett': {
		nba_player_id: 1629618,
		ball_dont_lie_id: 56677582,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 27
	},
	'Brandon Williams': {
		nba_player_id: 1630314,
		ball_dont_lie_id: 24489167,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G',
		index: 28
	},
	'Sharife Cooper': {
		nba_player_id: 1630536,
		ball_dont_lie_id: 17896029,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 29
	},
	'Devin Cannady': {
		nba_player_id: 1629962,
		ball_dont_lie_id: 9177971,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 30
	},
	'Marques Bolden': {
		nba_player_id: 1629716,
		ball_dont_lie_id: 666453,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'C',
		index: 31
	},
	'Nick Smith Jr': {
		nba_player_id: 1641733,
		ball_dont_lie_id: 56677846,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 32
	},
	'Zavier Simpson': {
		nba_player_id: 1630285,
		ball_dont_lie_id: 17553987,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 33
	},
	'Kevin Durant': {
		nba_player_id: 201142,
		ball_dont_lie_id: 140,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F',
		index: 34
	},
	'Miles Bridges': {
		nba_player_id: 1628970,
		ball_dont_lie_id: 62,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 35
	},
	'Emoni Bates': {
		nba_player_id: 1641734,
		ball_dont_lie_id: 56677847,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F',
		index: 36
	},
	'Amari Bailey': {
		nba_player_id: 1641735,
		ball_dont_lie_id: 56677848,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 37
	},
	'Jordan Schakel': {
		nba_player_id: 1630648,
		ball_dont_lie_id: 17554006,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 38
	},
	'Kobe Brown': {
		nba_player_id: 1641738,
		ball_dont_lie_id: 56677849,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 39
	},
	'Brodric Thomas': {
		nba_player_id: 1630271,
		ball_dont_lie_id: 3547306,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 40
	},
	'Toumani Camara': {
		nba_player_id: 1641739,
		ball_dont_lie_id: 56677850,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 41
	},
	'Jaylen Clark': {
		nba_player_id: 1641740,
		ball_dont_lie_id: 56677851,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 42
	},
	'LeBron James': {
		nba_player_id: 2544,
		ball_dont_lie_id: 237,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 43
	},
	'Filip Petrusev': {
		nba_player_id: 1630196,
		ball_dont_lie_id: 17895941,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'C',
		index: 44
	},
	'Trent Forrest': {
		nba_player_id: 1630235,
		ball_dont_lie_id: 3547297,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 45
	},
	'Jordan Ford': {
		nba_player_id: 1630259,
		ball_dont_lie_id: 17895990,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 46
	},
	'Braxton Key': {
		nba_player_id: 1630296,
		ball_dont_lie_id: 17896007,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F',
		index: 47
	},
	'Jeremiah Robinson-Earl': {
		nba_player_id: 1630526,
		ball_dont_lie_id: 17896021,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 48
	},
	'Josh Christopher': {
		nba_player_id: 1630528,
		ball_dont_lie_id: 17896023,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 49
	},
	'Herbert Jones': {
		nba_player_id: 1630529,
		ball_dont_lie_id: 17896024,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 50
	},
	'Ochai Agbaji': {
		nba_player_id: 1630534,
		ball_dont_lie_id: 38017620,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 51
	},
	'Greg Brown III': {
		nba_player_id: 1630535,
		ball_dont_lie_id: 17896028,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 52
	},
	'Chris Duarte': {
		nba_player_id: 1630537,
		ball_dont_lie_id: 17896030,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 53
	},
	'Matt Ryan': {
		nba_player_id: 1630346,
		ball_dont_lie_id: 17896017,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F',
		index: 54
	},
	'Kai Jones': {
		nba_player_id: 1630539,
		ball_dont_lie_id: 17896032,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'C-F',
		index: 55
	},
	'Bones Hyland': {
		nba_player_id: 1630538,
		ball_dont_lie_id: 17896031,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 56
	},
	'Miles McBride': {
		nba_player_id: 1630540,
		ball_dont_lie_id: 17896033,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 57
	},
	'Andre Jackson Jr': {
		nba_player_id: 1641748,
		ball_dont_lie_id: 56677852,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 58
	},
	'Keyontae Johnson': {
		nba_player_id: 1641749,
		ball_dont_lie_id: 56677853,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 59
	},
	'Max Strus': {
		nba_player_id: 1629622,
		ball_dont_lie_id: 666908,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G-F',
		index: 60
	},
	'Cam Reddish': {
		nba_player_id: 1629629,
		ball_dont_lie_id: 666860,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F-G',
		index: 61
	},
	'Usman Garuba': {
		nba_player_id: 1630586,
		ball_dont_lie_id: 17896070,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 62
	},
	'Isaiah Livers': {
		nba_player_id: 1630587,
		ball_dont_lie_id: 17896071,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F',
		index: 63
	},
	'Jalen Suggs': {
		nba_player_id: 1630591,
		ball_dont_lie_id: 17896073,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 64
	},
	'Chris Livingston': {
		nba_player_id: 1641753,
		ball_dont_lie_id: 56677854,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 65
	},
	'Seth Lundy': {
		nba_player_id: 1641754,
		ball_dont_lie_id: 56677855,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 66
	},
	'Chris Boucher': {
		nba_player_id: 1628449,
		ball_dont_lie_id: 58,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F-C',
		index: 67
	},
	'Daniel Theis': {
		nba_player_id: 1628464,
		ball_dont_lie_id: 439,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F-C',
		index: 68
	},
	'Maxi Kleber': {
		nba_player_id: 1628467,
		ball_dont_lie_id: 257,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 69
	},
	'Torrey Craig': {
		nba_player_id: 1628470,
		ball_dont_lie_id: 110,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 70
	},
	'Grayson Allen': {
		nba_player_id: 1628960,
		ball_dont_lie_id: 8,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 71
	},
	'Udoka Azubuike': {
		nba_player_id: 1628962,
		ball_dont_lie_id: 3547095,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'C-F',
		index: 72
	},
	'Marvin Bagley III': {
		nba_player_id: 1628963,
		ball_dont_lie_id: 24,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F',
		index: 73
	},
	'Mo Bamba': {
		nba_player_id: 1628964,
		ball_dont_lie_id: 28,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'C',
		index: 74
	},
	'Troy Brown Jr': {
		nba_player_id: 1628972,
		ball_dont_lie_id: 68,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G-F',
		index: 75
	},
	'Jalen Brunson': {
		nba_player_id: 1628973,
		ball_dont_lie_id: 73,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 76
	},
	'Jevon Carter': {
		nba_player_id: 1628975,
		ball_dont_lie_id: 87,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 77
	},
	'Wendell Carter Jr': {
		nba_player_id: 1628976,
		ball_dont_lie_id: 85,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'C-F',
		index: 78
	},
	'Donte DiVincenzo': {
		nba_player_id: 1628978,
		ball_dont_lie_id: 131,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 79
	},
	'Bruno Fernando': {
		nba_player_id: 1628981,
		ball_dont_lie_id: 666564,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F-C',
		index: 80
	},
	'Shai Gilgeous-Alexander': {
		nba_player_id: 1628983,
		ball_dont_lie_id: 175,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 81
	},
	'Devonte Graham': {
		nba_player_id: 1628984,
		ball_dont_lie_id: 180,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G',
		index: 82
	},
	'Aaron Holiday': {
		nba_player_id: 1628988,
		ball_dont_lie_id: 213,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 83
	},
	'Kevin Huerter': {
		nba_player_id: 1628989,
		ball_dont_lie_id: 221,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G-F',
		index: 84
	},
	'Oshae Brissett': {
		nba_player_id: 1629052,
		ball_dont_lie_id: 666468,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F-G',
		index: 85
	},
	'Robert Williams III': {
		nba_player_id: 1629057,
		ball_dont_lie_id: 476,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'C-F',
		index: 86
	},
	'Duncan Robinson': {
		nba_player_id: 1629130,
		ball_dont_lie_id: 397,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 87
	},
	'Yuta Watanabe': {
		nba_player_id: 1629139,
		ball_dont_lie_id: 470,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G-F',
		index: 88
	},
	'Brandon Boston Jr': {
		nba_player_id: 1630527,
		ball_dont_lie_id: 17896022,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 89
	},
	'Jordan Miller': {
		nba_player_id: 1641757,
		ball_dont_lie_id: 56677856,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 90
	},
	'Julian Phillips': {
		nba_player_id: 1641763,
		ball_dont_lie_id: 56677857,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 91
	},
	'Ben Sheppard': {
		nba_player_id: 1641767,
		ball_dont_lie_id: 56677861,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 92
	},
	'Kevin Love': {
		nba_player_id: 201567,
		ball_dont_lie_id: 285,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F-C',
		index: 93
	},
	'Luke Kornet': {
		nba_player_id: 1628436,
		ball_dont_lie_id: 261,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'C-F',
		index: 94
	},
	'Isaiah Todd': {
		nba_player_id: 1630225,
		ball_dont_lie_id: 17895967,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 95
	},
	'Nathan Knight': {
		nba_player_id: 1630233,
		ball_dont_lie_id: 3547295,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F-C',
		index: 96
	},
	'Jay Scrubb': {
		nba_player_id: 1630206,
		ball_dont_lie_id: 3547280,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 97
	},
	'Jared Butler': {
		nba_player_id: 1630215,
		ball_dont_lie_id: 18677954,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 98
	},
	'Desmond Bane': {
		nba_player_id: 1630217,
		ball_dont_lie_id: 3547287,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 99
	},
	'Jalen Green': {
		nba_player_id: 1630224,
		ball_dont_lie_id: 17895966,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 100
	},
	'Saben Lee': {
		nba_player_id: 1630240,
		ball_dont_lie_id: 3547298,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 101
	},
	'Jalen Slawson': {
		nba_player_id: 1641771,
		ball_dont_lie_id: 56677862,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F',
		index: 102
	},
	'Azuolas Tubelis': {
		nba_player_id: 1641773,
		ball_dont_lie_id: 56677863,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F',
		index: 103
	},
	'Jordan Walsh': {
		nba_player_id: 1641775,
		ball_dont_lie_id: 56677864,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 104
	},
	'Danilo Gallinari': {
		nba_player_id: 201568,
		ball_dont_lie_id: 167,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 105
	},
	'Eric Gordon': {
		nba_player_id: 201569,
		ball_dont_lie_id: 178,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 106
	},
	'Moses Brown': {
		nba_player_id: 1629650,
		ball_dont_lie_id: 666476,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'C',
		index: 107
	},
	'Lindy Waters III': {
		nba_player_id: 1630322,
		ball_dont_lie_id: 27924547,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 108
	},
	'Trey Murphy III': {
		nba_player_id: 1630530,
		ball_dont_lie_id: 18677986,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 109
	},
	'Jaden Springer': {
		nba_player_id: 1630531,
		ball_dont_lie_id: 17896025,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 110
	},
	'Franz Wagner': {
		nba_player_id: 1630532,
		ball_dont_lie_id: 17896026,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F',
		index: 111
	},
	'Al Horford': {
		nba_player_id: 201143,
		ball_dont_lie_id: 219,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'C-F',
		index: 112
	},
	'Mike Conley': {
		nba_player_id: 201144,
		ball_dont_lie_id: 104,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 113
	},
	'Rui Hachimura': {
		nba_player_id: 1629060,
		ball_dont_lie_id: 666609,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 114
	},
	'Jock Landale': {
		nba_player_id: 1629111,
		ball_dont_lie_id: 19465326,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'C',
		index: 115
	},
	'Daishen Nix': {
		nba_player_id: 1630227,
		ball_dont_lie_id: 17895968,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 116
	},
	'Jonathan Kuminga': {
		nba_player_id: 1630228,
		ball_dont_lie_id: 17553979,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 117
	},
	'Kenyon Martin Jr': {
		nba_player_id: 1630231,
		ball_dont_lie_id: 3547294,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 118
	},
	'Sam Merrill': {
		nba_player_id: 1630241,
		ball_dont_lie_id: 3547299,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 119
	},
	'Ayo Dosunmu': {
		nba_player_id: 1630245,
		ball_dont_lie_id: 17895983,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 120
	},
	'JaeSean Tate': {
		nba_player_id: 1630256,
		ball_dont_lie_id: 3547301,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 121
	},
	'Anthony Gill': {
		nba_player_id: 1630264,
		ball_dont_lie_id: 3547302,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 122
	},
	'Kevon Harris': {
		nba_player_id: 1630284,
		ball_dont_lie_id: 38017607,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 123
	},
	'Ziaire Williams': {
		nba_player_id: 1630533,
		ball_dont_lie_id: 17896027,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 124
	},
	'Colin Castleton': {
		nba_player_id: 1630658,
		ball_dont_lie_id: 56677738,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'C',
		index: 125
	},
	'Leaky Black': {
		nba_player_id: 1641778,
		ball_dont_lie_id: 56677866,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 126
	},
	'Vit Krejci': {
		nba_player_id: 1630249,
		ball_dont_lie_id: 4197387,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 127
	},
	'Scotty Pippen Jr': {
		nba_player_id: 1630590,
		ball_dont_lie_id: 38017656,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 128
	},
	'Alex Fudge': {
		nba_player_id: 1641788,
		ball_dont_lie_id: 56677867,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 129
	},
	'DMoi Hodge': {
		nba_player_id: 1641793,
		ball_dont_lie_id: 56677868,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 130
	},
	'Markquis Nowell': {
		nba_player_id: 1641806,
		ball_dont_lie_id: 56677869,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G',
		index: 131
	},
	'SirJabari Rice': {
		nba_player_id: 1641811,
		ball_dont_lie_id: 56677870,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G',
		index: 132
	},
	'Hunter Tyson': {
		nba_player_id: 1641816,
		ball_dont_lie_id: 56677871,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F',
		index: 133
	},
	'Brook Lopez': {
		nba_player_id: 201572,
		ball_dont_lie_id: 283,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'C',
		index: 134
	},
	'Robin Lopez': {
		nba_player_id: 201577,
		ball_dont_lie_id: 284,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'C',
		index: 135
	},
	'JaVale McGee': {
		nba_player_id: 201580,
		ball_dont_lie_id: 306,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'C-F',
		index: 136
	},
	'Nicolas Batum': {
		nba_player_id: 201587,
		ball_dont_lie_id: 33,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G-F',
		index: 137
	},
	'Dillon Brooks': {
		nba_player_id: 1628415,
		ball_dont_lie_id: 66,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G-F',
		index: 138
	},
	'Thomas Bryant': {
		nba_player_id: 1628418,
		ball_dont_lie_id: 74,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'C-F',
		index: 139
	},
	'Monte Morris': {
		nba_player_id: 1628420,
		ball_dont_lie_id: 330,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 140
	},
	'Vlatko Cancar': {
		nba_player_id: 1628427,
		ball_dont_lie_id: 666489,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F',
		index: 141
	},
	'Jordan McLaughlin': {
		nba_player_id: 1629162,
		ball_dont_lie_id: 666767,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 142
	},
	'Gabe Vincent': {
		nba_player_id: 1629216,
		ball_dont_lie_id: 1603383,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 143
	},
	'Drew Eubanks': {
		nba_player_id: 1629234,
		ball_dont_lie_id: 147,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F-C',
		index: 144
	},
	'Amir Coffey': {
		nba_player_id: 1629599,
		ball_dont_lie_id: 666511,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G-F',
		index: 145
	},
	'DaQuan Jeffries': {
		nba_player_id: 1629610,
		ball_dont_lie_id: 666675,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G-F',
		index: 146
	},
	'Terance Mann': {
		nba_player_id: 1629611,
		ball_dont_lie_id: 666743,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G-F',
		index: 147
	},
	'Andrew Nembhard': {
		nba_player_id: 1629614,
		ball_dont_lie_id: 38017507,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G-F',
		index: 148
	},
	'Stanley Umude': {
		nba_player_id: 1630649,
		ball_dont_lie_id: 44477024,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 149
	},
	'Chance Comanche': {
		nba_player_id: 1628435,
		ball_dont_lie_id: 48248491,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'C',
		index: 150
	},
	'DeAndre Jordan': {
		nba_player_id: 201599,
		ball_dont_lie_id: 250,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'C',
		index: 151
	},
	'James Harden': {
		nba_player_id: 201935,
		ball_dont_lie_id: 192,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 152
	},
	'Ricky Rubio': {
		nba_player_id: 201937,
		ball_dont_lie_id: 404,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 153
	},
	'Jaren Jackson Jr': {
		nba_player_id: 1628991,
		ball_dont_lie_id: 231,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F-C',
		index: 154
	},
	'Cody Martin': {
		nba_player_id: 1628998,
		ball_dont_lie_id: 666748,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 155
	},
	'Mitchell Robinson': {
		nba_player_id: 1629011,
		ball_dont_lie_id: 399,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'C-F',
		index: 156
	},
	'Collin Sexton': {
		nba_player_id: 1629012,
		ball_dont_lie_id: 413,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 157
	},
	'Landry Shamet': {
		nba_player_id: 1629013,
		ball_dont_lie_id: 414,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 158
	},
	'Anfernee Simons': {
		nba_player_id: 1629014,
		ball_dont_lie_id: 419,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G',
		index: 159
	},
	'Jarred Vanderbilt': {
		nba_player_id: 1629020,
		ball_dont_lie_id: 457,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 160
	},
	'Moritz Wagner': {
		nba_player_id: 1629021,
		ball_dont_lie_id: 462,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F-C',
		index: 161
	},
	'Lonnie Walker IV': {
		nba_player_id: 1629022,
		ball_dont_lie_id: 464,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G-F',
		index: 162
	},
	'PJ Washington': {
		nba_player_id: 1629023,
		ball_dont_lie_id: 666950,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 163
	},
	'Kenrich Williams': {
		nba_player_id: 1629026,
		ball_dont_lie_id: 480,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G-F',
		index: 164
	},
	'Trae Young': {
		nba_player_id: 1629027,
		ball_dont_lie_id: 490,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 165
	},
	'Deandre Ayton': {
		nba_player_id: 1629028,
		ball_dont_lie_id: 22,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'C',
		index: 166
	},
	'Luka Doncic': {
		nba_player_id: 1629029,
		ball_dont_lie_id: 132,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F-G',
		index: 167
	},
	'Goga Bitadze': {
		nba_player_id: 1629048,
		ball_dont_lie_id: 666442,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'C-F',
		index: 168
	},
	'Lindell Wigginton': {
		nba_player_id: 1629623,
		ball_dont_lie_id: 666960,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 169
	},
	'Bol Bol': {
		nba_player_id: 1629626,
		ball_dont_lie_id: 666451,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'C-F',
		index: 170
	},
	'Zion Williamson': {
		nba_player_id: 1629627,
		ball_dont_lie_id: 666969,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 171
	},
	'RJ Barrett': {
		nba_player_id: 1629628,
		ball_dont_lie_id: 666423,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'F-G',
		index: 172
	},
	'Tyrese Haliburton': {
		nba_player_id: 1630169,
		ball_dont_lie_id: 3547245,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 173
	},
	'Malachi Flynn': {
		nba_player_id: 1630201,
		ball_dont_lie_id: 3547275,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G',
		index: 174
	},
	'Payton Pritchard': {
		nba_player_id: 1630202,
		ball_dont_lie_id: 3547276,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 175
	},
	'Lamar Stevens': {
		nba_player_id: 1630205,
		ball_dont_lie_id: 3547279,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F',
		index: 176
	},
	'Xavier Tillman': {
		nba_player_id: 1630214,
		ball_dont_lie_id: 3547285,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 177
	},
	'Blake Wesley': {
		nba_player_id: 1631104,
		ball_dont_lie_id: 38017693,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G',
		index: 178
	},
	'Duane Washington Jr': {
		nba_player_id: 1630613,
		ball_dont_lie_id: 17896089,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 179
	},
	'Stephen Curry': {
		nba_player_id: 201939,
		ball_dont_lie_id: 115,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 180
	},
	'DeMar DeRozan': {
		nba_player_id: 201942,
		ball_dont_lie_id: 125,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G-F',
		index: 181
	},
	'Jrue Holiday': {
		nba_player_id: 201950,
		ball_dont_lie_id: 214,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 182
	},
	'Taj Gibson': {
		nba_player_id: 201959,
		ball_dont_lie_id: 173,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 183
	},
	'Reggie Jackson': {
		nba_player_id: 202704,
		ball_dont_lie_id: 236,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 184
	},
	'Shaquille Harrison': {
		nba_player_id: 1627885,
		ball_dont_lie_id: 199,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 185
	},
	'Cory Joseph': {
		nba_player_id: 202709,
		ball_dont_lie_id: 251,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 186
	},
	'Jimmy Butler': {
		nba_player_id: 202710,
		ball_dont_lie_id: 79,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 187
	},
	'Bojan Bogdanovic': {
		nba_player_id: 202711,
		ball_dont_lie_id: 54,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F',
		index: 188
	},
	'Draymond Green': {
		nba_player_id: 203110,
		ball_dont_lie_id: 185,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 189
	},
	'Khris Middleton': {
		nba_player_id: 203114,
		ball_dont_lie_id: 315,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 190
	},
	'TJ McConnell': {
		nba_player_id: 204456,
		ball_dont_lie_id: 304,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 191
	},
	'Tyus Jones': {
		nba_player_id: 1626145,
		ball_dont_lie_id: 249,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 192
	},
	'Montrezl Harrell': {
		nba_player_id: 1626149,
		ball_dont_lie_id: 194,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F-C',
		index: 193
	},
	'Delon Wright': {
		nba_player_id: 1626153,
		ball_dont_lie_id: 487,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 194
	},
	'DAngelo Russell': {
		nba_player_id: 1626156,
		ball_dont_lie_id: 405,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 195
	},
	'Karl-Anthony Towns': {
		nba_player_id: 1626157,
		ball_dont_lie_id: 447,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'C-F',
		index: 196
	},
	'Richaun Holmes': {
		nba_player_id: 1626158,
		ball_dont_lie_id: 217,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 197
	},
	'Damion Lee': {
		nba_player_id: 1627814,
		ball_dont_lie_id: 272,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G-F',
		index: 198
	},
	'Ivica Zubac': {
		nba_player_id: 1627826,
		ball_dont_lie_id: 493,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'C',
		index: 199
	},
	'Dorian Finney-Smith': {
		nba_player_id: 1627827,
		ball_dont_lie_id: 158,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 200
	},
	'Fred VanVleet': {
		nba_player_id: 1627832,
		ball_dont_lie_id: 458,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 201
	},
	'Derrick Jones Jr': {
		nba_player_id: 1627884,
		ball_dont_lie_id: 247,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 202
	},
	'Alex Caruso': {
		nba_player_id: 1627936,
		ball_dont_lie_id: 89,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 203
	},
	'Markelle Fultz': {
		nba_player_id: 1628365,
		ball_dont_lie_id: 165,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 204
	},
	'Lonzo Ball': {
		nba_player_id: 1628366,
		ball_dont_lie_id: 27,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 205
	},
	'DeAaron Fox': {
		nba_player_id: 1628368,
		ball_dont_lie_id: 161,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 206
	},
	'Jayson Tatum': {
		nba_player_id: 1628369,
		ball_dont_lie_id: 434,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F-G',
		index: 207
	},
	'Malik Monk': {
		nba_player_id: 1628370,
		ball_dont_lie_id: 324,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 208
	},
	'Jonathan Isaac': {
		nba_player_id: 1628371,
		ball_dont_lie_id: 229,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F',
		index: 209
	},
	'Dennis Smith Jr': {
		nba_player_id: 1628372,
		ball_dont_lie_id: 421,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 210
	},
	'Frank Ntilikina': {
		nba_player_id: 1628373,
		ball_dont_lie_id: 347,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 211
	},
	'Lauri Markkanen': {
		nba_player_id: 1628374,
		ball_dont_lie_id: 297,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F-C',
		index: 212
	},
	'Donovan Mitchell': {
		nba_player_id: 1628378,
		ball_dont_lie_id: 322,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 213
	},
	'PJ Tucker': {
		nba_player_id: 200782,
		ball_dont_lie_id: 450,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F',
		index: 214
	},
	'Jeff Green': {
		nba_player_id: 201145,
		ball_dont_lie_id: 188,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 215
	},
	'Thaddeus Young': {
		nba_player_id: 201152,
		ball_dont_lie_id: 489,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 216
	},
	'Derrick Rose': {
		nba_player_id: 201565,
		ball_dont_lie_id: 401,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 217
	},
	'Russell Westbrook': {
		nba_player_id: 201566,
		ball_dont_lie_id: 472,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 218
	},
	'Patrick Beverley': {
		nba_player_id: 201976,
		ball_dont_lie_id: 45,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 219
	},
	'Danny Green': {
		nba_player_id: 201980,
		ball_dont_lie_id: 184,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 220
	},
	'Patty Mills': {
		nba_player_id: 201988,
		ball_dont_lie_id: 319,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 221
	},
	'Garrett Temple': {
		nba_player_id: 202066,
		ball_dont_lie_id: 436,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G-F',
		index: 222
	},
	'Wesley Matthews': {
		nba_player_id: 202083,
		ball_dont_lie_id: 301,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 223
	},
	'Gordon Hayward': {
		nba_player_id: 202330,
		ball_dont_lie_id: 204,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 224
	},
	'Paul George': {
		nba_player_id: 202331,
		ball_dont_lie_id: 172,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 225
	},
	'Kyrie Irving': {
		nba_player_id: 202681,
		ball_dont_lie_id: 228,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 226
	},
	'Tristan Thompson': {
		nba_player_id: 202684,
		ball_dont_lie_id: 444,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'C-F',
		index: 227
	},
	'Klay Thompson': {
		nba_player_id: 202691,
		ball_dont_lie_id: 443,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 228
	},
	'Kawhi Leonard': {
		nba_player_id: 202695,
		ball_dont_lie_id: 274,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 229
	},
	'Nikola Vucevic': {
		nba_player_id: 202696,
		ball_dont_lie_id: 460,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'C',
		index: 230
	},
	'Tobias Harris': {
		nba_player_id: 202699,
		ball_dont_lie_id: 200,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F',
		index: 231
	},
	'Luke Kennard': {
		nba_player_id: 1628379,
		ball_dont_lie_id: 254,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 232
	},
	'Zach Collins': {
		nba_player_id: 1628380,
		ball_dont_lie_id: 102,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F-C',
		index: 233
	},
	'John Collins': {
		nba_player_id: 1628381,
		ball_dont_lie_id: 101,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F-C',
		index: 234
	},
	'OG Anunoby': {
		nba_player_id: 1628384,
		ball_dont_lie_id: 18,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 235
	},
	'Jarrett Allen': {
		nba_player_id: 1628386,
		ball_dont_lie_id: 9,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'C',
		index: 236
	},
	'Bam Adebayo': {
		nba_player_id: 1628389,
		ball_dont_lie_id: 4,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'C-F',
		index: 237
	},
	'Isaiah Hartenstein': {
		nba_player_id: 1628392,
		ball_dont_lie_id: 201,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'C-F',
		index: 238
	},
	'Kyle Kuzma': {
		nba_player_id: 1628398,
		ball_dont_lie_id: 265,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 239
	},
	'Derrick White': {
		nba_player_id: 1628401,
		ball_dont_lie_id: 473,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 240
	},
	'Kyle Lowry': {
		nba_player_id: 200768,
		ball_dont_lie_id: 286,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 241
	},
	'Josh Hart': {
		nba_player_id: 1628404,
		ball_dont_lie_id: 202,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 242
	},
	'Ja Morant': {
		nba_player_id: 1629630,
		ball_dont_lie_id: 666786,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 243
	},
	'DeAndre Hunter': {
		nba_player_id: 1629631,
		ball_dont_lie_id: 666656,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F-G',
		index: 244
	},
	'Coby White': {
		nba_player_id: 1629632,
		ball_dont_lie_id: 666956,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 245
	},
	'Brandon Clarke': {
		nba_player_id: 1629634,
		ball_dont_lie_id: 666505,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 246
	},
	'Darius Garland': {
		nba_player_id: 1629636,
		ball_dont_lie_id: 666581,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 247
	},
	'Jaxson Hayes': {
		nba_player_id: 1629637,
		ball_dont_lie_id: 666626,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'C-F',
		index: 248
	},
	'Nickeil Alexander-Walker': {
		nba_player_id: 1629638,
		ball_dont_lie_id: 666400,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 249
	},
	'Tyler Herro': {
		nba_player_id: 1629639,
		ball_dont_lie_id: 666633,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 250
	},
	'Keldon Johnson': {
		nba_player_id: 1629640,
		ball_dont_lie_id: 666682,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F-G',
		index: 251
	},
	'Chuma Okeke': {
		nba_player_id: 1629643,
		ball_dont_lie_id: 666818,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F',
		index: 252
	},
	'Charles Bassey': {
		nba_player_id: 1629646,
		ball_dont_lie_id: 17895854,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'C-F',
		index: 253
	},
	'Killian Hayes': {
		nba_player_id: 1630165,
		ball_dont_lie_id: 3547241,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 254
	},
	'Deni Avdija': {
		nba_player_id: 1630166,
		ball_dont_lie_id: 3547242,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 255
	},
	'Obi Toppin': {
		nba_player_id: 1630167,
		ball_dont_lie_id: 3547243,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F',
		index: 256
	},
	'Onyeka Okongwu': {
		nba_player_id: 1630168,
		ball_dont_lie_id: 3547244,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F-C',
		index: 257
	},
	'Trevelin Queen': {
		nba_player_id: 1630243,
		ball_dont_lie_id: 17553983,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 258
	},
	'Darius Days': {
		nba_player_id: 1630620,
		ball_dont_lie_id: 38017665,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 259
	},
	'Johnny Davis': {
		nba_player_id: 1631098,
		ball_dont_lie_id: 38017687,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 260
	},
	'Keegan Murray': {
		nba_player_id: 1631099,
		ball_dont_lie_id: 38017688,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F',
		index: 261
	},
	'AJ Griffin': {
		nba_player_id: 1631100,
		ball_dont_lie_id: 38017689,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F',
		index: 262
	},
	'Shaedon Sharpe': {
		nba_player_id: 1631101,
		ball_dont_lie_id: 38017690,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G',
		index: 263
	},
	'TyTy Washington Jr': {
		nba_player_id: 1631102,
		ball_dont_lie_id: 38017691,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 264
	},
	'Malaki Branham': {
		nba_player_id: 1631103,
		ball_dont_lie_id: 38017692,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 265
	},
	'Tari Eason': {
		nba_player_id: 1631106,
		ball_dont_lie_id: 38017695,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 266
	},
	'Nikola Jovic': {
		nba_player_id: 1631107,
		ball_dont_lie_id: 38017696,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 267
	},
	'Max Christie': {
		nba_player_id: 1631108,
		ball_dont_lie_id: 38017697,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 268
	},
	'Mark Williams': {
		nba_player_id: 1631109,
		ball_dont_lie_id: 38017698,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'C',
		index: 269
	},
	'Jeremy Sochan': {
		nba_player_id: 1631110,
		ball_dont_lie_id: 38017699,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 270
	},
	'Wendell Moore Jr': {
		nba_player_id: 1631111,
		ball_dont_lie_id: 38017700,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 271
	},
	'Kendall Brown': {
		nba_player_id: 1631112,
		ball_dont_lie_id: 38017701,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 272
	},
	'Jalen Williams': {
		nba_player_id: 1631114,
		ball_dont_lie_id: 38017703,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G-F',
		index: 273
	},
	'Dominick Barlow': {
		nba_player_id: 1631230,
		ball_dont_lie_id: 38017730,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 274
	},
	'Romeo Langford': {
		nba_player_id: 1629641,
		ball_dont_lie_id: 666713,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G-F',
		index: 275
	},
	'Kevin Porter Jr': {
		nba_player_id: 1629645,
		ball_dont_lie_id: 666849,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G-F',
		index: 276
	},
	'Darius Bazley': {
		nba_player_id: 1629647,
		ball_dont_lie_id: 666429,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F',
		index: 277
	},
	'Quenton Jackson': {
		nba_player_id: 1631245,
		ball_dont_lie_id: 44477085,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 278
	},
	'Brandin Podziemski': {
		nba_player_id: 1641764,
		ball_dont_lie_id: 56677858,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 279
	},
	'Olivier-Maxence Prosper': {
		nba_player_id: 1641765,
		ball_dont_lie_id: 56677859,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 280
	},
	'Adama Sanogo': {
		nba_player_id: 1641766,
		ball_dont_lie_id: 56677860,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 281
	},
	'Davis Bertans': {
		nba_player_id: 202722,
		ball_dont_lie_id: 44,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 282
	},
	'Anthony Davis': {
		nba_player_id: 203076,
		ball_dont_lie_id: 117,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F-C',
		index: 283
	},
	'Bradley Beal': {
		nba_player_id: 203078,
		ball_dont_lie_id: 37,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 284
	},
	'Damian Lillard': {
		nba_player_id: 203081,
		ball_dont_lie_id: 278,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 285
	},
	'Andre Drummond': {
		nba_player_id: 203083,
		ball_dont_lie_id: 137,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'C',
		index: 286
	},
	'Harrison Barnes': {
		nba_player_id: 203084,
		ball_dont_lie_id: 30,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F',
		index: 287
	},
	'Evan Fournier': {
		nba_player_id: 203095,
		ball_dont_lie_id: 160,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G-F',
		index: 288
	},
	'Jae Crowder': {
		nba_player_id: 203109,
		ball_dont_lie_id: 112,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 289
	},
	'Justin Holiday': {
		nba_player_id: 203200,
		ball_dont_lie_id: 215,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F-G',
		index: 290
	},
	'Alex Len': {
		nba_player_id: 203458,
		ball_dont_lie_id: 273,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'C',
		index: 291
	},
	'CJ McCollum': {
		nba_player_id: 203468,
		ball_dont_lie_id: 303,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 292
	},
	'Cody Zeller': {
		nba_player_id: 203469,
		ball_dont_lie_id: 491,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F-C',
		index: 293
	},
	'Dennis Schroder': {
		nba_player_id: 203471,
		ball_dont_lie_id: 409,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G',
		index: 294
	},
	'Kelly Olynyk': {
		nba_player_id: 203482,
		ball_dont_lie_id: 358,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F-C',
		index: 295
	},
	'Kentavious Caldwell-Pope': {
		nba_player_id: 203484,
		ball_dont_lie_id: 81,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 296
	},
	'Mason Plumlee': {
		nba_player_id: 203486,
		ball_dont_lie_id: 371,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F-C',
		index: 297
	},
	'Vasilije Micic': {
		nba_player_id: 203995,
		ball_dont_lie_id: 4197029,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 298
	},
	'Jonas Valanciunas': {
		nba_player_id: 202685,
		ball_dont_lie_id: 455,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'C',
		index: 299
	},
	'Mike Muscala': {
		nba_player_id: 203488,
		ball_dont_lie_id: 337,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F-C',
		index: 300
	},
	'Otto Porter Jr': {
		nba_player_id: 203490,
		ball_dont_lie_id: 376,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 301
	},
	'Reggie Bullock': {
		nba_player_id: 203493,
		ball_dont_lie_id: 75,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G-F',
		index: 302
	},
	'Robert Covington': {
		nba_player_id: 203496,
		ball_dont_lie_id: 108,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 303
	},
	'Rudy Gobert': {
		nba_player_id: 203497,
		ball_dont_lie_id: 176,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'C',
		index: 304
	},
	'Ryan Arcidiacono': {
		nba_player_id: 1627853,
		ball_dont_lie_id: 19,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 305
	},
	'DeAnthony Melton': {
		nba_player_id: 1629001,
		ball_dont_lie_id: 313,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 306
	},
	'Chimezie Metu': {
		nba_player_id: 1629002,
		ball_dont_lie_id: 314,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F-C',
		index: 307
	},
	'Shake Milton': {
		nba_player_id: 1629003,
		ball_dont_lie_id: 320,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G-F',
		index: 308
	},
	'Svi Mykhailiuk': {
		nba_player_id: 1629004,
		ball_dont_lie_id: 338,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G-F',
		index: 309
	},
	'Josh Okogie': {
		nba_player_id: 1629006,
		ball_dont_lie_id: 356,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 310
	},
	'Michael Porter Jr': {
		nba_player_id: 1629008,
		ball_dont_lie_id: 375,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F',
		index: 311
	},
	'Devin Vassell': {
		nba_player_id: 1630170,
		ball_dont_lie_id: 3547246,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G-F',
		index: 312
	},
	'Isaac Okoro': {
		nba_player_id: 1630171,
		ball_dont_lie_id: 3547247,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F-G',
		index: 313
	},
	'Patrick Williams': {
		nba_player_id: 1630172,
		ball_dont_lie_id: 3547248,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 314
	},
	'Precious Achiuwa': {
		nba_player_id: 1630173,
		ball_dont_lie_id: 3547249,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 315
	},
	'Aaron Nesmith': {
		nba_player_id: 1630174,
		ball_dont_lie_id: 3547250,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G-F',
		index: 316
	},
	'Jalen Smith': {
		nba_player_id: 1630188,
		ball_dont_lie_id: 3547264,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F-C',
		index: 317
	},
	'Isaiah Stewart': {
		nba_player_id: 1630191,
		ball_dont_lie_id: 3547267,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F-C',
		index: 318
	},
	'Zeke Nnaji': {
		nba_player_id: 1630192,
		ball_dont_lie_id: 3547268,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F-C',
		index: 319
	},
	'Immanuel Quickley': {
		nba_player_id: 1630193,
		ball_dont_lie_id: 3547269,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 320
	},
	'Paul Reed': {
		nba_player_id: 1630194,
		ball_dont_lie_id: 3547270,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F',
		index: 321
	},
	'Aleksej Pokusevski': {
		nba_player_id: 1630197,
		ball_dont_lie_id: 3547271,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 322
	},
	'Isaiah Joe': {
		nba_player_id: 1630198,
		ball_dont_lie_id: 3547272,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 323
	},
	'Tre Jones': {
		nba_player_id: 1630200,
		ball_dont_lie_id: 3547274,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G',
		index: 324
	},
	'Justin Champagnie': {
		nba_player_id: 1630551,
		ball_dont_lie_id: 17896039,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G-F',
		index: 325
	},
	'Jason Preston': {
		nba_player_id: 1630554,
		ball_dont_lie_id: 17896042,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 326
	},
	'Alec Burks': {
		nba_player_id: 202692,
		ball_dont_lie_id: 77,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 327
	},
	'Markieff Morris': {
		nba_player_id: 202693,
		ball_dont_lie_id: 329,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 328
	},
	'Steven Adams': {
		nba_player_id: 203500,
		ball_dont_lie_id: 3,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'C',
		index: 329
	},
	'David Duke Jr': {
		nba_player_id: 1630561,
		ball_dont_lie_id: 17896049,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 330
	},
	'RaiQuan Gray': {
		nba_player_id: 1630564,
		ball_dont_lie_id: 17896052,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 331
	},
	'Tim Hardaway Jr': {
		nba_player_id: 203501,
		ball_dont_lie_id: 191,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G-F',
		index: 332
	},
	'Victor Oladipo': {
		nba_player_id: 203506,
		ball_dont_lie_id: 357,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 333
	},
	'Giannis Antetokounmpo': {
		nba_player_id: 203507,
		ball_dont_lie_id: 15,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 334
	},
	'Seth Curry': {
		nba_player_id: 203552,
		ball_dont_lie_id: 114,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 335
	},
	'Luguentz Dort': {
		nba_player_id: 1629652,
		ball_dont_lie_id: 666541,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 336
	},
	'Daniel Gafford': {
		nba_player_id: 1629655,
		ball_dont_lie_id: 666577,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F-C',
		index: 337
	},
	'Quentin Grimes': {
		nba_player_id: 1629656,
		ball_dont_lie_id: 17895858,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 338
	},
	'Talen Horton-Tucker': {
		nba_player_id: 1629659,
		ball_dont_lie_id: 666650,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 339
	},
	'Ty Jerome': {
		nba_player_id: 1629660,
		ball_dont_lie_id: 666676,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G-F',
		index: 340
	},
	'Cameron Johnson': {
		nba_player_id: 1629661,
		ball_dont_lie_id: 666679,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 341
	},
	'Jalen McDaniels': {
		nba_player_id: 1629667,
		ball_dont_lie_id: 666762,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F-C',
		index: 342
	},
	'Naji Marshall': {
		nba_player_id: 1630230,
		ball_dont_lie_id: 3547293,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 343
	},
	'Tre Mann': {
		nba_player_id: 1630544,
		ball_dont_lie_id: 17896036,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 344
	},
	'James Bouknight': {
		nba_player_id: 1630547,
		ball_dont_lie_id: 17896037,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 345
	},
	'Johnny Juzang': {
		nba_player_id: 1630548,
		ball_dont_lie_id: 38017630,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 346
	},
	'DayRon Sharpe': {
		nba_player_id: 1630549,
		ball_dont_lie_id: 17896038,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'C',
		index: 347
	},
	'JT Thor': {
		nba_player_id: 1630550,
		ball_dont_lie_id: 18678001,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 348
	},
	'Jalen Johnson': {
		nba_player_id: 1630552,
		ball_dont_lie_id: 17896040,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F',
		index: 349
	},
	'Keon Johnson': {
		nba_player_id: 1630553,
		ball_dont_lie_id: 17896041,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 350
	},
	'Kessler Edwards': {
		nba_player_id: 1630556,
		ball_dont_lie_id: 17896044,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F',
		index: 351
	},
	'Corey Kispert': {
		nba_player_id: 1630557,
		ball_dont_lie_id: 17896045,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 352
	},
	'Davion Mitchell': {
		nba_player_id: 1630558,
		ball_dont_lie_id: 17553994,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 353
	},
	'Austin Reaves': {
		nba_player_id: 1630559,
		ball_dont_lie_id: 17553995,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 354
	},
	'Cam Thomas': {
		nba_player_id: 1630560,
		ball_dont_lie_id: 17896048,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 355
	},
	'Scottie Barnes': {
		nba_player_id: 1630567,
		ball_dont_lie_id: 17896055,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 356
	},
	'Luka Garza': {
		nba_player_id: 1630568,
		ball_dont_lie_id: 17896056,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'C',
		index: 357
	},
	'Trendon Watford': {
		nba_player_id: 1630570,
		ball_dont_lie_id: 17896058,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 358
	},
	'Santi Aldama': {
		nba_player_id: 1630583,
		ball_dont_lie_id: 17896067,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F-C',
		index: 359
	},
	'Nick Richards': {
		nba_player_id: 1630208,
		ball_dont_lie_id: 3547282,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'C',
		index: 360
	},
	'Omer Yurtseven': {
		nba_player_id: 1630209,
		ball_dont_lie_id: 11891374,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'C',
		index: 361
	},
	'Sandro Mamukelashvili': {
		nba_player_id: 1630572,
		ball_dont_lie_id: 17896059,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F-C',
		index: 362
	},
	'Sam Hauser': {
		nba_player_id: 1630573,
		ball_dont_lie_id: 17896060,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F',
		index: 363
	},
	'Julian Champagnie': {
		nba_player_id: 1630577,
		ball_dont_lie_id: 38017649,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 364
	},
	'Alperen Sengun': {
		nba_player_id: 1630578,
		ball_dont_lie_id: 17896062,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'C',
		index: 365
	},
	'Jericho Sims': {
		nba_player_id: 1630579,
		ball_dont_lie_id: 17896063,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'C',
		index: 366
	},
	'Josh Giddey': {
		nba_player_id: 1630581,
		ball_dont_lie_id: 17896065,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 367
	},
	'Joe Wieskamp': {
		nba_player_id: 1630580,
		ball_dont_lie_id: 17896064,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G-F',
		index: 368
	},
	'Zach LaVine': {
		nba_player_id: 203897,
		ball_dont_lie_id: 268,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 369
	},
	'Jordan Clarkson': {
		nba_player_id: 203903,
		ball_dont_lie_id: 100,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 370
	},
	'Keita Bates-Diop': {
		nba_player_id: 1628966,
		ball_dont_lie_id: 32,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F',
		index: 371
	},
	'Mikal Bridges': {
		nba_player_id: 1628969,
		ball_dont_lie_id: 61,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G-F',
		index: 372
	},
	'Bruce Brown': {
		nba_player_id: 1628971,
		ball_dont_lie_id: 69,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G-F',
		index: 373
	},
	'Buddy Boeheim': {
		nba_player_id: 1631205,
		ball_dont_lie_id: 38017718,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'F',
		index: 374
	},
	'Trevor Keels': {
		nba_player_id: 1631211,
		ball_dont_lie_id: 38017720,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G',
		index: 375
	},
	'Tyrese Martin': {
		nba_player_id: 1631213,
		ball_dont_lie_id: 38017722,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 376
	},
	'John Butler Jr': {
		nba_player_id: 1631219,
		ball_dont_lie_id: 38124126,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 377
	},
	'Caleb Martin': {
		nba_player_id: 1628997,
		ball_dont_lie_id: 666747,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 378
	},
	'Nassir Little': {
		nba_player_id: 1629642,
		ball_dont_lie_id: 666729,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'F-G',
		index: 379
	},
	'Armoni Brooks': {
		nba_player_id: 1629717,
		ball_dont_lie_id: 9051997,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 380
	},
	'Moses Moody': {
		nba_player_id: 1630541,
		ball_dont_lie_id: 17553992,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 381
	},
	'Isaiah Jackson': {
		nba_player_id: 1630543,
		ball_dont_lie_id: 17896035,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F',
		index: 382
	},
	'Jalen Wilson': {
		nba_player_id: 1630592,
		ball_dont_lie_id: 56677722,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 383
	},
	'Cade Cunningham': {
		nba_player_id: 1630595,
		ball_dont_lie_id: 17896075,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 384
	},
	'Evan Mobley': {
		nba_player_id: 1630596,
		ball_dont_lie_id: 17896076,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'C',
		index: 385
	},
	'Aaron Wiggins': {
		nba_player_id: 1630598,
		ball_dont_lie_id: 17896078,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'G',
		index: 386
	},
	'Isaiah Mobley': {
		nba_player_id: 1630600,
		ball_dont_lie_id: 38017662,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F',
		index: 387
	},
	'EJ Liddell': {
		nba_player_id: 1630604,
		ball_dont_lie_id: 38017663,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 388
	},
	'Javonte Smart': {
		nba_player_id: 1630606,
		ball_dont_lie_id: 17554001,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 389
	},
	'Malcolm Cazalon': {
		nba_player_id: 1630608,
		ball_dont_lie_id: 56677729,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 390
	},
	'Dalano Banton': {
		nba_player_id: 1630625,
		ball_dont_lie_id: 17896094,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F',
		index: 391
	},
	'Jose Alvarado': {
		nba_player_id: 1630631,
		ball_dont_lie_id: 17896097,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 392
	},
	'AJ Lawson': {
		nba_player_id: 1630639,
		ball_dont_lie_id: 17554004,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 393
	},
	'Ibou Badji': {
		nba_player_id: 1630641,
		ball_dont_lie_id: 39613724,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'C',
		index: 394
	},
	'Jay Huff': {
		nba_player_id: 1630643,
		ball_dont_lie_id: 17896103,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'C',
		index: 395
	},
	'Eugene Omoruyi': {
		nba_player_id: 1630647,
		ball_dont_lie_id: 17896106,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'F',
		index: 396
	},
	'Terry Taylor': {
		nba_player_id: 1630678,
		ball_dont_lie_id: 17896116,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 397
	},
	'Ish Wainright': {
		nba_player_id: 1630688,
		ball_dont_lie_id: 17896120,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 398
	},
	'Scoot Henderson': {
		nba_player_id: 1630703,
		ball_dont_lie_id: 56677747,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G',
		index: 399
	},
	'Carlik Jones': {
		nba_player_id: 1630637,
		ball_dont_lie_id: 17896099,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'G',
		index: 400
	},
	'Jalen Duren': {
		nba_player_id: 1631105,
		ball_dont_lie_id: 38017694,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'C',
		index: 401
	},
	'Mac McClung': {
		nba_player_id: 1630644,
		ball_dont_lie_id: 17554005,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 402
	},
	'Julian Strawther': {
		nba_player_id: 1631124,
		ball_dont_lie_id: 56677776,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 403
	},
	'Oscar Tshiebwe': {
		nba_player_id: 1631131,
		ball_dont_lie_id: 56677778,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F-C',
		index: 404
	},
	'Leonard Miller': {
		nba_player_id: 1631159,
		ball_dont_lie_id: 56677782,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F',
		index: 405
	},
	'Keon Ellis': {
		nba_player_id: 1631165,
		ball_dont_lie_id: 38017714,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 406
	},
	'Josh Minott': {
		nba_player_id: 1631169,
		ball_dont_lie_id: 38017715,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F',
		index: 407
	},
	'Jaime Jaquez Jr': {
		nba_player_id: 1631170,
		ball_dont_lie_id: 56677785,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 408
	},
	'Justin Lewis': {
		nba_player_id: 1631171,
		ball_dont_lie_id: 45969255,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 409
	},
	'Ousmane Dieng': {
		nba_player_id: 1631172,
		ball_dont_lie_id: 38017716,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 410
	},
	'Nicolas Claxton': {
		nba_player_id: 1629651,
		ball_dont_lie_id: 666508,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'C',
		index: 411
	},
	'Jordan Nwora': {
		nba_player_id: 1629670,
		ball_dont_lie_id: 3547207,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'F',
		index: 412
	},
	'Jordan Poole': {
		nba_player_id: 1629673,
		ball_dont_lie_id: 666848,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 413
	},
	'Neemias Queta': {
		nba_player_id: 1629674,
		ball_dont_lie_id: 17553967,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'C',
		index: 414
	},
	'Naz Reid': {
		nba_player_id: 1629675,
		ball_dont_lie_id: 667378,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'C-F',
		index: 415
	},
	'Luka Samanic': {
		nba_player_id: 1629677,
		ball_dont_lie_id: 666881,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F',
		index: 416
	},
	'Admiral Schofield': {
		nba_player_id: 1629678,
		ball_dont_lie_id: 666885,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F',
		index: 417
	},
	'Matisse Thybulle': {
		nba_player_id: 1629680,
		ball_dont_lie_id: 666923,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G-F',
		index: 418
	},
	'Grant Williams': {
		nba_player_id: 1629684,
		ball_dont_lie_id: 666965,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F',
		index: 419
	},
	'Dylan Windler': {
		nba_player_id: 1629685,
		ball_dont_lie_id: 666971,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'G-F',
		index: 420
	},
	'John Konchar': {
		nba_player_id: 1629723,
		ball_dont_lie_id: 666703,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 421
	},
	'Garrison Mathews': {
		nba_player_id: 1629726,
		ball_dont_lie_id: 666754,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 422
	},
	'Dean Wade': {
		nba_player_id: 1629731,
		ball_dont_lie_id: 666940,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F-C',
		index: 423
	},
	'Anthony Edwards': {
		nba_player_id: 1630162,
		ball_dont_lie_id: 3547238,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'G',
		index: 424
	},
	'LaMelo Ball': {
		nba_player_id: 1630163,
		ball_dont_lie_id: 3547239,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 425
	},
	'James Wiseman': {
		nba_player_id: 1630164,
		ball_dont_lie_id: 3547240,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'C',
		index: 426
	},
	'Isaiah Roby': {
		nba_player_id: 1629676,
		ball_dont_lie_id: 666873,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'F',
		index: 427
	},
	'Xavier Moon': {
		nba_player_id: 1629875,
		ball_dont_lie_id: 24417679,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 428
	},
	'Gary Harris': {
		nba_player_id: 203914,
		ball_dont_lie_id: 196,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 429
	},
	'Spencer Dinwiddie': {
		nba_player_id: 203915,
		ball_dont_lie_id: 130,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G',
		index: 430
	},
	'Jerami Grant': {
		nba_player_id: 203924,
		ball_dont_lie_id: 182,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 431
	},
	'Joe Harris': {
		nba_player_id: 203925,
		ball_dont_lie_id: 197,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G-F',
		index: 432
	},
	'Doug McDermott': {
		nba_player_id: 203926,
		ball_dont_lie_id: 305,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 433
	},
	'Aaron Gordon': {
		nba_player_id: 203932,
		ball_dont_lie_id: 177,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'F',
		index: 434
	},
	'Marcus Smart': {
		nba_player_id: 203935,
		ball_dont_lie_id: 420,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 435
	},
	'Kyle Anderson': {
		nba_player_id: 203937,
		ball_dont_lie_id: 12,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F-G',
		index: 436
	},
	'Dwight Powell': {
		nba_player_id: 203939,
		ball_dont_lie_id: 379,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'F-C',
		index: 437
	},
	'Julius Randle': {
		nba_player_id: 203944,
		ball_dont_lie_id: 387,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'F-C',
		index: 438
	},
	'Andrew Wiggins': {
		nba_player_id: 203952,
		ball_dont_lie_id: 475,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 439
	},
	'Joel Embiid': {
		nba_player_id: 203954,
		ball_dont_lie_id: 145,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'C-F',
		index: 440
	},
	'Dario Saric': {
		nba_player_id: 203967,
		ball_dont_lie_id: 407,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F-C',
		index: 441
	},
	'Clint Capela': {
		nba_player_id: 203991,
		ball_dont_lie_id: 83,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'C',
		index: 442
	},
	'Bogdan Bogdanovic': {
		nba_player_id: 203992,
		ball_dont_lie_id: 53,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 443
	},
	'Jusuf Nurkic': {
		nba_player_id: 203994,
		ball_dont_lie_id: 349,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'C',
		index: 444
	},
	'Nikola Jokic': {
		nba_player_id: 203999,
		ball_dont_lie_id: 246,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'C',
		index: 445
	},
	'Kristaps Porzingis': {
		nba_player_id: 204001,
		ball_dont_lie_id: 378,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'F-C',
		index: 446
	},
	'Joe Ingles': {
		nba_player_id: 204060,
		ball_dont_lie_id: 226,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F-G',
		index: 447
	},
	'Cole Anthony': {
		nba_player_id: 1630175,
		ball_dont_lie_id: 3547251,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 448
	},
	'Tyrese Maxey': {
		nba_player_id: 1630178,
		ball_dont_lie_id: 3547254,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 449
	},
	'Khem Birch': {
		nba_player_id: 203920,
		ball_dont_lie_id: 46,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'C',
		index: 450
	},
	'Saddiq Bey': {
		nba_player_id: 1630180,
		ball_dont_lie_id: 3547256,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F',
		index: 451
	},
	'RJ Hampton': {
		nba_player_id: 1630181,
		ball_dont_lie_id: 3547257,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 452
	},
	'Josh Green': {
		nba_player_id: 1630182,
		ball_dont_lie_id: 3547258,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 453
	},
	'Jalen Hood-Schifino': {
		nba_player_id: 1641720,
		ball_dont_lie_id: 56677835,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'G',
		index: 454
	},
	'Maxwell Lewis': {
		nba_player_id: 1641721,
		ball_dont_lie_id: 56677836,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 455
	},
	'Jordan Hawkins': {
		nba_player_id: 1641722,
		ball_dont_lie_id: 56677837,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 456
	},
	'Kobe Bufkin': {
		nba_player_id: 1641723,
		ball_dont_lie_id: 56677838,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 457
	},
	'Jett Howard': {
		nba_player_id: 1641724,
		ball_dont_lie_id: 56677839,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 458
	},
	'Dereck Lively II': {
		nba_player_id: 1641726,
		ball_dont_lie_id: 56677840,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'C',
		index: 459
	},
	'Dariq Whitehead': {
		nba_player_id: 1641727,
		ball_dont_lie_id: 56677841,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 460
	},
	'Brice Sensabaugh': {
		nba_player_id: 1641729,
		ball_dont_lie_id: 56677842,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F',
		index: 461
	},
	'Noah Clowney': {
		nba_player_id: 1641730,
		ball_dont_lie_id: 56677843,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 462
	},
	'Bilal Coulibaly': {
		nba_player_id: 1641731,
		ball_dont_lie_id: 56677844,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 463
	},
	'Colby Jones': {
		nba_player_id: 1641732,
		ball_dont_lie_id: 56677845,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'G',
		index: 464
	},
	'Kelly Oubre Jr': {
		nba_player_id: 1626162,
		ball_dont_lie_id: 360,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'F-G',
		index: 465
	},
	'Jaden McDaniels': {
		nba_player_id: 1630183,
		ball_dont_lie_id: 3547259,
		team_id: 18,
		team_name: 'Minnesota Timberwolves',
		position: 'F',
		index: 466
	},
	'Kira Lewis Jr': {
		nba_player_id: 1630184,
		ball_dont_lie_id: 3547260,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 467
	},
	'Terquavion Smith': {
		nba_player_id: 1631173,
		ball_dont_lie_id: 56677788,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G',
		index: 468
	},
	'Jared Rhoden': {
		nba_player_id: 1631197,
		ball_dont_lie_id: 42097199,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 469
	},
	'Ron Harper Jr': {
		nba_player_id: 1631199,
		ball_dont_lie_id: 38017717,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 470
	},
	'Kris Murray': {
		nba_player_id: 1631200,
		ball_dont_lie_id: 56677791,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 471
	},
	'Marcus Sasser': {
		nba_player_id: 1631204,
		ball_dont_lie_id: 56677792,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 472
	},
	'Dalen Terry': {
		nba_player_id: 1631207,
		ball_dont_lie_id: 38017719,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 473
	},
	'Isaiah Wong': {
		nba_player_id: 1631209,
		ball_dont_lie_id: 56677794,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 474
	},
	'Jacob Toppin': {
		nba_player_id: 1631210,
		ball_dont_lie_id: 56677795,
		team_id: 20,
		team_name: 'New York Knicks',
		position: 'F',
		index: 475
	},
	'Peyton Watson': {
		nba_player_id: 1631212,
		ball_dont_lie_id: 38017721,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 476
	},
	'Caleb Houstan': {
		nba_player_id: 1631216,
		ball_dont_lie_id: 38017724,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'G',
		index: 477
	},
	'Moussa Diabate': {
		nba_player_id: 1631217,
		ball_dont_lie_id: 38017725,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'F',
		index: 478
	},
	'Trayce Jackson-Davis': {
		nba_player_id: 1631218,
		ball_dont_lie_id: 56677799,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 479
	},
	'Dereon Seabron': {
		nba_player_id: 1631220,
		ball_dont_lie_id: 38017726,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 480
	},
	'Collin Gillespie': {
		nba_player_id: 1631221,
		ball_dont_lie_id: 38017727,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 481
	},
	'Jake LaRavia': {
		nba_player_id: 1631222,
		ball_dont_lie_id: 38017728,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 482
	},
	'David Roddy': {
		nba_player_id: 1631223,
		ball_dont_lie_id: 38017729,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 483
	},
	'Javon Freeman-Liberty': {
		nba_player_id: 1631241,
		ball_dont_lie_id: 56677805,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'G',
		index: 484
	},
	'Mouhamed Gueye': {
		nba_player_id: 1631243,
		ball_dont_lie_id: 56677806,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F',
		index: 485
	},
	'Jermaine Samuels Jr': {
		nba_player_id: 1631257,
		ball_dont_lie_id: 56677809,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 486
	},
	'Sidy Cissoko': {
		nba_player_id: 1631321,
		ball_dont_lie_id: 56677817,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'G',
		index: 487
	},
	'Victor Wembanyama': {
		nba_player_id: 1641705,
		ball_dont_lie_id: 56677822,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F-C',
		index: 488
	},
	'Brandon Miller': {
		nba_player_id: 1641706,
		ball_dont_lie_id: 56677823,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'F',
		index: 489
	},
	'Taylor Hendricks': {
		nba_player_id: 1641707,
		ball_dont_lie_id: 56677824,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F',
		index: 490
	},
	'Amen Thompson': {
		nba_player_id: 1641708,
		ball_dont_lie_id: 56677825,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G-F',
		index: 491
	},
	'Ausar Thompson': {
		nba_player_id: 1641709,
		ball_dont_lie_id: 56677826,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G-F',
		index: 492
	},
	'Devin Booker': {
		nba_player_id: 1626164,
		ball_dont_lie_id: 57,
		team_id: 24,
		team_name: 'Phoenix Suns',
		position: 'G',
		index: 493
	},
	'Myles Turner': {
		nba_player_id: 1626167,
		ball_dont_lie_id: 452,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'C-F',
		index: 494
	},
	'Trey Lyles': {
		nba_player_id: 1626168,
		ball_dont_lie_id: 290,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F',
		index: 495
	},
	'Bobby Portis': {
		nba_player_id: 1626171,
		ball_dont_lie_id: 377,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 496
	},
	'Kevon Looney': {
		nba_player_id: 1626172,
		ball_dont_lie_id: 282,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'F',
		index: 497
	},
	'Christian Wood': {
		nba_player_id: 1626174,
		ball_dont_lie_id: 486,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 498
	},
	'Terry Rozier': {
		nba_player_id: 1626179,
		ball_dont_lie_id: 403,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 499
	},
	'Norman Powell': {
		nba_player_id: 1626181,
		ball_dont_lie_id: 380,
		team_id: 13,
		team_name: 'LA Clippers',
		position: 'G',
		index: 500
	},
	'Pat Connaughton': {
		nba_player_id: 1626192,
		ball_dont_lie_id: 105,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 501
	},
	'Josh Richardson': {
		nba_player_id: 1626196,
		ball_dont_lie_id: 391,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'G',
		index: 502
	},
	'Larry Nance Jr': {
		nba_player_id: 1626204,
		ball_dont_lie_id: 340,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F-C',
		index: 503
	},
	'Royce ONeale': {
		nba_player_id: 1626220,
		ball_dont_lie_id: 351,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'F',
		index: 504
	},
	'Cedi Osman': {
		nba_player_id: 1626224,
		ball_dont_lie_id: 359,
		team_id: 27,
		team_name: 'San Antonio Spurs',
		position: 'F',
		index: 505
	},
	'Boban Marjanovic': {
		nba_player_id: 1626246,
		ball_dont_lie_id: 296,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'C',
		index: 506
	},
	'Ben Simmons': {
		nba_player_id: 1627732,
		ball_dont_lie_id: 417,
		team_id: 3,
		team_name: 'Brooklyn Nets',
		position: 'G-F',
		index: 507
	},
	'Domantas Sabonis': {
		nba_player_id: 1627734,
		ball_dont_lie_id: 406,
		team_id: 26,
		team_name: 'Sacramento Kings',
		position: 'F-C',
		index: 508
	},
	'Malik Beasley': {
		nba_player_id: 1627736,
		ball_dont_lie_id: 38,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 509
	},
	'Kris Dunn': {
		nba_player_id: 1627739,
		ball_dont_lie_id: 139,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'G',
		index: 510
	},
	'Buddy Hield': {
		nba_player_id: 1627741,
		ball_dont_lie_id: 210,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G',
		index: 511
	},
	'Brandon Ingram': {
		nba_player_id: 1627742,
		ball_dont_lie_id: 227,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'F',
		index: 512
	},
	'Damian Jones': {
		nba_player_id: 1627745,
		ball_dont_lie_id: 248,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'C',
		index: 513
	},
	'Caris LeVert': {
		nba_player_id: 1627747,
		ball_dont_lie_id: 277,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 514
	},
	'Dejounte Murray': {
		nba_player_id: 1627749,
		ball_dont_lie_id: 334,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'G',
		index: 515
	},
	'Jamal Murray': {
		nba_player_id: 1627750,
		ball_dont_lie_id: 335,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 516
	},
	'Jakob Poeltl': {
		nba_player_id: 1627751,
		ball_dont_lie_id: 373,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'C',
		index: 517
	},
	'Taurean Prince': {
		nba_player_id: 1627752,
		ball_dont_lie_id: 383,
		team_id: 14,
		team_name: 'Los Angeles Lakers',
		position: 'F',
		index: 518
	},
	'Jaylen Brown': {
		nba_player_id: 1627759,
		ball_dont_lie_id: 70,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G-F',
		index: 519
	},
	'Malcolm Brogdon': {
		nba_player_id: 1627763,
		ball_dont_lie_id: 65,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'G',
		index: 520
	},
	'Georges Niang': {
		nba_player_id: 1627777,
		ball_dont_lie_id: 344,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'F',
		index: 521
	},
	'Pascal Siakam': {
		nba_player_id: 1627783,
		ball_dont_lie_id: 416,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'F',
		index: 522
	},
	'Furkan Korkmaz': {
		nba_player_id: 1627788,
		ball_dont_lie_id: 260,
		team_id: 23,
		team_name: 'Philadelphia 76ers',
		position: 'G-F',
		index: 523
	},
	'Orlando Robinson': {
		nba_player_id: 1631115,
		ball_dont_lie_id: 39398582,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'C',
		index: 524
	},
	'Walker Kessler': {
		nba_player_id: 1631117,
		ball_dont_lie_id: 38017705,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'C',
		index: 525
	},
	'Jaylin Williams': {
		nba_player_id: 1631119,
		ball_dont_lie_id: 38017706,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 526
	},
	'JD Davison': {
		nba_player_id: 1631120,
		ball_dont_lie_id: 38017707,
		team_id: 2,
		team_name: 'Boston Celtics',
		position: 'G',
		index: 527
	},
	'Bryce McGowens': {
		nba_player_id: 1631121,
		ball_dont_lie_id: 38017708,
		team_id: 4,
		team_name: 'Charlotte Hornets',
		position: 'G',
		index: 528
	},
	'Christian Braun': {
		nba_player_id: 1631128,
		ball_dont_lie_id: 38017709,
		team_id: 8,
		team_name: 'Denver Nuggets',
		position: 'G',
		index: 529
	},
	'Christian Koloko': {
		nba_player_id: 1631132,
		ball_dont_lie_id: 38017710,
		team_id: 28,
		team_name: 'Toronto Raptors',
		position: 'C',
		index: 530
	},
	'Jabari Walker': {
		nba_player_id: 1631133,
		ball_dont_lie_id: 38017711,
		team_id: 25,
		team_name: 'Portland Trail Blazers',
		position: 'F',
		index: 531
	},
	'Ryan Rollins': {
		nba_player_id: 1631157,
		ball_dont_lie_id: 38017712,
		team_id: 30,
		team_name: 'Washington Wizards',
		position: 'G',
		index: 532
	},
	'Vince Williams Jr': {
		nba_player_id: 1631246,
		ball_dont_lie_id: 38017731,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 533
	},
	'Kenneth Lofton Jr': {
		nba_player_id: 1631254,
		ball_dont_lie_id: 38017732,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'F',
		index: 534
	},
	'AJ Green': {
		nba_player_id: 1631260,
		ball_dont_lie_id: 38017733,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'G',
		index: 535
	},
	'Jamal Cain': {
		nba_player_id: 1631288,
		ball_dont_lie_id: 38017734,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 536
	},
	'Jack White': {
		nba_player_id: 1631298,
		ball_dont_lie_id: 38017735,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'F',
		index: 537
	},
	'Cole Swider': {
		nba_player_id: 1631306,
		ball_dont_lie_id: 38017736,
		team_id: 16,
		team_name: 'Miami Heat',
		position: 'F',
		index: 538
	},
	'Trevor Hudgins': {
		nba_player_id: 1631309,
		ball_dont_lie_id: 38017737,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 539
	},
	'Lester Quinones': {
		nba_player_id: 1631311,
		ball_dont_lie_id: 45658838,
		team_id: 10,
		team_name: 'Golden State Warriors',
		position: 'G',
		index: 540
	},
	'Simone Fontecchio': {
		nba_player_id: 1631323,
		ball_dont_lie_id: 38017739,
		team_id: 29,
		team_name: 'Utah Jazz',
		position: 'F',
		index: 541
	},
	'Jacob Gilyard': {
		nba_player_id: 1631367,
		ball_dont_lie_id: 48248287,
		team_id: 15,
		team_name: 'Memphis Grizzlies',
		position: 'G',
		index: 542
	},
	'Jeenathan Williams': {
		nba_player_id: 1631466,
		ball_dont_lie_id: 47738533,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'G',
		index: 543
	},
	'Craig Porter': {
		nba_player_id: 1641854,
		ball_dont_lie_id: 56677872,
		team_id: 6,
		team_name: 'Cleveland Cavaliers',
		position: 'G',
		index: 544
	},
	'Dexter Dennis': {
		nba_player_id: 1641926,
		ball_dont_lie_id: 56677873,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 545
	},
	'Onuralp Bitim': {
		nba_player_id: 1641931,
		ball_dont_lie_id: 56677874,
		team_id: 5,
		team_name: 'Chicago Bulls',
		position: 'F',
		index: 546
	},
	'Miles Norris': {
		nba_player_id: 1641936,
		ball_dont_lie_id: 56677875,
		team_id: 1,
		team_name: 'Atlanta Hawks',
		position: 'F',
		index: 547
	},
	'MarJon Beauchamp': {
		nba_player_id: 1630699,
		ball_dont_lie_id: 38017676,
		team_id: 17,
		team_name: 'Milwaukee Bucks',
		position: 'F',
		index: 548
	},
	'Dyson Daniels': {
		nba_player_id: 1630700,
		ball_dont_lie_id: 38017677,
		team_id: 19,
		team_name: 'New Orleans Pelicans',
		position: 'G',
		index: 549
	},
	'Jaden Hardy': {
		nba_player_id: 1630702,
		ball_dont_lie_id: 38017679,
		team_id: 7,
		team_name: 'Dallas Mavericks',
		position: 'G',
		index: 550
	},
	'Jaden Ivey': {
		nba_player_id: 1631093,
		ball_dont_lie_id: 38017682,
		team_id: 9,
		team_name: 'Detroit Pistons',
		position: 'G',
		index: 551
	},
	'Paolo Banchero': {
		nba_player_id: 1631094,
		ball_dont_lie_id: 38017683,
		team_id: 22,
		team_name: 'Orlando Magic',
		position: 'F',
		index: 552
	},
	'Jabari Smith Jr': {
		nba_player_id: 1631095,
		ball_dont_lie_id: 38017684,
		team_id: 11,
		team_name: 'Houston Rockets',
		position: 'F',
		index: 553
	},
	'Chet Holmgren': {
		nba_player_id: 1631096,
		ball_dont_lie_id: 38017685,
		team_id: 21,
		team_name: 'Oklahoma City Thunder',
		position: 'C-F',
		index: 554
	},
	'Bennedict Mathurin': {
		nba_player_id: 1631097,
		ball_dont_lie_id: 38017686,
		team_id: 12,
		team_name: 'Indiana Pacers',
		position: 'G-F',
		index: 555
	}
};

export const ALL_PLAYER_NAMES = Object.keys(GLOBAL_PLAYERS);
