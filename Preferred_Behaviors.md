# Preferred Rule Behaviors
Some rules in ESLint and surrounding plugins do not lint the behavior that this style guide wishes to enforce. In these situations, we may add configurations that do not express this style guide.

This is a rationale explaining these situations.

----

### [`curly`](https://eslint.org/docs/rules/curly) behavior
This is the curly behavior I'd like to enforce:

**Allow**
```js
if (shouldDoSomething) doSomething() // A

if (shouldDoSomething) { // B
  doSomething()
}
```

**Disallow**
```js
if (shouldDoSomething) { doSomething() } // C

if (shouldDoSomething) // D
  doSomething()
```

* `curly: "error"` and `curly: ["error", "all"]` allow B, but disallow A
* `curly: ["error", "multi"]` enforces A, but disallows B when the block only contains a single line
* `curly: ["error", "multi-line"]` enforces A and B while disallowing D, but also allows C
* `curly: ["error", "multi-or-nest"]` enforces D
* `curly: ["error", "multi(.*)", "consistent"]` requires a consistent enforcement with any of the multi- options

----



### [`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens) except when they're useful

This rule disallows optional parentheses. In each of these examples, parentheses are extraneous:

```js
a = (b * c) // parentheses around an expression

(a * b) + c // order-of-operations makes parentheses redundant

for (a in (b, c))

for (a in (b))

for (a of (b))

typeof (a)

(function(){} ? a() : b())
```

There are situations I prefer to use parentheses, even if not necessary:

**Around constructor using `new` keywork**
```js
// explicitly state that we're calling the instance of the Object
const currentYear = (new Date()).getFullYear()
```

**Order of Operations**
```js
// this explicitly state the intended order,
// even if we don't have to
const formula  = a + (b * c)
const formula2 = ((a ** 2) + (b ** 2)) / 2
```

**Arrow Functions with Implicit Return**
```js
const dateString = (date, options) => (
  (new Date(date)).toLocaleDateString('en-US', options)
)

const imageHTML = ({ altText, imagePath }) => (
  `<img src="${imagePath}"${altText ? `alt="${altText}" : ''}>`
)

const join = (array, delimeter = ',') => (
  array.filter(item => !!item).join(delimeter)
)
```

This configuration is the closest I could come up with, but disallows the arrow functions:

```json
'no-extra-parens': ['error', 'all', {          // ⭐️ disallow extra parenthesis except in the following conditions
  'enforceForNewInMemberExpressions': false,   // parentheses around constructors: (new Date()).getFullYear()
  'nestedBinaryExpressions': false,            // parentheses when Order of Operations makes them un-necessary
}],
```

----

### [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class) needs auto-fix
The `no-misleading-character-class` rule disallows multi-part unicode characters from being used in regex character-classes. This rule is marked because it is missing an auto-fix.

An example from the docs reveals how these characters can be misleading:

```js
/^[👶🏻]$/u.test("👶🏻") //→ false
/^[👶🏽]$/u.test("👶🏽") //→ false
```
When this error occurs, it can be rewritten. If the character class contains only one emoji, the character class can be removed:

```js
/^👶🏻$/.test("👶🏻") //→ true
/^👶🏽$/.test("👶🏽") //→ true
```

If the character class contains multiple options, it can be rewritten with a pipe:

```js
/^(👶🏻|👶🏽)$/.test("👶🏻") //→ true
/^(👶🏻|👶🏽)$/.test("👶🏽") //→ true
```

----

### [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle) needs `allowBefore` option
This rule prevents underscores from being appended or prepended on variables and properties.

I would like to allow a single leading underscore on variables and properties, and disable dangling underscores otherwise.

While a leading underscore has been understood to indicate a private variable, I have used it to identify unused variables or variables which need to be immediately modified.

```js
/*eslint no-underscore-dangle: ["error", { "allowBefore": true}]*/
const foo = doSomethingToFoo(_foo)

const _number = '23'
const number = Number(_number)
```

----

### [`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp) is the wrong approach

This rule mandates that the `u` flag be used for all regular expressions, to avoid potential errors due to uncaught regex syntax error and poor handling of UTF-16 characters.

**Uncaught syntax errors**
```js
// without flag, result is a false positive
/\w{1, 2/.test('a{1, 2') //→ true

// with flag, erroneous syntax throws an error
/\w{1, 2/u.test('ab') //→ Uncaught SyntaxError: Invalid reg...
```

**UTF-16 pairs**
```js
// without flag, result is a false negative
/^[👍]$/.test("👍") //→ false

// with flag, result is accurate
/^[👍]$/u.test("👍") //→ true
```

Although these are real issues with Regular Expression handling of unicode, the rule enforces all Regular Expressions to use this flag, even if they aren't concerning. All of these examples are **incorrect** according to the rule:

```js
/*eslint require-unicode-regexp: error */

const a = /aaa/
const b = /bbb/gi
const c = new RegExp("ccc")
const d = new RegExp("ddd", "gi")
```

This is absolutely the wrong approach. This rule identifies two specific situations that can produce errors and instead of linting for those scenarios, they mandate a flag for all regex, when is (nearly?) always un-needed.

Those errors could be resolved with some quick refactoring:

```js
// Fix the Syntax Error
/\w{1,2}/.test('ab') //→ true

// Refactor UTF-pairs
/^👍$/.test("👍") //→ true
/^(👍|👎)$/.test("👍") //→ true
```

Linters help us write consice code, with minimal errors. They should not enforce a style that hides from errors, but instead identify them and handle them.

----

### [`sonarjs/no-identical-expressions`](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md) should remove their identity exception

This rule identifies situations in which both sides of an expression are the same. In these situations, it can often be refactored to a simpler form.

```js
if (a == b && a == b) { // if the first one is true, the second one is too
  doX();
}
if (a > a) { // always false
  doW();
}

var j = 5 / 5; //always 1
var k = 5 - 5; //always 0
```

One exception that SonarJS makes is for the identity expression `(f !== f)`. SonarJS notes that this is an effective test for `NaN`. I disagree with this assertion.

`number !== number` should be avoided in favor of `Number.isNaN(number)` to make intention clear.
