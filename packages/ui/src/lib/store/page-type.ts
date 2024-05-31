import { writable } from 'svelte/store';

export enum ScreenType {
	Print,
	Screen
}

export const pageType = writable(ScreenType.Print);
