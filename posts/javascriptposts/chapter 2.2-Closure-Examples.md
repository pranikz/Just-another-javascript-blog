---
title: "Chapter 2.2 Closures examples"
metaTitle: "Closures "
metaDesc: "Closures"
socialImage: images/closures.png
date: "2022-09-14"
tags:
  - javscript, nextjs
---

**We will be covering 7 examples of closures and see how it works in different situations in this chapter**

# Example 1

```js
let count = 0;
setTimeout(function () {
  count++;
  console.log(`In setTimeout - ${count}`);
}, 1000);
console.log(`${count}`);
```

# Example 2

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

```js
for (let i = 0; i < 3; i++) {
  setTimeout(
    (function logger(i) {
      console.log(i);
    })(i),
    100
  );
}
```

# Example 3

```js
function a() {
  let fn;
  {
    var x = 5;
    fn = function () {
      console.log(x);
    };
  }
  return fn;
}

var x = 10;
const b = a();
b();
```

# Example 4

```js
var a = 100;

function abc(x) {
  var a = 10;
  return function (y) {
    return a + y;
  };
}
a = 50;
var inner = abc(20);
function foo() {
  var a = 30;
  console.log(inner(5));
}
foo();
```

# Example 5
