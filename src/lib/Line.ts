/** @format */

import {Point} from "./Point"

export class Line {
    protected point_a!: Point
    protected point_b!: Point
    constructor(point_a: Point, point_b: Point) {
        this.point_a = point_a
        this.point_b = point_b
    }

    toString(): string {
        return `{point_a: ${this.point_a}, point_b: ${this.point_b}}`
    }
}
