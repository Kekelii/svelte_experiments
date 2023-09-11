import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	for (const [key, value] of url.searchParams.entries()) {
		console.log(`${key}: ${value}`);
	}
	return json(true);
};
