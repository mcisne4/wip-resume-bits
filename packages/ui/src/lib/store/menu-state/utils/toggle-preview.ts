import { type MenuState } from './types';
import { defaultMenuState } from './default-menu';

type PreviewSelection = Exclude<MenuState['previewMenu'], null>;

export function togglePreviewMenu(
	currentState: MenuState,
	preview: PreviewSelection,
	id: string,
): MenuState {
	const menu: MenuState = {
		...defaultMenuState(),
		category: 'preview',
		page: 'Select_Preview',
	};

	switch (preview) {
		case 'item':
			if (currentState.previewMenu !== preview) {
				menu.previewMenu = preview;
				menu.page = 'Preview_Item';
				menu.previewId = id;
			} else if (currentState.previewId !== id) {
				menu.previewMenu = preview;
				menu.page = 'Preview_Item';
				menu.previewId = id;
			}
			break;

		default:
			break;
	}

	return menu;
}
