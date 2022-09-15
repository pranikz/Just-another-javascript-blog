---
title: "Chapter 1.1 JS basics "
metaTitle: "Intro to javascript "
metaDesc: "Intro to javascript"
socialImage: images/Javascript.jpg
date: "2021-09-22"
tags:
  - javscript, nextjs
---

_We will be covering 4 topics in this module_

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
- Statements "do things". *A programme is asequence of statements*
```js
      var x;
```
- Expression Produce values

```js
      3 * 6 // 18
```

We can see a classic example by having a look into a if else block

```js
     var x;
     if( y >= 0) {
         x = y;
       } else {
         x = -y;
       }
```

can also be written as 

```js
     var x = y >= 0 ? y : -y
```
