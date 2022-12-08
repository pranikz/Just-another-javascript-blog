---
title: "Chapter 3.1 Bind keyword"
metaTitle: "Bind"
metaDesc: "Bind keyword"
date: "2022-09-14"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# .bind()

The `bind()` method returns a new function, when invoked, has its this sets to a specific value.

The following illustrates the syntax of the `bind()` method:

```js
fn.bind(thisArg[, arg1[, arg2[, ...]]])
```

In this syntax, the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).

> > Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose this sets to thisArg argument.

lets see another example :

```js
function sum(a, b) {
  return this.a + this.b;
}
const sumB = sum.bind({ a: 10, b: 20 });
console.log("Sum: ", sumB());
console.log(sum === sumB); // they both are different function
const sumc = sumB.bind({ a: 20, b: 20 }); //.bind binds permanently
console.log("Sum: ", sumC()); // returns 30 as SumB value is binded which is 30
```

### Output

```
Sum: 30
False
Sum: 30
```

What happens when we execute the same inside a context of an object

```js
var module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
var fn = module.getX(); // global context (unbounded)
var fnbind = module.getX.bind(module); // module context (bounded)
console.log(module.getX());
console.log(fn());
console.log(fnbind());
```

### Output

```
42
undefined
42
```

## Partial functions

Partials are basically functions that return functions with some already predefined arguments and need some arguments to be completed. Let's say you have a function with several arguments to be set, but you don't want to set the majority of arguments over and over again because you need it more than once.

### example

```js
function product(a, b) {
  return a * b;
}

const double = product.bind(null, 2);

console.log(double(100));
```

### Output

```
200
```
