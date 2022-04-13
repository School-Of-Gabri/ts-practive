/** @format */

// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
import "./mazing.css"

export class Position {
    x: number
    y: number
    constructor(x?: number, y?: number) {
        this.x = x || 0
        this.y = y || 0
    }
    toString(): string {
        return this.x + ":" + this.y
    }
}

// type MazingMaze = {
//     (key: Position): Element;
// }

export class Mazing {
    maze: Record<string, HTMLElement>
    heroPos: Position
    mazeContainer: HTMLElement
    mazeScore: HTMLElement
    mazeMessage: HTMLElement
    heroScore: number
    heroHasKey: boolean
    childMode: boolean
    utter: SpeechSynthesisUtterance | null
    keyPressHandler: any

    constructor(id: string) {
        // bind to HTML element
        this.mazeContainer = document.getElementById(id) || document.body

        this.mazeScore = document.createElement("div")
        this.mazeScore.id = "maze_score"

        this.mazeMessage = document.createElement("div") as HTMLElement
        this.mazeMessage.id = "maze_message"

        this.heroScore =
            (this.mazeContainer.getAttribute("data-steps") as unknown as number) - 2

        this.maze = {}
        this.heroPos = new Position()
        this.heroHasKey = false
        this.childMode = false

        this.utter = null

        for (let i = 0; i < this.mazeContainer.children.length; i++) {
            for (let j = 0; j < this.mazeContainer.children[i].children.length; j++) {
                var el = this.mazeContainer.children[i].children[j]
                this.maze[new Position(i, j) as unknown as string] = el as HTMLElement
                if (el.classList.contains("entrance")) {
                    // place hero at entrance
                    this.heroPos = new Position(i, j)
                    this.maze[this.heroPos as unknown as string].classList.add("hero")
                }
            }
        }

        var mazeOutputDiv = document.createElement("div")
        mazeOutputDiv.id = "maze_output"

        mazeOutputDiv.appendChild(this.mazeScore)
        mazeOutputDiv.appendChild(this.mazeMessage)

        mazeOutputDiv.style.width = this.mazeContainer.scrollWidth + "px"
        this.setMessage("first find the key")

        this.mazeContainer.insertAdjacentElement("afterend", mazeOutputDiv)

        // activate control keys
        this.keyPressHandler = this.mazeKeyPressHandler.bind(this)
        document.addEventListener("keydown", this.keyPressHandler, false)
    }
    enableSpeach() {
        this.utter = new SpeechSynthesisUtterance()
        this.setMessage(this.mazeMessage.innerText)
    }
    setMessage(text: string) {
        this.mazeMessage.innerHTML = text
        this.mazeScore.innerHTML = `${this.heroScore}`
        if (this.utter) {
            this.utter.text = text
            window.speechSynthesis.cancel()
            window.speechSynthesis.speak(this.utter)
        }
    }
    heroTakeTreasure() {
        this.maze[this.heroPos as unknown as string].classList.remove("nubbin")
        this.heroScore += 10
        this.setMessage("yay, treasure!")
    }
    heroTakeKey() {
        this.maze[this.heroPos as unknown as string].classList.remove("key")
        this.heroHasKey = true
        this.heroScore += 20
        this.mazeScore.classList.add("has-key")
        this.setMessage("you now have the key!")
    }
    gameOver(text: string) {
        // de-activate control keys
        document.removeEventListener("keydown", this.keyPressHandler, false)
        this.setMessage(text)
        this.mazeContainer.classList.add("finished")
    }
    heroWins() {
        this.mazeScore.classList.remove("has-key")
        this.maze[this.heroPos as unknown as string].classList.remove("door")
        this.heroScore += 50
        this.gameOver("you finished !!!")
    }
    tryMoveHero(pos: Position) {
        if ("object" !== typeof this.maze[pos as unknown as string]) {
            return
        }

        var nextStep = this.maze[pos as unknown as string].className

        // before moving
        if (nextStep.match(/sentinel/)) {
            this.heroScore = Math.max(this.heroScore - 5, 0)
            if (!this.childMode && this.heroScore <= 0) {
                this.gameOver("sorry, you didn't make it")
            } else {
                this.setMessage("ow, that hurt!")
            }
            return
        }
        if (nextStep.match(/wall/)) {
            return
        }
        if (nextStep.match(/exit/)) {
            if (this.heroHasKey) {
                this.heroWins()
            } else {
                this.setMessage("you need a key to unlock the door")
                return
            }
        }

        // move hero one step
        this.maze[this.heroPos as unknown as string].classList.remove("hero")
        this.maze[pos as unknown as string].classList.add("hero")
        this.heroPos = pos

        // after moving
        if (nextStep.match(/nubbin/)) {
            this.heroTakeTreasure()
            return
        }
        if (nextStep.match(/key/)) {
            this.heroTakeKey()
            return
        }
        if (nextStep.match(/exit/)) {
            return
        }
        if (this.heroScore >= 1) {
            if (!this.childMode) {
                this.heroScore--
            }
            if (!this.childMode && this.heroScore <= 0) {
                this.gameOver("sorry, you didn't make it")
            } else {
                this.setMessage("...")
            }
        }
    }
    mazeKeyPressHandler(e: KeyboardEvent) {
        let tryPos = new Position(this.heroPos.x, this.heroPos.y)
        switch (e.key) {
            // case 37: // left
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                this.mazeContainer.classList.remove("face-right")
                tryPos.y--
                break

            // case 38: // up
            case "Up": // IE/Edge specific value
            case "ArrowUp":
                tryPos.x--
                break

            // case 39: // right
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                this.mazeContainer.classList.add("face-right")
                tryPos.y++
                break

            // case 40: // down
            case "Down": // IE/Edge specific value
            case "ArrowDown":
                tryPos.x++
                break

            default:
                return
        }
        this.tryMoveHero(tryPos)
        e.preventDefault()
    }
    setChildMode() {
        this.childMode = true
        this.heroScore = 0
        this.setMessage("collect all the treasure")
    }
}
