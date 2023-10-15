/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				main: '#0099ff',
				main_2: '#3087bf',
				main_3: '#0065a6',
				main_4: '#40b4ff',
				main_5: '#73c8ff',
				sup: '#ff8e00',
				sup_2: '#bf8030',
				sup_3: '#a65c00',
				sup_4: '#ffaa40',
				sup_5: '#ffc173',
			},
			aspectRatio: {
				'logo': '37.8/1'
			}
		},
	},
	plugins: [],
}

