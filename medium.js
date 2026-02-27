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

//# 2624 Snail Traversal

// Array.prototype.snail = function (rowsCount, colsCount) {
//     if (rowsCount * colsCount !== this.length) return []
//     let res = []
//     for (let i = 0; i < this.length; i += rowsCount) {
//         res.push(this.slice(i, i + rowsCount))
//     }
//     let array2d = Array.from({ length: rowsCount }, () => Array.from({ length: colsCount }, () => 0))
//     for (let i = 0; i < res.length; i++) {
//         for (let j = 0; j < res[0].length; j++) {
//             if (i % 2 === 0) {
//                 array2d[j][i] = res[i][j]
//             } else {
//                 let a = res[0].length - 1
//                 array2d[j][i] = res[i][a - j]
//             }
//         }
//     }
//     return array2d
// }


Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return []

    let array2d = Array.from({ length: rowsCount }, () => Array.from({ length: colsCount }, () => 0))
    for (let col = 0; col < colsCount; col++) {
        for (let row = 0; row < rowsCount; row++) {
            let index = col * rowsCount + row
            if (col % 2 === 0) {
                array2d[row][col] = this[index]
            } else {
                array2d[rowsCount - 1 - row][col] = this[index]
            }
        }
    }
    return array2d
}



console.log(arr.snail(5, 4))