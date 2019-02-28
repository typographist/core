import * as R from 'ramda';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import flowEntry from 'rollup-plugin-flow-entry';
import { main, module, dependencies, peerDependencies } from './package.json';

const ENV = process.env.NODE_ENV;
const ES = ENV === 'es';
const CJS = ENV === 'cjs';
const isCoreModules = [ES, CJS].some(Boolean);

const outputFile = isCoreModules && CJS ? main : module;
const plugins = [babel(), resolve(), flowEntry()];

export default [
  {
    input: './src/index.js',
    output: {
      file: outputFile,
      format: ENV,
      indent: false,
      sourcemap: true,
    },
    external: [
      ...Object.keys(dependencies || {}),
      ...Object.keys(peerDependencies || {}),
    ],
    plugins: CJS ? [...plugins, uglify()] : [...plugins, terser()],
  },
];
