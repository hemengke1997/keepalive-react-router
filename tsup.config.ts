import { defineConfig, type Options } from 'tsup'
import { bundleless } from 'tsup-plugin-bundleless'

const commonConfig = (_option: Options): Options => {
  return {
    clean: false,
    sourcemap: false,
    dts: true,
    minify: false,
    external: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    shims: true,
    treeshake: true,
    splitting: true,
    outDir: 'dist',
  }
}

export const tsup = defineConfig((option) => {
  return [
    {
      ...commonConfig(option),
      entry: ['./src/**/*.{ts,tsx}'],
      format: ['esm'],
      platform: 'neutral',
      ...bundleless(),
    },
    {
      ...commonConfig(option),
      entry: ['./src/index.ts'],
      format: ['cjs'],
      platform: 'neutral',
    },
  ]
})
