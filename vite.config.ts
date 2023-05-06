import react from '@vitejs/plugin-react';
import path from 'node:path';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    analyze({ summaryOnly: true }),
  ],
  build: {
    lib: {
      // path to the main library file
      entry: path.resolve(__dirname, './src/lib/index.ts'),
      // library name
      name: 'ui-library',
      // generated file formats
      formats: ['es', 'umd'],
      // names of generated files
      fileName: (format) => {
        return `ui-library.${format}.js`;
      },
    },
    rollupOptions: {
      external: [
        'antd',
        '@ant-design/icons',
        'classnames',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        format: 'es',
        globals: {
          antd: 'antd',
          '@ant-design/icons': '@ant-design/icons',
          classnames: 'classnames',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
