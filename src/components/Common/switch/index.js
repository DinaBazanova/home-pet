export default class TariffSwitch {
    constructor(options) {
        // options - массив объектов со свойствами "value" и "label", передается в конструктор класса
        this.options = options

        // this.currentMode - текущее выбранное значение (свойство объекта value). 
        // Изначально установливаем в первое положение
        this.currentMode = this.options[0].value 
        
        this.render()
        this.addEventListeners()  
    }

    render() {
        this.elem = document.createElement('div')
        this.elem.dataset.activeMode = this.currentMode
        this.elem.className = 'switch_holder'
        
        this.elem.innerHTML = `
            <div class="switch_inner">
                <div class="check_box"></div>
                ${this.options.map( item => 
                    { return item = `<button class="switch_mode" data-value = ${item.value}>${item.label}</button>`}
                )
                .join('')}     
            </div>`
        
        // Назначаем первой кнопке класс active_btn (переопределяет цвет шрифта)
        this.elem.querySelectorAll('button')[0].classList.add('active_btn')
        
    return this.elem
    }

    addEventListeners() {
        this.elem.addEventListener('click', this.chooseMode)
        this.elem.addEventListener('click', this.showActiveButton)
    }

    // chooseMode - устанавливает выбранное значение в this.currentMode, 
    // которое всплывает на body в пользовательском событии "switch"
    chooseMode = (ev) => {
        if (ev.target.tagName == 'BUTTON') {
            if (this.options.length < 3) {
                if (this.currentMode == ev.target.dataset.value) {
                    this.currentMode = this.options.find(item => {
                        item.value != this.currentMode
                        return item
                    }).value
    
                } else {
                    this.currentMode = ev.target.dataset.value
                }
            } else {
                this.currentMode = ev.target.dataset.value
            }
        }

        const event = new CustomEvent("switch", {
            detail: this.currentMode,
            bubbles: true
        })
        this.elem.dispatchEvent(event)
        this.elem.dataset.activeMode = this.currentMode
        return this.currentMode
    }

    // showActiveButton отвечает за анимацию переключателя.
    showActiveButton = (ev) => {

        // findPosition вместе с array.findIndex ищет индекс выбранного положение переключателя в массиве this.options.
        function findPosition (element) {
            if (element.value == ev.target.dataset.value) {
                return element
            }    
        }
        this.position = this.options.findIndex(findPosition)

        // btnWidth - ширина кнопок.
        let btnWidth = this.elem.querySelector('.switch_mode').offsetWidth

        if (ev.target.tagName == 'BUTTON') {
            if (this.options.length < 3) {
                if (ev.target.classList.contains('active_btn')) {
                    ev.target.classList.remove('active_btn')
                    ev.target.nextElementSibling ? ev.target.nextElementSibling.classList.add('active_btn') : ev.target.previousElementSibling.classList.add('active_btn')
                } else {
                    ev.target.classList.add('active_btn')
                    ev.target.nextElementSibling ? ev.target.nextElementSibling.classList.remove('active_btn') : ev.target.previousElementSibling.classList.remove('active_btn')
                }
            } else {
                for ( child of ev.target.closest('switch_inner').children) {
                    child.classList.remove('active_btn')
                }
                ev.target.classList.add('active_btn')
            }
            // задаем смещение индикатора положения.
            this.elem.querySelector('.check_box').style.transform = `translateX(${btnWidth * this.position}px)`
        }
    }       
}