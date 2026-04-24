import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import i18nHtmlPlugin from './vite-plugin-i18n-html.js';

export default defineConfig({
  plugins: [
    react(),
    // Self-signed HTTPS on dev. Required by mobile browsers for DeviceMotion
    // (shake-to-throw) and other secure-context APIs when testing from a LAN IP.
    basicSsl(),
    i18nHtmlPlugin({
      siteUrl: 'https://virtualsexdice.com',
      localesDir: 'src/locales',
      defaultLocale: 'en',
    }),
  ],
  server: { port: 8000 },
});
