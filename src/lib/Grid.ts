/** @format */

import {Point} from "./Point.js"

export class Grid {
    protected grid: Point[][]

    constructor(rows: number = 10, cols: number = 10, block_size: number = 10) {
        this.grid = []

        /*(
            Old code.
            
            Fancy but heavy and complex.
            I rewrote this section for efficiency and readability.

            I also realized that I made a mistake,
            and this code would not have worked correctly....
            
            @James - I hope you are happy now 😂

            ;([...Array(rows)] as number[]).map((_: number, row_idx: number) => {
                let row_of_cells: Point[] = Array(cols)
                ;([...Array(cols)] as number[]).map((_: number, col_idx: number) => {
                    let cell = new Point(col_idx * block_size, row_idx * block_size)
                    row_of_cells.push(cell)
                })
                this.grid.push(row_of_cells)
            })
        )*/

        /*(
            New code.
            
            Back to basics, fam!
        )*/
        for (let row_idx = 0; row_idx <= rows; row_idx + block_size) {
            let row_of_cells: Point[] = Array(cols)
            for (let col_idx = 0; col_idx <= cols; col_idx + block_size) {
                let cell = new Point(col_idx * block_size, row_idx * block_size)
                row_of_cells.push(cell)
            }
            this.grid.push(row_of_cells)
        }
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
