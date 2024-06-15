import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import starlight from "@astrojs/starlight";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [astroExpressiveCode(), mdx(), sitemap(), starlight({
    title: 'My delightful docs site',
  })]
});