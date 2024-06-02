import { type MenuState } from './types';

export function defaultMenuState(): MenuState {
	return {
		category: null,
		dataMenu: null,
		composeMenu: null,
		composeId: null,
		previewMenu: null,
		previewId: null,
		page: 'Select_Category',
	};
}
