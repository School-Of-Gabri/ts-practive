<script type="ts">
import {onMount} from "svelte"

import FancyMazeBuilder from "../../lib/FancyMazeBuilder"
import Bbutton from "../Bulma/Button.svelte"
import Mazing from "../../lib/Mazing"
var Maze, MazeGame

const makeMaze = (id, width, height, speech = false) => {
    Maze = new FancyMazeBuilder(width, height)
    Maze.display(id)
    MazeGame = new Mazing("maze")
    if (speech) {
        MazeGame.enableSpeech()
    }
}
function menu_selected(event: CustomEvent) {
    let selected_action: String = event.detail
    console.log(`App.svelte::select(${selected_action})`)
    menu_selection = selected_action
}

onMount(async () => {
    makeMaze("maze_container", 12, 12)

    console.log("Maze")
    console.log(Maze)
})
</script>

<div class="panel is-warning">
    <p class="panel-heading"> Mazing </p>

    <div class="panel-block">
        <div class="columns is-mobile is-centered">
            <div class="column is-half">
                <div id="maze_container"><!-- --></div>
            </div>
        </div>
    </div>
    <div class="panel-block">
        <div class="columns is-mobile is-centered m-auto">
            <div class="column is-half">
                <Bbutton action="New game!" on:selection="{menu_selected}" />
            </div>
            <div class="column is-half">
                <Bbutton action="Leaderboard" on:selection="{menu_selected}" />
            </div>
        </div>
    </div>
</div>

<style>
</style>
