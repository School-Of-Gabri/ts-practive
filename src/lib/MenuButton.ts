/** @format */

import {Texture, Sprite} from "pixi.js"

export interface ButtonTextures {
    default: Texture
    over: Texture
    down: Texture
}

export class MenuButton extends Sprite {
    protected isOver!: boolean
    protected isdown!: boolean
    private textures!: ButtonTextures

    constructor(frames: any) {
        let texture_default = Texture.from(frames.button)
        let texture_over = Texture.from(frames.over)
        let texture_down = Texture.from(frames.down)

        super(texture_default)
        this.textures.default = texture_default
        this.textures.over = texture_over
        this.textures.down = texture_down

        this.anchor.set(0.5)
        this.interactive = true
        this.buttonMode = true
        console.log("MenuButton initialized!")

        const self = this
        this.on("pointerover", () => {
            self.isOver = true
            if (self.isdown) return
            self.texture = self.textures.over
        })
        this.on("pointerout", () => {
            self.isOver = false
            if (self.isdown) return
            self.texture = self.textures.default
        })
        this.on("pointerdown", () => {
            self.isdown = true
            self.texture = self.textures.down
            self.alpha = 1
        })
        this.on("pointerup", () => {
            self.isdown = false
            if (self.isOver) self.texture = self.textures.over
            else self.texture = self.textures.default
        })
    }

    move(x: number, y: number): void {
        this.x = x
        this.y = y
    }
}
