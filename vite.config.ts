import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'PxReForm - Converting PX and Rem.',
  version: '1.0.0',
  permissions: [],
  action: {
    default_popup: 'index.html',
  },
  icons: {
    '16': 'icon/icon16.png',
    '48': 'icon/icon48.png',
    '128': 'icon/icon128.png',
  },
  commands: {
    _execute_action: {
      suggested_key: {
        default: 'Ctrl+Shift+Y',
      },
    },
  },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
