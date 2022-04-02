/** @format */

// export default
export class Greeter {
    protected target!: HTMLElement
    constructor(target?: HTMLElement) {
        if (typeof target !== "undefined") {
            this.target = target
            this.setup()
        }
    }
    private greet(name: string): string {
        return `Gutentag, ${name}`
    }

    private setup(): void {
        let greet_wrapper = document.createElement("p")
        greet_wrapper.innerText = this.greet("Gabri Francine Botha")

        this.target.appendChild(greet_wrapper)
    }
}
