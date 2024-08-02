export class Context {
    #model;
    #parentNode;
    /**
     * 
     * @param {*} [model] 
     */
    constructor(model) {
        if (model) {
            this.#model = model;
        } else {

        }
    }

    /**
     * 将组件加入到指定的 DOM 元素底下
     * @param {HTMLElement} parentNode 父 DOM
     */
    addToDOM(parentNode) {
        if (this.#parentNode === parentNode) { return; }
        this.#parentNode = parentNode;
        this.reflow();
    }

    #timerReflowing = undefined;
    reflow() {
        window.clearTimeout(this.#timerReflowing);
        this.#timerReflowing = window.setTimeout(this.#reflow, 100);
    }
    
    #reflow() {
        this.repaint();
    }

    repaint() {

    }
}