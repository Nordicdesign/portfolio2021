module.exports = {
  'env': {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module',
  },

  'rules': {
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Use the one true brace style
    'brace-style': ['error', '1tbs'],

    // Enforce using camelCase
    'camelcase': ['error', { 'properties': 'always' }],

    // Shouldn't use console.* -- use a proper logger instead, e.g.
    // https://www.npmjs.com/package/winston
    'no-console': ['warn'],
    'no-debugger': ['warn'],

    // Indent at 4 spaces
    'indent': ['error', 2],

    // No trailing spaces in code
    'no-trailing-spaces': ['error'],

    // Don't use semicolons at the end of your statements
    'semi': ['error', 'never'],
  },
}
