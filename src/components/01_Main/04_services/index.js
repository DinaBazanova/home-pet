export default class Services {
    constructor() {
        this.render()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'services'
        this.elem.innerHTML = `
            <div class="container">
                <h2 class="title">Вашему питомцу могут пригодиться<br><span class="red_title">дополнительные услуги</span></h2>
                <div class="services_inner">
                    <div class="service">
                        <img class="service_image" src="./01_Main/04_services/img/service_01.svg" alt="">
                        <h3 class="service_name">груминг</h3>
                        <h4 class="service_price">от <span>1 500</span> ₽</h4>
                    </div>
                    <div class="service">
                        <img class="service_image" src="./01_Main/04_services/img/service_02.svg" alt="">
                        <h3 class="service_name">зоотакси</h3>
                        <h4 class="service_price">от <span>25</span> ₽/км</h4>
                    </div>
                    <div class="service">
                        <img class="service_image" src="./01_Main/04_services/img/service_03.svg" alt="">
                        <h3 class="service_name">кинолог</h3>
                        <h4 class="service_price">от <span>1 000</span> ₽/час</h4>
                    </div>
                    <div class="service">
                        <img class="service_image" src="./01_Main/04_services/img/service_04.svg" alt="">
                        <h3 class="service_name">доп выгул</h3>
                        <h4 class="service_price">от <span>300</span> ₽/час</h4>
                    </div>

                </div>
            </div>`
        return this.elem
    }
}