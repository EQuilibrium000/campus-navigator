export default {
	mode: 'spa',
	/*
	** Headers of the page
	*/
	head: {
		titleTemplate: '%s - FUTA Campus Navigator',
		title: 'Welcome',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'A mobile map navigator to help you find your way around the Federal University of Technology, Akure' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#6200ea' },
	css: [
	],
	plugins: [
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
	],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
	},
	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: ['~/assets/style/variables.scss'],
		defaultAssets: false,
		optionsPath: '~/plugins/vuetify.options.js'
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
