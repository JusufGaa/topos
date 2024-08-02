export class List {
    #datas;
    constructor(length) {
        if (typeof length === 'number') {
            this.#datas = new Array(Math.max(0, length | 0));
        } else {
            this.#datas = [];
        }
    }
    at() {
        throw Error('The method or operation is not implemented.');
    }
    concat() {
        throw Error('The method or operation is not implemented.');
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