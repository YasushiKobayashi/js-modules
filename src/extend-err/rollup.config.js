import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babili from 'rollup-plugin-babili'
import analyze from 'rollup-plugin-analyzer'

import fs from 'fs'

const pkg = require('./package.json')

const plugins = [
  nodeResolve({
    include: 'node_modules/**',
  }),
  commonjs({ jsnext: false }),
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
    input: './src/extend-err.ts',
    output: [
      {
        format: 'cjs',
        sourcemap: true,
        name: pkg.name,
        file: pkg.main,
      },
      {
        sourcemap: true,
        name: pkg.name,
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins,
  },
]
