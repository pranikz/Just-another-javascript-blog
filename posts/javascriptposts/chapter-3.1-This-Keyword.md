---
title: "Chapter 3.1 This keyword"
metaTitle: "This "
metaDesc: "This keyword"
date: "2022-09-14"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# What does `this` keyword mean ?

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of `this` is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

In JavaScript, the `this` keyword refers to an object.

Which object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

1. In an object method, `this` refers to the _object_.
2. Alone, `this` refers to the _global object_.
3. In a function, `this` refers to the _global object_.
4. In a function, in strict mode, `this` is `undefined`.
5. an event, `this` refers to the element that received the event.
6. Methods like call(), apply(), and bind() can refer `this` to any object.

In javascript This keyword is not statically bound which implies we cannot determine what value does `this` keyword holds by simply looking at the function or the function defination, we also have to look for where the function is executed and how `this` value changes

Before moving forward lets look at the below questions to get a brief context about this and how it works

```js
const object = {
  firstName: "Pratyush",
  print: function () {
    console.log(this.firstName);
  },
};
setTimeout(object.print, 100);
```

### Output

```
undefined
```

```js
var object = {
  firstName: "Pratyush",
  friends: ["Subhankar", "Rajat"],
  loop: function () {
    this.friends.forEach(function (friend) {
      console.log(this.firstName + " knows " + friend);
    });
  },
};
object.loop();
```

### Output

```
"undefined knows Subhankar"
"undefined knows Rajat"
```

But instead of undefined Pratyush should come right? Not in this case.

Before we proceed ahead lets discuss briefly about Object Methods

## Object Methods

Methods are actions that can be performed on objects. That means in javascript functions can become methods when the functions are put inside an obejct
example:

```js
const object = {
  firstName: "Pratyush",
  print() {
    console.log(this.firstName);
  },
};
object.print();
```

### Output

```
"Pratyush"
```

## `this` inside methods ?

- Unlike other languages (like JAVA ), the `this` is not bound to any specific object in JavaScript
- The `this` value can be modified in a couple of ways.

  > 1. Default binding (when no obejct is supplied)
  > 2. Implicit binding (when an object is supplied naturally)
  > 3. Arrow functions (when arrow functions are used)
  > 4. Explicit binding (when call bind or apply is used)\*
  > 5. _new_ Binding (when `new` keyword is used)\*
  > 6. strict mode (when using `use strict` keyword)\*
  > 7. contextual (libraries or framework may change values for ex: Event emmiters)\*

  _\* : we are not covering here for now._

## Important Rules regarding `this` keyword

- `this` keyword is not an compile time binding but a run time binding i.e we cannot say what value will the `this` keyword will hold just by looking the code we have to execute that to find out the same.
- `this` keyword has nothing to do with where and how the function is declared but have everything to do how that function is called or invoked

## 1. Default binding

- standalone function invocation
- if no other binding rule matches, then it is default binding it sort of works like default catch-all rule.

```js
function print() {
  // points global in node.js
  // points window in a browser
  console.log(this.firstName);
}
print();
```

### Output

```
undefined
```

```js
global = {
  firstName: "Pratyush",
};

function print() {
  // points global in node.js
  // points window in a browser
  console.log(this.firstName);
}
global.print = print;
global.print();
```

### Output

```
Pratyush
```

## 2. Implicit binding

Implicit binding rule says that it's adjoining object which should be used for the function call's this binding

```js
function foo() {
  // here this = object when called like object.foo()
  console.log(this.a);
}
const object = { a: 2, foo: foo };
foo(); // global context  has a: undefined
object.foo();
```

### Output

```
undefined
2
```

lets see one problem that can occur :

### Implicit lost

One of the most common frustrations that `this` binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or `undefined`, depending on strict mode.

```js
function foo() {
  console.log(this === global);
  // here this = object when called like object.foo()
  console.log(this.a);
}
const object = { a: 2, foo: foo };
var fn = object.foo;
fn(); // refers to the global scope
console.log("-----------");
object.foo(); // refers to the  object scope
```

### Output

```
true
undefined
-----------
false
2
```

### Pitfalls

loosing this while extracting a method.

```js
var counter = {
  count: 0,
  increment: function () {
    console.log("increment was called.");
    this.count++;
  },
};
var fn = counter.increment;
fn();
setTimeout(counter.increment, 1000);
setTimeout(() => {
  console.log(counter.count);
}, 2000);
setTimeout(() => {
  console.log(global.count);
}, 2000);
```

### Output

```
increment was called.
0
NaN
```

- we have called the value of `counter.increment` as a function
- Hence this is the global object and we have performed window.count++
- window.count doesnot exist and is undefined applying ++ operators sets it to NaN

## 3. Arrow function

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

```js
let myFunction = (a, b) => a * b;
```

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

```js
const arr = [1, 2, 3];
const squares = arr.map((x) => x * x); // one parameter
```

the complete list of variables whose values are determined lexically is :

- arguments
- super
- this
- new.target

If we look into the very first question we can make it work like this:

1. keeping this under a scoped variable

```js
var object = {
  firstName: "Pratyush",
  friends: ["Subhankar", "Rajat"],
  loop: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.firstName + " knows " + friend);
    });
  },
};
object.loop();
```

### Output

```
Pratyush knows Subhankar
Pratyush knows Rajat
```

2. bind()

```js
var object = {
  firstName: "Pratyush",
  friends: ["Subhankar", "Rajat"],
  loop: function () {
    this.friends.forEach(
      function (friend) {
        console.log(this.firstName + " knows " + friend);
      }.bind(this)
    );
  },
};
object.loop();
```

### Output

```
Pratyush knows Subhankar
Pratyush knows Rajat
```

3. a thisValue for forEach()

```js
var object = {
  firstName: "Pratyush",
  friends: ["Subhankar", "Rajat"],
  loop: function () {
    this.friends.forEach(function (friend) {
      console.log(this.firstName + " knows " + friend);
    }, this);
  },
};
object.loop();
```

### Output

```
Pratyush knows Subhankar
Pratyush knows Rajat
```

4. Using Arrow functions

```js
var object = {
  firstName: "Pratyush",
  friends: ["Subhankar", "Rajat"],
  loop: function () {
    this.friends.forEach((friend) => {
      console.log(this.firstName + " knows " + friend);
    });
  },
};
object.loop();
```

### Output

```
Pratyush knows Subhankar
Pratyush knows Rajat
```
