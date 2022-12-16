---
title: "Chapter 4.1 Objects"
metaTitle: "Objects"
metaDesc: "Objects "
date: "2022-12-09"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# Objects in Javascript

Everything in JS is an object except the primitives

Anything that is not a primitive value is an Object. That includes arrays, functions, and objects themselves.

An object is a collection of properties.

A property is a named container for a value with some additional attributes.

The name of a property is called a key ; thus, an object can be considered as a collection of key-value pairs.

There are similar concepts in other programming languages,
e.g., Map, Dictionary, Associative Array, Symbol Table, Hash Table, ...

# Properties in Javascript

- all objects in JavaScript are maps (dictionaries) from
  strings to values.

- A (key, value) entry in an object is called a property . The key of a property is always a text string (ES5).

```js
let obj = {};
obj[1] = 10;
console.log(obj);
```

### output

```
{ '1': 10 }
//key : value
```

_3 Kinds of Properties_

- Properties (or named data properties)
- Accessors (or named accessor properties)
- Internal properties
  -> Exist only in the ECMAScript language specification.

# Creation of Objects

1. Literal Notation

```js
let obj = {};
//Creating an object using literal notation
```

```js
const obj = {
  firstName: "Alex",
  lastName: "Martin", // Using string quotes
  dateOfBirth: "18th October",
  friends: ["Bob", "Christine"],
};
```

- An object property name can be any valid JavaScript string, or anything that can be converted to a string including the empty string.
- The values can be any value type.
- The nesting of objects can be arbitrary and cyclic too.

2. Object Constructor

```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

- This effect of this code and the literal notation is the same.
- However, it is advised not to use this pattern.

3. Object.create

```js
const newObj = Object.create(Object.prototype);
newObj.name = "Pratyush";
```

- This lets you specify the "prototype" of an object atthe time of definition.

# Function as key values

- In an object, when we have a function as a value to a key, then the function is called a method. This is one of the most important features of objects.
- The methods have access to the key-value pairs of the object.

- They can specify behavior in an object.

```js
const objl = {
  fName: "ALEX",
  Name: "MARTIN",
  printFullName() {
    return this.fName + " " + this.lName;
  },
};

objl.printFullName();
//=> 'ALEX MARTIN'
```

# Accessing Properties

1.  Dot and Bracket Notation
    Note: Accessing non-existing properties give “undefined”

```js
var jane = {
  name: "Jane",
  "desc.func": function () {
    return "Person named " + this.name;
  },
};
console.log(jane.name); // Jane
console.log(jane["desc.func"]); // function
console.log(jane.abcd); // undefined
```

### Output

```
"Jane"
function() {
  return "Person named " + this.name;
}
undefined
```

# Adding / Updating Properties
