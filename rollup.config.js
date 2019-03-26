import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { main, module, dependencies, peerDependencies } from './package.json';

const ENV = process.env.NODE_ENV;
const ES = ENV === 'es';
const CJS = ENV === 'cjs';

const plugins = [babel(), resolve()];
const isCoreModules = [ES, CJS].some(Boolean);
const indexOutput = isCoreModules && CJS ? main : module;

export default [
  {
    input: './src/index.js',
    output: {
      file: indexOutput,
      format: ENV,
      indent: false,
      sourcemap: false,
    },
    external: [
      ...Object.keys(dependencies || {}),
      ...Object.keys(peerDependencies || {}),
    ],
    plugins: CJS ? [...plugins, uglify()] : [...plugins, terser()],
  },
];
