---
title: "Chapter 3.5 Strict Mode"
metaTitle: "Strict Mode"
metaDesc: "Strict Mode "
date: "2022-12-08"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# Strict Mode vs Sloppy Mode

- JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".

- Strict mode isn't just a subset: it intentionally has different semantics from normal code.

_To invoke strict mode for an entire script, put the exactstatement "use strict”;_

- Strict mode applies to entire scripts or to individual functions.

let's see an example implementing strict mode.

1.  without strict mode

```js
function returnThis() {
  return this;
}
console.log(returnThis());
```

### Output

Here this points to the global execution context.

```
Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 49.73052900005132,
      nodeStart: 0.11634000018239021,
      v8Start: 0.8808100000023842,
      bootstrapComplete: 24.712065000087023,
      environment: 10.82163600018248,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1670511950767.484
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  alert: [Function: log],
  prompt: [Function (anonymous)],
  confirm: [Function (anonymous)],
  [Symbol(replit.prybar.init)]: [Function: initRepl]
}
```

2.  with strict mode

    Here this becomes undefined as use strict forces it not to be global

```js
function returnThis() {
  "use strict";
  return this;
}
console.log(returnThis());
```

### Output

```
undefined
```

### Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

lets see examples depicting the same below:

1. In normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable

- without strict mode :

```js
function abc() {
  foo = 17;
}

abc();

console.log(foo);

console.log(global.foo);
```

### Output

```
17
17
```

- with strict mode :

```js
"use strict";
function abc() {
  foo = 17;
}

abc();

console.log(foo);

console.log(global.foo);
```

### Output

```
ReferenceError: foo is not defined
    at abc (/home/runner/LumpyModestMp3/index.js:3:7)
    at Object.<anonymous> (/home/runner/LumpyModestMp3/index.js:6:1)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
```

to avoid this we have to declare foo in the function abc as var foo.

2. in earlier versions of JS engine we can create names which includes reserve words like undefined and Infinity

- without strict mode

```js
var undefined = 9;
var Infinity = 10;

if (undefined) {
  console.log("is true");
}
```

### Output

```
is true
```

it directly executed the code without throwing any embargos for using the reserved words

- with strict mode

```js
"use strict";
var undefined = 9;
var Infinity = 10;

if (undefined) {
  console.log("is true");
}
```

### Output

```
VM270:2 Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'
    at <anonymous>:2:17
```

Here Strict mode eliminates some JavaScript silent errors by changing them to throw errors.

## Context in strict mode

```js
function fun() {
  return this;
}
fun() === global; // w/o strict mode true , w/ strict mode false

typeof fun.call(2) === "object"; // w/o strict mode true , w/ strict mode false
fun.apply(null) === global; // w/o strict mode true , w/ strict mode false

fun.call(undefined) === global; // w/o strict mode true , w/ strict mode false
typeof fun.bind(true)() === "object"; // w/o strict mode true , w/ strict mode false
```

In sloppy mode, this is always an object:

- either the provided object if called with an object- valued this; the value, boxed, if called with a Boolean, string, or number this;
