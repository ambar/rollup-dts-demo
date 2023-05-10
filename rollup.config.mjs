import path from 'path'
import dts from 'rollup-plugin-dts'

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: ['src/client.ts', 'src/server.ts'],
  // workaround:
  // input: {foo: 'src/client.ts', bar: 'src/server.ts'},
  output: {
    format: 'esm',
    dir: 'types',
  },
  plugins: [dts()],
}
