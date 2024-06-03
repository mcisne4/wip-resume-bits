import { writable } from 'svelte/store';
import { type MenuState } from './utils/types';
import { defaultMenuState } from './utils/default-menu';
import { toggleCategoryMenu } from './utils/toggle-category';
import { toggleDataMenu } from './utils/toggle-data';
import { toggleComposeMenu } from './utils/toggle-compose';
import { togglePreviewMenu } from './utils/toggle-preview';

function createMenuState() {
	const { subscribe, set, update } = writable<MenuState>(defaultMenuState());

	return {
		subscribe,

		reset: () => set(defaultMenuState()),

		toggle: {
			categoryMenu: {
				btnData: () =>
					update((currentState) => toggleCategoryMenu(currentState, 'data')),
				btnCompose: () =>
					update((currentState) => toggleCategoryMenu(currentState, 'compose')),
				btnPreview: () =>
					update((currentState) => toggleCategoryMenu(currentState, 'preview')),
			},

			dataMenu: {
				btnPerson: () =>
					update((currentState) => toggleDataMenu(currentState, 'person')),
				btnJobTitle: () =>
					update((currentState) => toggleDataMenu(currentState, 'job-title')),
				btnAddress: () =>
					update((currentState) => toggleDataMenu(currentState, 'address')),
				btnContact: () =>
					update((currentState) => toggleDataMenu(currentState, 'contact')),
				btnStatement: () =>
					update((currentState) => toggleDataMenu(currentState, 'statement')),
				btnWorkExperience: () =>
					update((currentState) =>
						toggleDataMenu(currentState, 'work-experience'),
					),
				btnEducation: () =>
					update((currentState) => toggleDataMenu(currentState, 'education')),
				btnSkill: () =>
					update((currentState) => toggleDataMenu(currentState, 'skill')),
				btnLanguage: () =>
					update((currentState) => toggleDataMenu(currentState, 'language')),
			},

			composeMenu: {
				btnItem: (id: string) =>
					update((currentState) => toggleComposeMenu(currentState, 'item', id)),
				btnAdd: () =>
					update((currentState) => toggleComposeMenu(currentState, 'add')),
			},

			previewMenu: {
				btnItem: (id: string) =>
					update((currentState) => togglePreviewMenu(currentState, 'item', id)),
			},
		},
	};
}

export const menuState = createMenuState();
