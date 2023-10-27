import { GLOBAL_TEAMS } from '$lib/server/nba_data/models.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { teams: GLOBAL_TEAMS };
}
