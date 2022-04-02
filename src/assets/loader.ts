/** @format */

import buttonPng from "./images/Button/button.png"
import buttonOverPng from "./images/Button/button_over.png"
import buttonDownPng from "./images/Button/button_down.png"

interface Map {
    [key: string]: string[] | undefined
}

interface ButtonFrames extends Map {
    button: string[]
    over: string[]
    down: string[]
}

export const buttonFrames: ButtonFrames = {
    button: buttonPng,
    over: buttonOverPng,
    down: buttonDownPng,
}
