export default class BackgroundImage {
    constructor(imageArray,cssClass) { // cssClass - css класс родительского элемента, imageArray - массив объектов изображений
        this.images = imageArray
        this.cssClass = cssClass

        this.render()
    }

    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = `${this.cssClass}`
        this.elem.innerHTML = `<div class="background">
        ${this.images.map(item => {
            return item = `<img class="${item.name}"src="${item.url()}" alt=""></img>`}).join('')}
        </div>`
    }
}