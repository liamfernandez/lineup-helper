import { writable, type Writable } from 'svelte/store';

export async function hashStringUsingSHA256(data: string) {
	const encoder = new TextEncoder();
	const encodedData = encoder.encode(data);
	const hashBuffer = await crypto.subtle.digest('SHA-256', encodedData);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
	return hashHex;
}

export type Lineup = {
	players: string[];
	map: Map<string, NBA_Player>;
	name: string;
};

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

// COPIED FROM FRACTILS - LOCALSTORAGESTORE
// https://github.com/babichjacob/svelte-localstorage

/**
 * A Svelte store that uses localStorage to store data asyncronously.
 * @param key - The key to store the data under.
 * @param initial - The initial value of the store.
 * @example
 * const store = localStorageStore('foo', 'bar')
 */
export const localStorageStore = <T>(key: string, initial: T): Writable<T> => {
	const browser = typeof globalThis.window !== 'undefined';
	let currentValue = initial;

	const { set: setStore, ...readableStore } = writable<T>(initial, () => {
		if (browser) {
			getAndSetFromLocalStorage();

			const updateFromStorageEvents = (event: StorageEvent) => {
				if (event.key === key) getAndSetFromLocalStorage();
			};

			window.addEventListener('storage', updateFromStorageEvents);

			return () => window.removeEventListener('storage', updateFromStorageEvents);
		} else return () => {};
	});

	// Set both localStorage and this Svelte store
	const set = (value: T) => {
		currentValue = value;
		setStore(value);

		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(
				`the \`${key}\` store's new value \`${value}\` could not be persisted to localStorage because of ${error}`
			);
		}
	};

	// Synchronize the Svelte store with localStorage
	const getAndSetFromLocalStorage = () => {
		let localValue: string | null = null;
		try {
			localValue = localStorage.getItem(key);
		} catch (error) {
			console.error(
				`the \`${key}\` store's value could not be restored from localStorage because of ${error}`
			);
		}

		if (localValue === null) set(initial);
		else {
			try {
				const parsed = JSON.parse(localValue);
				setStore(parsed);
				currentValue = parsed;
			} catch (error) {
				console.error(
					`localStorage's value for \`${key}\` (\`${localValue}\`) could not be parsed as JSON because of ${error}`
				);
			}
		}
	};

	const update = (fn: (T: T) => T) => {
		set(fn(currentValue));
	};

	return { ...readableStore, set, update };
};
