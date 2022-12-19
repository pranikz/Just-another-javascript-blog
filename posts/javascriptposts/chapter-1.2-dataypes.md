---
title: " Chapter 1.2 JS Datatypes "
metaTitle: "JS Datatypes "
metaDesc: "Datatypes"
date: "2022-09-15"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

_We will be covering 3 topics in this chapter_

# Chapter 1.2 - Data types

1. Primitive Values v/s Objects
2. Undefined and Null
3. Type of Results

# Primitive Values Vs Objects

- Primitive types in JavaScript are of 5 types

1. strings
2. numbers (Number and BigInt)
3. booleans (true or false)
4. undefined
5. Symbol values

`null` is a special primitive type. If you run `typeof null` you’ll get `object` back, but it’s actually a primitive type.

- Everything that is not a primitive type is an Object.

- A major difference Between the two is how they are compared, as each object has a unique identity and is only (strictly) equal to itself. we can se a code explaining the same below

```js
var object1 = {}; // empty obj 1
var object2 = {}; // empty obj 2
console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

# Undefined and Null

Most programming languages have values denoting missing information.
JavaScript has two such “nonvalues” : `undefined` and `null`

- `undefined` means “no value.”

1.  Uninitialized variables are `undefined`:

```js
var x;
console.log(x); // undefined
```

2.  Missing parameters are `undefined`

```js
function sum(a, b) {
  console.log(a); // undefined
  console.log(b); // undefined
}
sum(); // point of execution
```

```js
function sum(a, b) {
  console.log(a); // 5
  console.log(b); // undefined
}
sum(5); // point of execution
```

```js
function sum(a, b) {
  console.log(a); // 5
  console.log(b); // 6
}
sum(5, 6); // point of execution
```

3.  If you read a nonexistent property, you get `undefined`

```js
const obj = {};
console.log(obj.firstName); //undefined
```

- `null` means “no object” . It is used as a nonvalue whenever a object is expected (parameters ,last i a chain of objects etc.)

```js
function countLength(obj) {
  return Object.keys(obj).length;
}
console.log(countLength({ a: 5 })); // 1
```

when we dont have a object

```js
function countLength(obj) {
  if (obj === null) {
    throw new Error("Expected an object"); // Uncaught Error: Expected an object"
  }
  return Object.keys(obj).length;
}
console.log(countLength(null));
```

# Type of Results

## `typeof` results

| Operand                                       | Result      |
| --------------------------------------------- | ----------- |
| `undefined`                                   | `undefined` |
| `null `                                       | `object`    |
| `true` , `false `                             | `boolean`   |
| `0`,`1` , `2 `,....                           | `number`    |
| `"Hello World"`                               | `string`    |
| `function countLength(obj) { // statements }` | `function`  |
| All other normal values                       | `object`    |
