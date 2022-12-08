---
title: "Chapter 3.3 Call keyword"
metaTitle: "Call"
metaDesc: "Call keyword"
date: "2022-09-14"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

.call

The call() method calls a function with a given this value and arguments provided individually.

Syntax:

```js
fn.call(thisArg, arg1, arg2, ...);
```

Where,

- fn is a function that needs to be invoked with a different this object
- thisArg is an object or a value that needs to be replaced with the this keyword present inside the function func
- args1, args2 are arguments that are passed to the invoking function with the changed this object.

let us see an example implementing call

```js
function time() {
  var reply = [
    this.animal,
    " typically sleep between",
    this.sleepDuration,
  ].join();
  console.log(reply);
}
var cats = {
  animal: "cats",
  sleepDuration: " 12 and 16 hours",
};
var dogs = {
  animal: "dogs",
  sleepDuration: " 2 to 5 hours",
};
time.call(cats);
time.call(dogs);
```

### Output

```
"cats, typically sleep between, 12 and 16 hours"
"dogs, typically sleep between, 2 to 5 hours"
```
