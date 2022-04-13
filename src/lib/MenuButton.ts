/** @format */

import {Texture, Sprite} from "pixi.js"
import type {ButtonFrames} from "./Utils.js"

export interface ButtonTextures {
    default: Texture
    over: Texture
    down: Texture
}

export class MenuButton extends Sprite {
    protected isOver!: boolean
    protected isdown!: boolean
    private textures!: ButtonTextures

    constructor(frames: ButtonFrames) {
        let texture_default: Texture = Texture.from(frames.button)
        let texture_over: Texture = Texture.from(frames.over)
        let texture_down: Texture = Texture.from(frames.down)

        super(texture_default)
        this.textures = {
            default: texture_default,
            over: texture_over,
            down: texture_down,
        }

        this.anchor.set(0.5)
        this.interactive = true
        this.buttonMode = true

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
