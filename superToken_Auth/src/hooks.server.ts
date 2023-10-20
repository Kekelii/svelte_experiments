import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api/auth')) {
		console.log(event.url);
		//data returned from request
		// const requestBody = await event.request.json();

		// console.log(requestBody);
	}

	const response = await resolve(event);
	return response;
};
