import withNuxt from './.nuxt/eslint.config.mjs'
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended'

export default withNuxt(prettierRecommendedConfig, {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
