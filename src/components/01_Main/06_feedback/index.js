import BackgroundImage from '../../../components/Common/backgroundImage/index.js'
import feedbackImage from './feedbackImage/feedbackImage.js'

// Создание фона из коллекции изображений

export default class Feedback {
    constructor() {
        this.render()
        this.addImage()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'feedback'
        this.elem.innerHTML = `
            <div class="container">
                <div class="feedback_inner">
                    <div class="feedback_header">
                        <h2 class="feedback_title">Остались <span class="red_title">вопросы?</span></h2>
                        <p class="feedback_subtitle">Оставьте свой номер телефона<br>и мы ответим на все ваши вопросы</p>
                    </div>
                    <div class="feedback_holder">
                        <form class="feedback_form" action>
                            <label class="feedback_label">
                                <p class="label_name">ВАШЕ ИМЯ</p>
                                <input type="text" class="feedback_name" name="feedback_name">
                            </label>
                            <label class="feedback_label">
                                <p class="label_name">НОМЕР ТЕЛЕФОНА</p>
                                <input type="tel" class="feedback_phone" name="feedback_phone">
                            </label>
                            <input class="feedback_submit btn" type="submit" value="ЖДУ ЗВОНКА">
                        </form>
                    </div>
                </div>
            </div>`
        return this.elem
    }
    addImage() {
        let feedbackBackgroundImage = new BackgroundImage(feedbackImage,'feedback_background')
        this.elem.append(feedbackBackgroundImage.elem)  
    }
}