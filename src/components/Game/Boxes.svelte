<script lang="ts">
import {onMount} from "svelte"

import {GameApp as Game} from "../../game"
let my_pixi_game

onMount(async () => {
    my_pixi_game = new Game(
        document.getElementById("boxes_panel") as HTMLElement,
        640,
        480
    )
    console.log("Game has been created!", my_pixi_game)
})
</script>

<div class="boxes_panel">
    <canvas id="boxes_canvas"></canvas>
</div>

<style>
.boxes_panel {
    outline: 4px solid blue;
}
</style>
