/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'purple': "#A037EE",
			'white': '#FFFFFF',
			'black': '#000000',
		},
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
