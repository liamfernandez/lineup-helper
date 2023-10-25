import type { Lineup, NBA_Player } from '$lib';
import { writable } from 'svelte/store';
import { localStorageStore } from '$lib';

export const GLOBAL_LINEUPS = localStorageStore<Lineup[]>('lineups', []);

function LineupContainer() {
	const { subscribe, set, update } = writable<Lineup>({
		name: '',
		players: [],
		map: new Map<string, NBA_Player>()
	});

	return {
		subscribe,
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
		reset: () => set({ players: [], map: new Map<string, NBA_Player>(), name: '' })
	};
}

export const in_progress_lineup = LineupContainer();
