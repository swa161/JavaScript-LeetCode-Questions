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
let t = Date.now()

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
    // let a = 0
    // let b = 1
    // let counter = 0
    // while (true) {
    //     if (counter === 0) {
    //         yield 0
    //     } else if (counter === 1) {
    //         yield 1

    //     } else {
    //         let c = b + a
    //         a = b
    //         b = c
    //         yield c
    //     }
    //     counter += 1
    // }
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
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let counter = 0
    return function(...args){
        if (counter === 0) {
            counter += 1
            return fn(...args)
        } else {
            return
        }
    }
};


