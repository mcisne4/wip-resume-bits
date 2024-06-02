import { type MenuState } from './types';
import { defaultMenuState } from './default-menu';

type DataSelection = Exclude<MenuState['dataMenu'], null>;

export function toggleDataMenu(
	currentState: MenuState,
	data: DataSelection,
): MenuState {
	const menu: MenuState = {
		...defaultMenuState(),
		category: 'data',
		page: 'Select_Data',
	};

	switch (data) {
		case 'person':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Person';
			}
			break;

		case 'job-title':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_JobTitle';
			}
			break;

		case 'address':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Address';
			}
			break;

		case 'contact':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Contact';
			}
			break;

		case 'statement':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Statement';
			}
			break;

		case 'work-experience':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_WorkExperience';
			}
			break;

		case 'education':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Education';
			}
			break;

		case 'skill':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Skill';
			}
			break;

		case 'language':
			if (currentState.dataMenu !== data) {
				menu.dataMenu = data;
				menu.page = 'Data_Language';
			}
			break;

		default:
			break;
	}

	return menu;
}
