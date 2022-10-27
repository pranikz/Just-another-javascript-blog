---
title: "Chapter 1.1 JS basics "
metaTitle: "JS basics "
metaDesc: "Intro to javascript"
date: "2022-09-14"
tags:
  - javscript, nextjs
---

_We will be covering 5 topics in this chapter_

1. Introduction
2. History of JavaScript
3. Expression v/s Statement
4. Semicolons
5. Variables and Assignment

# Introduction

- What is Javascript?

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

# History of JavaScript

The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). As soon as one browser implements a feature, we try to document it. This means that cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features. Most of the time, this happens between the stages 3 and 4, and is usually before the spec is officially published.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.

# Expression Vs Statements

- Statements "do things". _A programme is asequence of statements_

```js
var x;
```

- Expression Produce values

```js
3 * 6; // 18
```

We can see a classic example by having a look into a if else block

```js
var x;
if (y >= 0) {
  x = y;
} else {
  x = -y;
}
```

can also be written as

```js
var x = y >= 0 ? y : -y;
```

## Let's have a look where javascript behaves wierdly

1. Lets have a look on this example

```js
function sum(a, b) {
  return;
  a + b;
}
```

expected output

`sum (4,5)` is `9`

but it returns `undefined` \
Reason: `return` is a statements which returns nothing and once `return` statement is done `a + b` will be added but wont be returned so it returns `undefined`.

2. Lets have a look on another example

```js
function sum(a, b) {
  return;
  {
    sum: a + b;
  }
}
```

`sum (4,5)` is `9`

but it returns `undefined` \
Reason: `return` is a statements which returns nothing and once `return` statement is done `a + b` will be added but wont be returned so it returns `undefined`.

# Semicolons!

- Semicolons are optional but It is recommended to have a pracice of adding semicolons.
- Semicolons terminate statements not blocks.
- Semicolon is Required in function expression (as shown in example)

```js
const getRectArea = function (width, height) {
  return width * height;
};
```

- Be careful with return statements. If you return something, add it on the same line as the return (same for break, throw, continue)
- Never start a line with parentheses, as those might be concatenated with the previous line to form a function call, or an array element reference\
  ![Image](https://res.cloudinary.com/practicaldev/image/fetch/s--TKo0VQLF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/lvvdxjl9hgmgc0y1h4ts.jpg)

# Variables and Assignment

Variables are containers for storing data (storing data values).
4 Ways to Declare a JavaScript Variable:

1. Using `var`
2. Using `let`
3. Using `const`
4. Using nothing

- In this example, `x` , `y` are variables, declared with the `var` , `let`, keyword and `z` is undeclared:

```js
var x = 5;
let y = 6;
z = x + y;
```

## When to Use JavaScript var?

- Always declare JavaScript variables with `var`, `let` , or `const`.

- The `var` keyword is used in all JavaScript code from 1995 to 2015.

- The `let` and `const` keywords were added to JavaScript in 2015.

- If you want your code to run in older browser, you must use `var`.

## When to Use JavaScript const?

- If you want a general rule: always declare variables with `const`.

- If you think the value of the variable can change, use `let`.

- In this example, `price1`, `price2`, and `total`, are variables:

```js
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

- The two variables `price1` and `price2` are declared with the `const` keyword.

- These are constant values and cannot be changed.

- The variable `total` is declared with the let keyword. This is a value that can be changed.

## JavaScript Identifiers

- All JavaScript variables must be identified with unique names.These unique names are called identifiers.

- Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

- The general rules for constructing names for variables (unique identifiers) are:

> > 1.  Names can contain letters, digits, underscores, and dollar signs.
> > 2.  Names must begin with a letter
> > 3.  Names can also begin with $ and \_ (but we will not use it in this tutorial)
> > 4.  Names are case sensitive (y and Y are different variables)
> > 5.  Reserved words (like JavaScript keywords) cannot be used as names
