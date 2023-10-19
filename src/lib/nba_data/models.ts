export class Player {
  private name: string = "";
  private team_id: number = 0;
  private team_name: string = "";

  public Player(name: string) {
    this.name = name;
    this.team_id = GLOBAL_PLAYERS[name]["team_id"];
    this.team_name = TEAMS[this.team_id];
  }
}

export const TEAMS: any = {
  "1610612737": "Atlanta Hawks",
  "1610612738": "Boston Celtics",
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


export const GLOBAL_PLAYERS: any = {
  "Precious Achiuwa": {
    "player_id": 1630173,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630173.png",
    "position": "F",
    "pts": 7.8,
    "reb": 5.3,
    "ast": 0.9,
    "index": 1
  },
  "Steven Adams": {
    "player_id": 203500,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png",
    "position": "C",
    "pts": 9.2,
    "reb": 8.2,
    "ast": 1.5,
    "index": 2
  },
  "Bam Adebayo": {
    "player_id": 1628389,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628389.png",
    "position": "C-F",
    "pts": 14.7,
    "reb": 8.5,
    "ast": 3.4,
    "index": 3
  },
  "Ochai Agbaji": {
    "player_id": 1630534,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630534.png",
    "position": "G",
    "pts": 7.9,
    "reb": 2.1,
    "ast": 1.1,
    "index": 4
  },
  "Santi Aldama": {
    "player_id": 1630583,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630583.png",
    "position": "F-C",
    "pts": 7.6,
    "reb": 4.2,
    "ast": 1.1,
    "index": 5
  },
  "Nickeil Alexander-Walker": {
    "player_id": 1629638,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629638.png",
    "position": "G",
    "pts": 8.4,
    "reb": 2.4,
    "ast": 2.1,
    "index": 6
  },
  "Angelo Allegri": {
    "player_id": 1641874,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641874.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 7
  },
  "Grayson Allen": {
    "player_id": 1628960,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png",
    "position": "G",
    "pts": 9.7,
    "reb": 2.8,
    "ast": 1.7,
    "index": 8
  },
  "Jarrett Allen": {
    "player_id": 1628386,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628386.png",
    "position": "C",
    "pts": 12.0,
    "reb": 8.9,
    "ast": 1.4,
    "index": 9
  },
  "Jose Alvarado": {
    "player_id": 1630631,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630631.png",
    "position": "G",
    "pts": 7.7,
    "reb": 2.1,
    "ast": 2.9,
    "index": 10
  },
  "Kyle Anderson": {
    "player_id": 203937,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203937.png",
    "position": "F-G",
    "pts": 7.0,
    "reb": 4.5,
    "ast": 2.6,
    "index": 11
  },
  "Giannis Antetokounmpo": {
    "player_id": 203507,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
    "position": "F",
    "pts": 22.6,
    "reb": 9.6,
    "ast": 4.7,
    "index": 12
  },
  "Thanasis Antetokounmpo": {
    "player_id": 203648,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203648.png",
    "position": "F",
    "pts": 2.7,
    "reb": 1.8,
    "ast": 0.6,
    "index": 13
  },
  "Cole Anthony": {
    "player_id": 1630175,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630175.png",
    "position": "G",
    "pts": 14.2,
    "reb": 5.0,
    "ast": 4.6,
    "index": 14
  },
  "O.G. Anunoby": {
    "player_id": 1628384,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628384.png",
    "position": "F",
    "pts": 11.6,
    "reb": 4.3,
    "ast": 1.5,
    "index": 15
  },
  "Ryan Arcidiacono": {
    "player_id": 1627853,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627853.png",
    "position": "G",
    "pts": 4.4,
    "reb": 1.9,
    "ast": 2.0,
    "index": 16
  },
  "Chase Audige": {
    "player_id": 1641914,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641914.png",
    "position": null,
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 17
  },
  "Deni Avdija": {
    "player_id": 1630166,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630166.png",
    "position": "F",
    "pts": 8.1,
    "reb": 5.5,
    "ast": 2.1,
    "index": 18
  },
  "Deandre Ayton": {
    "player_id": 1629028,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629028.png",
    "position": "C",
    "pts": 16.7,
    "reb": 10.4,
    "ast": 1.6,
    "index": 19
  },
  "Udoka Azubuike": {
    "player_id": 1628962,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628962.png",
    "position": "C-F",
    "pts": 3.3,
    "reb": 3.0,
    "ast": 0.2,
    "index": 20
  },
  "Ibou Badji": {
    "player_id": 1630641,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630641.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 21
  },
  "Marvin Bagley III": {
    "player_id": 1628963,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628963.png",
    "position": "F",
    "pts": 13.3,
    "reb": 7.2,
    "ast": 0.9,
    "index": 22
  },
  "Amari Bailey": {
    "player_id": 1641735,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641735.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 23
  },
  "Patrick Baldwin": {
    "player_id": 1631116,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631116.png",
    "position": "F",
    "pts": 3.9,
    "reb": 1.3,
    "ast": 0.4,
    "index": 24
  },
  "LaMelo Ball": {
    "player_id": 1630163,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
    "position": "G",
    "pts": 19.4,
    "reb": 6.4,
    "ast": 7.3,
    "index": 25
  },
  "Lonzo Ball": {
    "player_id": 1628366,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628366.png",
    "position": "G",
    "pts": 11.9,
    "reb": 5.7,
    "ast": 6.2,
    "index": 26
  },
  "Mo Bamba": {
    "player_id": 1628964,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628964.png",
    "position": "C",
    "pts": 7.5,
    "reb": 5.8,
    "ast": 0.9,
    "index": 27
  },
  "Paolo Banchero": {
    "player_id": 1631094,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png",
    "position": "F",
    "pts": 20.0,
    "reb": 6.9,
    "ast": 3.7,
    "index": 28
  },
  "Desmond Bane": {
    "player_id": 1630217,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630217.png",
    "position": "G",
    "pts": 16.1,
    "reb": 4.1,
    "ast": 2.9,
    "index": 29
  },
  "Dalano Banton": {
    "player_id": 1630625,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630625.png",
    "position": "F",
    "pts": 3.7,
    "reb": 1.8,
    "ast": 1.4,
    "index": 30
  },
  "Dominick Barlow": {
    "player_id": 1631230,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631230.png",
    "position": "F",
    "pts": 3.9,
    "reb": 3.6,
    "ast": 0.9,
    "index": 31
  },
  "Harrison Barnes": {
    "player_id": 203084,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203084.png",
    "position": "F",
    "pts": 14.2,
    "reb": 5.0,
    "ast": 1.8,
    "index": 32
  },
  "Scottie Barnes": {
    "player_id": 1630567,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630567.png",
    "position": "F",
    "pts": 15.3,
    "reb": 7.1,
    "ast": 4.2,
    "index": 33
  },
  "RJ Barrett": {
    "player_id": 1629628,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629628.png",
    "position": "F-G",
    "pts": 18.1,
    "reb": 5.4,
    "ast": 2.8,
    "index": 34
  },
  "Charles Bassey": {
    "player_id": 1629646,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629646.png",
    "position": "C-F",
    "pts": 4.6,
    "reb": 4.4,
    "ast": 0.9,
    "index": 35
  },
  "Emoni Bates": {
    "player_id": 1641734,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641734.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 36
  },
  "Keita Bates-Diop": {
    "player_id": 1628966,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628966.png",
    "position": "F",
    "pts": 6.5,
    "reb": 3.2,
    "ast": 0.9,
    "index": 37
  },
  "Nicolas Batum": {
    "player_id": 201587,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201587.png",
    "position": "G-F",
    "pts": 10.7,
    "reb": 5.0,
    "ast": 3.4,
    "index": 38
  },
  "Damion Baugh": {
    "player_id": 1641878,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641878.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 39
  },
  "Darius Bazley": {
    "player_id": 1629647,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629647.png",
    "position": "F",
    "pts": 9.1,
    "reb": 5.3,
    "ast": 1.2,
    "index": 40
  },
  "Bradley Beal": {
    "player_id": 203078,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png",
    "position": "G",
    "pts": 22.1,
    "reb": 4.1,
    "ast": 4.3,
    "index": 41
  },
  "Malik Beasley": {
    "player_id": 1627736,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627736.png",
    "position": "G",
    "pts": 10.8,
    "reb": 2.7,
    "ast": 1.3,
    "index": 42
  },
  "MarJon Beauchamp": {
    "player_id": 1630699,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630699.png",
    "position": "F",
    "pts": 5.1,
    "reb": 2.2,
    "ast": 0.7,
    "index": 43
  },
  "Davis Bertans": {
    "player_id": 202722,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202722.png",
    "position": "F",
    "pts": 7.8,
    "reb": 2.5,
    "ast": 1.0,
    "index": 44
  },
  "Patrick Beverley": {
    "player_id": 201976,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201976.png",
    "position": "G",
    "pts": 8.5,
    "reb": 4.2,
    "ast": 3.4,
    "index": 45
  },
  "Saddiq Bey": {
    "player_id": 1630180,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630180.png",
    "position": "F",
    "pts": 14.1,
    "reb": 4.9,
    "ast": 1.9,
    "index": 46
  },
  "Khem Birch": {
    "player_id": 203920,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203920.png",
    "position": "C",
    "pts": 5.0,
    "reb": 4.4,
    "ast": 1.0,
    "index": 47
  },
  "Goga Bitadze": {
    "player_id": 1629048,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629048.png",
    "position": "C-F",
    "pts": 4.9,
    "reb": 3.0,
    "ast": 0.8,
    "index": 48
  },
  "Onuralp Bitim": {
    "player_id": 1641931,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641931.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 49
  },
  "Anthony Black": {
    "player_id": 1641710,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641710.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 50
  },
  "Leaky Black": {
    "player_id": 1641778,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641778.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 51
  },
  "Buddy Boeheim": {
    "player_id": 1631205,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631205.png",
    "position": "F",
    "pts": 1.6,
    "reb": 0.6,
    "ast": 0.4,
    "index": 52
  },
  "Bogdan Bogdanovic": {
    "player_id": 203992,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png",
    "position": "G",
    "pts": 14.2,
    "reb": 3.4,
    "ast": 3.3,
    "index": 53
  },
  "Bojan Bogdanovic": {
    "player_id": 202711,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202711.png",
    "position": "F",
    "pts": 15.6,
    "reb": 3.6,
    "ast": 1.7,
    "index": 54
  },
  "Bol Bol": {
    "player_id": 1629626,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629626.png",
    "position": "C-F",
    "pts": 6.3,
    "reb": 3.8,
    "ast": 0.7,
    "index": 55
  },
  "Marques Bolden": {
    "player_id": 1629716,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629716.png",
    "position": "C",
    "pts": 1.0,
    "reb": 1.1,
    "ast": 0.0,
    "index": 56
  },
  "Devin Booker": {
    "player_id": 1626164,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png",
    "position": "G",
    "pts": 23.9,
    "reb": 4.0,
    "ast": 4.8,
    "index": 57
  },
  "Brandon Boston Jr": {
    "player_id": 1630527,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630527.png",
    "position": "G",
    "pts": 6.7,
    "reb": 1.9,
    "ast": 1.0,
    "index": 58
  },
  "Chris Boucher": {
    "player_id": 1628449,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628449.png",
    "position": "F-C",
    "pts": 9.1,
    "reb": 5.4,
    "ast": 0.5,
    "index": 59
  },
  "James Bouknight": {
    "player_id": 1630547,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630547.png",
    "position": "G",
    "pts": 5.1,
    "reb": 1.9,
    "ast": 1.0,
    "index": 60
  },
  "Souley Boum": {
    "player_id": 1641859,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641859.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 61
  },
  "Pedro Bradshaw": {
    "player_id": 1630817,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630817.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 62
  },
  "Malaki Branham": {
    "player_id": 1631103,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631103.png",
    "position": "F",
    "pts": 10.2,
    "reb": 2.7,
    "ast": 1.9,
    "index": 63
  },
  "Christian Braun": {
    "player_id": 1631128,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631128.png",
    "position": "G",
    "pts": 4.7,
    "reb": 2.4,
    "ast": 0.8,
    "index": 64
  },
  "Mikal Bridges": {
    "player_id": 1628969,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png",
    "position": "G-F",
    "pts": 13.1,
    "reb": 4.0,
    "ast": 2.3,
    "index": 65
  },
  "Miles Bridges": {
    "player_id": 1628970,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628970.png",
    "position": "F",
    "pts": 13.4,
    "reb": 5.6,
    "ast": 2.3,
    "index": 66
  },
  "Oshae Brissett": {
    "player_id": 1629052,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629052.png",
    "position": "F-G",
    "pts": 7.4,
    "reb": 4.2,
    "ast": 0.8,
    "index": 67
  },
  "Malcolm Brogdon": {
    "player_id": 1627763,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627763.png",
    "position": "G",
    "pts": 15.4,
    "reb": 4.2,
    "ast": 4.6,
    "index": 68
  },
  "Armoni Brooks": {
    "player_id": 1629717,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629717.png",
    "position": "G",
    "pts": 6.9,
    "reb": 2.3,
    "ast": 1.2,
    "index": 69
  },
  "Dillon Brooks": {
    "player_id": 1628415,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628415.png",
    "position": "G-F",
    "pts": 14.5,
    "reb": 3.1,
    "ast": 2.1,
    "index": 70
  },
  "Bruce Brown": {
    "player_id": 1628971,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628971.png",
    "position": "G-F",
    "pts": 8.5,
    "reb": 4.2,
    "ast": 2.4,
    "index": 71
  },
  "Jaylen Brown": {
    "player_id": 1627759,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png",
    "position": "G-F",
    "pts": 17.9,
    "reb": 5.2,
    "ast": 2.2,
    "index": 72
  },
  "Kendall Brown": {
    "player_id": 1631112,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631112.png",
    "position": "G",
    "pts": 1.5,
    "reb": 1.0,
    "ast": 0.5,
    "index": 73
  },
  "Kobe Brown": {
    "player_id": 1641738,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641738.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 74
  },
  "Moses Brown": {
    "player_id": 1629650,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629650.png",
    "position": "C",
    "pts": 5.5,
    "reb": 5.2,
    "ast": 0.1,
    "index": 75
  },
  "Greg Brown III": {
    "player_id": 1630535,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630535.png",
    "position": "F",
    "pts": 4.0,
    "reb": 2.4,
    "ast": 0.6,
    "index": 76
  },
  "Charlie Brown Jr": {
    "player_id": 1629718,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629718.png",
    "position": "G",
    "pts": 2.2,
    "reb": 1.3,
    "ast": 0.4,
    "index": 77
  },
  "Troy Brown Jr": {
    "player_id": 1628972,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628972.png",
    "position": "G-F",
    "pts": 6.6,
    "reb": 3.9,
    "ast": 1.5,
    "index": 78
  },
  "Jalen Brunson": {
    "player_id": 1628973,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628973.png",
    "position": "G",
    "pts": 14.3,
    "reb": 3.1,
    "ast": 4.2,
    "index": 79
  },
  "Thomas Bryant": {
    "player_id": 1628418,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628418.png",
    "position": "C-F",
    "pts": 10.1,
    "reb": 5.7,
    "ast": 1.1,
    "index": 80
  },
  "Kobe Bufkin": {
    "player_id": 1641723,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641723.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 81
  },
  "Reggie Bullock": {
    "player_id": 203493,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203493.png",
    "position": "G-F",
    "pts": 7.7,
    "reb": 2.7,
    "ast": 1.2,
    "index": 82
  },
  "Alec Burks": {
    "player_id": 202692,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202692.png",
    "position": "G",
    "pts": 10.8,
    "reb": 3.5,
    "ast": 2.0,
    "index": 83
  },
  "Deonte Burton": {
    "player_id": 1629126,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629126.png",
    "position": "G-F",
    "pts": 2.5,
    "reb": 1.2,
    "ast": 0.4,
    "index": 84
  },
  "Jared Butler": {
    "player_id": 1630215,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630215.png",
    "position": "G",
    "pts": 4.1,
    "reb": 1.0,
    "ast": 1.5,
    "index": 85
  },
  "Jimmy Butler": {
    "player_id": 202710,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    "position": "F",
    "pts": 18.2,
    "reb": 5.3,
    "ast": 4.2,
    "index": 86
  },
  "John Butler Jr": {
    "player_id": 1631219,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631219.png",
    "position": "F",
    "pts": 2.4,
    "reb": 0.9,
    "ast": 0.6,
    "index": 87
  },
  "Jamal Cain": {
    "player_id": 1631288,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631288.png",
    "position": "F",
    "pts": 5.4,
    "reb": 2.9,
    "ast": 0.7,
    "index": 88
  },
  "Kentavious Caldwell-Pope": {
    "player_id": 203484,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203484.png",
    "position": "G",
    "pts": 11.5,
    "reb": 3.1,
    "ast": 1.8,
    "index": 89
  },
  "Toumani Camara": {
    "player_id": 1641739,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641739.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 90
  },
  "Vlatko Cancar": {
    "player_id": 1628427,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628427.png",
    "position": "F",
    "pts": 3.5,
    "reb": 1.7,
    "ast": 0.9,
    "index": 91
  },
  "Devin Cannady": {
    "player_id": 1629962,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629962.png",
    "position": "G",
    "pts": 6.5,
    "reb": 0.8,
    "ast": 0.8,
    "index": 92
  },
  "Clint Capela": {
    "player_id": 203991,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png",
    "position": "C",
    "pts": 12.4,
    "reb": 10.7,
    "ast": 1.0,
    "index": 93
  },
  "Jevon Carter": {
    "player_id": 1628975,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628975.png",
    "position": "G",
    "pts": 5.4,
    "reb": 1.9,
    "ast": 1.7,
    "index": 94
  },
  "Wendell Carter Jr": {
    "player_id": 1628976,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628976.png",
    "position": "C-F",
    "pts": 12.9,
    "reb": 8.8,
    "ast": 2.1,
    "index": 95
  },
  "Alex Caruso": {
    "player_id": 1627936,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627936.png",
    "position": "G",
    "pts": 6.0,
    "reb": 2.6,
    "ast": 2.7,
    "index": 96
  },
  "Colin Castleton": {
    "player_id": 1630658,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630658.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 97
  },
  "Malcolm Cazalon": {
    "player_id": 1630608,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630608.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 98
  },
  "Julian Champagnie": {
    "player_id": 1630577,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630577.png",
    "position": "F",
    "pts": 9.7,
    "reb": 3.5,
    "ast": 0.6,
    "index": 99
  },
  "Justin Champagnie": {
    "player_id": 1630551,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630551.png",
    "position": "G-F",
    "pts": 2.2,
    "reb": 2.0,
    "ast": 0.4,
    "index": 100
  },
  "Max Christie": {
    "player_id": 1631108,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631108.png",
    "position": "G",
    "pts": 3.1,
    "reb": 1.8,
    "ast": 0.5,
    "index": 101
  },
  "Josh Christopher": {
    "player_id": 1630528,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630528.png",
    "position": "G",
    "pts": 6.9,
    "reb": 1.9,
    "ast": 1.6,
    "index": 102
  },
  "Sidy Cissoko": {
    "player_id": 1631321,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631321.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 103
  },
  "Jaylen Clark": {
    "player_id": 1641740,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641740.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 104
  },
  "Brandon Clarke": {
    "player_id": 1629634,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629634.png",
    "position": "F",
    "pts": 10.7,
    "reb": 5.6,
    "ast": 1.4,
    "index": 105
  },
  "Jordan Clarkson": {
    "player_id": 203903,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203903.png",
    "position": "G",
    "pts": 15.9,
    "reb": 3.4,
    "ast": 2.7,
    "index": 106
  },
  "Nic Claxton": {
    "player_id": 1629651,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629651.png",
    "position": "C",
    "pts": 9.7,
    "reb": 6.9,
    "ast": 1.4,
    "index": 107
  },
  "Noah Clowney": {
    "player_id": 1641730,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641730.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 108
  },
  "Amir Coffey": {
    "player_id": 1629599,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629599.png",
    "position": "G-F",
    "pts": 5.5,
    "reb": 1.7,
    "ast": 1.2,
    "index": 109
  },
  "John Collins": {
    "player_id": 1628381,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628381.png",
    "position": "F-C",
    "pts": 15.8,
    "reb": 8.0,
    "ast": 1.5,
    "index": 110
  },
  "Zach Collins": {
    "player_id": 1628380,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628380.png",
    "position": "F-C",
    "pts": 7.5,
    "reb": 4.8,
    "ast": 1.6,
    "index": 111
  },
  "Chance Comanche": {
    "player_id": 1628435,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628435.png",
    "position": "C",
    "pts": 7.0,
    "reb": 3.0,
    "ast": 0.0,
    "index": 112
  },
  "Mike Conley": {
    "player_id": 201144,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201144.png",
    "position": "G",
    "pts": 14.7,
    "reb": 3.0,
    "ast": 5.7,
    "index": 113
  },
  "Pat Connaughton": {
    "player_id": 1626192,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626192.png",
    "position": "G",
    "pts": 6.1,
    "reb": 3.5,
    "ast": 1.3,
    "index": 114
  },
  "Xavier Cooks": {
    "player_id": 1641645,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641645.png",
    "position": "F",
    "pts": 3.8,
    "reb": 3.8,
    "ast": 0.6,
    "index": 115
  },
  "Sharife Cooper": {
    "player_id": 1630536,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630536.png",
    "position": "G",
    "pts": 0.5,
    "reb": 0.4,
    "ast": 0.4,
    "index": 116
  },
  "Bilal Coulibaly": {
    "player_id": 1641731,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641731.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 117
  },
  "Ricky Council IV": {
    "player_id": 1641741,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641741.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 118
  },
  "Robert Covington": {
    "player_id": 203496,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203496.png",
    "position": "F",
    "pts": 11.1,
    "reb": 5.6,
    "ast": 1.5,
    "index": 119
  },
  "Torrey Craig": {
    "player_id": 1628470,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628470.png",
    "position": "F",
    "pts": 6.0,
    "reb": 4.0,
    "ast": 1.1,
    "index": 120
  },
  "Jae Crowder": {
    "player_id": 203109,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203109.png",
    "position": "F",
    "pts": 9.5,
    "reb": 4.3,
    "ast": 1.6,
    "index": 121
  },
  "Cade Cunningham": {
    "player_id": 1630595,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png",
    "position": "G",
    "pts": 17.8,
    "reb": 5.6,
    "ast": 5.6,
    "index": 122
  },
  "Seth Curry": {
    "player_id": 203552,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203552.png",
    "position": "G",
    "pts": 11.0,
    "reb": 2.2,
    "ast": 2.1,
    "index": 123
  },
  "Stephen Curry": {
    "player_id": 201939,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    "position": "G",
    "pts": 24.6,
    "reb": 4.7,
    "ast": 6.5,
    "index": 124
  },
  "Dyson Daniels": {
    "player_id": 1630700,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630700.png",
    "position": "G",
    "pts": 3.8,
    "reb": 3.2,
    "ast": 2.3,
    "index": 125
  },
  "Anthony Davis": {
    "player_id": 203076,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
    "position": "F-C",
    "pts": 24.0,
    "reb": 10.4,
    "ast": 2.4,
    "index": 126
  },
  "Johnny Davis": {
    "player_id": 1631098,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631098.png",
    "position": "G",
    "pts": 5.8,
    "reb": 2.3,
    "ast": 1.0,
    "index": 127
  },
  "JD Davison": {
    "player_id": 1631120,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631120.png",
    "position": "G",
    "pts": 1.6,
    "reb": 0.8,
    "ast": 0.9,
    "index": 128
  },
  "Darius Days": {
    "player_id": 1630620,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630620.png",
    "position": "F",
    "pts": 3.8,
    "reb": 1.5,
    "ast": 0.3,
    "index": 129
  },
  "DeMar DeRozan": {
    "player_id": 201942,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png",
    "position": "G-F",
    "pts": 21.0,
    "reb": 4.4,
    "ast": 4.0,
    "index": 130
  },
  "Dexter Dennis": {
    "player_id": 1641926,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641926.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 131
  },
  "Donte DiVincenzo": {
    "player_id": 1628978,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628978.png",
    "position": "G",
    "pts": 9.1,
    "reb": 4.6,
    "ast": 2.8,
    "index": 132
  },
  "Moussa Diabate": {
    "player_id": 1631217,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631217.png",
    "position": "F",
    "pts": 2.7,
    "reb": 2.3,
    "ast": 0.2,
    "index": 133
  },
  "Cheick Diallo": {
    "player_id": 1627767,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627767.png",
    "position": "F-C",
    "pts": 5.2,
    "reb": 4.1,
    "ast": 0.4,
    "index": 134
  },
  "Gradey Dick": {
    "player_id": 1641711,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641711.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 135
  },
  "Ousmane Dieng": {
    "player_id": 1631172,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631172.png",
    "position": "F",
    "pts": 4.9,
    "reb": 2.7,
    "ast": 1.2,
    "index": 136
  },
  "Spencer Dinwiddie": {
    "player_id": 203915,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203915.png",
    "position": "G",
    "pts": 13.8,
    "reb": 3.1,
    "ast": 5.3,
    "index": 137
  },
  "Luka Doncic": {
    "player_id": 1629029,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
    "position": "F-G",
    "pts": 27.6,
    "reb": 8.6,
    "ast": 8.0,
    "index": 138
  },
  "Luguentz Dort": {
    "player_id": 1629652,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png",
    "position": "G",
    "pts": 13.4,
    "reb": 3.9,
    "ast": 1.7,
    "index": 139
  },
  "Ayo Dosunmu": {
    "player_id": 1630245,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630245.png",
    "position": "G",
    "pts": 8.7,
    "reb": 2.8,
    "ast": 2.9,
    "index": 140
  },
  "Jeff Dowtin Jr": {
    "player_id": 1630288,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630288.png",
    "position": "G",
    "pts": 2.4,
    "reb": 1.2,
    "ast": 1.2,
    "index": 141
  },
  "Henri Drell": {
    "player_id": 1630929,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630929.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 142
  },
  "Andre Drummond": {
    "player_id": 203083,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203083.png",
    "position": "C",
    "pts": 13.2,
    "reb": 12.7,
    "ast": 1.3,
    "index": 143
  },
  "Chris Duarte": {
    "player_id": 1630537,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630537.png",
    "position": "G",
    "pts": 10.7,
    "reb": 3.4,
    "ast": 1.8,
    "index": 144
  },
  "David Duke Jr": {
    "player_id": 1630561,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630561.png",
    "position": "G",
    "pts": 4.2,
    "reb": 2.1,
    "ast": 0.8,
    "index": 145
  },
  "Kris Dunn": {
    "player_id": 1627739,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627739.png",
    "position": "G",
    "pts": 8.6,
    "reb": 3.4,
    "ast": 4.3,
    "index": 146
  },
  "Kevin Durant": {
    "player_id": 201142,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
    "position": "F",
    "pts": 27.3,
    "reb": 7.1,
    "ast": 4.3,
    "index": 147
  },
  "Jalen Duren": {
    "player_id": 1631105,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631105.png",
    "position": "C",
    "pts": 9.1,
    "reb": 8.9,
    "ast": 1.1,
    "index": 148
  },
  "Tari Eason": {
    "player_id": 1631106,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631106.png",
    "position": "F",
    "pts": 9.3,
    "reb": 6.0,
    "ast": 1.1,
    "index": 149
  },
  "Anthony Edwards": {
    "player_id": 1630162,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630162.png",
    "position": "G",
    "pts": 21.8,
    "reb": 5.1,
    "ast": 3.7,
    "index": 150
  },
  "Kessler Edwards": {
    "player_id": 1630556,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630556.png",
    "position": "F",
    "pts": 4.6,
    "reb": 2.8,
    "ast": 0.6,
    "index": 151
  },
  "Kyler Edwards": {
    "player_id": 1631266,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631266.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 152
  },
  "Keon Ellis": {
    "player_id": 1631165,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631165.png",
    "position": "G",
    "pts": 1.5,
    "reb": 0.5,
    "ast": 0.4,
    "index": 153
  },
  "Joel Embiid": {
    "player_id": 203954,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png",
    "position": "C-F",
    "pts": 27.2,
    "reb": 11.2,
    "ast": 3.4,
    "index": 154
  },
  "Drew Eubanks": {
    "player_id": 1629234,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png",
    "position": "F-C",
    "pts": 6.1,
    "reb": 4.7,
    "ast": 1.0,
    "index": 155
  },
  "Tosan Evbuomwan": {
    "player_id": 1641787,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641787.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 156
  },
  "Dante Exum": {
    "player_id": 203957,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203957.png",
    "position": "G",
    "pts": 5.7,
    "reb": 1.8,
    "ast": 2.1,
    "index": 157
  },
  "Bruno Fernando": {
    "player_id": 1628981,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628981.png",
    "position": "F-C",
    "pts": 3.4,
    "reb": 3.0,
    "ast": 0.6,
    "index": 158
  },
  "Dorian Finney-Smith": {
    "player_id": 1627827,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627827.png",
    "position": "F",
    "pts": 8.2,
    "reb": 4.6,
    "ast": 1.4,
    "index": 159
  },
  "Malachi Flynn": {
    "player_id": 1630201,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630201.png",
    "position": "G",
    "pts": 5.5,
    "reb": 1.8,
    "ast": 1.9,
    "index": 160
  },
  "Simone Fontecchio": {
    "player_id": 1631323,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631323.png",
    "position": "F",
    "pts": 6.3,
    "reb": 1.7,
    "ast": 0.8,
    "index": 161
  },
  "Jordan Ford": {
    "player_id": 1630259,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630259.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 162
  },
  "Trent Forrest": {
    "player_id": 1630235,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630235.png",
    "position": "G",
    "pts": 3.0,
    "reb": 1.6,
    "ast": 1.7,
    "index": 163
  },
  "Evan Fournier": {
    "player_id": 203095,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203095.png",
    "position": "G-F",
    "pts": 14.0,
    "reb": 2.7,
    "ast": 2.5,
    "index": 164
  },
  "De'Aaron Fox": {
    "player_id": 1628368,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png",
    "position": "G",
    "pts": 20.2,
    "reb": 3.7,
    "ast": 6.2,
    "index": 165
  },
  "Armaan Franklin": {
    "player_id": 1641848,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641848.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 166
  },
  "Javon Freeman-Liberty": {
    "player_id": 1631241,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631241.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 167
  },
  "Alex Fudge": {
    "player_id": 1641788,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641788.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 168
  },
  "Markelle Fultz": {
    "player_id": 1628365,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628365.png",
    "position": "G",
    "pts": 11.8,
    "reb": 3.5,
    "ast": 5.0,
    "index": 169
  },
  "Andrew Funk": {
    "player_id": 1641847,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641847.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 170
  },
  "Taylor Funk": {
    "player_id": 1641917,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641917.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 171
  },
  "Daniel Gafford": {
    "player_id": 1629655,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629655.png",
    "position": "F-C",
    "pts": 8.0,
    "reb": 4.8,
    "ast": 0.8,
    "index": 172
  },
  "Danilo Gallinari": {
    "player_id": 201568,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201568.png",
    "position": "F",
    "pts": 15.6,
    "reb": 4.8,
    "ast": 1.9,
    "index": 173
  },
  "Darius Garland": {
    "player_id": 1629636,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629636.png",
    "position": "G",
    "pts": 18.5,
    "reb": 2.6,
    "ast": 6.7,
    "index": 174
  },
  "Usman Garuba": {
    "player_id": 1630586,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630586.png",
    "position": "F",
    "pts": 2.8,
    "reb": 3.9,
    "ast": 0.8,
    "index": 175
  },
  "Luka Garza": {
    "player_id": 1630568,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630568.png",
    "position": "C",
    "pts": 6.1,
    "reb": 2.7,
    "ast": 0.6,
    "index": 176
  },
  "Keyonte George": {
    "player_id": 1641718,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641718.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 177
  },
  "Paul George": {
    "player_id": 202331,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png",
    "position": "F",
    "pts": 20.6,
    "reb": 6.4,
    "ast": 3.7,
    "index": 178
  },
  "Taj Gibson": {
    "player_id": 201959,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201959.png",
    "position": "F",
    "pts": 8.7,
    "reb": 5.9,
    "ast": 1.0,
    "index": 179
  },
  "Josh Giddey": {
    "player_id": 1630581,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png",
    "position": "G",
    "pts": 14.9,
    "reb": 7.8,
    "ast": 6.3,
    "index": 180
  },
  "Harry Giles III": {
    "player_id": 1628385,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628385.png",
    "position": "F-C",
    "pts": 5.9,
    "reb": 3.8,
    "ast": 1.2,
    "index": 181
  },
  "Shai Gilgeous-Alexander": {
    "player_id": 1628983,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png",
    "position": "G",
    "pts": 21.1,
    "reb": 4.6,
    "ast": 4.5,
    "index": 182
  },
  "Anthony Gill": {
    "player_id": 1630264,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630264.png",
    "position": "F",
    "pts": 3.5,
    "reb": 1.8,
    "ast": 0.6,
    "index": 183
  },
  "Collin Gillespie": {
    "player_id": 1631221,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631221.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 184
  },
  "Jacob Gilyard": {
    "player_id": 1631367,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631367.png",
    "position": "G",
    "pts": 3.0,
    "reb": 4.0,
    "ast": 7.0,
    "index": 185
  },
  "Rudy Gobert": {
    "player_id": 203497,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png",
    "position": "C",
    "pts": 12.5,
    "reb": 11.6,
    "ast": 1.3,
    "index": 186
  },
  "Jordan Goodwin": {
    "player_id": 1630692,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630692.png",
    "position": "G",
    "pts": 6.4,
    "reb": 3.2,
    "ast": 2.6,
    "index": 187
  },
  "Aaron Gordon": {
    "player_id": 203932,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203932.png",
    "position": "F",
    "pts": 13.4,
    "reb": 6.3,
    "ast": 2.5,
    "index": 188
  },
  "Eric Gordon": {
    "player_id": 201569,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201569.png",
    "position": "G",
    "pts": 16.0,
    "reb": 2.4,
    "ast": 2.8,
    "index": 189
  },
  "Jazian Gortman": {
    "player_id": 1641789,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641789.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 190
  },
  "Devonte' Graham": {
    "player_id": 1628984,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628984.png",
    "position": "G",
    "pts": 11.6,
    "reb": 2.3,
    "ast": 4.5,
    "index": 191
  },
  "Jerami Grant": {
    "player_id": 203924,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203924.png",
    "position": "F",
    "pts": 12.3,
    "reb": 4.0,
    "ast": 1.5,
    "index": 192
  },
  "RaiQuan Gray": {
    "player_id": 1630564,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630564.png",
    "position": "F",
    "pts": 16.0,
    "reb": 9.0,
    "ast": 7.0,
    "index": 193
  },
  "AJ Green": {
    "player_id": 1631260,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631260.png",
    "position": "G",
    "pts": 4.4,
    "reb": 1.3,
    "ast": 0.6,
    "index": 194
  },
  "Danny Green": {
    "player_id": 201980,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201980.png",
    "position": "G",
    "pts": 8.7,
    "reb": 3.4,
    "ast": 1.5,
    "index": 195
  },
  "Draymond Green": {
    "player_id": 203110,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png",
    "position": "F",
    "pts": 8.7,
    "reb": 7.0,
    "ast": 5.6,
    "index": 196
  },
  "Jalen Green": {
    "player_id": 1630224,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630224.png",
    "position": "G",
    "pts": 19.9,
    "reb": 3.6,
    "ast": 3.2,
    "index": 197
  },
  "Jeff Green": {
    "player_id": 201145,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201145.png",
    "position": "F",
    "pts": 12.4,
    "reb": 4.2,
    "ast": 1.5,
    "index": 198
  },
  "Josh Green": {
    "player_id": 1630182,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630182.png",
    "position": "G",
    "pts": 5.8,
    "reb": 2.5,
    "ast": 1.3,
    "index": 199
  },
  "AJ Griffin": {
    "player_id": 1631100,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631100.png",
    "position": "F",
    "pts": 8.9,
    "reb": 2.1,
    "ast": 1.0,
    "index": 200
  },
  "Quentin Grimes": {
    "player_id": 1629656,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629656.png",
    "position": "G",
    "pts": 9.2,
    "reb": 2.8,
    "ast": 1.7,
    "index": 201
  },
  "Mouhamadou Gueye": {
    "player_id": 1631338,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631338.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 202
  },
  "Mouhamed Gueye": {
    "player_id": 1631243,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631243.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 203
  },
  "Rui Hachimura": {
    "player_id": 1629060,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629060.png",
    "position": "F",
    "pts": 12.5,
    "reb": 5.0,
    "ast": 1.3,
    "index": 204
  },
  "Tyrese Haliburton": {
    "player_id": 1630169,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png",
    "position": "G",
    "pts": 16.2,
    "reb": 3.6,
    "ast": 8.0,
    "index": 205
  },
  "RJ Hampton": {
    "player_id": 1630181,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630181.png",
    "position": "G",
    "pts": 7.1,
    "reb": 2.8,
    "ast": 1.8,
    "index": 206
  },
  "Tim Hardaway Jr": {
    "player_id": 203501,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203501.png",
    "position": "G-F",
    "pts": 14.0,
    "reb": 2.9,
    "ast": 1.9,
    "index": 207
  },
  "James Harden": {
    "player_id": 201935,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png",
    "position": "G",
    "pts": 24.7,
    "reb": 5.6,
    "ast": 7.0,
    "index": 208
  },
  "Jaden Hardy": {
    "player_id": 1630702,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630702.png",
    "position": "G",
    "pts": 8.8,
    "reb": 1.9,
    "ast": 1.4,
    "index": 209
  },
  "Ron Harper Jr": {
    "player_id": 1631199,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631199.png",
    "position": "F",
    "pts": 2.2,
    "reb": 0.8,
    "ast": 0.4,
    "index": 210
  },
  "Montrezl Harrell": {
    "player_id": 1626149,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626149.png",
    "position": "F-C",
    "pts": 12.1,
    "reb": 5.0,
    "ast": 1.3,
    "index": 211
  },
  "Gary Harris": {
    "player_id": 203914,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203914.png",
    "position": "G",
    "pts": 11.5,
    "reb": 2.4,
    "ast": 2.0,
    "index": 212
  },
  "Joe Harris": {
    "player_id": 203925,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png",
    "position": "G-F",
    "pts": 10.5,
    "reb": 3.1,
    "ast": 1.6,
    "index": 213
  },
  "Kevon Harris": {
    "player_id": 1630284,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630284.png",
    "position": "G",
    "pts": 4.1,
    "reb": 2.1,
    "ast": 0.5,
    "index": 214
  },
  "Tobias Harris": {
    "player_id": 202699,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202699.png",
    "position": "F",
    "pts": 16.2,
    "reb": 6.1,
    "ast": 2.3,
    "index": 215
  },
  "Shaquille Harrison": {
    "player_id": 1627885,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627885.png",
    "position": "G",
    "pts": 5.3,
    "reb": 2.5,
    "ast": 1.7,
    "index": 216
  },
  "Josh Hart": {
    "player_id": 1628404,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628404.png",
    "position": "G",
    "pts": 9.8,
    "reb": 6.2,
    "ast": 2.4,
    "index": 217
  },
  "Isaiah Hartenstein": {
    "player_id": 1628392,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628392.png",
    "position": "C-F",
    "pts": 5.5,
    "reb": 4.8,
    "ast": 1.4,
    "index": 218
  },
  "Joey Hauser": {
    "player_id": 1641792,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641792.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 219
  },
  "Sam Hauser": {
    "player_id": 1630573,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630573.png",
    "position": "F",
    "pts": 5.4,
    "reb": 2.2,
    "ast": 0.8,
    "index": 220
  },
  "Jordan Hawkins": {
    "player_id": 1641722,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641722.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 221
  },
  "Jaxson Hayes": {
    "player_id": 1629637,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629637.png",
    "position": "C-F",
    "pts": 7.5,
    "reb": 4.0,
    "ast": 0.7,
    "index": 222
  },
  "Killian Hayes": {
    "player_id": 1630165,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630165.png",
    "position": "G",
    "pts": 8.4,
    "reb": 3.0,
    "ast": 5.3,
    "index": 223
  },
  "Gordon Hayward": {
    "player_id": 202330,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202330.png",
    "position": "F",
    "pts": 15.5,
    "reb": 4.5,
    "ast": 3.5,
    "index": 224
  },
  "Max Heidegger": {
    "player_id": 1641972,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641972.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 225
  },
  "Scoot Henderson": {
    "player_id": 1630703,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630703.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 226
  },
  "Taylor Hendricks": {
    "player_id": 1641707,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641707.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 227
  },
  "Tyler Herro": {
    "player_id": 1629639,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629639.png",
    "position": "G",
    "pts": 17.7,
    "reb": 4.9,
    "ast": 3.5,
    "index": 228
  },
  "Buddy Hield": {
    "player_id": 1627741,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627741.png",
    "position": "G",
    "pts": 16.1,
    "reb": 4.4,
    "ast": 2.6,
    "index": 229
  },
  "Haywood Highsmith": {
    "player_id": 1629312,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629312.png",
    "position": "F",
    "pts": 3.7,
    "reb": 2.8,
    "ast": 0.7,
    "index": 230
  },
  "Nate Hinton": {
    "player_id": 1630207,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630207.png",
    "position": "G-F",
    "pts": 1.8,
    "reb": 0.4,
    "ast": 0.3,
    "index": 231
  },
  "D'Moi Hodge": {
    "player_id": 1641793,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641793.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 232
  },
  "Aaron Holiday": {
    "player_id": 1628988,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628988.png",
    "position": "G",
    "pts": 6.6,
    "reb": 1.6,
    "ast": 2.2,
    "index": 233
  },
  "Jrue Holiday": {
    "player_id": 201950,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201950.png",
    "position": "G",
    "pts": 16.4,
    "reb": 4.1,
    "ast": 6.5,
    "index": 234
  },
  "Justin Holiday": {
    "player_id": 203200,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203200.png",
    "position": "F-G",
    "pts": 8.4,
    "reb": 2.8,
    "ast": 1.4,
    "index": 235
  },
  "Richaun Holmes": {
    "player_id": 1626158,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626158.png",
    "position": "F",
    "pts": 8.9,
    "reb": 5.4,
    "ast": 1.0,
    "index": 236
  },
  "Chet Holmgren": {
    "player_id": 1631096,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png",
    "position": "C-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 237
  },
  "Jalen Hood-Schifino": {
    "player_id": 1641720,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641720.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 238
  },
  "Al Horford": {
    "player_id": 201143,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201143.png",
    "position": "C-F",
    "pts": 13.4,
    "reb": 8.1,
    "ast": 3.3,
    "index": 239
  },
  "Talen Horton-Tucker": {
    "player_id": 1629659,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629659.png",
    "position": "G",
    "pts": 9.8,
    "reb": 3.0,
    "ast": 3.0,
    "index": 240
  },
  "Danuel House Jr": {
    "player_id": 1627863,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627863.png",
    "position": "F-G",
    "pts": 7.7,
    "reb": 3.2,
    "ast": 1.2,
    "index": 241
  },
  "Caleb Houstan": {
    "player_id": 1631216,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631216.png",
    "position": "G",
    "pts": 3.8,
    "reb": 1.9,
    "ast": 0.6,
    "index": 242
  },
  "Jett Howard": {
    "player_id": 1641724,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641724.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 243
  },
  "Trevor Hudgins": {
    "player_id": 1631309,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631309.png",
    "position": "G",
    "pts": 1.8,
    "reb": 0.0,
    "ast": 0.6,
    "index": 244
  },
  "Kevin Huerter": {
    "player_id": 1628989,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628989.png",
    "position": "G-F",
    "pts": 12.2,
    "reb": 3.5,
    "ast": 3.1,
    "index": 245
  },
  "Jay Huff": {
    "player_id": 1630643,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630643.png",
    "position": "C",
    "pts": 4.6,
    "reb": 2.3,
    "ast": 1.0,
    "index": 246
  },
  "De'Andre Hunter": {
    "player_id": 1629631,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png",
    "position": "F-G",
    "pts": 13.9,
    "reb": 4.2,
    "ast": 1.5,
    "index": 247
  },
  "Bones Hyland": {
    "player_id": 1630538,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630538.png",
    "position": "G",
    "pts": 10.9,
    "reb": 2.6,
    "ast": 2.9,
    "index": 248
  },
  "Joe Ingles": {
    "player_id": 204060,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/204060.png",
    "position": "F-G",
    "pts": 8.5,
    "reb": 3.2,
    "ast": 3.7,
    "index": 249
  },
  "Brandon Ingram": {
    "player_id": 1627742,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627742.png",
    "position": "F",
    "pts": 19.2,
    "reb": 5.2,
    "ast": 4.1,
    "index": 250
  },
  "Kyrie Irving": {
    "player_id": 202681,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
    "position": "G",
    "pts": 23.4,
    "reb": 3.9,
    "ast": 5.7,
    "index": 251
  },
  "Jonathan Isaac": {
    "player_id": 1628371,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628371.png",
    "position": "F",
    "pts": 9.0,
    "reb": 5.3,
    "ast": 1.0,
    "index": 252
  },
  "Jaden Ivey": {
    "player_id": 1631093,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631093.png",
    "position": "G",
    "pts": 16.3,
    "reb": 3.9,
    "ast": 5.2,
    "index": 253
  },
  "GG Jackson": {
    "player_id": 1641713,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641713.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 254
  },
  "Isaiah Jackson": {
    "player_id": 1630543,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630543.png",
    "position": "F",
    "pts": 7.6,
    "reb": 4.4,
    "ast": 0.6,
    "index": 255
  },
  "Quenton Jackson": {
    "player_id": 1631245,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631245.png",
    "position": "G",
    "pts": 6.2,
    "reb": 0.9,
    "ast": 1.7,
    "index": 256
  },
  "Reggie Jackson": {
    "player_id": 202704,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202704.png",
    "position": "G",
    "pts": 12.8,
    "reb": 2.9,
    "ast": 4.2,
    "index": 257
  },
  "Andre Jackson Jr": {
    "player_id": 1641748,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641748.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 258
  },
  "Jaren Jackson Jr": {
    "player_id": 1628991,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628991.png",
    "position": "F-C",
    "pts": 16.4,
    "reb": 5.5,
    "ast": 1.1,
    "index": 259
  },
  "Trayce Jackson-Davis": {
    "player_id": 1631218,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631218.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 260
  },
  "LeBron James": {
    "player_id": 2544,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    "position": "F",
    "pts": 27.2,
    "reb": 7.5,
    "ast": 7.3,
    "index": 261
  },
  "Jaime Jaquez Jr": {
    "player_id": 1631170,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631170.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 262
  },
  "DaQuan Jeffries": {
    "player_id": 1629610,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629610.png",
    "position": "G-F",
    "pts": 3.8,
    "reb": 1.9,
    "ast": 0.6,
    "index": 263
  },
  "Ty Jerome": {
    "player_id": 1629660,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629660.png",
    "position": "G-F",
    "pts": 7.0,
    "reb": 1.9,
    "ast": 2.6,
    "index": 264
  },
  "Isaiah Joe": {
    "player_id": 1630198,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630198.png",
    "position": "G",
    "pts": 6.2,
    "reb": 1.6,
    "ast": 0.8,
    "index": 265
  },
  "Cameron Johnson": {
    "player_id": 1629661,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629661.png",
    "position": "F",
    "pts": 11.3,
    "reb": 3.8,
    "ast": 1.5,
    "index": 266
  },
  "Jalen Johnson": {
    "player_id": 1630552,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png",
    "position": "F",
    "pts": 4.9,
    "reb": 3.3,
    "ast": 0.9,
    "index": 267
  },
  "Keldon Johnson": {
    "player_id": 1629640,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png",
    "position": "F-G",
    "pts": 16.5,
    "reb": 5.6,
    "ast": 2.1,
    "index": 268
  },
  "Keon Johnson": {
    "player_id": 1630553,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630553.png",
    "position": "G",
    "pts": 5.9,
    "reb": 1.6,
    "ast": 1.8,
    "index": 269
  },
  "Keyontae Johnson": {
    "player_id": 1641749,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641749.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 270
  },
  "Nikola Jokic": {
    "player_id": 203999,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
    "position": "C",
    "pts": 20.2,
    "reb": 10.5,
    "ast": 6.6,
    "index": 271
  },
  "Carlik Jones": {
    "player_id": 1630637,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630637.png",
    "position": "G",
    "pts": 2.0,
    "reb": 0.7,
    "ast": 0.9,
    "index": 272
  },
  "Colby Jones": {
    "player_id": 1641732,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641732.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 273
  },
  "Damian Jones": {
    "player_id": 1627745,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627745.png",
    "position": "C",
    "pts": 5.2,
    "reb": 3.4,
    "ast": 0.7,
    "index": 274
  },
  "Herbert Jones": {
    "player_id": 1630529,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630529.png",
    "position": "F",
    "pts": 9.7,
    "reb": 3.9,
    "ast": 2.3,
    "index": 275
  },
  "Kai Jones": {
    "player_id": 1630539,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630539.png",
    "position": "C-F",
    "pts": 2.7,
    "reb": 2.0,
    "ast": 0.3,
    "index": 276
  },
  "Tre Jones": {
    "player_id": 1630200,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630200.png",
    "position": "G",
    "pts": 7.9,
    "reb": 2.4,
    "ast": 4.1,
    "index": 277
  },
  "Tyus Jones": {
    "player_id": 1626145,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626145.png",
    "position": "G",
    "pts": 6.8,
    "reb": 1.9,
    "ast": 3.9,
    "index": 278
  },
  "Derrick Jones Jr": {
    "player_id": 1627884,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627884.png",
    "position": "F",
    "pts": 6.3,
    "reb": 3.2,
    "ast": 0.7,
    "index": 279
  },
  "DeAndre Jordan": {
    "player_id": 201599,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201599.png",
    "position": "C",
    "pts": 9.0,
    "reb": 10.2,
    "ast": 0.9,
    "index": 280
  },
  "Cory Joseph": {
    "player_id": 202709,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202709.png",
    "position": "G",
    "pts": 7.1,
    "reb": 2.5,
    "ast": 3.0,
    "index": 281
  },
  "Nikola Jovic": {
    "player_id": 1631107,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631107.png",
    "position": "F",
    "pts": 5.5,
    "reb": 2.1,
    "ast": 0.7,
    "index": 282
  },
  "Johnny Juzang": {
    "player_id": 1630548,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630548.png",
    "position": "G",
    "pts": 4.8,
    "reb": 2.2,
    "ast": 0.4,
    "index": 283
  },
  "Trevor Keels": {
    "player_id": 1631211,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631211.png",
    "position": "G",
    "pts": 1.0,
    "reb": 0.7,
    "ast": 0.0,
    "index": 284
  },
  "Luke Kennard": {
    "player_id": 1628379,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628379.png",
    "position": "G",
    "pts": 9.9,
    "reb": 2.8,
    "ast": 1.9,
    "index": 285
  },
  "Walker Kessler": {
    "player_id": 1631117,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631117.png",
    "position": "C",
    "pts": 9.2,
    "reb": 8.4,
    "ast": 0.9,
    "index": 286
  },
  "Braxton Key": {
    "player_id": 1630296,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630296.png",
    "position": "F",
    "pts": 5.9,
    "reb": 3.6,
    "ast": 0.8,
    "index": 287
  },
  "Taevion Kinsey": {
    "player_id": 1641795,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641795.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 288
  },
  "Corey Kispert": {
    "player_id": 1630557,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630557.png",
    "position": "F",
    "pts": 9.6,
    "reb": 2.8,
    "ast": 1.1,
    "index": 289
  },
  "Maxi Kleber": {
    "player_id": 1628467,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628467.png",
    "position": "F",
    "pts": 7.0,
    "reb": 4.7,
    "ast": 1.1,
    "index": 290
  },
  "Nathan Knight": {
    "player_id": 1630233,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630233.png",
    "position": "F-C",
    "pts": 3.7,
    "reb": 2.0,
    "ast": 0.4,
    "index": 291
  },
  "Christian Koloko": {
    "player_id": 1631132,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631132.png",
    "position": "C",
    "pts": 3.1,
    "reb": 2.9,
    "ast": 0.5,
    "index": 292
  },
  "John Konchar": {
    "player_id": 1629723,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629723.png",
    "position": "G",
    "pts": 4.6,
    "reb": 4.0,
    "ast": 1.3,
    "index": 293
  },
  "Furkan Korkmaz": {
    "player_id": 1627788,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627788.png",
    "position": "G-F",
    "pts": 7.4,
    "reb": 2.1,
    "ast": 1.2,
    "index": 294
  },
  "Luke Kornet": {
    "player_id": 1628436,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628436.png",
    "position": "C-F",
    "pts": 4.9,
    "reb": 2.7,
    "ast": 0.9,
    "index": 295
  },
  "Vit Krejci": {
    "player_id": 1630249,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630249.png",
    "position": "G",
    "pts": 3.8,
    "reb": 2.2,
    "ast": 1.3,
    "index": 296
  },
  "Jonathan Kuminga": {
    "player_id": 1630228,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630228.png",
    "position": "F",
    "pts": 9.6,
    "reb": 3.4,
    "ast": 1.4,
    "index": 297
  },
  "Kyle Kuzma": {
    "player_id": 1628398,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628398.png",
    "position": "F",
    "pts": 16.5,
    "reb": 6.4,
    "ast": 2.5,
    "index": 298
  },
  "Jake LaRavia": {
    "player_id": 1631222,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631222.png",
    "position": "F",
    "pts": 3.0,
    "reb": 1.8,
    "ast": 0.6,
    "index": 299
  },
  "Zach LaVine": {
    "player_id": 203897,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203897.png",
    "position": "G",
    "pts": 20.5,
    "reb": 4.0,
    "ast": 3.9,
    "index": 300
  },
  "Jock Landale": {
    "player_id": 1629111,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629111.png",
    "position": "C",
    "pts": 5.9,
    "reb": 3.4,
    "ast": 0.9,
    "index": 301
  },
  "Romeo Langford": {
    "player_id": 1629641,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629641.png",
    "position": "G-F",
    "pts": 4.6,
    "reb": 2.1,
    "ast": 0.7,
    "index": 302
  },
  "AJ Lawson": {
    "player_id": 1630639,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630639.png",
    "position": "G",
    "pts": 3.7,
    "reb": 1.4,
    "ast": 0.1,
    "index": 303
  },
  "Caris LeVert": {
    "player_id": 1627747,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627747.png",
    "position": "G",
    "pts": 14.1,
    "reb": 3.8,
    "ast": 3.9,
    "index": 304
  },
  "Damion Lee": {
    "player_id": 1627814,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627814.png",
    "position": "G-F",
    "pts": 8.2,
    "reb": 3.4,
    "ast": 1.4,
    "index": 305
  },
  "Saben Lee": {
    "player_id": 1630240,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630240.png",
    "position": "G",
    "pts": 5.7,
    "reb": 2.1,
    "ast": 3.2,
    "index": 306
  },
  "Alex Len": {
    "player_id": 203458,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203458.png",
    "position": "C",
    "pts": 7.4,
    "reb": 5.7,
    "ast": 0.8,
    "index": 307
  },
  "Kawhi Leonard": {
    "player_id": 202695,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
    "position": "F",
    "pts": 19.6,
    "reb": 6.4,
    "ast": 3.0,
    "index": 308
  },
  "Justin Lewis": {
    "player_id": 1631171,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631171.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 309
  },
  "Maxwell Lewis": {
    "player_id": 1641721,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641721.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 310
  },
  "Kira Lewis Jr": {
    "player_id": 1630184,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630184.png",
    "position": "G",
    "pts": 5.8,
    "reb": 1.4,
    "ast": 1.9,
    "index": 311
  },
  "EJ Liddell": {
    "player_id": 1630604,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630604.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 312
  },
  "Damian Lillard": {
    "player_id": 203081,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png",
    "position": "G",
    "pts": 25.2,
    "reb": 4.2,
    "ast": 6.7,
    "index": 313
  },
  "Scottie Lindsey": {
    "player_id": 1629204,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629204.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 314
  },
  "Nassir Little": {
    "player_id": 1629642,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629642.png",
    "position": "F-G",
    "pts": 6.0,
    "reb": 3.2,
    "ast": 0.8,
    "index": 315
  },
  "Dereck Lively II": {
    "player_id": 1641726,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641726.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 316
  },
  "Isaiah Livers": {
    "player_id": 1630587,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630587.png",
    "position": "F",
    "pts": 6.6,
    "reb": 2.8,
    "ast": 0.9,
    "index": 317
  },
  "Chris Livingston": {
    "player_id": 1641753,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641753.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 318
  },
  "Kenneth Lofton Jr": {
    "player_id": 1631254,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631254.png",
    "position": "F",
    "pts": 5.0,
    "reb": 2.1,
    "ast": 0.8,
    "index": 319
  },
  "Kevon Looney": {
    "player_id": 1626172,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626172.png",
    "position": "F",
    "pts": 5.1,
    "reb": 5.6,
    "ast": 1.6,
    "index": 320
  },
  "Brook Lopez": {
    "player_id": 201572,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201572.png",
    "position": "C",
    "pts": 16.4,
    "reb": 6.3,
    "ast": 1.4,
    "index": 321
  },
  "Robin Lopez": {
    "player_id": 201577,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201577.png",
    "position": "C",
    "pts": 8.5,
    "reb": 4.8,
    "ast": 0.8,
    "index": 322
  },
  "Kevin Love": {
    "player_id": 201567,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png",
    "position": "F-C",
    "pts": 16.9,
    "reb": 10.4,
    "ast": 2.3,
    "index": 323
  },
  "Kyle Lowry": {
    "player_id": 200768,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png",
    "position": "G",
    "pts": 14.6,
    "reb": 4.4,
    "ast": 6.3,
    "index": 324
  },
  "Seth Lundy": {
    "player_id": 1641754,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641754.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 325
  },
  "Trey Lyles": {
    "player_id": 1626168,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626168.png",
    "position": "F",
    "pts": 7.8,
    "reb": 4.3,
    "ast": 1.0,
    "index": 326
  },
  "Sandro Mamukelashvili": {
    "player_id": 1630572,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630572.png",
    "position": "F-C",
    "pts": 5.0,
    "reb": 3.2,
    "ast": 1.0,
    "index": 327
  },
  "Terance Mann": {
    "player_id": 1629611,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629611.png",
    "position": "G-F",
    "pts": 8.0,
    "reb": 3.7,
    "ast": 2.0,
    "index": 328
  },
  "Tre Mann": {
    "player_id": 1630544,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630544.png",
    "position": "G",
    "pts": 9.0,
    "reb": 2.6,
    "ast": 1.7,
    "index": 329
  },
  "Boban Marjanovic": {
    "player_id": 1626246,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626246.png",
    "position": "C",
    "pts": 5.6,
    "reb": 3.6,
    "ast": 0.5,
    "index": 330
  },
  "Lauri Markkanen": {
    "player_id": 1628374,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png",
    "position": "F-C",
    "pts": 17.3,
    "reb": 7.1,
    "ast": 1.4,
    "index": 331
  },
  "Naji Marshall": {
    "player_id": 1630230,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630230.png",
    "position": "F",
    "pts": 7.7,
    "reb": 3.5,
    "ast": 2.1,
    "index": 332
  },
  "Caleb Martin": {
    "player_id": 1628997,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628997.png",
    "position": "F",
    "pts": 8.0,
    "reb": 3.7,
    "ast": 1.3,
    "index": 333
  },
  "Cody Martin": {
    "player_id": 1628998,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628998.png",
    "position": "F",
    "pts": 5.8,
    "reb": 3.5,
    "ast": 2.1,
    "index": 334
  },
  "Jaylen Martin": {
    "player_id": 1641798,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641798.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 335
  },
  "Tyrese Martin": {
    "player_id": 1631213,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631213.png",
    "position": "G",
    "pts": 1.3,
    "reb": 0.8,
    "ast": 0.1,
    "index": 336
  },
  "Kenyon Martin Jr": {
    "player_id": 1630231,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630231.png",
    "position": "F",
    "pts": 10.5,
    "reb": 4.8,
    "ast": 1.3,
    "index": 337
  },
  "Garrison Mathews": {
    "player_id": 1629726,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629726.png",
    "position": "G",
    "pts": 6.8,
    "reb": 1.9,
    "ast": 0.6,
    "index": 338
  },
  "Bennedict Mathurin": {
    "player_id": 1631097,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631097.png",
    "position": "G-F",
    "pts": 16.7,
    "reb": 4.1,
    "ast": 1.5,
    "index": 339
  },
  "Wesley Matthews": {
    "player_id": 202083,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202083.png",
    "position": "G",
    "pts": 11.7,
    "reb": 2.8,
    "ast": 1.9,
    "index": 340
  },
  "Tyrese Maxey": {
    "player_id": 1630178,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630178.png",
    "position": "G",
    "pts": 15.4,
    "reb": 2.7,
    "ast": 3.3,
    "index": 341
  },
  "Matthew Mayer": {
    "player_id": 1630571,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630571.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 342
  },
  "Miles McBride": {
    "player_id": 1630540,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630540.png",
    "position": "G",
    "pts": 3.0,
    "reb": 0.9,
    "ast": 1.1,
    "index": 343
  },
  "Mac McClung": {
    "player_id": 1630644,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630644.png",
    "position": "G",
    "pts": 8.3,
    "reb": 3.3,
    "ast": 2.5,
    "index": 344
  },
  "CJ McCollum": {
    "player_id": 203468,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203468.png",
    "position": "G",
    "pts": 19.4,
    "reb": 3.6,
    "ast": 3.7,
    "index": 345
  },
  "TJ McConnell": {
    "player_id": 204456,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/204456.png",
    "position": "G",
    "pts": 7.1,
    "reb": 3.0,
    "ast": 5.0,
    "index": 346
  },
  "Jaden McDaniels": {
    "player_id": 1630183,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630183.png",
    "position": "F",
    "pts": 9.6,
    "reb": 3.9,
    "ast": 1.4,
    "index": 347
  },
  "Jalen McDaniels": {
    "player_id": 1629667,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629667.png",
    "position": "F-C",
    "pts": 7.7,
    "reb": 3.8,
    "ast": 1.3,
    "index": 348
  },
  "Doug McDermott": {
    "player_id": 203926,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203926.png",
    "position": "F",
    "pts": 9.3,
    "reb": 2.3,
    "ast": 1.0,
    "index": 349
  },
  "JaVale McGee": {
    "player_id": 201580,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201580.png",
    "position": "C-F",
    "pts": 7.8,
    "reb": 5.2,
    "ast": 0.4,
    "index": 350
  },
  "Bryce McGowens": {
    "player_id": 1631121,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631121.png",
    "position": "G",
    "pts": 5.3,
    "reb": 2.0,
    "ast": 1.2,
    "index": 351
  },
  "Jordan McLaughlin": {
    "player_id": 1629162,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629162.png",
    "position": "G",
    "pts": 4.7,
    "reb": 1.7,
    "ast": 3.5,
    "index": 352
  },
  "De'Anthony Melton": {
    "player_id": 1629001,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629001.png",
    "position": "G",
    "pts": 8.8,
    "reb": 3.7,
    "ast": 2.7,
    "index": 353
  },
  "Nathan Mensah": {
    "player_id": 1641877,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641877.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 354
  },
  "Sam Merrill": {
    "player_id": 1630241,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630241.png",
    "position": "G",
    "pts": 3.4,
    "reb": 1.1,
    "ast": 0.7,
    "index": 355
  },
  "Chimezie Metu": {
    "player_id": 1629002,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629002.png",
    "position": "F-C",
    "pts": 5.7,
    "reb": 3.4,
    "ast": 0.7,
    "index": 356
  },
  "Vasilije Micic": {
    "player_id": 203995,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203995.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 357
  },
  "Khris Middleton": {
    "player_id": 203114,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png",
    "position": "F",
    "pts": 17.0,
    "reb": 4.8,
    "ast": 3.8,
    "index": 358
  },
  "Mike Miles Jr": {
    "player_id": 1641756,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641756.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 359
  },
  "Brandon Miller": {
    "player_id": 1641706,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641706.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 360
  },
  "Jordan Miller": {
    "player_id": 1641757,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641757.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 361
  },
  "Leonard Miller": {
    "player_id": 1631159,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631159.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 362
  },
  "Setric Millner Jr": {
    "player_id": 1641982,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641982.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 363
  },
  "Patty Mills": {
    "player_id": 201988,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png",
    "position": "G",
    "pts": 9.0,
    "reb": 1.7,
    "ast": 2.3,
    "index": 364
  },
  "Shake Milton": {
    "player_id": 1629003,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629003.png",
    "position": "G-F",
    "pts": 9.3,
    "reb": 2.4,
    "ast": 2.7,
    "index": 365
  },
  "Josh Minott": {
    "player_id": 1631169,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631169.png",
    "position": "F",
    "pts": 3.1,
    "reb": 1.7,
    "ast": 0.3,
    "index": 366
  },
  "Davion Mitchell": {
    "player_id": 1630558,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630558.png",
    "position": "G",
    "pts": 8.5,
    "reb": 1.7,
    "ast": 3.2,
    "index": 367
  },
  "Donovan Mitchell": {
    "player_id": 1628378,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png",
    "position": "G",
    "pts": 24.6,
    "reb": 4.2,
    "ast": 4.5,
    "index": 368
  },
  "Evan Mobley": {
    "player_id": 1630596,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630596.png",
    "position": "C",
    "pts": 15.6,
    "reb": 8.7,
    "ast": 2.7,
    "index": 369
  },
  "Isaiah Mobley": {
    "player_id": 1630600,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630600.png",
    "position": "F",
    "pts": 2.6,
    "reb": 1.7,
    "ast": 0.3,
    "index": 370
  },
  "Malik Monk": {
    "player_id": 1628370,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628370.png",
    "position": "G",
    "pts": 10.9,
    "reb": 2.4,
    "ast": 2.4,
    "index": 371
  },
  "Moses Moody": {
    "player_id": 1630541,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630541.png",
    "position": "G",
    "pts": 4.6,
    "reb": 1.6,
    "ast": 0.6,
    "index": 372
  },
  "Xavier Moon": {
    "player_id": 1629875,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629875.png",
    "position": "G",
    "pts": 4.6,
    "reb": 1.2,
    "ast": 2.1,
    "index": 373
  },
  "Omari Moore": {
    "player_id": 1641760,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641760.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 374
  },
  "Wendell Moore Jr": {
    "player_id": 1631111,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631111.png",
    "position": "G",
    "pts": 1.4,
    "reb": 0.6,
    "ast": 0.6,
    "index": 375
  },
  "Ja Morant": {
    "player_id": 1629630,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png",
    "position": "G",
    "pts": 22.4,
    "reb": 4.8,
    "ast": 7.4,
    "index": 376
  },
  "Markieff Morris": {
    "player_id": 202693,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202693.png",
    "position": "F",
    "pts": 10.6,
    "reb": 5.0,
    "ast": 1.6,
    "index": 377
  },
  "Monte Morris": {
    "player_id": 1628420,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628420.png",
    "position": "G",
    "pts": 10.5,
    "reb": 2.5,
    "ast": 4.0,
    "index": 378
  },
  "Marcus Morris Sr.": {
    "player_id": 202694,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202694.png",
    "position": "F",
    "pts": 12.3,
    "reb": 4.5,
    "ast": 1.5,
    "index": 379
  },
  "Trey Murphy III": {
    "player_id": 1630530,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630530.png",
    "position": "F",
    "pts": 10.5,
    "reb": 3.0,
    "ast": 1.1,
    "index": 380
  },
  "Dejounte Murray": {
    "player_id": 1627749,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627749.png",
    "position": "G",
    "pts": 14.0,
    "reb": 5.9,
    "ast": 5.0,
    "index": 381
  },
  "Jamal Murray": {
    "player_id": 1627750,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627750.png",
    "position": "G",
    "pts": 16.9,
    "reb": 3.7,
    "ast": 4.2,
    "index": 382
  },
  "Keegan Murray": {
    "player_id": 1631099,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631099.png",
    "position": "F",
    "pts": 12.2,
    "reb": 4.6,
    "ast": 1.2,
    "index": 383
  },
  "Kris Murray": {
    "player_id": 1631200,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631200.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 384
  },
  "Mike Muscala": {
    "player_id": 203488,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203488.png",
    "position": "F-C",
    "pts": 6.2,
    "reb": 3.2,
    "ast": 0.9,
    "index": 385
  },
  "Svi Mykhailiuk": {
    "player_id": 1629004,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629004.png",
    "position": "G-F",
    "pts": 6.6,
    "reb": 1.8,
    "ast": 1.4,
    "index": 386
  },
  "Pete Nance": {
    "player_id": 1631250,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631250.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 387
  },
  "Larry Nance Jr": {
    "player_id": 1626204,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626204.png",
    "position": "F-C",
    "pts": 7.9,
    "reb": 6.4,
    "ast": 1.9,
    "index": 388
  },
  "Andrew Nembhard": {
    "player_id": 1629614,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629614.png",
    "position": "G-F",
    "pts": 9.5,
    "reb": 2.7,
    "ast": 4.5,
    "index": 389
  },
  "Aaron Nesmith": {
    "player_id": 1630174,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630174.png",
    "position": "G-F",
    "pts": 6.7,
    "reb": 2.9,
    "ast": 0.8,
    "index": 390
  },
  "Georges Niang": {
    "player_id": 1627777,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627777.png",
    "position": "F",
    "pts": 6.5,
    "reb": 2.1,
    "ast": 0.8,
    "index": 391
  },
  "Daishen Nix": {
    "player_id": 1630227,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630227.png",
    "position": "G",
    "pts": 3.7,
    "reb": 1.6,
    "ast": 2.1,
    "index": 392
  },
  "Zeke Nnaji": {
    "player_id": 1630192,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630192.png",
    "position": "F-C",
    "pts": 5.0,
    "reb": 2.6,
    "ast": 0.3,
    "index": 393
  },
  "Miles Norris": {
    "player_id": 1641936,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641936.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 394
  },
  "Markquis Nowell": {
    "player_id": 1641806,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641806.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 395
  },
  "Frank Ntilikina": {
    "player_id": 1628373,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628373.png",
    "position": "G",
    "pts": 4.8,
    "reb": 1.8,
    "ast": 2.2,
    "index": 396
  },
  "Jusuf Nurkic": {
    "player_id": 203994,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png",
    "position": "C",
    "pts": 12.3,
    "reb": 8.6,
    "ast": 2.3,
    "index": 397
  },
  "Jordan Nwora": {
    "player_id": 1629670,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629670.png",
    "position": "F",
    "pts": 7.8,
    "reb": 3.3,
    "ast": 1.0,
    "index": 398
  },
  "Royce O'Neale": {
    "player_id": 1626220,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png",
    "position": "F",
    "pts": 6.6,
    "reb": 4.8,
    "ast": 2.4,
    "index": 399
  },
  "Kevin Obanor": {
    "player_id": 1641893,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641893.png",
    "position": null,
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 400
  },
  "Joshua Obiesie": {
    "player_id": 1629697,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629697.png",
    "position": "G-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 401
  },
  "Chuma Okeke": {
    "player_id": 1629643,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629643.png",
    "position": "F",
    "pts": 7.6,
    "reb": 4.4,
    "ast": 1.8,
    "index": 402
  },
  "Josh Okogie": {
    "player_id": 1629006,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png",
    "position": "G",
    "pts": 6.6,
    "reb": 3.0,
    "ast": 1.2,
    "index": 403
  },
  "Onyeka Okongwu": {
    "player_id": 1630168,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png",
    "position": "F-C",
    "pts": 7.9,
    "reb": 5.7,
    "ast": 0.9,
    "index": 404
  },
  "Isaac Okoro": {
    "player_id": 1630171,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630171.png",
    "position": "F-G",
    "pts": 8.2,
    "reb": 2.8,
    "ast": 1.6,
    "index": 405
  },
  "Victor Oladipo": {
    "player_id": 203506,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203506.png",
    "position": "G",
    "pts": 16.9,
    "reb": 4.5,
    "ast": 3.9,
    "index": 406
  },
  "Kelly Olynyk": {
    "player_id": 203482,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203482.png",
    "position": "F-C",
    "pts": 10.3,
    "reb": 5.2,
    "ast": 2.2,
    "index": 407
  },
  "Eugene Omoruyi": {
    "player_id": 1630647,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630647.png",
    "position": "F",
    "pts": 6.5,
    "reb": 2.7,
    "ast": 0.7,
    "index": 408
  },
  "Nick Ongenda": {
    "player_id": 1641861,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641861.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 409
  },
  "Cedi Osman": {
    "player_id": 1626224,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626224.png",
    "position": "F",
    "pts": 9.7,
    "reb": 3.0,
    "ast": 2.0,
    "index": 410
  },
  "Kelly Oubre Jr": {
    "player_id": 1626162,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png",
    "position": "F-G",
    "pts": 12.8,
    "reb": 4.4,
    "ast": 1.0,
    "index": 411
  },
  "Chris Paul": {
    "player_id": 101108,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png",
    "position": "G",
    "pts": 17.9,
    "reb": 4.5,
    "ast": 9.5,
    "index": 412
  },
  "Gary Payton II": {
    "player_id": 1627780,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627780.png",
    "position": "G",
    "pts": 5.1,
    "reb": 2.8,
    "ast": 1.1,
    "index": 413
  },
  "Drew Peterson": {
    "player_id": 1641809,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641809.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 414
  },
  "Filip Petrusev": {
    "player_id": 1630196,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630196.png",
    "position": "C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 415
  },
  "Julian Phillips": {
    "player_id": 1641763,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641763.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 416
  },
  "Jalen Pickett": {
    "player_id": 1629618,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629618.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 417
  },
  "Scotty Pippen Jr": {
    "player_id": 1630590,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630590.png",
    "position": "G",
    "pts": 2.3,
    "reb": 0.7,
    "ast": 0.3,
    "index": 418
  },
  "Mason Plumlee": {
    "player_id": 203486,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203486.png",
    "position": "F-C",
    "pts": 8.6,
    "reb": 6.9,
    "ast": 2.5,
    "index": 419
  },
  "Brandin Podziemski": {
    "player_id": 1641764,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641764.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 420
  },
  "Jakob Poeltl": {
    "player_id": 1627751,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627751.png",
    "position": "C",
    "pts": 8.1,
    "reb": 6.5,
    "ast": 1.6,
    "index": 421
  },
  "Aleksej Pokusevski": {
    "player_id": 1630197,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630197.png",
    "position": "F",
    "pts": 7.9,
    "reb": 4.9,
    "ast": 2.1,
    "index": 422
  },
  "Jordan Poole": {
    "player_id": 1629673,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png",
    "position": "G",
    "pts": 15.8,
    "reb": 2.6,
    "ast": 3.4,
    "index": 423
  },
  "Craig Porter": {
    "player_id": 1641854,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641854.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 424
  },
  "Jontay Porter": {
    "player_id": 1629007,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629007.png",
    "position": "C-F",
    "pts": 2.0,
    "reb": 1.3,
    "ast": 0.1,
    "index": 425
  },
  "Kevin Porter Jr": {
    "player_id": 1629645,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629645.png",
    "position": "G-F",
    "pts": 15.3,
    "reb": 4.3,
    "ast": 5.0,
    "index": 426
  },
  "Michael Porter Jr": {
    "player_id": 1629008,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629008.png",
    "position": "F",
    "pts": 15.2,
    "reb": 5.9,
    "ast": 1.1,
    "index": 427
  },
  "Otto Porter Jr": {
    "player_id": 203490,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203490.png",
    "position": "F",
    "pts": 10.5,
    "reb": 5.0,
    "ast": 1.5,
    "index": 428
  },
  "Bobby Portis": {
    "player_id": 1626171,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626171.png",
    "position": "F",
    "pts": 11.5,
    "reb": 7.0,
    "ast": 1.2,
    "index": 429
  },
  "Kristaps Porzingis": {
    "player_id": 204001,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/204001.png",
    "position": "F-C",
    "pts": 19.6,
    "reb": 7.9,
    "ast": 1.8,
    "index": 430
  },
  "Micah Potter": {
    "player_id": 1630695,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630695.png",
    "position": "C",
    "pts": 3.6,
    "reb": 2.5,
    "ast": 0.4,
    "index": 431
  },
  "Dwight Powell": {
    "player_id": 203939,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203939.png",
    "position": "F-C",
    "pts": 7.6,
    "reb": 4.5,
    "ast": 1.0,
    "index": 432
  },
  "Justin Powell": {
    "player_id": 1641920,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641920.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 433
  },
  "Norman Powell": {
    "player_id": 1626181,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626181.png",
    "position": "G",
    "pts": 12.0,
    "reb": 2.6,
    "ast": 1.5,
    "index": 434
  },
  "Jason Preston": {
    "player_id": 1630554,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630554.png",
    "position": "G",
    "pts": 2.9,
    "reb": 1.6,
    "ast": 1.9,
    "index": 435
  },
  "Taurean Prince": {
    "player_id": 1627752,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627752.png",
    "position": "F",
    "pts": 10.4,
    "reb": 3.7,
    "ast": 1.7,
    "index": 436
  },
  "Payton Pritchard": {
    "player_id": 1630202,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630202.png",
    "position": "G",
    "pts": 6.6,
    "reb": 2.1,
    "ast": 1.7,
    "index": 437
  },
  "Olivier-Maxence Prosper": {
    "player_id": 1641765,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641765.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 438
  },
  "Trevelin Queen": {
    "player_id": 1630243,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630243.png",
    "position": "G",
    "pts": 3.8,
    "reb": 1.9,
    "ast": 0.6,
    "index": 439
  },
  "Neemias Queta": {
    "player_id": 1629674,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629674.png",
    "position": "C",
    "pts": 2.9,
    "reb": 2.1,
    "ast": 0.4,
    "index": 440
  },
  "Immanuel Quickley": {
    "player_id": 1630193,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630193.png",
    "position": "G",
    "pts": 12.7,
    "reb": 3.2,
    "ast": 3.1,
    "index": 441
  },
  "Lester Quinones": {
    "player_id": 1631311,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631311.png",
    "position": "G",
    "pts": 2.5,
    "reb": 0.8,
    "ast": 0.5,
    "index": 442
  },
  "Julius Randle": {
    "player_id": 203944,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203944.png",
    "position": "F-C",
    "pts": 18.7,
    "reb": 9.4,
    "ast": 3.6,
    "index": 443
  },
  "Austin Reaves": {
    "player_id": 1630559,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630559.png",
    "position": "G",
    "pts": 10.2,
    "reb": 3.1,
    "ast": 2.6,
    "index": 444
  },
  "Cam Reddish": {
    "player_id": 1629629,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629629.png",
    "position": "F-G",
    "pts": 10.3,
    "reb": 3.0,
    "ast": 1.3,
    "index": 445
  },
  "Paul Reed": {
    "player_id": 1630194,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630194.png",
    "position": "F",
    "pts": 3.7,
    "reb": 3.1,
    "ast": 0.4,
    "index": 446
  },
  "Naz Reid": {
    "player_id": 1629675,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629675.png",
    "position": "C-F",
    "pts": 10.1,
    "reb": 4.4,
    "ast": 1.0,
    "index": 447
  },
  "Jared Rhoden": {
    "player_id": 1631197,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631197.png",
    "position": "G",
    "pts": 3.2,
    "reb": 2.6,
    "ast": 0.3,
    "index": 448
  },
  "Sir'Jabari Rice": {
    "player_id": 1641811,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641811.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 449
  },
  "Nick Richards": {
    "player_id": 1630208,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630208.png",
    "position": "C",
    "pts": 5.2,
    "reb": 3.9,
    "ast": 0.4,
    "index": 450
  },
  "Josh Richardson": {
    "player_id": 1626196,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626196.png",
    "position": "G",
    "pts": 11.8,
    "reb": 3.1,
    "ast": 2.7,
    "index": 451
  },
  "Duncan Robinson": {
    "player_id": 1629130,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629130.png",
    "position": "F",
    "pts": 11.1,
    "reb": 2.8,
    "ast": 1.5,
    "index": 452
  },
  "Mitchell Robinson": {
    "player_id": 1629011,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629011.png",
    "position": "C-F",
    "pts": 8.2,
    "reb": 7.9,
    "ast": 0.6,
    "index": 453
  },
  "Orlando Robinson": {
    "player_id": 1631115,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631115.png",
    "position": "C",
    "pts": 3.7,
    "reb": 4.1,
    "ast": 0.8,
    "index": 454
  },
  "Jeremiah Robinson-Earl": {
    "player_id": 1630526,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630526.png",
    "position": "F",
    "pts": 7.2,
    "reb": 4.9,
    "ast": 1.0,
    "index": 455
  },
  "Isaiah Roby": {
    "player_id": 1629676,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629676.png",
    "position": "F",
    "pts": 7.7,
    "reb": 4.4,
    "ast": 1.4,
    "index": 456
  },
  "David Roddy": {
    "player_id": 1631223,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631223.png",
    "position": "F",
    "pts": 6.7,
    "reb": 2.8,
    "ast": 0.8,
    "index": 457
  },
  "Ryan Rollins": {
    "player_id": 1631157,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631157.png",
    "position": "G",
    "pts": 1.9,
    "reb": 1.0,
    "ast": 0.5,
    "index": 458
  },
  "Derrick Rose": {
    "player_id": 201565,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201565.png",
    "position": "G",
    "pts": 17.7,
    "reb": 3.3,
    "ast": 5.3,
    "index": 459
  },
  "Terry Rozier": {
    "player_id": 1626179,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626179.png",
    "position": "G",
    "pts": 13.6,
    "reb": 3.9,
    "ast": 3.4,
    "index": 460
  },
  "Ricky Rubio": {
    "player_id": 201937,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201937.png",
    "position": "G",
    "pts": 10.8,
    "reb": 4.1,
    "ast": 7.4,
    "index": 461
  },
  "Rayan Rupert": {
    "player_id": 1641712,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641712.png",
    "position": "G-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 462
  },
  "D'Angelo Russell": {
    "player_id": 1626156,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626156.png",
    "position": "G",
    "pts": 17.7,
    "reb": 3.5,
    "ast": 5.7,
    "index": 463
  },
  "Matt Ryan": {
    "player_id": 1630346,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630346.png",
    "position": "F",
    "pts": 3.6,
    "reb": 0.7,
    "ast": 0.5,
    "index": 464
  },
  "Domantas Sabonis": {
    "player_id": 1627734,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627734.png",
    "position": "F-C",
    "pts": 15.1,
    "reb": 9.7,
    "ast": 4.2,
    "index": 465
  },
  "Luka Samanic": {
    "player_id": 1629677,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629677.png",
    "position": "F",
    "pts": 4.8,
    "reb": 2.5,
    "ast": 0.8,
    "index": 466
  },
  "Jermaine Samuels Jr": {
    "player_id": 1631257,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631257.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 467
  },
  "Adama Sanogo": {
    "player_id": 1641766,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641766.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 468
  },
  "Dario Saric": {
    "player_id": 203967,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203967.png",
    "position": "F-C",
    "pts": 11.0,
    "reb": 5.6,
    "ast": 1.9,
    "index": 469
  },
  "Olivier Sarr": {
    "player_id": 1630846,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630846.png",
    "position": "C",
    "pts": 6.1,
    "reb": 4.0,
    "ast": 0.7,
    "index": 470
  },
  "Marcus Sasser": {
    "player_id": 1631204,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631204.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 471
  },
  "Jordan Schakel": {
    "player_id": 1630648,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630648.png",
    "position": "G",
    "pts": 1.3,
    "reb": 1.3,
    "ast": 0.2,
    "index": 472
  },
  "Admiral Schofield": {
    "player_id": 1629678,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629678.png",
    "position": "F",
    "pts": 3.7,
    "reb": 1.8,
    "ast": 0.7,
    "index": 473
  },
  "Dennis Schroder": {
    "player_id": 203471,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203471.png",
    "position": "G",
    "pts": 14.0,
    "reb": 2.9,
    "ast": 4.7,
    "index": 474
  },
  "Trevon Scott": {
    "player_id": 1630286,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630286.png",
    "position": "F",
    "pts": 3.0,
    "reb": 1.0,
    "ast": 0.0,
    "index": 475
  },
  "Jay Scrubb": {
    "player_id": 1630206,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630206.png",
    "position": "G",
    "pts": 4.0,
    "reb": 1.5,
    "ast": 0.4,
    "index": 476
  },
  "Dereon Seabron": {
    "player_id": 1631220,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631220.png",
    "position": "G",
    "pts": 0.8,
    "reb": 0.2,
    "ast": 0.0,
    "index": 477
  },
  "Alperen Sengun": {
    "player_id": 1630578,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630578.png",
    "position": "C",
    "pts": 12.3,
    "reb": 7.3,
    "ast": 3.2,
    "index": 478
  },
  "Brice Sensabaugh": {
    "player_id": 1641729,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641729.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 479
  },
  "Collin Sexton": {
    "player_id": 1629012,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629012.png",
    "position": "G",
    "pts": 19.0,
    "reb": 2.9,
    "ast": 3.2,
    "index": 480
  },
  "Landry Shamet": {
    "player_id": 1629013,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629013.png",
    "position": "G",
    "pts": 8.9,
    "reb": 1.8,
    "ast": 1.7,
    "index": 481
  },
  "Day'Ron Sharpe": {
    "player_id": 1630549,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630549.png",
    "position": "C",
    "pts": 5.3,
    "reb": 4.5,
    "ast": 0.7,
    "index": 482
  },
  "Shaedon Sharpe": {
    "player_id": 1631101,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631101.png",
    "position": "G",
    "pts": 9.9,
    "reb": 3.0,
    "ast": 1.2,
    "index": 483
  },
  "Ben Sheppard": {
    "player_id": 1641767,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641767.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 484
  },
  "Pascal Siakam": {
    "player_id": 1627783,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png",
    "position": "F",
    "pts": 17.0,
    "reb": 6.5,
    "ast": 3.5,
    "index": 485
  },
  "Ben Simmons": {
    "player_id": 1627732,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png",
    "position": "G-F",
    "pts": 14.7,
    "reb": 7.8,
    "ast": 7.5,
    "index": 486
  },
  "Anfernee Simons": {
    "player_id": 1629014,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629014.png",
    "position": "G",
    "pts": 12.6,
    "reb": 2.3,
    "ast": 2.5,
    "index": 487
  },
  "Zavier Simpson": {
    "player_id": 1630285,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630285.png",
    "position": "G",
    "pts": 11.0,
    "reb": 5.3,
    "ast": 7.5,
    "index": 488
  },
  "Jaylen Sims": {
    "player_id": 1631301,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631301.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 489
  },
  "Jericho Sims": {
    "player_id": 1630579,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630579.png",
    "position": "C",
    "pts": 2.9,
    "reb": 4.4,
    "ast": 0.5,
    "index": 490
  },
  "Jalen Slawson": {
    "player_id": 1641771,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641771.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 491
  },
  "Javonte Smart": {
    "player_id": 1630606,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630606.png",
    "position": "G",
    "pts": 3.0,
    "reb": 1.4,
    "ast": 0.9,
    "index": 492
  },
  "Marcus Smart": {
    "player_id": 203935,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png",
    "position": "G",
    "pts": 10.6,
    "reb": 3.5,
    "ast": 4.6,
    "index": 493
  },
  "Dru Smith": {
    "player_id": 1630696,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630696.png",
    "position": "G",
    "pts": 2.9,
    "reb": 1.6,
    "ast": 1.5,
    "index": 494
  },
  "Jalen Smith": {
    "player_id": 1630188,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630188.png",
    "position": "F-C",
    "pts": 8.0,
    "reb": 5.1,
    "ast": 0.6,
    "index": 495
  },
  "Terquavion Smith": {
    "player_id": 1631173,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631173.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 496
  },
  "Zhaire Smith": {
    "player_id": 1629015,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629015.png",
    "position": "G",
    "pts": 3.7,
    "reb": 1.2,
    "ast": 0.9,
    "index": 497
  },
  "Dennis Smith Jr": {
    "player_id": 1628372,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628372.png",
    "position": "G",
    "pts": 10.3,
    "reb": 3.0,
    "ast": 4.4,
    "index": 498
  },
  "Jabari Smith Jr": {
    "player_id": 1631095,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631095.png",
    "position": "F",
    "pts": 12.8,
    "reb": 7.2,
    "ast": 1.3,
    "index": 499
  },
  "Nick Smith Jr": {
    "player_id": 1641733,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641733.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 500
  },
  "Jeremy Sochan": {
    "player_id": 1631110,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631110.png",
    "position": "F",
    "pts": 11.0,
    "reb": 5.3,
    "ast": 2.5,
    "index": 501
  },
  "Jaden Springer": {
    "player_id": 1630531,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630531.png",
    "position": "G",
    "pts": 2.4,
    "reb": 0.9,
    "ast": 0.4,
    "index": 502
  },
  "Lamar Stevens": {
    "player_id": 1630205,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630205.png",
    "position": "F",
    "pts": 5.3,
    "reb": 2.8,
    "ast": 0.6,
    "index": 503
  },
  "Isaiah Stewart": {
    "player_id": 1630191,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630191.png",
    "position": "F-C",
    "pts": 9.0,
    "reb": 7.8,
    "ast": 1.1,
    "index": 504
  },
  "Julian Strawther": {
    "player_id": 1631124,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631124.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 505
  },
  "Max Strus": {
    "player_id": 1629622,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629622.png",
    "position": "G-F",
    "pts": 10.0,
    "reb": 2.7,
    "ast": 1.5,
    "index": 506
  },
  "Jalen Suggs": {
    "player_id": 1630591,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630591.png",
    "position": "G",
    "pts": 10.8,
    "reb": 3.3,
    "ast": 3.6,
    "index": 507
  },
  "Cole Swider": {
    "player_id": 1631306,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631306.png",
    "position": "F",
    "pts": 1.3,
    "reb": 1.0,
    "ast": 0.6,
    "index": 508
  },
  "Craig Sword": {
    "player_id": 1628591,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628591.png",
    "position": "G",
    "pts": 2.0,
    "reb": 0.0,
    "ast": 0.3,
    "index": 509
  },
  "Jae'Sean Tate": {
    "player_id": 1630256,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630256.png",
    "position": "F",
    "pts": 11.2,
    "reb": 5.1,
    "ast": 2.7,
    "index": 510
  },
  "Jayson Tatum": {
    "player_id": 1628369,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
    "position": "F-G",
    "pts": 22.5,
    "reb": 7.0,
    "ast": 3.3,
    "index": 511
  },
  "Terry Taylor": {
    "player_id": 1630678,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630678.png",
    "position": "F",
    "pts": 6.4,
    "reb": 3.4,
    "ast": 0.8,
    "index": 512
  },
  "Garrett Temple": {
    "player_id": 202066,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202066.png",
    "position": "G-F",
    "pts": 6.2,
    "reb": 2.3,
    "ast": 1.7,
    "index": 513
  },
  "Dalen Terry": {
    "player_id": 1631207,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631207.png",
    "position": "F",
    "pts": 2.2,
    "reb": 1.0,
    "ast": 0.6,
    "index": 514
  },
  "Daniel Theis": {
    "player_id": 1628464,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628464.png",
    "position": "F-C",
    "pts": 7.6,
    "reb": 4.9,
    "ast": 1.3,
    "index": 515
  },
  "Brodric Thomas": {
    "player_id": 1630271,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630271.png",
    "position": "G",
    "pts": 3.3,
    "reb": 1.4,
    "ast": 0.9,
    "index": 516
  },
  "Cam Thomas": {
    "player_id": 1630560,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png",
    "position": "G",
    "pts": 9.5,
    "reb": 2.1,
    "ast": 1.3,
    "index": 517
  },
  "Amen Thompson": {
    "player_id": 1641708,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641708.png",
    "position": "G-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 518
  },
  "Ausar Thompson": {
    "player_id": 1641709,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641709.png",
    "position": "G-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 519
  },
  "Klay Thompson": {
    "player_id": 202691,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png",
    "position": "G",
    "pts": 19.8,
    "reb": 3.5,
    "ast": 2.3,
    "index": 520
  },
  "Tristan Thompson": {
    "player_id": 202684,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202684.png",
    "position": "C-F",
    "pts": 9.0,
    "reb": 8.4,
    "ast": 1.0,
    "index": 521
  },
  "JT Thor": {
    "player_id": 1630550,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630550.png",
    "position": "F",
    "pts": 3.2,
    "reb": 1.9,
    "ast": 0.5,
    "index": 522
  },
  "Matisse Thybulle": {
    "player_id": 1629680,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629680.png",
    "position": "G-F",
    "pts": 4.6,
    "reb": 2.0,
    "ast": 1.0,
    "index": 523
  },
  "Xavier Tillman": {
    "player_id": 1630214,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630214.png",
    "position": "F",
    "pts": 6.2,
    "reb": 4.2,
    "ast": 1.3,
    "index": 524
  },
  "Drew Timme": {
    "player_id": 1631166,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631166.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 525
  },
  "Isaiah Todd": {
    "player_id": 1630225,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630225.png",
    "position": "F",
    "pts": 1.6,
    "reb": 1.3,
    "ast": 0.4,
    "index": 526
  },
  "Jacob Toppin": {
    "player_id": 1631210,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631210.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 527
  },
  "Obi Toppin": {
    "player_id": 1630167,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630167.png",
    "position": "F",
    "pts": 7.0,
    "reb": 3.0,
    "ast": 0.9,
    "index": 528
  },
  "Karl-Anthony Towns": {
    "player_id": 1626157,
    "team_id": 1610612750,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png",
    "position": "C-F",
    "pts": 23.0,
    "reb": 11.2,
    "ast": 3.2,
    "index": 529
  },
  "Gary Trent Jr": {
    "player_id": 1629018,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629018.png",
    "position": "G-F",
    "pts": 14.4,
    "reb": 2.3,
    "ast": 1.5,
    "index": 530
  },
  "Oscar Tshiebwe": {
    "player_id": 1631131,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631131.png",
    "position": "F-C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 531
  },
  "Azuolas Tubelis": {
    "player_id": 1641773,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641773.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 532
  },
  "PJ Tucker": {
    "player_id": 200782,
    "team_id": 1610612755,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/200782.png",
    "position": "F",
    "pts": 6.8,
    "reb": 5.5,
    "ast": 1.4,
    "index": 533
  },
  "Myles Turner": {
    "player_id": 1626167,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626167.png",
    "position": "C-F",
    "pts": 13.4,
    "reb": 6.8,
    "ast": 1.2,
    "index": 534
  },
  "Hunter Tyson": {
    "player_id": 1641816,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641816.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 535
  },
  "Stanley Umude": {
    "player_id": 1630649,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630649.png",
    "position": "G",
    "pts": 2.0,
    "reb": 0.0,
    "ast": 0.0,
    "index": 536
  },
  "Jonas Valanciunas": {
    "player_id": 202685,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202685.png",
    "position": "C",
    "pts": 13.5,
    "reb": 9.5,
    "ast": 1.2,
    "index": 537
  },
  "Vincent Valerio-Bodon": {
    "player_id": 1641941,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641941.png",
    "position": "G-F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 538
  },
  "Fred VanVleet": {
    "player_id": 1627832,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627832.png",
    "position": "G",
    "pts": 14.6,
    "reb": 3.3,
    "ast": 5.3,
    "index": 539
  },
  "Jarred Vanderbilt": {
    "player_id": 1629020,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629020.png",
    "position": "F",
    "pts": 6.2,
    "reb": 6.6,
    "ast": 1.5,
    "index": 540
  },
  "Dejan Vasiljevic": {
    "player_id": 1641961,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641961.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 541
  },
  "Devin Vassell": {
    "player_id": 1630170,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630170.png",
    "position": "G-F",
    "pts": 11.2,
    "reb": 3.7,
    "ast": 1.9,
    "index": 542
  },
  "Sasha Vezenkov": {
    "player_id": 1628426,
    "team_id": 1610612758,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628426.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 543
  },
  "Gabe Vincent": {
    "player_id": 1629216,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629216.png",
    "position": "G",
    "pts": 7.7,
    "reb": 1.7,
    "ast": 2.3,
    "index": 544
  },
  "Nikola Vucevic": {
    "player_id": 202696,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202696.png",
    "position": "C",
    "pts": 17.0,
    "reb": 10.5,
    "ast": 2.8,
    "index": 545
  },
  "Dean Wade": {
    "player_id": 1629731,
    "team_id": 1610612739,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629731.png",
    "position": "F-C",
    "pts": 5.1,
    "reb": 3.1,
    "ast": 1.0,
    "index": 546
  },
  "Franz Wagner": {
    "player_id": 1630532,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630532.png",
    "position": "F",
    "pts": 16.9,
    "reb": 4.3,
    "ast": 3.2,
    "index": 547
  },
  "Moritz Wagner": {
    "player_id": 1629021,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629021.png",
    "position": "F-C",
    "pts": 8.2,
    "reb": 3.7,
    "ast": 1.2,
    "index": 548
  },
  "Ish Wainright": {
    "player_id": 1630688,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630688.png",
    "position": "F",
    "pts": 3.4,
    "reb": 1.8,
    "ast": 0.6,
    "index": 549
  },
  "Jabari Walker": {
    "player_id": 1631133,
    "team_id": 1610612757,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631133.png",
    "position": "F",
    "pts": 3.9,
    "reb": 2.3,
    "ast": 0.6,
    "index": 550
  },
  "Jarace Walker": {
    "player_id": 1641716,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641716.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 551
  },
  "Jordan Walker": {
    "player_id": 1641948,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641948.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 552
  },
  "Lonnie Walker IV": {
    "player_id": 1629022,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629022.png",
    "position": "G-F",
    "pts": 9.9,
    "reb": 2.3,
    "ast": 1.5,
    "index": 553
  },
  "Cason Wallace": {
    "player_id": 1641717,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641717.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 554
  },
  "Jordan Walsh": {
    "player_id": 1641775,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641775.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 555
  },
  "PJ Washington": {
    "player_id": 1629023,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629023.png",
    "position": "F",
    "pts": 12.9,
    "reb": 5.5,
    "ast": 2.3,
    "index": 556
  },
  "Duane Washington Jr": {
    "player_id": 1630613,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630613.png",
    "position": "G",
    "pts": 9.1,
    "reb": 1.5,
    "ast": 1.9,
    "index": 557
  },
  "TyTy Washington Jr": {
    "player_id": 1631102,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631102.png",
    "position": "G",
    "pts": 4.7,
    "reb": 1.5,
    "ast": 1.5,
    "index": 558
  },
  "Yuta Watanabe": {
    "player_id": 1629139,
    "team_id": 1610612756,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png",
    "position": "G-F",
    "pts": 4.3,
    "reb": 2.5,
    "ast": 0.7,
    "index": 559
  },
  "Lindy Waters III": {
    "player_id": 1630322,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630322.png",
    "position": "F",
    "pts": 6.3,
    "reb": 2.2,
    "ast": 0.8,
    "index": 560
  },
  "Trendon Watford": {
    "player_id": 1630570,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630570.png",
    "position": "F",
    "pts": 7.5,
    "reb": 4.0,
    "ast": 1.9,
    "index": 561
  },
  "Peyton Watson": {
    "player_id": 1631212,
    "team_id": 1610612743,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631212.png",
    "position": "G",
    "pts": 3.3,
    "reb": 1.6,
    "ast": 0.5,
    "index": 562
  },
  "Victor Wembanyama": {
    "player_id": 1641705,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641705.png",
    "position": "F-C",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 563
  },
  "Blake Wesley": {
    "player_id": 1631104,
    "team_id": 1610612759,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631104.png",
    "position": "G",
    "pts": 5.0,
    "reb": 2.2,
    "ast": 2.6,
    "index": 564
  },
  "Russell Westbrook": {
    "player_id": 201566,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png",
    "position": "G",
    "pts": 22.4,
    "reb": 7.3,
    "ast": 8.4,
    "index": 565
  },
  "Coby White": {
    "player_id": 1629632,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629632.png",
    "position": "G",
    "pts": 12.6,
    "reb": 3.4,
    "ast": 3.3,
    "index": 566
  },
  "Derrick White": {
    "player_id": 1628401,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628401.png",
    "position": "G",
    "pts": 11.7,
    "reb": 3.4,
    "ast": 3.8,
    "index": 567
  },
  "Jack White": {
    "player_id": 1631298,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631298.png",
    "position": "F",
    "pts": 1.2,
    "reb": 1.0,
    "ast": 0.2,
    "index": 568
  },
  "Dariq Whitehead": {
    "player_id": 1641727,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641727.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 569
  },
  "Cam Whitmore": {
    "player_id": 1641715,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1641715.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 570
  },
  "Joe Wieskamp": {
    "player_id": 1630580,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630580.png",
    "position": "G-F",
    "pts": 1.8,
    "reb": 0.5,
    "ast": 0.3,
    "index": 571
  },
  "Aaron Wiggins": {
    "player_id": 1630598,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630598.png",
    "position": "G",
    "pts": 7.5,
    "reb": 3.2,
    "ast": 1.2,
    "index": 572
  },
  "Andrew Wiggins": {
    "player_id": 203952,
    "team_id": 1610612744,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png",
    "position": "F",
    "pts": 19.1,
    "reb": 4.5,
    "ast": 2.3,
    "index": 573
  },
  "Lindell Wigginton": {
    "player_id": 1629623,
    "team_id": 1610612749,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629623.png",
    "position": "G",
    "pts": 5.0,
    "reb": 1.2,
    "ast": 1.4,
    "index": 574
  },
  "Alondes Williams": {
    "player_id": 1631214,
    "team_id": 1610612748,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631214.png",
    "position": "G",
    "pts": 0.0,
    "reb": 1.0,
    "ast": 0.0,
    "index": 575
  },
  "Brandon Williams": {
    "player_id": 1630314,
    "team_id": 1610612753,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630314.png",
    "position": "G",
    "pts": 12.9,
    "reb": 3.1,
    "ast": 3.9,
    "index": 576
  },
  "Grant Williams": {
    "player_id": 1629684,
    "team_id": 1610612742,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629684.png",
    "position": "F",
    "pts": 6.2,
    "reb": 3.4,
    "ast": 1.2,
    "index": 577
  },
  "Jalen Williams": {
    "player_id": 1631114,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png",
    "position": "G-F",
    "pts": 14.1,
    "reb": 4.5,
    "ast": 3.3,
    "index": 578
  },
  "Jaylin Williams": {
    "player_id": 1631119,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631119.png",
    "position": "F",
    "pts": 5.9,
    "reb": 4.9,
    "ast": 1.6,
    "index": 579
  },
  "Jeenathan Williams": {
    "player_id": 1631466,
    "team_id": 1610612745,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631466.png",
    "position": "G",
    "pts": 10.6,
    "reb": 3.0,
    "ast": 2.0,
    "index": 580
  },
  "Kenrich Williams": {
    "player_id": 1629026,
    "team_id": 1610612760,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629026.png",
    "position": "G-F",
    "pts": 6.8,
    "reb": 4.6,
    "ast": 2.0,
    "index": 581
  },
  "Mark Williams": {
    "player_id": 1631109,
    "team_id": 1610612766,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631109.png",
    "position": "C",
    "pts": 9.0,
    "reb": 7.1,
    "ast": 0.4,
    "index": 582
  },
  "Patrick Williams": {
    "player_id": 1630172,
    "team_id": 1610612741,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630172.png",
    "position": "F",
    "pts": 9.7,
    "reb": 4.3,
    "ast": 1.3,
    "index": 583
  },
  "Ziaire Williams": {
    "player_id": 1630533,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630533.png",
    "position": "F",
    "pts": 7.2,
    "reb": 2.1,
    "ast": 1.0,
    "index": 584
  },
  "Robert Williams III": {
    "player_id": 1629057,
    "team_id": 1610612738,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629057.png",
    "position": "C-F",
    "pts": 7.3,
    "reb": 6.9,
    "ast": 1.4,
    "index": 585
  },
  "Vince Williams Jr": {
    "player_id": 1631246,
    "team_id": 1610612763,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631246.png",
    "position": "G",
    "pts": 2.0,
    "reb": 1.0,
    "ast": 0.3,
    "index": 586
  },
  "Zion Williamson": {
    "player_id": 1629627,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png",
    "position": "F",
    "pts": 25.8,
    "reb": 7.0,
    "ast": 3.6,
    "index": 587
  },
  "Jalen Wilson": {
    "player_id": 1630592,
    "team_id": 1610612751,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630592.png",
    "position": "F",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 588
  },
  "Dylan Windler": {
    "player_id": 1629685,
    "team_id": 1610612752,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629685.png",
    "position": "G-F",
    "pts": 3.3,
    "reb": 2.3,
    "ast": 0.8,
    "index": 589
  },
  "James Wiseman": {
    "player_id": 1630164,
    "team_id": 1610612765,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630164.png",
    "position": "C",
    "pts": 10.7,
    "reb": 5.9,
    "ast": 0.7,
    "index": 590
  },
  "Isaiah Wong": {
    "player_id": 1631209,
    "team_id": 1610612754,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631209.png",
    "position": "G",
    "pts": null,
    "reb": null,
    "ast": null,
    "index": 591
  },
  "Christian Wood": {
    "player_id": 1626174,
    "team_id": 1610612747,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626174.png",
    "position": "F",
    "pts": 14.8,
    "reb": 7.3,
    "ast": 1.5,
    "index": 592
  },
  "Delon Wright": {
    "player_id": 1626153,
    "team_id": 1610612764,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1626153.png",
    "position": "G",
    "pts": 7.2,
    "reb": 3.2,
    "ast": 3.1,
    "index": 593
  },
  "Thaddeus Young": {
    "player_id": 201152,
    "team_id": 1610612761,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201152.png",
    "position": "F",
    "pts": 12.4,
    "reb": 5.7,
    "ast": 1.8,
    "index": 594
  },
  "Trae Young": {
    "player_id": 1629027,
    "team_id": 1610612737,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
    "position": "G",
    "pts": 25.5,
    "reb": 3.7,
    "ast": 9.3,
    "index": 595
  },
  "Omer Yurtseven": {
    "player_id": 1630209,
    "team_id": 1610612762,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630209.png",
    "position": "C",
    "pts": 5.2,
    "reb": 4.9,
    "ast": 0.8,
    "index": 596
  },
  "Cody Zeller": {
    "player_id": 203469,
    "team_id": 1610612740,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203469.png",
    "position": "F-C",
    "pts": 8.4,
    "reb": 5.9,
    "ast": 1.4,
    "index": 597
  },
  "Ivica Zubac": {
    "player_id": 1627826,
    "team_id": 1610612746,
    "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627826.png",
    "position": "C",
    "pts": 8.8,
    "reb": 7.1,
    "ast": 1.1,
    "index": 598
  }
};
