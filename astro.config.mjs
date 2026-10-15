// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://daneyand.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
