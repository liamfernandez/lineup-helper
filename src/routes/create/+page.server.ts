import { ALL_PLAYER_NAMES } from '$lib/server/nba_data/models.js'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return { player_names: ALL_PLAYER_NAMES };
}
