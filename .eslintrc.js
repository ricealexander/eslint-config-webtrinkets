module.exports = {
  parserOptions: {
    sourceType: 'module', // enable import/export
    ecmaVersion: 8,       // required for features such as 'async'
  },

  env: {
    browser: true,        // access to window and document variables
    es6: true,
    jasmine: true,        // jasmine testing framework
    node: true,
  },

  plugins: [
    'import',
    'unicorn',
  ],

  // 'eslint:recommended' is a great set of defaults. Other favorites include:
  // 'standard' - eslint-config-standard
  // 'airbnb' - eslint-config-airbnb
  extends: ['eslint:recommended'],

  rules: {
    'arrow-parens': ['error', 'as-needed'],        // prefer arg => value over (arg) => value
    'brace-style': ['error', 'stroustrup'],        // ⭐️ no 'cuddled' else statement
    'comma-dangle': ['error', 'always-multiline'], // require trailing comma when keys/values are multi-line
    'indent': ['error', 2, {                       // 2 space indentation
      // do not attempt to indent expressions within Template Literals
      'ignoredNodes': ['TemplateLiteral > *'],
    }],
    'key-spacing': ['error', {                     // handles spacing around Object keys
      'beforeColon': false,                        // no space between propertyName and colon
      'afterColon': true,                          // mandatory space after colon
      'mode': 'minimum',                           // allow aligning property values after colon
    }],
    'max-len': ['error', {
      'code': 80,
      'comments': 80,
      'tabWidth': 2,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
    }],
    'no-multi-spaces': ['error', {                 // ⭐️ Very loose rules for aligning code
      'exceptions': {
        'ImportDeclaration': true,                 // allow aligning 'from' in import declaration
        'Property': true,                          // allow aligning values of key-value pairs
        'VariableDeclarator': true,                // allow aligning equals-signs in variable declaration
      },
      'ignoreEOLComments': true ,                  // allow aligning comments
    }],
    'no-multi-str': 'off',                         // 🔥 provided alternative is worse. Template literals are only clean solution
    'no-param-reassign': ['error', {               // cannot reassign parameters
      'props': true,
      // Exception of variable names used by reduce functions. A valid use-case:
      // (result, category) => { result[category] += 1; return result })
      'ignorePropertyModificationsFor': ['accumulator', 'object', 'result'],
    }],
    'no-plusplus': 'error',                        // prefer += over ++
    'no-return-await': 'off',                      // 🔥 returning await in some cases is a best practice
    'no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',                   // preceed unused function arguments with '_'
      'varsIgnorePattern': '^_',                   // preceed unused variables with '_'
    }],
    'no-useless-concat': 'error',                  // 'a' + 'b' should be written as 'ab' instead
    // when wrapping a line separated by operators across multiple lines,
    'operator-linebreak': ['error', 'after', {     // && and || should come at the end of lines
      'overrides': {                               // other operators should come at the start of the line
        '?': 'before',
        ':': 'before',
        '+=': 'before',
      },
    }],
    'prefer-template': 'off',                      // 💔 see below for desired behavior
    'semi': ['error', 'never'],                    // ⭐️ disable semicolons
    'space-before-function-paren': ['error', 'always'], // prefer doThings (args) over doThings(args)
    'quote-props': ['error', 'as-needed', {        // disallow quotes around object properties unless strictly required
      'keywords': true,
      'numbers': true,
    }],
    'quotes': ['error', 'single', {                // strictly use single quotes
      // the following options do not need to be included
      // they explicitly document that they should not be set to true
      'avoidEscape': false,                        // using double quotes because a string contains a ' is not allowed
      'allowTemplateLiterals': false,              // template literals must be used with variables
    }],



    // Import [https://github.com/benmosher/eslint-plugin-import]
    // when in doubt, I pulled decisions from airbnb config
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
    'import/export': 'error',                      // prevent invalid exports
    'import/exports-last': 'error',                // put all exports at the bottom
    'import/first': 'error',                       // put all imports at the top
    'import/max-dependencies': ['error', {         // ⚗ Too many dependencies may be a code smell
      'max': 10,
    }],
    'import/named': 'error',                       // ensure named import matches named export
    'import/newline-after-import': 'error',        // separate imports from code following them
    'import/no-amd': 'error',                      // none of my code uses the AMD module system
    // disallow exporting empty content
    'import/no-anonymous-default-export': ['error', {
      // explicitly document to be as restrictive as possible
      'allowArray': false,
      'allowArrowFunction': false,
      'allowAnonymousClass': false,
      'allowAnonymousFunction': false,
      'allowCallExpression': true,
      'allowLiteral': false,
      'allowObject': false,
    }],
    // 😰 cyclic dependencies are sadly easy to make. For example:
    // import { helperInTheSameDirectory } from './' 💥💥💥
    'import/no-cycle': 'error',                    // 🔄 Help identify cyclic dependencies
    'import/no-duplicates': 'error',               // disallow duplicate module names
    'import/no-dynamic-require': 'error',          // it is very rare that dynamic-require is necessary
    'import/no-extraneous-dependencies': 'error',  // ⚗ All dependencies must exist in package.json
    'import/no-mutable-exports': 'error',          // forbid exporting variables initialized with let and var
    'import/no-named-as-default': 'error',         // not entirely sure what this does
    'import/no-named-as-default-member': 'error',  // utilize export syntax a little better
    'import/no-self-import': 'error',              // 🔄 Importing self creates cyclic dependencies
    'import/no-unassigned-import': 'error',        // must name required files
    'import/no-unresolved': ['error', {            // ensure imports can be resolved
      'caseSensitive': true,
      'commonjs': true,
    }],
    'import/no-useless-path-segments': ['error', { // ensure paths are as short as possible
      'noUselessIndex': true,
    }],
    'import/no-webpack-loader-syntax': 'error',    // forbid webpack's alternative import syntax
    'import/order': ['error', {                    // enforce order for imports
      'groups': [['builtin', 'external', 'internal']],
    }],
    'import/prefer-default-export': 'error',       // ⭐️ prefer export default over named exports

    // Import rules not to enable
    'import/default': 'off',                       // 🔥 documentation describes false-positives for my use case
    'import/dynamic-import-chunkname': 'off',      // 🔥 rule is coupled with webpack
    'import/extensions': 'off',                    // 🔥 I do not enable imports for non-js files
    'import/group-exports': 'off',                 // 🐝 does not allow multiple export from, nor do docs provide alternative
    'import/namespace': 'off',
    'import/no-absolute-path': 'off',              // 🤔 would use, but documentation is lacking
    'import/no-commonjs': 'off',                   // 🔥 allow both import/export and require/module.exports
    'import/no-default-export': 'off',             // 🔥 prefer default exports
    'import/no-deprecated': 'off',                 // 🔥 I do not use the JSDoc syntax
    'import/no-internal-modules': 'off',           // 🤔 not sure what this is doing
    'import/no-named-default': 'off',              // 🔥 naming defaults is the preferred pattern for my code
    'import/no-named-export': 'off',               // 🤔 unsure of the benefits of this
    'import/no-namespace': 'off',                  // 🔥 allow wildcard imports
    'import/no-nodejs-modules': 'off',             // 🔥 projects may use Node. Prefer env to control Node features
    'import/no-relative-parent-imports': 'off',    // 🤔 still learning best way to structure imports
    'import/no-restricted-paths': 'off',           // 🔥 my codebases haven't needed to blacklist directories
    'import/no-unused-modules': 'off',             // for my use-cases, eslint/no-unused-vars takes care of this
    'import/unambiguous': 'off',                   // 🤔 unsure what this does



    // Unicorn Rules
    // eslint-plugin-unicorn [https://github.com/sindresorhus/eslint-plugin-unicorn]
    'unicorn/error-message': 'error',              // require thrown errors to have a message
    'unicorn/escape-case': 'error',                // ⚗ I don't know best practices around these. Deferring to Unicorn's judgement
    'unicorn/explicit-length-check': ['error', {
      // prefer array.length > 0 over array.length in conditionals
      'non-zero': 'greater-than',
    }],
    'unicorn/import-index': 'error',               // ⭐️ Set import paths to shortest path
    'unicorn/new-for-builtins': 'error',           // require new when accessing compex data-type constructors
    'unicorn/no-abusive-eslint-disable': 'error',  // must specify which eslint rules in eslint-disable
    'unicorn/no-array-instanceof': 'error',        // prefer Array.isArray() over instanceof Array
    'unicorn/no-fn-reference-in-iterator': 'error',// testing this out. rule may be too restrictive
    'unicorn/no-for-loop': 'error',                // prefer for of when using iterables
    'no-nested-ternary': 'off',
    'unicorn/no-hex-escape': 'error',              // ⚗ Prefer unicode escapes over hex escapes
    'unicorn/no-nested-ternary': 'error',          // prefer unicorn's no-nested-ternary
    'unicorn/no-unreadable-array-destructuring': 'error', // ⭐️ Avoid multiple empty values in array destructure
    'unicorn/no-zero-fractions': 'error',          // disallow trailing 0 for numbers
    'unicorn/number-literal-case': 'error',        // ⚗ I don't know best practices around these. Deferring to Unicorn's judgement
    'unicorn/prefer-add-event-listener': 'error',  // disallow 'on' events
    'unicorn/prefer-dataset': 'error',             // use dataset to work with data- attributes
    'unicorn/prefer-event-key': 'error',           // ⭐️ Prefer event.key over event.keyCode
    'unicorn/prefer-exponentiation-operator': 'error', // prefer ** over Math.pow()
    'unicorn/prefer-flat-map': 'error',            // prefer .flatMap() over .map().flat()
    'unicorn/prefer-includes': 'error',            // prefer .includes() over .indexOf() in conditionals
    'unicorn/prefer-negative-index': 'error',      // disallow redundant array.length in .slice() and .splice()
    'unicorn/prefer-node-append': 'error',         // prefer .append() over .appendChild()
    'unicorn/prefer-node-remove': 'error',         // prefer .remove() over .removeChild()
    'unicorn/prefer-query-selector': 'error',      // ⭐️ Enforce querySelector/querySelectorAll as the true selector method(s)
    'unicorn/prefer-spread': 'error',              // prefer [...iterable] over Array.from(iterable)
    'unicorn/prefer-starts-ends-with': 'error',    // use startsWith/endsWith over their respective RegExps
    'unicorn/prefer-string-slice': 'error',        // prefer .slice() over .substr() or .substring()
    'unicorn/prefer-text-content': 'error',        // prefer .textContent over .innerText
    'unicorn/prefer-trim-start-end': 'error',      // prefer .trimStart()/.trimEnd() over .trimLeft()/.trimRight()
    'unicorn/prefer-type-error': 'error',          // ⭐️ Test TypeError for type checks
    'unicorn/prevent-abbreviations': ['error', {   // ⭐️ Prevent abbreviations. prefer `event` over `e`
      'replacements': {
        // arguments is a keyword, so args will suffice
        // 🤔 consider correcting to `rest`
        'args': false,
      },
    }],

    'unicorn/regex-shorthand': 'error',            // ⭐️ Enforce RegEx shortcuts where appropriate
    'unicorn/throw-new-error': 'error',            // require 'new' keyword before errors

    // Unicorn rules not to enable
    'unicorn/catch-error-name': 'off',             // unicorn/prevent-abbreviations should already handle this
    'unicorn/consistent-function-scoping': 'off',  // 🤔 some projects may benefit from this, consider adding later
    'unicorn/custom-error-definition': 'off',      // 🤔 my projects do not currently use Custom Errors
    'unicorn/expiring-todo-comments': 'off',       // 🤔 perhaps include this for future projects with deadlines
    'unicorn/filename-case': 'off',                // 🔥 ESLint in general should not proof filenames
    'unicorn/no-console-spaces': 'off',            // 🔥 if I put spaces in console statements, they're there for a reason
    'unicorn/no-keyword-prefix': 'off',            // 🔥 'new' in varName is likely a bad pattern, but I disagree it's confusing
    'unicorn/no-new-buffer': 'off',                // 🤔 Buffer() is for Node.js. Reconsider once I've used more Node
    'unicorn/no-process-exit': 'off',              // 🤔 process.exit() is for Node.js. Reconsider once I've used more Node
    'unicorn/no-unsafe-regex': 'off',              // 🤔 I don't understand this
    'unicorn/no-unused-properties': 'off',         // 🤔 I like this proposal, but I need to understand the implications
  },
}

/* desired 'curly' behavior: 😧

Allow:

if (foo) {
  foo++
}

if (foo) foo++

Disallow:

if (foo)
  foo++

if (foo) { foo++ }

*/


/* desired 'prefer-template' behavior: 😧
   prefer `` when concatenating variables,
   EXCEPT when used in a reduce statement

```
list.reduce((HTML, item) => (
  HTML + `<li class='list-item'>${item}</li>`
), '')
```

   I feel that in the context of a reduce function, separating the accumulator
   reads much more clearly than:

```
list.reduce((HTML, item) => (
  `${HTML}<li class='list-item'>${item}</li>`
), '')
```
*/
