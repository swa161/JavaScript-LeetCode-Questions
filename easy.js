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
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init
    let val = fn(init, nums[0])
    for (let i = 1; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
console.log(reduce(nums, fn,init))
