import Switch from '../../Common/switch/index.js'
import tariffSwitch from './tariffSwitch/tariffSwitch.js'
import TariffGrid from './tariffGrid/index.js'
import tariffs from './tariffGrid/tariffs.js'

export default class Tarrifs {
    constructor() {
        this.render()
        this.addSwitch()
        this.addGrig()
        this.addEventListeners()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'tariffs'
        this.elem.innerHTML = `
            <div class="container">
                <h2 class="title">Разные <span class="red_title">тарифы </span>для разных пушистых,<br>выберите какой вам по душе</h2>
            </div>`
        return this.elem
    }
    addSwitch () {
        this.tariffSwitch = new Switch(tariffSwitch)
        this.elem.children[0].append(this.tariffSwitch.elem)
    }
    addGrig() {
        this.tariffGrid= new TariffGrid(this.tariffSwitch.currentMode, tariffs)
        this.elem.children[0].append(this.tariffGrid.elem)
    }
    addEventListeners() {
        document.body.addEventListener("switch", ev => {
            this.tariffGrid.update(ev.detail)
        })
    }
}