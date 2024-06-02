export type MenuState = {
	category: 'data' | 'compose' | 'preview' | null;

	dataMenu:
		| 'person'
		| 'job-title'
		| 'address'
		| 'contact'
		| 'statement'
		| 'work-experience'
		| 'education'
		| 'skill'
		| 'language'
		| null;
	composeMenu: 'item' | 'add' | null;
	composeId: string | null;

	previewMenu: 'item' | null;
	previewId: string | null;

	page:
		| 'Select_Category'
		| 'Select_Data'
		| 'Select_Compose'
		| 'Select_Preview'
		| 'Data_Person'
		| 'Data_JobTitle'
		| 'Data_Address'
		| 'Data_Contact'
		| 'Data_Statement'
		| 'Data_WorkExperience'
		| 'Data_Education'
		| 'Data_Skill'
		| 'Data_Language'
		| 'Compose_Item'
		| 'Compose_Add'
		| 'Preview_Item'
		| null;
};
