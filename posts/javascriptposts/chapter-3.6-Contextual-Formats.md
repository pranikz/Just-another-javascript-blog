---
title: "Chapter 3.5 Contextual Formats"
metaTitle: "Contextual Formats"
metaDesc: "Contextual Formats "
date: "2022-12-09"
author: Pratyush M
socialImage: pratyush.jpg
tags:
  - javscript, nextjs
---

# "new" binding

- Constructor functions “construct” objects. They are equivalent to classes in other languages.

- Since JavaScript has no concept of a class (even though it has class keyword), functions rise up to the task.

- A function, when used with the new operator, is called a constructor function. The new operator changes the behavior of the function.

let us see an example

```js
function Person(name) {
  // here this refers to Global execution context
  this.name = name;
}
Person("Pratyush"); // this becomes global as we are passing the argument here
console.log(global.name);
```

### Output

```
Pratyush
```

how to prevent this? use strict :)

```js
"use strict";
function Person(name) {
  this.name = name;
}
Person("arfat");
console.log(global.name);
```

### Output

```
TypeError: Cannot set properties of undefined (setting 'name')
    at Person (/home/runner/LumpyModestMp3/index.js:12:13)
    at Object.<anonymous> (/home/runner/LumpyModestMp3/index.js:14:1)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
```

to rectify the above thing we can use new binding

```js
"use strict";
function Person(name) {
  // this = {}
  this.name = name;
  // return this
}

const person1 = new Person("Pratyush");
const person2 = new Person("Mahapatra");

console.log(person1, "=>", typeof person1);
console.log(person2, "=>", typeof person2);
```

### Output

```
Person { name: 'Pratyush' } => object
Person { name: 'Mahapatra' } => object
```

when the new is used this becomes an empty object

- In DOM event handler this is set fo the element the event fired from
  - target = element that triggered event;
  - currentTarget = element that listens to event.
- In an inline event handler
  When the code is called from an inline on-event handler, its this is set to the DOM element on which the listener is placed:

lets see an live example below :

/i/https://stackblitz.com/edit/js-b14jup?ctl=1&devToolsHeight=33&embed=1&file=index.html&hideExplorer=1&hideNavigation=1

here we have a script where we are displaying the

- target = element that triggered event
- currentTarget = element that listens to event when we click any of the two lists.

- In ES6 modules this is bound to undefined (if script file doesnot have anything in it)

```html
<script src="script.js" type="module"></script>
```

- In Node CJS modules this is bound to the exports obejct not global.

```js
function returnGlobalThis() {
  return this;
}

console.log(returnGlobalThis() === global);

console.log(this === global);

console.log(this === exports);
```

### Output

```
true
false
true
```
