---
title: "Chapter 2.1 Closures basics"
metaTitle: "Basics of Closures "
metaDesc: "Closures"
date: "2022-09-14"
tags:
  - javscript, nextjs
---

**We will be covering 4 topics in this chapter**

# Chapter 2.1 - Closures

1. Why learn about Closures?
2. Scope
3. What are Closures?
4. Where is it used?

Before diving deep lets see this code example:

### what is logged here ??

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}
```

did u you got this:

```
3
3
3
```

lets see how we got this!

## 1. Why learn about Closures?

- it is a fundamental concept of JS - we use this concept heavily in JS for examples: whenever we pass callbacks to .map .reduce .foreach there's a chance that we use closures here
- one of the most common type of questions asked in JS interviews
- Heavily used in React while making Components (High order components / functions)
- Similar concepts exist in other languages such as Python

## 2. Scope

_By defination_ : The scope is an enclosing context in which a variable is associated with a value and is accessible.

![Image](https://res.cloudinary.com/dg6y2dtpl/image/upload/v1664534471/just-another-jsblog/scope_r1ukwf.png)

in this diagram the outer most scope is called the _Global Scope_ and there are ested scope such as _foo Scope_ and _if Scope_

- _Global Scope_ has x= 10
- _Foo Scope_ has x = 20
- _if Scope_ has x=30

depending on which scope you are accesing x from you will get your value of x accordingly. X will be different when you acces it from differet scopes.

lets see aother example:

```js
let myName = "in module Scope"; // it is module scope

function printName() {
  console.log(myName);
}
printName(); // logs 'in module Scope'
myName = "name changed";
printName(); //logs 'name changed'
```

From ES6 onwards the top level scope is considered as module which we called global scope for a file in ES5

In this case the myName is accesible through out the module scope the we have to call the function printName() which is also in the module scope and can access myName using closure concepts.

### Nesting of scopes

Here scopes are nested within each other.

lets see this example

```js
let myName = "Pratyush";

function printer(addExclamation) {
  function printName() {
    let newName = myName;
    if (addExclamation) {
      newName = myName + "!";
    }
    console.log(`Old name ${myName}`);
    console.log(`New name ${newName}`);
  }
  return printName;
}

const printNameFn1 = printer(false);
const printNameFn2 = printer(true);

console.log(`Print func 1`); //before name change

printNameFn1();

console.log(`Print func 2`); //before name change with !

printNameFn2();

myName = "another name"; // name changed

console.log(`Print func 1 name change`); //after name change

printNameFn1();

console.log(`Print func 2 name change`); //after name change with !

printNameFn2();
```

Here we can see theres a _printer_ function which has a parameter _addExclaimation_. Also moving forward we see there's an another inner function called _printName_ inside _printer_ function. in Javascript we can define function inside a function ad that's exactly where closures come into play.

now we can see that there is a function printName written inside printer function called print name which can access all the elements of printer function as well as print name itself as printer function comes under the module/global scope.

1. when we execute

```
const printNameFn1 = printer(false);
```

it prints

```
"Old name Pratyush"
"New name Pratyush"
```

2. when we execute

```
const printNameFn2 = printer(true);
```

it prints

```
"Old name Pratyush"
"New name Pratyush!"
```

3. then after name change whe we execute

```
printNameFn1();
```

it prints

```
"Old name another name"
"New name another name"
```

4. then after name change whe we execute

```
 printNameFn2();
```

it prints

```
"Old name another name"
"New name another name!"
```

## 3. lexical scope

In static scoping, an identifier refers to its nearest lexical

"Lexical" can be understood as "nesting of scopes that is visible by looking at the source code"

let's see an example related to the same.

```js
let myName = "Pratyush";

function scope1() {
  //parent scope
  let valofScope1 = 1;
  return function innerScope() {
    // child scope
    let valofInnerScope = 2;
    console.log(`${valofScope1} and ${valofInnerScope}`);
  };
}
const innerFn = scope1(); // acc
innerFn();
```

## 3. What are Closures?

A closure refers to the ability of a function to

- remember its lexical parent scope

- has read/write access to variables defined in the parent environment

```js
function a() {
  var x = 5;
  return function () {
    console.log(x);
  };
}

var x = 10;
const b = a();
b();
```

if we try to execute it what is going to be logged?

The inner function is going to remember its own lexical parent i.e `function ()` will only remember `function a()` so if x is not found inside `function ()` scope it will be found in `function a ()` scope.

for now the value of x is 5 when the programme is executed

but what if we comment out x=5 inside `function a ()` scope? lets see.

```js
function a() {
  // var x = 5;
  return function () {
    console.log(x);
  };
}

var x = 10;
const b = a();
b();
```

when x= 5 doesnot exist it will go to the global scope and will assign x= 10 and now it prints x=10

## 3. Where it is used

1. **Event Handlers**

   Every function callback you give to an event handler is essentially a closure function. for example:

```js
let countClicked = 0;
myButton.addEventListner("click", function handleClick() {
  countClicked++;
  console.log(`The button was clicked ${countClicked} times.`);
});
```

2. **Callbacks**

if you have a variable that exists outside callback in global scope and you want to perform some operations with that variable inside the callback then you can apply the concept of closures to execute it. for example:

```js
const message = "Hello, World!";
setTimeout(function callback() {
  console.log(message);
}, 1000); // 1000ms delay
```
