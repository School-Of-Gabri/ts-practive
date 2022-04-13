/** @format */

import type {Point} from "./Point.js"

export class Box {
    protected point_tl!: Point
    protected point_tr!: Point
    protected point_bl!: Point
    protected point_br!: Point

    constructor() {}

    add(p: Point) {
        this.point_tl = p
    }
    toString(): string {
        // return `{point_a: ${this.point_a}, point_b: ${this.point_b}}`
        return "{}"
    }
}
