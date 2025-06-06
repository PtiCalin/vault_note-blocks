import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  },
  external: ['obsidian'],
  plugins: [
    css({ output: 'styles.css' }),
    nodeResolve({ browser: true }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
};
