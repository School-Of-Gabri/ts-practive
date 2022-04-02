/** @format */

import {Point} from "./Point"

export class Grid {
    protected grid: Point[][]

    constructor(rows: number = 10, cols: number = 10, block_size: number = 10) {
        this.grid = []

        ;([...Array(rows)] as number[]).map((_: number, row_idx: number) => {
            let row_of_cells: Point[] = Array(cols)
            ;([...Array(cols)] as number[]).map((_: number, col_idx: number) => {
                let cell = new Point(col_idx * block_size, row_idx * block_size)
                row_of_cells.push(cell)
            })
            this.grid.push(row_of_cells)
        })
    }

    toString(): string {
        let out: string = "{"
        this.grid.map((row: Point[], row_idx: number) => {
            out += "["
            row.map((point: Point, col_idx: number) => {
                out += point + ","
            })
            out += "],"
        })
        out += "}"

        return out
        // return `{point_a: ${this.point_a}, point_b: ${this.point_b}}`
    }
}
