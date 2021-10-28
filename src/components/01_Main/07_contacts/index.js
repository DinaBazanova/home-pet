export default class Contacts {
    constructor() {
        this.render()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'contacts'
        this.elem.innerHTML = `
            <div class="container">
                <div class="contacts_header">
                    <h2 class="contacts_title">Приходите, пишите, звоните!<br>
                    Всегда 
                    <span class="red_title">рады встрече </span>
                    с вами
                    </h2>
                </div>
                <div class="contacts_inner">
                    <div class="contacts_info">
                        <div class="adress">
                            <span class="info_name">Адрес</span>
                            <h4 class="info_value">г.Москва, ул.Академика Янгеля, 52</h4>
                        </div>
                        <div class="phone">
                            <span class="info_name">телефон</span>
                            <h4 class="info_value">+7 (910) 486-40-00</h4>
                        </div>
                        <div class="email">
                            <span class="info_name">email</span>
                            <h4 class="info_value">homepet@mail.ru</h4>
                        </div>
                        <div class="social">
                            <span class="info_name">соцсети</span>
                            <div class="social_link">
                                <a href="#" class="social_link">
                                    <img src="./01_Main/07_contacts/img/instagram.svg" alt=""></>
                                </a>
                                <a href="#" class="social_link">
                                    <img src="./01_Main/07_contacts/img/vk.svg" alt=""></>
                                </a>
                                <a href="#" class="social_link">
                                    <img src="./01_Main/07_contacts/img/facebook.svg" alt=""></>
                                </a>
                                <a href="#" class="social_link">
                                    <img src="./01_Main/07_contacts/img/telegram.svg" alt=""></>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="contacts_map">
                        <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/pethome/182152504181/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Pethome</a><a href="https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/category/pet_hotel/184107220/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Гостиница для животных в Санкт‑Петербурге и Ленинградской области</a><a href="https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/category/pet_salon/184107224/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Зоосалон, зоопарикмахерская в Санкт‑Петербурге и Ленинградской области</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUqmYsYTB" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                    </div>
                </div>
            </div>`
        return this.elem
    }
}