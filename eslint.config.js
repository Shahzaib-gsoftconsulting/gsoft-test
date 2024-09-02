import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

// ***** NOTE: Please don't change order of eslint file *****

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      // NOTE: Please do not change order
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      "unicorn": eslintPluginUnicorn
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Disable all other unicorn rules
      ...Object.fromEntries(
        Object.keys(eslintPluginUnicorn.configs.recommended.rules).map(rule => [
          rule,
          'off',
        ])
      ),
      "unicorn/filename-case": [
            "error",
            {
                cases: {
                    pascalCase: true,
                    camelCase: true,
                    kebabCase: true,
                },
            },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
)
