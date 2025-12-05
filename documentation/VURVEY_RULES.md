# ESLint Configuration Rules

This document explains all explicitly declared rules in the ESLint configuration.

---

## TypeScript Rules

### @typescript-eslint/ban-ts-comment

**Setting:** `warn`

Disallows `@ts-<directive>` comments (like `@ts-ignore`, `@ts-nocheck`, `@ts-expect-error`). These comments suppress TypeScript errors and can hide real issues.

[Rule Documentation](https://typescript-eslint.io/rules/ban-ts-comment/)

---

### @typescript-eslint/explicit-function-return-type

**Setting:** `error` with `allowExpressions: true`

Requires explicit return types on functions and class methods. The `allowExpressions` option allows omitting return types for function expressions (callbacks, arrow functions passed as arguments).

[Rule Documentation](https://typescript-eslint.io/rules/explicit-function-return-type/)

---

### @typescript-eslint/explicit-member-accessibility

**Setting:** `error` with `accessibility: "no-public"`

Requires explicit accessibility modifiers on class members, but disallows the redundant `public` keyword since it's the default.

[Rule Documentation](https://typescript-eslint.io/rules/explicit-member-accessibility/)

---

### @typescript-eslint/member-ordering

**Setting:** `off`

Disabled. When enabled, enforces a consistent order for class members (properties, methods, etc.).

[Rule Documentation](https://typescript-eslint.io/rules/member-ordering/)

---

### @typescript-eslint/no-explicit-any

**Setting:** `off`

Disabled. When enabled, disallows usage of the `any` type.

[Rule Documentation](https://typescript-eslint.io/rules/no-explicit-any/)

---

### @typescript-eslint/no-extraneous-class

**Setting:** `error`

Disallows classes that are used as namespaces or contain only static members. Encourages using plain objects or modules instead.

[Rule Documentation](https://typescript-eslint.io/rules/no-extraneous-class/)

---

### @typescript-eslint/no-for-in-array

**Setting:** `error`

Disallows using `for-in` loops over arrays. `for-in` iterates over keys (indices as strings), not values, which is usually not the intended behavior.

[Rule Documentation](https://typescript-eslint.io/rules/no-for-in-array/)

---

### @typescript-eslint/no-misused-promises

**Setting:** `error`

Disallows passing Promises to places that don't handle them properly, like conditionals or void-returning callbacks.

[Rule Documentation](https://typescript-eslint.io/rules/no-misused-promises/)

---

### @typescript-eslint/no-require-imports

**Setting:** `error`

Disallows `require()` statements. Enforces ES module imports (`import`) instead of CommonJS.

[Rule Documentation](https://typescript-eslint.io/rules/no-require-imports/)

---

### @typescript-eslint/no-shadow

**Setting:** `error`

Disallows variable declarations that shadow variables in outer scopes. Prevents confusion when inner and outer variables share the same name.

[Rule Documentation](https://typescript-eslint.io/rules/no-shadow/)

---

### @typescript-eslint/no-unnecessary-qualifier

**Setting:** `error`

Disallows unnecessary namespace or enum qualifiers when the member is already in scope.

[Rule Documentation](https://typescript-eslint.io/rules/no-unnecessary-qualifier/)

---

### @typescript-eslint/no-unnecessary-type-assertion

**Setting:** `error`

Disallows type assertions (`as Type` or `<Type>`) that don't change the type of an expression.

[Rule Documentation](https://typescript-eslint.io/rules/no-unnecessary-type-assertion/)

---

### @typescript-eslint/no-use-before-define

**Setting:** `error` with `functions: false`

Disallows using variables before they're defined, except for function declarations (which are hoisted).

[Rule Documentation](https://typescript-eslint.io/rules/no-use-before-define/)

---

### @typescript-eslint/no-useless-constructor

**Setting:** `error`

Disallows constructors that are empty or only call `super()` with the same arguments.

[Rule Documentation](https://typescript-eslint.io/rules/no-useless-constructor/)

---

### @typescript-eslint/prefer-for-of

**Setting:** `error`

Enforces `for-of` loops over standard `for` loops when the index is only used to access array elements.

[Rule Documentation](https://typescript-eslint.io/rules/prefer-for-of/)

---

### @typescript-eslint/prefer-includes

**Setting:** `error`

Enforces using `includes()` instead of `indexOf() !== -1` for checking if a value exists in an array or string.

[Rule Documentation](https://typescript-eslint.io/rules/prefer-includes/)

---

### @typescript-eslint/prefer-regexp-exec

**Setting:** `error`

Enforces using `RegExp.exec()` over `String.match()` when the global flag is not used, for better performance.

[Rule Documentation](https://typescript-eslint.io/rules/prefer-regexp-exec/)

---

### @typescript-eslint/prefer-string-starts-ends-with

**Setting:** `error`

Enforces using `startsWith()` and `endsWith()` instead of equivalent regex or substring comparisons.

[Rule Documentation](https://typescript-eslint.io/rules/prefer-string-starts-ends-with/)

---

### @typescript-eslint/promise-function-async

**Setting:** `off`

Disabled. When enabled, requires functions that return Promises to be marked `async`.

[Rule Documentation](https://typescript-eslint.io/rules/promise-function-async/)

---

### @typescript-eslint/require-await

**Setting:** `error`

Disallows `async` functions that don't contain an `await` expression.

[Rule Documentation](https://typescript-eslint.io/rules/require-await/)

---

### @typescript-eslint/restrict-plus-operands

**Setting:** `error`

Requires both operands of `+` to be the same type (both strings or both numbers), preventing accidental string concatenation.

[Rule Documentation](https://typescript-eslint.io/rules/restrict-plus-operands/)

---

### @typescript-eslint/switch-exhaustiveness-check

**Setting:** `error`

Requires `switch` statements over union types to handle all possible values, ensuring type safety.

[Rule Documentation](https://typescript-eslint.io/rules/switch-exhaustiveness-check/)

---

### @typescript-eslint/unbound-method

**Setting:** `error`

Warns when a method is referenced without being bound, which can cause `this` to be undefined when called.

[Rule Documentation](https://typescript-eslint.io/rules/unbound-method/)

---

### @typescript-eslint/unified-signatures

**Setting:** `error`

Requires function overloads that could be unified into a single signature using union types or optional parameters.

[Rule Documentation](https://typescript-eslint.io/rules/unified-signatures/)

---

### @typescript-eslint/return-await

**Setting:** `error`

Enforces consistent usage of `return await` inside async functions.

[Rule Documentation](https://typescript-eslint.io/rules/return-await/)

---

## Best Practices (ESLint Core Rules)

### accessor-pairs

**Setting:** `error`

Requires both getter and setter for properties. Prevents defining a setter without a getter (or vice versa).

[Rule Documentation](https://eslint.org/docs/latest/rules/accessor-pairs)

---

### array-callback-return

**Setting:** `error`

Requires `return` statements in callbacks of array methods like `map`, `filter`, `reduce`, etc.

[Rule Documentation](https://eslint.org/docs/latest/rules/array-callback-return)

---

### class-methods-use-this

**Setting:** `warn`

Warns when class methods don't use `this`, suggesting they could be static methods or standalone functions.

[Rule Documentation](https://eslint.org/docs/latest/rules/class-methods-use-this)

---

### consistent-this

**Setting:** `error` with value `"self"`

Requires that `this` be assigned only to a variable named `self` when capturing the context.

[Rule Documentation](https://eslint.org/docs/latest/rules/consistent-this)

---

### curly

**Setting:** `error` with `"multi-line"` and `"consistent"`

Requires curly braces for multi-line blocks and enforces consistency within if-else chains.

[Rule Documentation](https://eslint.org/docs/latest/rules/curly)

---

### dot-notation

**Setting:** `error`

Enforces dot notation (`obj.prop`) over bracket notation (`obj["prop"]`) when possible.

[Rule Documentation](https://eslint.org/docs/latest/rules/dot-notation)

---

### eqeqeq

**Setting:** `error` with `"always"` and `null: "ignore"`

Requires strict equality (`===`/`!==`) except when comparing to `null` (where `==` is allowed to check both `null` and `undefined`).

[Rule Documentation](https://eslint.org/docs/latest/rules/eqeqeq)

---

### max-classes-per-file

**Setting:** `warn`

Warns when a file contains more than one class, encouraging one class per file.

[Rule Documentation](https://eslint.org/docs/latest/rules/max-classes-per-file)

---

### new-cap

**Setting:** `warn`

Requires constructor functions to be capitalized and capitalized functions to be called with `new`.

[Rule Documentation](https://eslint.org/docs/latest/rules/new-cap)

---

### no-array-constructor

**Setting:** `error`

Disallows the `Array` constructor. Use array literals (`[]`) instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-array-constructor)

---

### no-await-in-loop

**Setting:** `warn`

Warns against using `await` inside loops, which often indicates sequential execution that could be parallelized with `Promise.all`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-await-in-loop)

---

### no-bitwise

**Setting:** `warn`

Warns against bitwise operators (`&`, `|`, `^`, etc.), which are often typos for logical operators.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-bitwise)

---

### no-caller

**Setting:** `error`

Disallows `arguments.caller` and `arguments.callee`, which are deprecated and prevent optimizations.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-caller)

---

### no-console

**Setting:** `error`

Disallows `console` methods. Use proper logging utilities in production code.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-console)

---

### no-div-regex

**Setting:** `error`

Disallows regex literals that look like division (`/=foo/`). Use `/\=foo/` instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-div-regex)

---

### no-dupe-class-members

**Setting:** `off`

Disabled. TypeScript handles duplicate class member detection.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-dupe-class-members)

---

### no-duplicate-imports

**Setting:** `error` with `includeExports: true`

Disallows duplicate imports from the same module and also checks exports.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-duplicate-imports)

---

### no-else-return

**Setting:** `error` with `allowElseIf: false`

Disallows `else` blocks after `return` statements in `if` blocks. Also disallows `else if` after return.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-else-return)

---

### no-eval

**Setting:** `error`

Disallows `eval()`, which is a security risk and prevents optimizations.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-eval)

---

### no-extend-native

**Setting:** `error`

Disallows extending native objects like `Array.prototype` or `Object.prototype`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-extend-native)

---

### no-extra-bind

**Setting:** `error`

Disallows unnecessary `.bind()` calls on functions that don't use `this`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-extra-bind)

---

### no-implicit-coercion

**Setting:** `error` with `boolean: false`

Disallows shorthand type conversions (like `+"5"` for numbers), except for boolean coercion (`!!value`).

[Rule Documentation](https://eslint.org/docs/latest/rules/no-implicit-coercion)

---

### no-implied-eval

**Setting:** `error`

Disallows implied `eval()` through `setTimeout`, `setInterval`, or `execScript` with string arguments.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-implied-eval)

---

### no-invalid-this

**Setting:** `error`

Disallows `this` outside of classes or class-like objects where it would be undefined.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-invalid-this)

---

### no-iterator

**Setting:** `error`

Disallows the deprecated `__iterator__` property.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-iterator)

---

### no-labels

**Setting:** `error`

Disallows labeled statements, which can make code harder to understand.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-labels)

---

### no-lone-blocks

**Setting:** `error`

Disallows unnecessary block statements that don't introduce a new scope.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-lone-blocks)

---

### no-lonely-if

**Setting:** `error`

Disallows `if` statements as the only statement in an `else` block. Use `else if` instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-lonely-if)

---

### no-multi-str

**Setting:** `error`

Disallows multiline strings using backslash continuation. Use template literals instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-multi-str)

---

### no-negated-condition

**Setting:** `error`

Disallows negated conditions in `if-else` statements when flipping would be clearer.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-negated-condition)

---

### no-nested-ternary

**Setting:** `error`

Disallows nested ternary expressions, which are hard to read.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-nested-ternary)

---

### no-object-constructor

**Setting:** `error`

Disallows `new Object()`. Use object literals (`{}`) instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-object-constructor)

---

### no-new

**Setting:** `error`

Disallows using `new` for side effects without storing the result.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-new)

---

### no-new-func

**Setting:** `error`

Disallows `new Function()`, which is similar to `eval()`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-new-func)

---

### no-new-wrappers

**Setting:** `error`

Disallows primitive wrapper instances like `new String()`, `new Number()`, `new Boolean()`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-new-wrappers)

---

### no-octal-escape

**Setting:** `error`

Disallows octal escape sequences in strings. Use Unicode escapes instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-octal-escape)

---

### no-plusplus

**Setting:** `error` with `allowForLoopAfterthoughts: true`

Disallows `++` and `--` operators except in `for` loop updates.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-plusplus)

---

### no-proto

**Setting:** `error`

Disallows the deprecated `__proto__` property. Use `Object.getPrototypeOf()` instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-proto)

---

### no-return-assign

**Setting:** `error` with `"always"`

Disallows assignment in `return` statements, even when wrapped in parentheses.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-return-assign)

---

### no-self-compare

**Setting:** `error`

Disallows comparing a variable to itself, which is usually a mistake.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-self-compare)

---

### no-sequences

**Setting:** `error`

Disallows the comma operator (except in `for` loops and arrow function returns).

[Rule Documentation](https://eslint.org/docs/latest/rules/no-sequences)

---

### no-shadow

**Setting:** `off`

Disabled in favor of `@typescript-eslint/no-shadow`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-shadow)

---

### no-template-curly-in-string

**Setting:** `warn`

Warns about `${...}` in regular strings, which might indicate an intended template literal.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-template-curly-in-string)

---

### no-throw-literal

**Setting:** `error`

Requires throwing `Error` objects instead of literals.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-throw-literal)

---

### no-undef-init

**Setting:** `error`

Disallows initializing variables to `undefined` explicitly.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-undef-init)

---

### no-underscore-dangle

**Setting:** `error` with `allowAfterSuper: true` and `allowAfterThis: true`

Disallows dangling underscores in identifiers, except after `this` or `super`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-underscore-dangle)

---

### no-unmodified-loop-condition

**Setting:** `error`

Disallows loop conditions that are never modified inside the loop (potential infinite loops).

[Rule Documentation](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)

---

### no-unneeded-ternary

**Setting:** `error` with `defaultAssignment: false`

Disallows unnecessary ternary operators, including `x ? x : y` patterns.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-unneeded-ternary)

---

### no-unused-expressions

**Setting:** `error`

Disallows expressions that have no effect on the program state.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-unused-expressions)

---

### no-use-before-define

**Setting:** `off`

Disabled in favor of `@typescript-eslint/no-use-before-define`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-use-before-define)

---

### no-useless-call

**Setting:** `error`

Disallows unnecessary `.call()` and `.apply()` when a normal function call would work.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-call)

---

### no-useless-computed-key

**Setting:** `error`

Disallows unnecessary computed property keys like `{ ["foo"]: 1 }`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-computed-key)

---

### no-useless-concat

**Setting:** `error`

Disallows unnecessary concatenation of string literals.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-concat)

---

### no-useless-constructor

**Setting:** `off`

Disabled in favor of `@typescript-eslint/no-useless-constructor`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-constructor)

---

### no-useless-rename

**Setting:** `error`

Disallows renaming imports, exports, and destructured assignments to the same name.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-rename)

---

### no-useless-return

**Setting:** `error`

Disallows redundant `return` statements at the end of functions.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-useless-return)

---

### no-var

**Setting:** `error`

Requires `let` or `const` instead of `var`.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-var)

---

### no-void

**Setting:** `error`

Disallows the `void` operator.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-void)

---

### no-warning-comments

**Setting:** `warn`

Warns about TODO, FIXME, and similar comments that indicate incomplete code.

[Rule Documentation](https://eslint.org/docs/latest/rules/no-warning-comments)

---

### object-shorthand

**Setting:** `error`

Requires shorthand syntax for object methods and properties (`{ foo }` instead of `{ foo: foo }`).

[Rule Documentation](https://eslint.org/docs/latest/rules/object-shorthand)

---

### operator-assignment

**Setting:** `error`

Requires shorthand assignment operators like `+=` instead of `x = x + y`.

[Rule Documentation](https://eslint.org/docs/latest/rules/operator-assignment)

---

### prefer-arrow-callback

**Setting:** `error`

Requires arrow functions for callbacks instead of function expressions.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-arrow-callback)

---

### prefer-const

**Setting:** `error`

Requires `const` for variables that are never reassigned.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-const)

---

### prefer-destructuring

**Setting:** `off`

Disabled. When enabled, prefers destructuring from arrays and objects.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-destructuring)

---

### prefer-numeric-literals

**Setting:** `error`

Requires binary, octal, and hex literals instead of `parseInt()` for literal values.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-numeric-literals)

---

### prefer-promise-reject-errors

**Setting:** `error`

Requires `Error` objects when rejecting Promises.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)

---

### prefer-rest-params

**Setting:** `error`

Requires rest parameters (`...args`) instead of the `arguments` object.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-rest-params)

---

### prefer-spread

**Setting:** `error`

Requires spread syntax (`...`) instead of `.apply()`.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-spread)

---

### prefer-template

**Setting:** `error`

Requires template literals instead of string concatenation.

[Rule Documentation](https://eslint.org/docs/latest/rules/prefer-template)

---

### require-atomic-updates

**Setting:** `off`

Disabled. When enabled, disallows assignments that can lead to race conditions due to `await` or `yield`.

[Rule Documentation](https://eslint.org/docs/latest/rules/require-atomic-updates)

---

### sort-imports

**Setting:** `off`

Disabled. When enabled, enforces sorted import declarations.

[Rule Documentation](https://eslint.org/docs/latest/rules/sort-imports)

---

### strict

**Setting:** `error` with `"never"`

Disallows `"use strict"` directives (unnecessary in ES modules).

[Rule Documentation](https://eslint.org/docs/latest/rules/strict)

---

### symbol-description

**Setting:** `error`

Requires a description when creating Symbols.

[Rule Documentation](https://eslint.org/docs/latest/rules/symbol-description)

---

### yoda

**Setting:** `error`

Disallows "Yoda conditions" (`if ("red" === color)`). Use `if (color === "red")` instead.

[Rule Documentation](https://eslint.org/docs/latest/rules/yoda)
