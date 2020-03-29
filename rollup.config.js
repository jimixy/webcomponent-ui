import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'SvelteDialog' }
  ],
  plugins: [
    svelte({
      customElement: true
    }),
    resolve()
  ]
};
