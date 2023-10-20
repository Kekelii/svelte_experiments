import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import { json, type RequestHandler } from '@sveltejs/kit';

supertokens.init({
	framework: 'express',
	supertokens: {
		// https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
		connectionURI:
			'https://39fd1141584811ee9d3d89d855dbc88f-ap-southeast-1.aws.supertokens.io:3567',
		apiKey: '=PX5Sn3koWFbC=08QiMely9-Bad=wB'
	},
	appInfo: {
		// learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
		appName: 'sveltekit_supertoken',
		apiDomain: 'http://localhost:5174/api',
		websiteDomain: 'http://localhost:5174',
		apiBasePath: '/api',
		websiteBasePath: '/'
	},
	recipeList: [
		ThirdPartyEmailPassword.init({
			// 	/*TODO: See next step*/
		}),
		Session.init() // initializes session features
	]
});

export const POST: RequestHandler = async ({ request }) => {
	return json(true);
};
