export class Notifier {
    #listeners;
    #types;
    #maxIndex;
    constructor(types = []) {
        this.#listeners = null;
        if (types.length < 1) {
            this.#types = null;
        } else {
            this.#types = Array.from(new Set(types));
        }
        this.#maxIndex = 0;
    }
    #typeCheck(type) {
        return this.#types instanceof Array && this.#types.indexOf(type) >= 0;
    }
    #listenerIsSame(a, b) {
        if (a.key === b.key) {
            return true;
        }
        return a.type === b.type && a.listener === b.listener && a.scope === b.scope;
    }
    addListener(type, listener, scope = undefined) {
        if (typeof listener !== 'function' || !this.#typeCheck(type)) {
            return () => { };
        }
        const key = this.#addListenerCore(type, listener, scope);
        return () => {
            for (let i = this.#listeners.length - 1; i >= 0; --i) {
                const item = this.#listeners[i];
                if (item.key !== key) {
                    continue;
                }
                const times = Math.min(1, item.times | 0) - 1;
                if (times < 1) {
                    this.#listeners.splice(i, 1);
                } else {
                    item.times = times;
                }
                return;
            }
        };
    }

    #addListenerCore(type, listener, scope = undefined) {
        const temp = typeof scope === 'object'
            ? { type, listener, scope, key: this.#maxIndex++ }
            : { type, listener, key: this.#maxIndex++ };
        if (!(this.#listeners instanceof Array)) {
            this.#listeners = [temp];
            return temp.key;
        }
        if (this.#listeners.length < 1) {
            this.#listeners.push(temp);
            return temp.key;
        }
        for (let i = this.#listeners.length - 1; i >= 0; --i) {
            const item = this.#listeners[i];
            if (this.#listenerIsSame(item, temp)) {
                item.times = Math.min(1, item.times | 0) + 1;
                --this.#maxIndex;
                return item.key;
            }
        }
        this.#listeners.push(temp);
        return temp.key;
    }

    dispatch(type, event) {
        if (!(this.#listeners instanceof Array) || !this.#typeCheck(type)) {
            return;
        }
        const len = this.#listeners.length;
        if (len < 1) {
            this.#listeners = null;
            this.#maxIndex = 0;
            return;
        }
        for (let i = 0; i < len; ++i) {
            const item = this.#listeners[i];
            if (item.type !== type) {
                continue;
            }
            if (item.scope) {
                item.listener.call(item.scope, event);
            } else {
                item.listener(event);
            }
        }
    }

    removeListener(type, listener, scope) {
        if (typeof listener !== 'function'
            || !(this.#listeners instanceof Array)
            || this.#listeners.length < 1
            || !this.#typeCheck(type)) {
            return;
        }
        const temp = typeof scope === 'object'
            ? { type, listener, scope }
            : { type, listener };
        for (let i = this.#listeners.length - 1; i >= 0; --i) {
            const item = this.#listeners[i];
            if (this.#listenerIsSame(item, temp)) {
                const times = Math.min(1, item.times | 0) - 1;
                if (times < 1) {
                    this.#listeners.splice(i, 1);
                    if (this.#listeners.length < 1) {
                        this.#listeners = null;
                        this.#maxIndex = 0;
                    }
                } else {
                    item.times = times;
                }
                return;
            }
        }
    }
}