### `eslint-config-webtrinkets`

## Using Webtrinkets Config

This style guide has not been published to a package manager. That may be a plan for down the road, but is not at this time.

1. Add This Package to **package.json** under devDependencies
```
"eslint-config-webtrinkets": "git://github.com/ricealexander/eslint-config-webtrinkets#main",

```

2. Install NPM Dependencies
```
npm install --save-dev eslint eslint-plugin-import eslint-plugin-sonarjs eslint-plugin-unicorn
```

3. Create a basic **.eslintrc.js** file
```
module.exports = {
  'extends': 'webtrinkets',
}

```

## Style Guide Core Tenets

Here is a collection of rules that reflect the values of the style guide. Some of my favorite rules are identified ith a ⭐️.

### Prefer Conciseness

|   |   |   |
| - | - | - |
| `arrow-parens`                       | Prefer `param =>` over `(param) =>`                       ||
| `prefer-regex-literals`              | prefer `/\d\./` over `RegExp('\\d\\.')`                   ||
| `quote-props`                        | Disallow quotes around object properties unless needed    ||
| `semi`                               | Disallow semicolons unless needed                         | ⭐️ |
| `sonarjs/no-collapsible-if`          | Prefer `if (a && b) {}` over `if (a) { if (b) {}}`        ||
| `sonarjs/no-inverted-boolean-check`  | Prefer `if (a !== b)` to `if (!(a === b))`                ||
| `unicorn/import-index`               | Use the shortest paths for imports                        | ⭐️ |
| `unicorn/better-regex`               | Use concise Regular Expressions                           | ⭐️ |
| `unicorn/no-zero-fractions`          | Disallow trailing zeros in numbers                        ||
| `unicorn/prefer-negative-index`      | Disallow redundant `.length` in `.slice()`, `.splice()`   ||


### But Be Explicit When Possible

|   |   |   |
| - | - | - |
| `no-plusplus`                        | Prefer `+= 1` over `++`                                   ||
| `no-return-await`                    | Disabled to explicitly mark asynchronous behavior         ||
| `unicorn/explicit-length-check`      | When checking Array length, compare against 0             ||
| `unicorn/no-unreadable-array-destructuring` | Disallow multiple gaps when destructuring arrays   ||
| `unicorn/prefer-type-error`          | Prefer `TypeError()` over `Error()` on failed type test   | ⭐️ |
| `unicorn/prefer-abbreviations`       | Disallow abbreviations                                    | ⭐️ |
| `unicorn/throw-new-error`            | Require use of `new` when throwing Errors                 ||


### Use Modern Syntax, Methods, and Features

|   |   |   |
| - | - | - |
| `prefer-exponentiation-operator`     | Prefer `**` over `Math.pow()`                             ||
| `prefer-spread`                      | Prefer `Math.max(...args)` over `Math.max.apply(Math, args)` ||
| `prefer-template`                    | Prefer `` `<h3>${name}</h3>` `` over `'<h3>' + name + '</h3>'` | ⭐️ |
| `unicorn/no-array-instanceof`        | Prefer `Array.isArray()` over `instanceof Array`          ||
| `unicorn/no-for-loop`                | Prefer alternatives to standard for loop                  ||
| `unicorn/prefer-add-event-listener`  | Prefer `.addEventListener()` over `.on-` events           | ⭐️ |
| `unicorn/prefer-dataset`             | Prefer `.dataset.` when working with `data-`attributes    ||
| `unicorn/prefer-event-key`           | Prefer `event.key` over `event.keyCode`                   | ⭐️ |
| `unicorn/prefer-flat-map`            | Prefer `.flatMap()` over `.flat().map()`                  ||
| `unicorn/prefer-includes`            | Prefer `.includes()` over `.indexOf() > -1`               ||
| `unicorn/prefer-modern-dom-apis`     | Prefer newer DOM methods                                  ||
| `unicorn/prefer-node-append`         | Prefer `.append()` over `.appendChild()`                  ||
| `unicorn/prefer-node-remove`         | Prefer `.remove()` over `.removeChild()`                  ||
| `unicorn/prefer-query-selector`      | Prefer `.querySelector{\|All}` over alternatives          | ⭐️ |
| `unicorn/prefer-spread`              | Prefer `[...iterable]` over `Array.from(iterable)`        ||
| `unicorn/prefer-starts-ends-with`    | Prefer `{start\|end}sWith()` over equivalent RegExps      ||
| `unicorn/prefer-string-slice`        | Prefer `.slice()` over `.substr()` or `.substring()`      ||
| `unicorn/prefer-text-content`        | Prefer `.textContent` over `.innerText`                   ||
| `unicorn/prefer-trim-start-end`      | Prefer `.trim{Start\|End}` over `.trim{Left\|Right}`      ||


### Other Customizations

|   |   |   |
| - | - | - |
| `brace-style`                        | Prefer Stroustrup-style if/else                           | ⭐️ |
| `comma-dangle`                       | Always use trailing commas, to keep diffs pretty          ||
| `key-spacing`                        | Allow use of space to align properties                    ||
| `no-multi-spaces`                    | Liberally allow use of spaces to align code               | ⭐️ |
| `no-param-reassign`                  | Disallow reassignment except for reduce accumulators      ||
| `no-unused-vars`                     | Unused variables should start with `_`                    | ⭐️ |
| `operator-linebreak`                 | Multiline content: `\|\|&&` go at the end; `?:+=` go at the start. ||
| `quotes`                             | Strictly require single quote `'`                         ||
| `sonarjs/cognitive-complexity`       | Limit complexity of functions                             | ⭐️ |
| `sonarjs/max-switch-cases`           | Limit number of case blocks. Avoid switch/case in most cases | ⭐️ |
