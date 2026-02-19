# JavaScript-LeetCode-Questions
### 67 Add Binary
 - `parseInt(a ,2)` will not parse the binary string into number correctly because of the integer overflow, JS standard number follows the IEEE 754 floating-point starndard.
 - The limit is 2^53 - 1, which is `Number.MAX_SAFE_INTEGER`.
 - The constraints of this questions describes the length of b is 10^4, in binary it is 2^10000 which is way larger than the safe limit.
 - Use `BigInt('0b' + BinaryString)`. `0b` is a prefix stands for binary

### 2620 Counter
 - Post-increment `(n++)` and Pre-increment `(++n)`
 - When using `n++`, the increment happens in two distinct steps.
    1. Return the current value of n.
    2. Increment the value of n by 1.
 - When using `++n`, the increment happens first then return the new value.
 - When the createCounter finishes running, its variable (such as n) would be deleted from the memory. However, because the inner function references n, JavaScript keeps n 'alive' in a private space that only the inner function can see.

 ### 2621 Sleep
 - `new Promise()` creates a Promise object.
 - We can pass in  two methods resolve  and reject. ```new Promise((resolve, reject) => {resolve(1)})```


 ### 2629 Function Composition
 - To spread an array so that its element are treated as individual arguments is called Spreading.
 - Use the three dot operator to spread an array. `...Array`
 - ```compose = (...funcs) => (initialValue) => funcs.reduceRight((acc, fn) => fn(acc), initialValue) ```
 - first call `const f = compose(f1,f2,f3)` gives a function `(initialValue) => funcs.reduceRight((acc, fn) => fn(acc), initialValue)`
 - second call `f(x)` gives the value.
 - alternatively we can use a for loop and loop backwards.


 ### 2634 Filter Elements from Array
 - In JavaScript, functions do not enforce arity (the number of parameters a function declares). 
 - Which means we can pass more or fewer arguments than parameters.

 ### 2648 Generate Fibonacci Sequence
 - The `*` denotes a `Generator Function`
 - `yield` is the keyword used inside a generator function. It's like a `return` that does not end the function, it just pauses the functions.
 - **The Iterator**: When call a generator function, it does not actually run the code inside, it returns a **Generator Object** (an iterator).
 - **At the end of yield rememeber to add a semicolon**.

### 2665. Counter 2
 - `return {}` returns an object

### 2695 Array Wrapper
 - `func() {}`: its value of `this` depends on who called the function.
 - Or use `func: function() {}`
 - `() => {}`: it "captures" the `this` from the surrounding code where it was created. like window or global.

 ### 2715 Timeout Cancellation
 - In JavaScript, `setTimeout` creates a timer that will execute regardless of what happends later.
 - **Unless** the developer explicitly tell the browser or Node.js to kill that specific timer ID.
 - When calling setTimeout, it returns a numeric ID. `const timerID = setTimeout()`
 - Use `clearTimeout(timerID)` to stop the running `setTimeout`.

 ### 2723 Add Two Promises
 - shorthand of `new Promise(resolve => resolve())` is `Promise.resolve()`

 ### 2724. Sort By
 - `Function Reference` returns the body of the function.
 - `Function Invocation` executes the function.

 ### 2726. Calculator with Method Chaining
 - In order to allow method chaining for a class, the methods within it needs to return the class itself using `keyword` `this`. e.g `return this`

 ### 2727 Is Object Empty
 - use `Array.isArray()` to check is the value is an Array.
 - **Or** Alternatively we can use `Object.prototype.toString.call(value)` to check the type of the value.
 - For this question, we can just use a for loop to check if there is anything in the value.

 ### 2618 Check if Object Instance of Class
 - In JavaScript, inheritance is achieved with the prototype chain. `.__proto__`
 - We can add methods to a class or object using `.prototype` keyword.
 - To find out the prototype of a object, we can use the function `Object.getPrototypeOf(obj)`
 - **setting a prototype** using `const childObject = Object.create(parentObject)` childObject inherits the property of parentObject 
 - `new` keyword  transform a fucntion into a `Constructor`, only works with constructor functions or classes.
   - it creates a new empty object
   - sets the `__proto__` of this new object to the construcor function's `.prototype`. This is how the new object inherits methods.
 

 ### 2622. Cache With Time Limit
 - Use `new Map()` to create a new key value pair.
 - `![alt text](image.png)`
