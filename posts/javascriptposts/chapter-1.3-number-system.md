---
title: "Chapter 1.3 JS Number System "
metaTitle: "JS Number System"
metaDesc: "JS Number System"
socialImage: images/Javascript.jpg
date: "2022-09-16"
tags:
  - javscript, nextjs, jsnumbersystem,
---

_We will be covering 2 topics in this chapter_

1. The Values
2. Number System

# The Values

In javascript we deal with different values to name a few :

- Numbers
- Strings
- Booleans
- Objects
- null
- undefined

Lets talk about number system and how it is represented in Javascript

# Number System

- Javascript has only `one` number type

  - No integer
  - 64 bit Floating point number based on IEEE-754 (a.k.a Double)
  - special Numbers are:
    1. `NaN`
    2. `Infinity`
  - Doesnot map well to comon uderstanding of arithmatic i.e 0.1+ 0.2 = 0.30000000000000004. We can verify that having a look o this code snippet

  ```js
  console.log(0.1 + 0.2 === 0.3); // false
  ```

  - In javascript, +ve infinity is larger and -ve infinity is smaller than any number except NaN. \
    `typeof Infinity` is always number

## Converting to number

| Value Type          | Result                                                                 |
| ------------------- | ---------------------------------------------------------------------- |
| `undefined`         | `NaN`                                                                  |
| `null `             | `0`                                                                    |
| `true` , `false `   | `1`, `0`                                                               |
| `0`,`1` , `2 `,.... | `0`,`1` , `2 `,....                                                    |
| `"Hello World"`     | will try o convert the string to a number, otherwise wmpty string is 0 |

lets see the code snippets.

```js
let a = Number("56");
console.log(a, typeof a); // 56 number

let b = Number("56abc");
console.log(b, typeof b); // NaN number
```

## NaN

- Stands for Not a Number which is a numeric value
- it can be produced by the errors shown below
  ```js
  let a = Number("abc");
  console.log(a); // NaN
  let b = Number(undefined);
  console.log(b); // NaN
  ```
- NaN is not equal to itself remember this!
  ```js
  let b = Number(undefined);
  console.log(b); // NaN
  console.log(b === b); // False
  ```
  so we also cannot find the index off NaN in an array also
  ```js
  console.log([1, 2, NaN, 3].indexOf(NaN)); // -1
  ```
  to check wether the number is `NaN` we can follow this
  ```js
  let b = Number(undefined);
  console.log(b); // NaN
  console.log(isNaN(b)); // True
  ```
