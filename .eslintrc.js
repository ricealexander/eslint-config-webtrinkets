/* eslint quote-props: ["error", "consistent"] */
/* eslint-disable unicorn/string-content */

module.exports = {
  'parserOptions': {
    sourceType: 'module', // enable import/export
    ecmaVersion: 8,       // required for features such as 'async'
  },

  'env': {
    browser: true,        // access to window and document variables
    es6: true,
    jasmine: true,        // jasmine testing framework
    node: true,
  },

  'plugins': [
    'import',
    'sonarjs',
    'unicorn',
  ],

  // 'eslint:recommended' is a great set of defaults. Other favorites include:
  // 'standard' - eslint-config-standard
  // 'airbnb' - eslint-config-airbnb
  'extends': ['eslint:recommended'],

  'rules': {
    // ESLint [https://github.com/eslint/eslint]
    'arrow-parens': ['error', 'as-needed'],        // prefer `arg => value` over `(arg) => value`
    'brace-style': ['error', 'stroustrup'],        // ⭐️ no 'cuddled' else statement
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never',
    }],
    'curly': ['error', 'multi-line', 'consistent'],// 😧 allow some flexibility for bracket style
    'default-case-last': 'error',                  // ensure `default:` clause comes at the end of switch statements
    'default-param-last': 'error',                 // ensure optional parameters come at the end of the function declaration
    'grouped-accessor-pairs': ['error', 'getBeforeSet'], // consistently order `set`s and `get`s
    'indent': ['error', 2, {                       // 2 space indentation
      // do not attempt to indent expressions within Template Literals
      'ignoredNodes': ['TemplateLiteral > *'],
      'flatTernaryExpressions': true,              // ⭐️ Do not indent nested ternaries
      'ignoreComments': false,
      'outerIIFEBody': 1,                          // indent IIFE contents
      'ArrayExpression': 1,                        // indent arrays
      'CallExpression': {'arguments': 1},          // indent call expressions
      'FunctionDeclaration': {'body': 1, 'parameters': 1 }, // 🤔 I'm not happy with this implementation, but I'm unsure of better alternatives
      'FunctionExpression': {'body': 1, 'parameters': 1 },
      'ImportDeclaration': 1,                      // indent import statements
      'SwitchCase': 1,                             // indent case blocks in switch statements
      'MemberExpression': 1,                       // indent when chaining
      'ObjectExpression': 1,                       // indent objects
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
    'no-dupe-else-if': 'error',                    // disallow duplicate conditions in else-if chain
    'no-duplicate-case': 'error',                  // disallow duplicate conditions in else-if chain
    'no-fallthrough': 'error',                     // must explicitly mention when case statements fall through
    'no-import-assign': 'error',                   // do not reassign imports
    'no-labels': 'error',                          // disallow labeled statements
    'no-misleading-character-class': 'error',      // 😧 Avoid `/[👶🏻👶🏽]/`. Why doesn't this fix to `/(👶🏻|👶🏽)/`?
    'no-multi-spaces': ['error', {                 // ⭐️ Very loose rules for aligning code
      'exceptions': {
        'ImportDeclaration': true,                 // allow aligning 'from' in import declaration
        'Property': true,                          // allow aligning values of key-value pairs
        'VariableDeclarator': true,                // allow aligning equals-signs in variable declaration
      },
      'ignoreEOLComments': true ,                  // allow aligning comments
    }],
    'no-param-reassign': ['error', {               // cannot reassign parameters
      'props': true,
      // Exception of variable names used by reduce functions. A valid use-case:
      // (result, category) => { result[category] += 1; return result })
      'ignorePropertyModificationsFor': ['accumulator', 'object', 'result'],
    }],
    'no-plusplus': 'error',                        // prefer += over ++
    'no-setter-return': 'error',                   // prevent bugs resulting from a return statement from `set`
    'no-unused-vars': ['error', {
      'argsIgnorePattern': '^_',                   // preceed unused function arguments with '_'
      'varsIgnorePattern': '^_',                   // preceed unused variables with '_'
    }],
    'no-useless-backreference': 'error',           // detect unused code in regex
    'no-useless-call': 'error',                    // avoid call and apply when un-necessary
    'no-useless-catch': 'error',                   // catch must handle error rather than re-throw
    'no-useless-concat': 'error',                  // 'a' + 'b' should be written as 'ab' instead
    // when wrapping a line separated by operators across multiple lines,
    'operator-linebreak': ['error', 'after', {     // && and || should come at the end of lines
      'overrides': {                               // other operators should come at the start of the line
        '?': 'before',
        ':': 'before',
        '+=': 'before',
      },
    }],
    'padded-blocks': ['error', 'never'],           // don't pad blocks with empty lines
    'prefer-exponentiation-operator': 'error',     // prefer ** over Math.pow()
    'prefer-spread': 'error',                      // ⭐️ prefer `Math.max(...args)` over `Math.max.apply(Math, args)`
    'prefer-regex-literals': 'error',              // prefer `/\d\./` over `RegExp('\\d\\.')`
    'prefer-template': 'error',                    // ⭐️ prefer `<h3>${name}</h3>` over '<h3>' + name + '</h3>'
    'semi': ['error', 'never'],                    // ⭐️ disable semicolons
    'space-before-function-paren': ['error', 'always'], // prefer doThings (args) over doThings(args)
    'switch-colon-spacing': ['error', {            // define spacing around colons in case statements
      'after': true,
      'before': false,
    }],
    'quote-props': ['error', 'as-needed', {        // disallow quotes around object properties unless strictly required
      'keywords': true,
      'numbers': true,
    }],
    'quotes': ['error', 'single', {                // strictly use single quotes
      // the following options do not need to be included
      // they explicitly document that they should not be set to true
      'avoidEscape': false,                        // single quotes within a quoted string must be escaped
      'allowTemplateLiterals': false,              // template literals must be used with variables
    }],

    // ESLint rules not to enable
    'default-case': 'off',                         // unsure that requiring default case is best
    'function-call-argument-newline': 'off',       // do not enforce newline pattern for function arguments
    'no-constructor-return': 'off',                // 🤔 Assume this pattern is being used intentionally
    'no-extra-parens': 'off',                      // 🔥 Does not allow `x => (\n x * 2 \n)`
    'no-inner-declarations': 'off',                // 🔥 Rendered obsolete by ES6, according to ESLint docs
    'no-multi-str': 'off',                         // 🔥 provided alternative is worse. Template literals are only clean solution
    'no-restricted-exports': 'off',                // 🤔 Requires a custom blacklist to compare exports against
    'no-return-await': 'off',                      // 🔥 Returning await in some cases is a best practice
    'no-underscore-dangle': 'off',                 // 😧 Missing essential "allowBeforeThis" option
    'prefer-named-capture-group': 'off',           // 🤔 I like this, but am unsure it improves readability of small regexes
    'require-unicode-regexp': 'off',               // 😧 Handle the error! Don't add un-needed flags

    'no-empty-label': 'off',                       // 🗑️ Deprecated for no-labels


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



    // SonarJS Rules
    // eslint-plugin-sonarjs [https://github.com/SonarSource/eslint-plugin-sonarjs]
    'sonarjs/cognitive-complexity': 'error',         // ⭐️ Limit how complicated functions can be
    'sonarjs/max-switch-cases': ['error', 6],        // ⭐️ Limit number of allowed case blocks
    'sonarjs/no-all-duplicated-branches': 'error',   // prevent duplicated logic structures
    'sonarjs/no-collapsible-if': 'error',            // 🤔 Test this for now. There may be cases in which this is desirable
    'sonarjs/no-collection-size-mischeck': 'error',  // catch errors when comparing collection size to 0
    'sonarjs/no-duplicated-branches': 'error',       // prevent duplicated logic structures
    'sonarjs/no-element-overwrite': 'error',         // catch errors related to unintended reassignment
    'sonarjs/no-extra-arguments': 'error',           // catch errors when invoking a function with too many arguments
    'sonarjs/no-identical-expressions': 'error',     // 😧 catch errors related to repeating values across operators (flimsy implementation)
    'sonarjs/no-identical-functions': 'error',       // prevent duplicate function implementations
    'sonarjs/no-inverted-boolean-check': 'error',    // prefer `if (a !== b)` to `if (!(a === b))`
    'sonarjs/no-one-iteration-loop': 'error',        // catch errors with improperly-structured loops
    'sonarjs/no-redundant-jump': 'error',
    'sonarjs/no-same-line-conditional': 'error',
    'sonarjs/no-small-switch': 'error',              // 🤔 Do i want this? It effectively limits switch/case to 3-6 cases
    'sonarjs/no-unused-collection': 'error',
    'sonarjs/no-use-of-empty-return-value': 'error', // prevent assigning non-returning function to a value
    'sonarjs/prefer-object-literal': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'sonarjs/prefer-while': 'error',

    // SonarJS rules not to enable
    'sonarjs/no-duplicate-string': 'off',          // 🔥 implementation is absolutely broken
    'sonarjs/no-identical-conditions': 'off',      // 🗑️ covered by ESLint no-dupe-else-if
    'sonarjs/no-redundant-boolean': 'off',         // 🤔 there are valid cases to compare against true/false. Documentation is confusing
    'sonarjs/no-useless-catch': 'off',             // 🗑️ covered by ESLint no-useless-catch
    'sonarjs/prefer-immediate-return': 'off',      // 🔥 HARD NO! It can be a good pattern to name complex formulas before returning



    // Unicorn Rules
    // eslint-plugin-unicorn [https://github.com/sindresorhus/eslint-plugin-unicorn]
    'unicorn/better-regex': 'error',               // ⭐️ Enforce RegEx shortcuts where appropriate
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
    'unicorn/prefer-flat-map': 'error',            // prefer .flatMap() over .map().flat()
    'unicorn/prefer-includes': 'error',            // prefer .includes() over .indexOf() in conditionals
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',      // disallow redundant array.length in .slice() and .splice()
    'unicorn/prefer-node-append': 'error',         // prefer .append() over .appendChild()
    'unicorn/prefer-node-remove': 'error',         // prefer .remove() over .removeChild()
    'unicorn/prefer-number-properties': 'error',
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

    'unicorn/string-content': ['warn', {           // suggest reasonable string corrections
      'patterns': {
        '\'': '’',
        '\\.\\.\\.': '…',
        '([^-])->': '$1→',
        '^http:\\/\\/': 'https://',
      },
    }],
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
    'unicorn/prefer-exponentation-operator': 'off',// 🗑️ Covered by ESLint prefer-exponentation-operator
    'unicorn/prefer-reflect-apply': 'off',         // 🤔 I'm not sure the implications of this
    'unicorn/prefer-replace-all': 'off',           // 🤔 Unsure .replaceAll() is stable at this point
    'unicorn/prefer-set-has': 'off',               // 🔥 I don't create arrays just to check for existence
  },
}
