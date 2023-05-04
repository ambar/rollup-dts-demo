const dts = require('rollup-plugin-dts').default
const path = require('path')

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: ['src/foo.ts', 'src/bar.ts'],
  output: {
    format: 'esm',
    dir: 'types',
  },
  plugins: [dts()],
}
