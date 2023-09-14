// hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = { name: 'Bob the Cat' };

	return await resolve(event);
};
