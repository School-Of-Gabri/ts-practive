/** @format */

import {Container} from "pixi.js"
import {MenuButton} from "./MenuButton"

export class Menu extends Container {
    buttons: MenuButton[]

    constructor() {
        super()
        this.buttons = []
        console.log("Menu initialized!")
    }

    addBtn(button: MenuButton) {
        this.addChild(button)
        this.buttons.push(button)
    }
}