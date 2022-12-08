---
title: "Chapter 2.2 Closures examples"
metaTitle: "Closures examples "
metaDesc: "Closures"
date: "2022-09-14"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

**We will be covering 7 examples of closures and see how it works in different situations in this chapter**

# Example 1

```js
let count = 0;
setTimeout(function () {
  count++;
  console.log(`In setTimeout - ${count}`); //
}, 1000);
console.log(`${count}`); //2
```

## Output

```
0
In setTimeout - 1
```

We begin count as 0 and the setTimeout callback will only happen after 1s / 1000ms so the 2nd console log will execute first giving the value of count as 0. after 1s the callback happens and increments the count value hence we get the above output.

# Example 2

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

## Output

```
3
3
3
```

Why not 0 1 2 instead of 3 3 3? Lets see es5 and es6 solutions to get 0 1 2

In es6 we should use block level modifiers i,e let instead of var to achieve 0 1 2 just as shown below

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
```

## Output

```
0
1
2
```

in es5 We create a function and execcute that with other function shown below by making a Immediately invoked function expression.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(
    (function logger(i) {
      console.log(i);
    })(i),
    100
  );
}
```

## Output

```
0
1
2
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

globally x = 10, in module level x= 5

according to the rules of closure the only variable a scope can access should be there in the parent so x is assigned as 5

## Output

```
5
```

# Example 4

```js
var a = 100;

function abc(x) {
  //x = 20
  var a = 10;
  return function (y) {
    //y = 5
    return a + y; // 10 + 5
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

## Output

```
15
```

# Example 5

```js
(function immediateA(a) {
  // a = 0
  return (function immediateb(b) {
    // b = 1
    console.log(a); // 0
  })(1);
})(0);
```

## Output

```
0
```

# Example 6

```js
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
```

## Output

```
Count is 0
```

seems awkward right? you might be thinking `increment()` is incrementing but printing 0?
lets log count and see what is printed 1st

```js
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(count); // 3
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
```

## Output

```
3
```

why?
message is stored when the count is zero and isn't updated.
increment() is changing the count and not the message. as there is no code which asks the message to be updated everytime the increment happens.

if we want to see the message to be updated then we have to do changes in the following way.

```js
function createIncrement() {
  let count = 0;
  let message;
  function increment() {
    count++;
    let message = `Count is ${count}`;
  }

  function log() {
    console.log(count); // 3
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
```

## Output

```
Count is 3
```

# Example 7

```js
function createUser(initialName) {
  let name = intialName;
  return {
    getname() {
      return name;
    },
    setname(newName) {
      name = newName;
    },
  };
}
let p1 = createUser("Pratyush");
let p2 = createUser("Javascript");
p2.setName(null);
console.log(p1.getName());
```

## Output

```
Pratyush
```

when we execute `createUser()` it creates its own custom space that is specific to that variable in this case `p1` like this

`{name = 'Pratyush', {getName, setName}}`
