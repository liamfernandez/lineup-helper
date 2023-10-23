import { writable, derived } from 'svelte/store';

function LineupContainer() {
	const { subscribe, set, update } = writable<string[]>([]);

	return {
		subscribe,
		addPlayer: (player: string) =>
			update((players) => {
				if (players.includes(player)) return players;
				return [...players, player];
			}),
		removePlayer: (player: string) => update((players) => players.filter((p) => p !== player)),
		reset: () => set([])
	};
}

export const in_progress_lineup = LineupContainer();

export type NBA_Player = {
	player_id: number;
	team_id: number;
	team_name: string;
	position: string;
	// pts: number | null;
	// reb: number | null;
	// ast: number | null;
	index: number;
};

export type NBA_Team = {
	abbreviation: string;
	full_name: string;
	conference: 'East' | 'West';
	division: 'Southeast' | 'Atlantic' | 'Central' | 'Southwest' | 'Northwest' | 'Pacific';
};
