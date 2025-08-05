import { pluginReact } from '@rsbuild/plugin-react'
import { defineConfig } from '@rslib/core'

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
    tsconfigPath: './tsconfig.build.json',
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
      syntax: 'es2015',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
})
