---
title: "Chapter 1.4 JS types "
metaTitle: "JS Number System"
metaDesc: "JS Number System"
socialImage: images/Javascript.jpg
date: "2022-09-20"
tags:
  - javscript, nextjs, jsnumbersystem,
---

# Javascript Type System

We are going to learn about few concepts listed below:

1. Static Vs Dynamic
2. Static Typing Vs Dynamic Typing
3. Static Type Checking Vs Dynamic Type Checking
4. JS Types
5. Coercion
6. == vs ===

## 1. Static Vs Dynamic

Static: any property of a programe that we have to find out at compile time or before running of the programme i.e called static property of the programme

```js
//static
var a = 10;
function foo() {}
```

Dynamic: any property of a programe that we can't find out at compile time or before running of the programme i.e called Dynamic property of the programme

```js
//dynamic
var a = Math.random(); // we can only know after execution only.
```

## 2. Static Typing Vs Dynamic Typing

in Statically typed language variables parameters and member of the objects have types that the compiler knows at compile time but in Javascript it behaves differently

```java
//in Java
int a = 10;
int b = 23;
String firstName = "Pratyush"
// we declare the types here before  the programme is executed.
```

```js
//in JavaScript
var a = 10;
var a = "Pratyush";
// we can change the type of the variable during execution
```

## 3. Static Type Checking Vs Dynamic Type Checking

- If you have type information, you can check whether a value that is transported to another location (via a function call, an assignment, etc.) has the correct type.
- Statically type-checked languages perform this kind of check at compile time, dynamically type-checked languages at runtime.
- A language can be both statically type-checked and dynamically type-checked.

ex:

```js
//in Javascript
var a = 10;
var b = "20";
console.log(a + b);
// 1020 iS printed as there's no typechecking here natively in js
```

for the same we use typescript

```ts
//in typescript
function sum(a: number, b: number): number {
  return a + b;
}
sum("5", "10");
// SHOWS ERROR AS : Argument of type 'string' is not assignable
// to parameter of type 'number'. ts(2345)
```

## 4. JS Types

JS has 6 (5 primitive + 1 object in ES5) types that are dynamically typed and (mostly) dynamically typed checked.

## 5. Coercion

In JavaScript, the main way of dealing with a value whose type doesn't fit is to coerce it to the correct type. Coercion means implicit type conversion.
Most operands coerce:

```js
console.log("3" * "4"); // 12
```

when two strings are multiplied its output is a number.
this is an example of implicit coercion. Here javascript internally changes the strings to type number for us

```js
const a = parseInt("3", 10);
const b = parseInt("4", 10);
console.log(a * b); // 12
```

this is an example of explicit typecasting.

```js
console.log("javascript".length); // 9
```

this is an example of autoboxing, here javascript internally boxes the string is converted into a object the its length is calculated and returned the object unboxs iteself into string .

## 6. == vs ===

== inherently converts type and === does not convert type.

Double Equals (==) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.

On the other hand, Triple Equals (===) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type.

### Example 1:

```js
const foo = "test";
const bar = "test";

console.log(foo == bar); //true
console.log(foo === bar); //true
```

The value and the type of both foo and bar is same. Therefore the result is true for both.

### Example 2:

```js
const number = 1234;
const stringNumber = "1234";

console.log(number == stringNumber); //true
console.log(number === stringNumber); //false
```

The value of number and stringNumber looks similar here. However, the type of number is Number and type of stringNumber is string. Even though the values are same, the type is not the same. Hence a == check returns true, but when checked for value and type, the value is false.

### Example 3:

```js
console.log(0 == false); //true
console.log(0 === false); //false
```

Reason: same value, different type. Type coercion

This is an interesting case. The value of 0 when checked with false is same. It is so because 0 and false have the same value for JavaScript, but when checked for type and value, the value is false because 0 is a number and false is boolean.

### When should you use == and when should you use ===?

When in doubt, use ===. This will save you from a ton of potential bugs.

If you are supporting a use case where you can be a little lenient about the type of incoming data, then use ==. For example, if an API accepts both "true" and true from the client, use ==. In short, do not use == unless you have a strong use case for it.
