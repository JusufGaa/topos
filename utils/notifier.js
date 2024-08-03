export class Notifier {
    #listeners;
    constructor() {
        this.#listeners = null;
    }
    addListener(listener, scope) {
        if (typeof listener !== 'function') {
            return;
        }
        if (!(this.#listeners instanceof Array)) {
            if (typeof scope === 'object') {
                this.#listeners = [{ listener, scope }];
            } else {
                this.#listeners = [{ listener }];
            }
            return;
        }
        if (this.#listeners.length < 1) {
            if (typeof scope === 'object') {
                this.#listeners.push({ listener, scope });
            } else {
                this.#listeners.push({ listener });
            }
            return;
        }
        const tempScope = typeof scope === 'object' ? scope : undefined;
        for (let i = this.#listeners.length - 1; i >= 0; --i) {
            const item = this.#listeners[i];
            if (item.listener === listener && item.scope === tempScope) {
                item.times = Math.min(1, item.times | 0) + 1;
                return;
            }
        }
        if (typeof scope === 'object') {
            this.#listeners.push({ listener, scope });
        } else {
            this.#listeners.push({ listener });
        }
    }

    dispatch(event) {
        if (!(this.#listeners instanceof Array)) {
            return;
        }
        const len = this.#listeners.length;
        if (len < 1) {
            this.#listeners = null;
            return;
        }
        for (let i = 0; i < len; ++i) {
            const item = this.#listeners[i];
            if (item.scope) {
                item.listener.call(item.scope, event);
            } else {
                item.listener(event);
            }
        }
    }

    removeListener(listener, scope) {
        if (typeof listener !== 'function' || !(this.#listeners instanceof Array)) {
            return;
        }
        const tempScope = typeof scope === 'object' ? scope : undefined;
        for (let i = this.#listeners.length - 1; i >= 0; --i) {
            const item = this.#listeners[i];
            if (item.listener === listener && item.scope === tempScope) {
                const times = Math.min(1, item.times | 0) - 1;
                if (times < 1) {
                    this.#listeners.splice(i, 1);
                } else {
                    item.times = times;
                }
                return;
            }
        }
    }
}