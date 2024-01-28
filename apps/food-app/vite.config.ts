/// <reference types='vitest' />
import { defineConfig, loadEnv, ProxyOptions } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import process from 'process';
import { ENV_MODE_CONST } from './src/app/constants/constants';
import { DEV_ENV_SCHEMA } from './src/app/models/EnvModel';

export default defineConfig(({mode}) => {
  let proxy: Record<string, string | ProxyOptions> | undefined;

  if (mode === ENV_MODE_CONST.development) {
    const env = DEV_ENV_SCHEMA.safeParse(loadEnv(mode, process.cwd()));

    if (!env.success) {
      throw Error(
        '\n' + env.error.errors.map((error) => error.message).join('\n')
      );
    }

    proxy = {
      '/api': {
        target: `${env.data.VITE_DEV_SERVER_PROTOCOL}://${env.data.VITE_DEV_SERVER_DOMAIN}`,
        changeOrigin: true,
        secure: false,
      },
    };
  }

  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/apps/food-app',

    server: {
      port: 4200,
      host: '0.0.0.0',
      proxy,
    },

    preview: {
      port: 4300,
      host: 'localhost',
    },

    plugins: [react(), nxViteTsPaths()],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    build: {
      outDir: '../../dist/apps/food-app',
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },

    test: {
      globals: true,
      cache: {
        dir: '../../node_modules/.vitest',
      },
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/food-app',
        provider: 'v8',
      },
    },
  }
});
