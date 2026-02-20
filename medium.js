//#2618 Check if Object Instance of Class

var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
        return false
    }
    let objProto = Object.getPrototypeOf(obj);
    let classProto = classFunction.prototype;
    while (objProto !== null) {
        if (classProto === objProto) {
            return true
        }
        objProto = Object.getPrototypeOf(objProto)
    }
    return false
};

//#2622. Cache With Time Limit
var TimeLimitedCache = function () {
    this.obj = new Map()
    this.timer = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const exist = this.obj.has(key)
    if (exist) {
        clearTimeout(this.timer.get(key))
    }
    this.obj.set(key, value)
    const timerId = setTimeout(() => {
        this.obj.delete(key)
        this.timer.delete(key)
    }, duration)
    this.timer.set(key, timerId)
    return exist;
};

TimeLimitedCache.prototype.get = function (key) {

    return this.obj.get(key) ? this.obj.get(key) : -1
};

TimeLimitedCache.prototype.count = function () {
    return this.obj.size
};


//#2623. Memoize
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    this.cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args)
        console.log(key)
        if (this.cache.has(key)) {
            return this.cache.get(key)
        }
        const value = fn(...args)
        this.cache.set(key, value)
        return value
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 