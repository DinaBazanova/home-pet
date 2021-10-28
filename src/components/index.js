import MainPage from './01_Main/index.js'

export default class MainContent {
    constructor(pageName) {
        this.pageName = pageName
        let mainPage = new MainPage()
        this.render(this.pageName)
    }

    render(namePage) {
        console.log(namePage.elem)
        return namePage.elem
    }
}
