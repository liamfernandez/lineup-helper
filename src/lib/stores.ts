import type { Lineup, Season_Averages } from '$lib';
import { writable } from 'svelte/store';
import { localStorageStore } from '$lib';

const liams_team = [
	'Jalen Duren',
	'Tyrese Haliburton',
	'Nicolas Claxton',
	'Max Strus',
	'Jonathan Kuminga',
	'Franz Wagner',
	'Shaedon Sharpe',
	'Jalen Johnson',
	'Jalen Brunson',
	'Austin Reaves',
	'Immanuel Quickley',
	'Domantas Sabonis'
];

export const GLOBAL_LINEUPS = localStorageStore<{ [key: string]: Lineup }>('lineups', {});
export const selectedWeek = localStorageStore<number>('selected-week', 1);

function LineupContainer() {
	const { subscribe, set, update } = writable<Lineup>({
		name: '',
		players: [],
		map: {},
		averages: {},
		ball_dont_lie_refreshed_at: undefined
	});

	return {
		subscribe,
		updateName: (name: string) => update((lineup) => ({ ...lineup, name })),
		updateLastRefreshedAt: (date: Date) =>
			update((lineup) => ({ ...lineup, ball_dont_lie_refreshed_at: date })),
		addPlayer: (player: string) =>
			update((lineup) => {
				if (lineup.players.includes(player)) return lineup;
				lineup.players = [...lineup.players, player];
				return lineup;
			}),
		removePlayer: (player: string) =>
			update((lineup) => {
				lineup.players = lineup.players.filter((p) => p !== player);
				return lineup;
			}),
		reset: () =>
			set({
				players: [],
				map: {},
				name: '',
				averages: {},
				ball_dont_lie_refreshed_at: undefined
			}),
		setLineup: (lineup: Lineup) => set(lineup),
		setAverages: (averages: { [key: string]: Season_Averages }) =>
			update((lineup) => ({ ...lineup, averages }))
	};
}

export const in_progress_lineup = LineupContainer();
export const viewing_lineup = LineupContainer();
