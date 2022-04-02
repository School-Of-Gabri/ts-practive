/** @format */

export default class GreeterApp {
    target: Element
    constructor(target?: Element) {
        if (typeof target !== "undefined") {
            this.target = target
            this.setup()
        }
    }
    greet(name: string): string {
        return `Gutentag, ${name}`
    }

    setup(): void {
        let greet_wrapper = document.createElement("p")
        greet_wrapper.innerText = this.greet("Gabri Francine Botha")

        this.target.appendChild(greet_wrapper)
    }
}
