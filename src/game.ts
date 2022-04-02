/** @format */

import * as PIXI from "pixi.js"

import {ButtonFrames} from "./lib/Utils"
import {MenuButton} from "./lib/MenuButton"
import {Menu} from "./lib/Menu"

export class GameApp {
    private app: PIXI.Application
    private buttonFrames: ButtonFrames = {
        button: "./images/Button/button.png",
        over: "./images/Button/button_over.png",
        down: "./images/Button/button_down.png",
    }

    constructor(parent: HTMLElement, width: number, height: number) {
        this.app = new PIXI.Application({width, height, backgroundColor: 0x000000})
        parent.replaceChild(this.app.view as Node, parent.lastElementChild as Node) // Hack for parcel HMR

        let loader = new PIXI.Loader()

        Object.keys(this.buttonFrames).forEach((key) => {
            loader.add(this.buttonFrames[key])
        })

        // Load assets
        loader.load(this.onAssetsLoaded.bind(this))
    }

    private onAssetsLoaded() {
        let main_menu = new Menu()

        let playBtn = new MenuButton(this.buttonFrames)

        let canv = this.app.renderer.view
        let but_top = canv.height / 2 - 48
        let but_left = canv.width / 2 - 96
        playBtn.move(but_left, but_top)
        main_menu.addBtn(playBtn)

        this.app.stage.addChild(main_menu)
    }
}
