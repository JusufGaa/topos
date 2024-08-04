import { Notifier } from "./notifier";

export class List {
    #datas;
    #datasChangeNotifier;
    #listeners;
    constructor(length) {
        if (typeof length === 'number') {
            this.#datas = new Array(Math.max(0, length | 0));
        } else {
            this.#datas = [];
        }
        this.#datasChangeNotifier = new Notifier();
        this.#listeners = {};
    }

    addEventListener(type, listener){
        const listeners = this.#listeners[type] || {};
        this.#datasChangeNotifier.addListener
        this.#listeners[type] = listeners;
    }

    at(index, copy = true) {
        const i = Number.isInteger(index) ? index : parseInt(index),
            len = this.#datas.length;
        if (i >= len) {
            return undefined;
        }
        if (i >= 0) {
            const result = this.#datas[i];
            return (copy || !('clone' in result)) ? result : result.clone();
        }
        const temp = len + i;
        if (temp < 0) {
            return undefined;
        }
        const result = this.#datas[temp];
        return (copy || !('clone' in result)) ? result : result.clone();
    }

    concat(...values) {
        const datas = this.#datas.concat(),
            result = new List(),
            len = values.length;
        if (len < 1) {
            result.#datas = datas;
            return result;
        }
        for (let i = 0; i < len; ++i) {
            const value = values[i];
            if (value instanceof List) {
                datas.push(...value.#datas);
            } else if (value instanceof Array) {
                datas.push(...value);
            } else if (value[Symbol.isConcatSpreadable] && ('length' in value)) {
                const temp = new Array(value.length),
                    keys = Object.keys(value);


            } else {
                datas.push(value);
            }
        }
        result.#datas = datas;
        return result;
    }
    copyWithin() {
        throw Error('The method or operation is not implemented.');
    }
    fill() {
        throw Error('The method or operation is not implemented.');
    }
    find() {
        throw Error('The method or operation is not implemented.');
    }
    findIndex() {
        throw Error('The method or operation is not implemented.');
    }
    findLast() {
        throw Error('The method or operation is not implemented.');
    }
    findLastIndex() {
        throw Error('The method or operation is not implemented.');
    }
    lastIndexOf() {
        throw Error('The method or operation is not implemented.');
    }
    get length() {
        return this.#datas.length;
    }
    pop() {
        throw Error('The method or operation is not implemented.');
    }
    push() {
        throw Error('The method or operation is not implemented.');
    }
    reverse() {
        throw Error('The method or operation is not implemented.');
    }
    shift() {
        throw Error('The method or operation is not implemented.');
    }
    unshift() {
        throw Error('The method or operation is not implemented.');
    }
    slice() {
        throw Error('The method or operation is not implemented.');
    }
    sort() {
        throw Error('The method or operation is not implemented.');
    }
    splice() {
        throw Error('The method or operation is not implemented.');
    }
    includes() {
        throw Error('The method or operation is not implemented.');
    }
    indexOf() {
        throw Error('The method or operation is not implemented.');
    }
    join() {
        throw Error('The method or operation is not implemented.');
    }
    keys() {
        throw Error('The method or operation is not implemented.');
    }
    entries() {
        throw Error('The method or operation is not implemented.');
    }
    values() {
        throw Error('The method or operation is not implemented.');
    }
    forEach() {
        throw Error('The method or operation is not implemented.');
    }
    filter() {
        throw Error('The method or operation is not implemented.');
    }
    flat() {
        throw Error('The method or operation is not implemented.');
    }
    flatMap() {
        throw Error('The method or operation is not implemented.');
    }
    map() {
        throw Error('The method or operation is not implemented.');
    }
    every() {
        throw Error('The method or operation is not implemented.');
    }
    some() {
        throw Error('The method or operation is not implemented.');
    }
    reduce() {
        throw Error('The method or operation is not implemented.');
    }
    reduceRight() {
        throw Error('The method or operation is not implemented.');
    }
    toReversed() {
        throw Error('The method or operation is not implemented.');
    }
    toSorted() {
        throw Error('The method or operation is not implemented.');
    }
    toSpliced() {
        throw Error('The method or operation is not implemented.');
    }
    with() {
        throw Error('The method or operation is not implemented.');
    }
    toLocaleString() {
        return this.#datas.toLocaleString();
    }
    toString() {
        return this.#datas.toString();
    }
}