import type { Lineup } from '$lib';

export function load({ params }) {
	const lineups_store = localStorage.getItem('lineups');
	if (lineups_store === null) {
		return null;
	}

	const lineups = JSON.parse(lineups_store) as { [key: string]: Lineup };
	const providedHash = params.hash;

	if (!Object.keys(lineups).includes(providedHash)) {
		return null;
	} else {
		return lineups[providedHash];
	}
}
