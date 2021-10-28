export default class Advantages {
    constructor() {
        this.render()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'advantages'
        this.elem.innerHTML = `
            <div class="container">
                <h2 class="title"><span class="red_title">Ухаживаем</span> за каждым хвостиком<br>с особой любовью</h2>
                <div class="advantages_inner">
                    <div class="advantage">
                        <img class="advantage_image" src="./01_Main/02_advantages/img/advantage_01.svg" alt=""></>
                        <h4 class="advantage_name">Просторные<br>номера</h4>
                    </div>
                    <div class="advantage">
                        <img class="advantage_image" src="./01_Main/02_advantages/img/advantage_02.svg" alt=""></>
                        <h4 class="advantage_name">Онлайн<br>видеонаблюдение</h4>
                    </div>
                    <div class="advantage">
                        <img class="advantage_image" src="./01_Main/02_advantages/img/advantage_03.svg" alt=""></>
                        <h4 class="advantage_name">Ветеринар<br>24ч</h4>
                    </div>
                    <div class="advantage">
                        <img class="advantage_image" src="./01_Main/02_advantages/img/advantage_04.svg" alt=""></>
                        <h4 class="advantage_name">Чистота<br>в номерах</h4>
                    </div>
                </div>
            </div>`
        return this.elem
    }
}