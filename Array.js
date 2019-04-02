Array.prototype.max = function (...arg) {

    if (this.length === 0) return

    let max = this[0]

    for (let i = 0; i < this.length; i ++) {

        if (this[i] > max) {
            max = this[i]
        }
    }

    return max
}

Array.prototype.min = function (...arg) {

    if (this.length === 0) return

    let min = this[0]

    for (let i = 0; i < this.length; i ++) {

        if (this[i] < min) {
            min = this[i]
        }
    }

    return min
}

/**
 *  数组去重
 */
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
