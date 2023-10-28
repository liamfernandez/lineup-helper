import type { Lineup, Season_Averages } from '$lib';

export default async function getPlayerSeasonAverages(
	player: string,
	lineup: Lineup
): Promise<Season_Averages> {
	console.log('[getFantasyPtsAverage]: player: ' + player, ' | lineup.map: ', lineup.map);
	const player_info = lineup.map[player];

	const response = await fetch(
		`https://www.balldontlie.io/api/v1/season_averages?season=2023&player_ids[]=${player_info.ball_dont_lie_id}`
	);

	const data = await response.json();
	const data_json = data['data'][0];

	const season_averages: Season_Averages = {
		pts: data_json['pts'],
		ast: data_json['ast'],
		reb: data_json['reb'],
		stl: data_json['stl'],
		blk: data_json['blk'],
		turnover: data_json['turnover']
	};

	return season_averages;
}
