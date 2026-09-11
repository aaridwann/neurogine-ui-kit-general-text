import { defineConfig } from 'vitest/config';
import reactNative from 'vitest-react-native';

export default defineConfig({
  plugins: [
    reactNative(),
  ],
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
    // 💡 TAMBAHKAN INI: Paksa Vitest me-transpile seluruh file ts/tsx
    server: {
      deps: {
        inline: [/@react-native/, /react-native/],
      },
    },
  },
});