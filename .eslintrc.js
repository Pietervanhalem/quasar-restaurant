module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:vue/vue3-essential', 
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings'

  ],

  plugins: [
    'vue',
    'import'
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-var':  'error',
    "no-param-reassign": [2, {"props": true}],

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // turn off max-len, because other eslint rules 
    // sometimes change multiline expressions to a single line
    // conflicting with this rule
    'max-len': 0, 
    
    // define import order
    'import/order': [
      "error", { 
        "groups": ["builtin", "external", "parent", "sibling", "index"]
      }
     ],

    // enforce new line after imports
    'import/newline-after-import': ["error", { "count": 1 }],    

    // do not allow unused vars to remain in code
    'no-unused-vars': 2,   

    // do not allow console.logs in code
    'no-console': 'off',

    // allow ++
    'no-plusplus': 0,

    // disable semicolon
    'semi': 0
  }
}
