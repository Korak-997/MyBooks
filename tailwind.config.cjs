module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/components/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#92c2d5',

					secondary: '#22708f',

					accent: '#3ab6e8',

					neutral: '#e4e8e9',

					'base-100': '#090e10',

					info: '#6091e2',

					success: '#24b790',

					warning: '#e89e26',

					error: '#e87d88'
				}
			}
		]
	}
};
