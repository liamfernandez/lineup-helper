import { json } from '@sveltejs/kit';
import { GLOBAL_PLAYERS } from '$lib/server/nba_data/models.js';

export async function GET({ url }) {
	const player_name = url.searchParams.get('player_name');
	if (!player_name) {
		console.log('Missing player_name param');
		return new Response('Missing player_name param', { status: 400 });
	}

	if (!GLOBAL_PLAYERS[player_name]) {
		console.log('Player not found');
		return new Response('Player not found', { status: 404 });
	}

	const nba_player_data = GLOBAL_PLAYERS[player_name];
	return json(nba_player_data, { status: 200, statusText: 'OK' });
}
