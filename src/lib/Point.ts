/** @format */
export class Point extends PIXI.Point {
    static fromOtherPoint(point: Point): Point {
        return new Point(point.x, point.y)
    }
    constructor(x: number, y: number) {
        super(x, y)
    }

    toString(): string {
        return `{x: ${this.x}, y: ${this.y}}`
    }
}
