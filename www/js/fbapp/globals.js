Fbapp.Globals={
	FB_APP_ID				: '419893894744095', //Your facebook application ID
	BASE_URL				: '', //The url for your application on your server
	USER_DATA				: {}, //this will be filled with facebook information
	DEBUG					: true, // it re-writes the console.log();
	PERMISSIONS_REQUIRED	: true, // if false, it wont require the user to allow facebook permissions, but it also wont store any user data
	EXTRA_PERMISSIONS		: 'email', // extra data you might want from your users
	
	ROUTES					:{
		home			:'#/',
		no_permissions  :'#/No_permissions'
	},
	
	MESSAGES				:{
		authentication:{
			prompt	:'This application requires some facebook permissions',
			success	:'Thank You',
			error	:'You bastard'
		}
	}
};