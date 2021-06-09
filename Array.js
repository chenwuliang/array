require("./data.json")

Array.prototype.max = function (...arg) {
    const len = this.length
    if (len === 0) return
    let max = this[0]
    for (let i = 0; i < len; i ++) {
        if (this[i] > max) {
            max = this[i]
        }
    }
    return max
}

Array.prototype.min = function (...arg) {
    const len = this.length
    if (len === 0) return
    let min = this[0]
    for (let i = 0; i < len; i ++) {
        if (this[i] < min && typeof this[i] === "number") {
            min = this[i]
        }
    }
    return min
}

Array.prototype.unique = function () {
    return [...new Set(this)]
}

/**
 *   删除数组中所有传入的元素
 *   @param []
 */
Array.prototype.delete = function (...arg) {
    if (arg.length === 0) return
    for (let i = 0; i < arg.length; i ++) {
        let index = this.indexOf(arg[i])
        while (index !== -1) {
            this.splice(index, 1)
            index = this.indexOf(arg[i])
        }
    }
    return this
}

/**
 * 数组去空 （null, undifined）
 */
Array.prototype.trim = function () {
    // this.delete(undefined) 无法删除 empty 数组元素？
    return this.filter(t => t !== undefined && t !== null);
}

Array.prototype.sum = function () {
    const len = this.length
    let sum = 0
    this.trim()
    for (let i = 0; i < len; i ++) {
        if (typeof this[i] === "number" || !isNaN(this[i] - 0)) {
            sum += (this[i] - 0)
        }
    }
    return sum
}

Array.prototype.each = function (callback) {
    const len = this.length
    for (let i = 0; i < len; i += 1) {
      callback(this[i], i)
    }
    return this
}

Array.prototype.count = function (callback) {
    const len = this.length
    let result = 0
    for (let i = 0; i < len; i += 1) {
      if (callback(this[i], i)) result+=1
    }
    return result
}

Array.prototype.select = function (callback) {
    const len = this.length
    let result = []
    for (let i = 0; i < len; i += 1) {
      if (callback(this[i], i)) result.push(this[i])
    }
    return result
}