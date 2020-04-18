import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import analyze from 'rollup-plugin-analyzer'
import babili from 'rollup-plugin-babili'

import fs from 'fs'
import process from 'process'

const pkg = require('./package.json')

const extensions = ['.js', '.jsx', '.mjs', '.json', '.ts', '.tsx']

const plugins = [
  nodeResolve({
    extensions,
    include: 'node_modules/**',
  }),
  commonjs(),
  typescript({
    tsconfig: 'tsconfig.json',
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(babili({ comments: false }))
} else {
  plugins.push(
    analyze({ showExports: true, writeTo: analysis => fs.writeFileSync('analyze.txt', analysis) }),
  )
}

export default [
  {
    input: './src/DataTablesReact.tsx',
    output: [
      {
        format: 'cjs',
        sourcemap: true,
        name: pkg.name,
        file: pkg.main,
        global: {
          react: 'React',
        },
      },
      {
        format: 'es',
        sourcemap: true,
        name: pkg.name,
        file: pkg.module,
        global: {
          react: 'React',
        },
      },
    ],
    external: ['prop-types', 'react', 'react-dom', 'styled-components'],
    plugins,
  },
]
