module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/components/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#9ba5d6',

					secondary: '#2574FD',

					accent: '#662f73',

					neutral: '#eaedf6',

					'base-100': '#070811',

					info: '#6091e2',

					success: '#24b790',

					warning: '#e89e26',

					error: '#e87d88'
				}
			}
		]
	}
};
