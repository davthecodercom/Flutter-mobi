import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'flutter.mobi',
			social: {
				github: 'https://github.com/davthecodercom/Flutter-mobi',
			},
			sidebar: [
				{
					label: 'Widgets',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Scaffold', link: '/guides/scaffold/' },
					],
				},
				{
					label: 'Animations',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
