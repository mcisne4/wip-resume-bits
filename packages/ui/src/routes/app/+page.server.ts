import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	add_name: async ({ request }) => {
		const data = await request.formData();
		const fname = data.get('fname');
		const mname = data.get('mname');
		const lname = data.get('lname');
		const suffix = data.get('suffix');

		console.log({ fname, mname, lname, suffix });

		return {
			success: true,
		};
	},
};
