import Booking from './01_booking/index.js' 
import Advantages from './02_advantages/index.js' 
import Tariffs from './03_tariffs/index.js' 
import Services from './04_services/index.js' 
import Faq from './05_faq/index.js' 
import Feedback from './06_feedback/index.js' 
import Contacts from './07_contacts/index.js' 

export default class MainPage {
    constructor() {
        this.render()
        this.renderBooking()  
        this.renderAdvantages()  
        this.renderTariffs()  
        this.renderServices()  
        this.renderFaq()  
        this.renderFeedback()  
        this.renderContacts()  
    }

    render() {
        this.elem = document.createElement('DIV')
        this.elem.className = 'main'
    }

    renderBooking () {
        let booking = new Booking()
        return this.elem.append(booking.elem)
    }
    renderAdvantages () {
        let advantages = new Advantages()
        return this.elem.append(advantages.elem)
    }
    renderTariffs () {
        let tariffs = new Tariffs()
        return this.elem.append(tariffs.elem)
    }
    renderServices () {
        let services = new Services()
        return this.elem.append(services.elem)
    }
    renderFaq () {
        let faq = new Faq()
        return this.elem.append(faq.elem)
    }
    renderFeedback () {
        let feedback = new Feedback()
        return this.elem.append(feedback.elem)
    }
    renderContacts () {
        let contacts = new Contacts()
        return this.elem.append(contacts.elem)
    }
}
            
    