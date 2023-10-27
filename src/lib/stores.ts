import type { Lineup, NBA_Player } from '$lib';
import { writable } from 'svelte/store';
import { localStorageStore } from '$lib';

export const GLOBAL_LINEUPS = localStorageStore<{ [key: string]: Lineup }>('lineups', {});
export const selectedWeek = localStorageStore<number>('selected-week', 1);

function LineupContainer() {
	const { subscribe, set, update } = writable<Lineup>({
		name: '',
		players: [],
		map: {}
	});

	return {
		subscribe,
		updateName: (name: string) => update((lineup) => ({ ...lineup, name })),
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
		reset: () => set({ players: [], map: {}, name: '' }),
		setLineup: (lineup: Lineup) => set(lineup)
	};
}

export const in_progress_lineup = LineupContainer();
