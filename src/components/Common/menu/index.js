export default class Menu {
    constructor(menu) {
        this.menu = menu
        this.menuType ()
        this.addEventListeners()
    }
    renderPanel () {
        return this.elem = `<div class="nav_panel">
        ${this.menu.map(item => {
            return item = `<a href="#" class="nav_link" data-value ="${item.name}">${item.content}</a>`}).join('')}
            </div>
            <div class="nav_phone">
                <button class="btn_phone">+7 (910) 486-40-00</button>
            </div> `
        
    }
    renderIcon () {
        return this.elem = `
            <div class="nav_icon">
                <button class="nav_btn">
                    <img src="./Common/img/menu.svg" alt="" class="nav_icon_img">
                </button>
            </div>`
    }

    menuType () {
        if (document.documentElement.clientWidth < 768) {
            this.renderIcon()
        } else {
            this.renderPanel()
        }
    }
    addEventListeners() {
        if (document.documentElement.clientWidth < 768) {
            document.addEventListener('click', this.openModalMenu)
        } else {
            document.addEventListener('click', this.openMenu)
        }
        
    }
    openModalMenu = (event) => {
        if (event.target.closest('.nav_icon')) {
            event.target.closest('.nav_icon').classList.toggle('menu_open')
            if (event.target.closest('.nav_icon').classList.contains('menu_open')) {
                this.listMenu = document.createElement('DIV')
                this.listMenu.className = 'modal_menu'
                this.listMenu.innerHTML = this.renderPanel()
                document.body.append(this.listMenu)
            } else {
                document.querySelector('.modal_menu').remove()
            }    
        }    
    }
    openMenu = (ev) => {
        if (ev.target.closest('.nav_panel')) {
            ev.preventDefault()
            const event = new CustomEvent("show-page", {
                detail: ev.target.dataset.value,
                bubbles: true
            })
            this.elem.dispatchEvent(event)
        }
    }
}