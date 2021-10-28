
export default class FaqQuestions {
    constructor(faq) {
        this.faq = faq
        this.question
        this.render()
        this.elem.addEventListener('click', this.openQuestions)
    }

    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'faq_inner'
        
        this.faqQuestions = document.createElement('DIV')
        this.faqQuestions.className = 'faq_questions'
        this.faqQuestions.innerHTML = this.faq.map( item => {
            return item = `<button class="faq_btn">
                <span>${item.question}</span>
                <div class="faq_arrow" hidden>
                    <img src="./01_Main/05_faq/faqQuestions/img/btn_arrow.svg" alt=""> 
                </div>
            </button>`
        }).join('')

        this.faqAnswers = document.createElement('DIV')
        this.faqAnswers.className = 'faq_answers'

        this.elem.append(this.faqQuestions)
        this.elem.append(this.faqAnswers)   
    }
    openQuestions = (ev) => {
        this.active = ev.target.closest('.faq_btn')
        if (ev.target.closest('.faq_btn')) {
            this.showArrow(ev)
            this.setClassActive()
            this.renderAnswer()
            this.transformForMobile()  
        }
    }

    showArrow () {
        for (let item of this.faqQuestions.querySelectorAll('.faq_arrow')) {
            item.hidden = true 
        }
        this.active.children[1].hidden = false
    }

    setClassActive () {
        for (let item of this.faqQuestions.querySelectorAll('.faq_btn')) {
            item.removeAttribute('style')
            if (item == this.active) {
                this.active.classList.add('active')
            } else {
                item.classList.remove('active')
            }    
        }
    }

    renderAnswer () {
        this.faqAnswers.innerHTML = this.faq
        .find(item => item.question == this.active.children[0].textContent)
        .answer
    }

    // transformForMobile - для отображения ответов под вопросом на смартфонах
    transformForMobile() {
        if (document.documentElement.clientWidth < 768) {
            this.faqAnswers.removeAttribute('style')
            if ( this.active.nextElementSibling) {
                
                let answerHeigth = this.faqAnswers.offsetHeight
                let nextButtons = this.faqQuestions.querySelectorAll('.faq_btn')
                let next = this.active.nextElementSibling
                let activeNumber

                for (let i = 0; i < nextButtons.length; i++) {
                    if (nextButtons[i].classList.contains('active')) {
                        activeNumber = i
                    }
                    next.style.position = 'relative'
                    next.style.top = answerHeigth +'px'    
                    if (nextButtons[i] == next) {
                        next = nextButtons[i].nextElementSibling
                    }
                }
                
                this.faqAnswers.style.position = 'relative'
                this.faqAnswers.style.top = `${ - (nextButtons.length - 1 - activeNumber) * (this.active.offsetHeight + 16)}px`    
            }    
        }
    }

}