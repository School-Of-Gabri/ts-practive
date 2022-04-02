/** @format */

export interface Map {
    [key: string]: string | undefined
}

export interface ButtonFrames extends Map {
    button: string
    over: string
    down: string
}
