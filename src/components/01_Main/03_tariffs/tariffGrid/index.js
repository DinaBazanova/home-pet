export default class TariffGrid {
    constructor(option, tariffs) {
        this.option = option
        this.tariffs = tariffs
        this.render()
        this.renderInner()
    }

    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'tariffs_inner'
    }
    renderInner() {
        this.elem.innerHTML = this.tariffs
        .find(item => item.option == this.option)
        .content.map( item => { return item = `
            <div class="tariff">
                <div class="tariff_header">
                    <h3 class="tariff_title"><a href="#">${item.name}</a></h3>
                    <img class="tariff_image" src="${item.img}" alt="">
                    <h2 class="tariff_price">${item.price}<span> ₽/сутки</span></h2>
                </div>
                <div class="tariff_content">
                    <ul class="includes">В тариф включено:
                        ${item.includes.map(item => { return item = `
                        <li>
                            <img class="li_marker" src="./01_Main/03_tariffs/tariffGrid/img/marker.svg" alt="">
                            <div>${item}</div>
                        </li>`}).join('')}
                    </ul>  
                    <div class="btn_holder">
                        <button class="btn">
                            <a href="#">посмотреть фото</a>
                        </button>    
                    </div>
                </div>   
            </div> `
        }).join('')
    }
    update(option) {
        this.option = option
        setTimeout ( () => {
            this.renderInner() 
        }, 500)
    }
}