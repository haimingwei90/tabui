
export default class UIBase {

    constructor() {
        this.element = null; // dom
    }

    render() { // 静态
        const htmlstr = this._render();

        // 字符串转为 dom 对象
        let container = document.createElement("div");
        container.innerHTML = htmlstr;
        let oldElement = this.element;
        this.element = container.firstElementChild;
        if (oldElement) {
            oldElement.insertAdjacentElement("beforebegin", this.element);
            oldElement.remove();
        }
        this._bindEvents(this.element);
        return this.element;
    }

    bind(selector) {
        if (!this.element) this.render();
        let container = document.querySelector(selector);
        console.log(this.element);
        container.appendChild(this.element);
    }

}