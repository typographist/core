import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { main, module, dependencies, peerDependencies } from './package.json';

export default [
  // CommonJS
  {
    input: './src/index.js',
    output: {
      file: main,
      format: 'cjs',
      indent: false,
    },
    external: [
      ...Object.keys(dependencies || {}),
      ...Object.keys(peerDependencies || {}),
    ],
    plugins: [babel(), resolve(), uglify()],
  },

  // ES
  {
    input: './src/index.js',
    output: {
      file: module,
      format: 'es',
      indent: false,
    },
    external: [
      ...Object.keys(dependencies || {}),
      ...Object.keys(peerDependencies || {}),
    ],
    plugins: [babel(), resolve(), terser()],
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es/index.mjs',
      format: 'es',
      indent: false,
    },
    plugins: [
      babel(),
      resolve({
        jsnext: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  },
];
