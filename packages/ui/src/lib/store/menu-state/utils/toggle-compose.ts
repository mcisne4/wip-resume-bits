import { type MenuState } from './types';
import { defaultMenuState } from './default-menu';

type ComposeSelection = Exclude<MenuState['composeMenu'], null>;

export function toggleComposeMenu(
	currentState: MenuState,
	compose: ComposeSelection,
	id?: string,
): MenuState {
	const menu: MenuState = {
		...defaultMenuState(),
		category: 'compose',
		page: 'Select_Compose',
	};

	switch (compose) {
		case 'item':
			if (currentState.composeMenu !== compose) {
				menu.composeMenu = compose;
				menu.page = 'Compose_Item';
				menu.composeId = id || null;
			} else if (currentState.composeId !== id) {
				menu.composeMenu = compose;
				menu.page = 'Compose_Item';
				menu.composeId = id || null;
			}
			break;

		case 'add':
			if (currentState.composeMenu !== compose) {
				menu.composeMenu = compose;
				menu.page = 'Compose_Add';
			}
			break;

		default:
			break;
	}

	return menu;
}
