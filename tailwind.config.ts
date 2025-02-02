import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				nunito: "Nunito",
			},
			colors: {
				primary: "#FF9A00",
				secondary: "#DDDDDD",
				background_light: "#F5F5F5",

				primary_hover: "#FFAD33",
				secondary_hover: "#C4C4C4",

				text_black: "#292324",
				text_gray: "#666666",
			},
		},
	},

	plugins: []
} satisfies Config;
