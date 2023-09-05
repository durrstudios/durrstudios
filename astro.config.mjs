import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({


	output:"server",
	server: {
		headers: {
			"Bypass-Tunnel-Reminder" : "*"
		},


	},
	
});
