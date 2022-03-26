function greeter(name: String) {
    return `Gutentag, ${name}`
}

class App {
    target: Element;
    constructor(target: Element) {
        console.log('App initializiong...')
        this.target = target
        this.setup()
    }

    setup() {
        console.log('App setup...')
        let greet_wrapper = document.createElement('p')
        greet_wrapper.innerText = greeter('Gabri Francine Botha')

        this.target.appendChild(greet_wrapper)
    }
}


(() => {
    let myapp = new App(document.body)
    console.log('Done!', myapp)
})()