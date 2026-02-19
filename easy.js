//#67. Add Binary
var addBinary = function (a, b) {
    const num1 = BigInt('0b' + a)
    const num2 = BigInt('0b' + b)
    const ans = (num1 + num2).toString(2)
    return ans

};

//#2620.Counter


var createCounter = function (n) {

    return function () {
        return n++
    }
}

//#2621 Sleep

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("resolved") }, millis)
    })
    // return new Promise(resolve => setTimeout(resolve,millis))
}

//#2626. Array Reduce Transformation

var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init
    let val = fn(init, nums[0])
    for (let i = 1; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val
};

//#2629. Function Composition
var compose = function (functions) {

    return function (x) {
        if (functions.length === 0) { return x }
        const compose = (...funcs) => (initialValue) => funcs.reduceRight((acc, fn) => fn(acc), initialValue)
        const func = compose(...functions)
        return func(x)
    }
};

//#2634. Filter Elements from Array
var filter = function (arr, fn) {
    let ans = []
    arr.forEach((value, index) => {
        if (fn(value, index)) {
            ans.push(value)
        }
    })
    return ans
};

//#2635. Apply Transform Over Each Element in Array
var map = function (arr, fn) {
    let ans = []
    arr.forEach((v, i) => {
        ans.push(fn(v, i))
    })
    return ans
};

//#2648. Generate Fibonacci Sequence
var fibGenerator = function* () {
    let curr = 0
    let next = 1
    while (true) {
        yield curr;
        [curr, next] = [next, curr + next]
    }
}

//#2665. Counter 2

var createCounter = function (init) {
    let a = init
    return {
        increment: () => {
            return ++a
        },
        decrement: () => {
            return --a
        },
        reset: () => {
            a = init
            return a
        }
    }
};

//2666. Allow One Function Call
var once = function (fn) {
    let counter = 0
    return function (...args) {
        if (counter === 0) {
            counter += 1
            return fn(...args)
        } else {
            return
        }
    }
};

//#2667. Create Hello World Function
var createHelloWorld = function () {

    return function (...args) {
        return "Hello World";
    }
};

//#2677. Chunk Array
var chunk = function (arr, size) {
    let ans = []

    for (let i = 0; i < arr.length; i += size) {
        ans.push(arr.slice(i, i + size))
    }
    return ans
};

//#2695. Array Wrapper
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums
    }
    valueOf() {
        return this.nums.reduce((acc, curr) => acc + curr, 0)
    }
    toString() {
        // const res = '[' + this.nums.join(",") +']'
        return `[${this.nums.join(",")}]`
    }
}

//#2703. Return Length of Arguments Passed
var argumentsLength = function (...args) {
    return args.length;
};

//#2704. To Be Or Not To Be
var expect = function (val) {
    return {
        toBe(v) {
            if (v !== val) {
                throw new Error("Not Equal")
            }
            return true
        },
        notToBe(v) {
            if (v === val) {
                throw new Error("Equal")
            }
            return true
        }
    }
};

//#2715. Timeout Cancellation
var cancellable = function (fn, args, t) {
    const timer = setTimeout(() => fn(...args), t)
    return () => {
        clearTimeout(timer)
    }
};

//#2723. Add Two Promises
var addTwoPromises = async function (promise1, promise2) {
    const res1 = await promise1
    const res2 = await promise2
    return Promise.resolve(res1 + res2)
};

//#2724. Sort By
var sortBy = function (arr, fn) {
    function comparefn(a, b) {
        if (fn(a) > fn(b)) {
            return 1;
        } else {
            return -1;
        }
        return 0;
    }
    return arr.sort(comparefn)
};

//#2725. Interval Cancellation
var cancellable = function (fn, args, t) {
    fn(...args)
    const intervalId = setInterval(() => fn(...args), t)
    return () => {
        clearInterval(intervalId)
    }
};

//#2726. Calculator with Method Chaining
class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed")
        }
        this.value /= value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value)
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value
    }
}

//# 2727. Is Obejct Empty
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let length = 0
    if (Array.isArray(obj)) {
        length = obj.length
    } else if (typeof obj === 'object') {
        length = Object.keys(obj).length
    }
    return length === 0
};

obj = {}
a =Object.prototype.toString.call(obj)
console.log(a)
console.log(a === '[object Object]')
console.log(isEmpty(obj))