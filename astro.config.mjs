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
					autogenerate: { directory: 'widgets' },
				},
				{
					label: 'Animations',
					autogenerate: { directory: 'animations' },
				},
			],
		}),
	],
});
