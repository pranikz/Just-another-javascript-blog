---
title: "Chapter 3.4 Apply keyword"
metaTitle: "Apply"
metaDesc: "Apply keyword"
date: "2022-09-14"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# .apply()

The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed.

In apply, arguments you can pass an argument as an array literal or a new array object.

```js
fn.apply(thisObj, argumentsArray);
```

or

```js
fn.apply(thisObj, [args1, args2, ...]);
```

arguments is a special object available inside a function. It contains values of the arguments that are passed to a function. You can use this keyword with the apply function to take any number of arbitrary arguments.

The best part about apply is we don’t need to take care of the number of arguments that are passed to the invoking function. Because of its dynamic and versatile nature, you can use it in complicated situations.

let us see an example implementing apply

```js
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);
var min = Math.min.apply(null, numbers);
console.log(min);
```

### Output

```
7
2
```

### Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts,a single array of arguments.

With call, you have to know the arguments at compile time. With apply, you can defer that decision at runtime.

let us see an example implementing both

```js
var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function (snack, hobby) {
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

pokemonName.call(pokemon, "sushi", "algorithms"); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon, ["sushi", "algorithms"]); // Pika Chu  loves sushi and algorithms
```

### Output

```
"Pika Chu  loves sushi and algorithms"
"Pika Chu  loves sushi and algorithms"
```
