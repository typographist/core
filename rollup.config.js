import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import flowEntry from 'rollup-plugin-flow-entry';
import json from 'rollup-plugin-json';
import pkg from './package.json';

export default [
  // CommonJS
  {
    input: './src/index.js',
    output: {
      file: 'lib/typographist-core.cjs.js',
      format: 'cjs',
      indent: false,
      sourcemap: false,
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [babel(), uglify(), resolve(), commonjs(), json(), flowEntry()],
  },

  // ES
  {
    input: './src/index.js',
    output: {
      file: 'es/typographist-core.es.js',
      format: 'es',
      indent: false,
      sourcemap: false,
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [resolve(), babel(), terser(), json(), commonjs(), flowEntry()],
  },
];
