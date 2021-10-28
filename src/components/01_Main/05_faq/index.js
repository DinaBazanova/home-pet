import FaqQuestions from './faqQuestions/index.js'
import questions from './faqQuestions/questions.js'

export default class Faq {
    constructor() {
        this.render()
    }
    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'faq'
        this.elem.innerHTML = `
                <div class="container">
                    <h2 class="title">Нас<span class="red_title"> часто спрашивают,</span><br>а мы подробно отвечаем</h2>
                </div>`

    let faqQuestions = new FaqQuestions(questions)
    this.elem.querySelector('.container').append(faqQuestions.elem)  
    
    return this.elem
    }

}