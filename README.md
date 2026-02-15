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