import BackgroundImage from '../../../components/Common/backgroundImage/index.js'
import bookingImage from './bookingImage/bookingImage.js'

export default class Booking {
    constructor() {
        this.render()
        this.addImage()
        
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'booking'
        this.elem.innerHTML = `
            <div class="container">
                <div class="booking_inner">                
                    <div class="booking_header">
                        <h4 class="booking_subtitle">Уезжаете в отпуск? В командировку? По неотложным делам?</h4>
                        <h1 class="booking_title">Позаботимся о вашем<br>пушистом друге</h1>
                    </div>
                    <div class="form_holder">
                        <form class="booking_form" name = "reservation" action="">
                            <label class="form_label">
                                <p class="label_name">ДАТА ЗАЕЗДА</p>
                                <input type="date" class="input check_in" name="check_in">
                            </label>
                            <label class="form_label">
                                <p class="label_name">ДАТА ОТЪЕЗДА</p>
                                <input type="date" class="input check_out" name="check_out">
                            </label>
                            <label class="form_label">
                                <p class="label_name">ТАРИФ</p>
                                <select class="input select-tariff" name="tariff" value="">
                                    <option value="Standart" selected>Стандарт</option>
                                    <option value="Comfort">Комфорт</option>
                                    <option value="Premium">Премиум</option>
                                </select>
                            </label>
                             
                            <fieldset class="catOrDog">    
                                <input class="custom-radio" type="radio" id="cat" name="catOrDog" value="cat" checked>
                                <label class="cat_dog cat" for="cat">Кот</label>
                                <input class="custom-radio" type="radio" id="dog" name="catOrDog" value="dog">
                                <label class="cat_dog dog" for="dog">Пес</label>    
                            </fieldset>
                            <input class="btn_submit btn1" type="submit" value="узнать цену">
                        </form>
                    </div>
                </div>
            </div>`
        return this.elem
    }
    addImage() {
        let bookingBackgroundImage = new BackgroundImage(bookingImage,'booking_background')
        this.elem.append(bookingBackgroundImage.elem)

    }
}