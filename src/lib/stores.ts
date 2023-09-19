import { writable, derived } from "svelte/store";

export const lineups = writable([]);

// export const numberOfLineups = derived(lineups, ($lineups) => $lineups.length);

