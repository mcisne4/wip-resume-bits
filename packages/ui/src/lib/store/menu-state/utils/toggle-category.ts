import { type MenuState } from './types';
import { defaultMenuState } from './default-menu';

type Category = Exclude<MenuState['category'], null>;

export function toggleCategoryMenu(
	currentState: MenuState,
	category: Category,
): MenuState {
	const menu: MenuState = defaultMenuState();

	switch (category) {
		case 'data':
			if (currentState.category !== category) {
				menu.category = category;
				menu.page = 'Select_Data';
			}
			break;

		case 'compose':
			if (currentState.category !== category) {
				menu.category = category;
				menu.page = 'Select_Compose';
			}
			break;

		case 'preview':
			if (currentState.category !== category) {
				menu.category = category;
				menu.page = 'Select_Preview';
			}
			break;

		default:
			break;
	}

	return menu;
}
