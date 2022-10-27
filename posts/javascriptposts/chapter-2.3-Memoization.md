---
title: "Chapter 2.3 Memoization"
metaTitle: "Memoization "
metaDesc: "Closures"
date: "2022-09-14"
tags:
  - javscript, nextjs
---

**We will be covering lodash's memoize and will try to implement it in our way here**

# What is memoization?

It is an optimisation technique used primarily to speed up computer programmes by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Using Lodash memoization :

Here's a short code explaing the implementation Memoization using lodash

```js
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time();
console.log(fibonacci(1));
console.timeEnd();
```

let us execute the fibonaccifunction and see different run times for the following runs

1. when n = 20
   output:

   ```
   6765
   time: 4.303ms
   ```

2. when n = 42
   output:

   ```
   267914296
   time: 3.749s
   ```

3. in this case the programme behaves more wierdly taking n = 45

```js
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time();
console.log(fibonacci(45));
console.log(fibonacci(45));
console.timeEnd();
```

output:

```
1134903170
1134903170
time: 31.893s
```

Can you see a massive difference in runtime here?

Now for every run we cannot wait for 31+ seconds to give us the output for the same inputs. to avoid that we use memoization techniques

now using memoization (with the help of lodash)
taking n = 45 twice again

```js
var memoize = require("lodash/memoize");
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const fibM = memoize(fibonacci);
console.time();
console.log(fibM(45));
console.log(fibM(45));
console.timeEnd();
```

output:

```
1134903170
1134903170
time: 17.086s
```

Can you notice the massive runtime difference betwwen the memoize and non memoized programme?
17s vs 31.9s

it might look small here but it helps us save time and compute resources by caching the return values of expensive function calls

## How to implement is without using any 3rd party packages like lodash?

let's have a look how to implement this cost saving function on our own

```js
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const fibM = memoize(fibonacci);
console.time();
console.log(fibM(45));
console.timeEnd();
console.time();
console.log(fibM(45));
console.timeEnd();
console.time();
console.log(fibM(45));
console.timeEnd();
```

output:

```
1134903170
time: 16.161s
1134903170
time: 0.096ms
1134903170
time: 0.1ms
```

As we can see the caching function works perfectly we have successfully implemented memoization on our own.
