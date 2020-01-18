import colors from 'vuetify/es5/util/colors';

import "@mdi/font/css/materialdesignicons.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

const theme = {
	dark: false,
	themes: {
		light: {
			primary: colors.deepPurple.accent3,
			secondary: colors.indigo.base,
			tertiary: colors.blueGrey.darken3,
			accent: colors.pink.accent3,
			error: colors.deepOrange.darken1,
			warning: colors.lime.base,
			info: colors.lightBlue.darken1,
			success: colors.green.darken1
		},
		dark: {
			// TODO: create dark theme
		}
	}
}

export default {
	// breakpoint: {},
	icons: { iconfont: 'mdi' },
	theme
}