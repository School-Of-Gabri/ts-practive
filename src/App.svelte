<script lang="ts">
// import PixiMain from "./components/Main/Pixi.svelte"
// import SvgMain from "./components/Main/Pixi.svelte"
import Navbar from "./components/Menu/Navbar.svelte"
import MazeGame from "./components/Games/Mazing.svelte"

import type {SvelteComponent} from "svelte"

import Bbutton from "./components/Bulma/Button.svelte"

let menu_selection: String = ""

function menu_selected(event: CustomEvent) {
    let selected_action: String = event.detail
    console.log(`App.svelte::select(${selected_action})`)
    menu_selection = selected_action
}

// initialise modal state and content
// let showModal: boolean = false
// let modalContent: SvelteComponent

// pass in component as parameter and toggle modal state
// function toggleModal(component: SvelteComponent) {
//     modalContent = component
//     showModal = !showModal
// }
</script>

<section class="section p-0 scroll-unlock">
    <div class="container is-fluid is-centered">
        <!-- <div class="container is-fullheight-with-navbar is-centered"></div> -->
        <Navbar />
        <div class="columns is-desktop">
            <div class="column is-one-quarter has-text-centered ">
                <div class="columns ">
                    <div class="column">
                        <h1 class="title">TS Practive</h1>
                        <p class="subtitle">Select a game to play below:</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <Bbutton action="Boxes" on:selection="{menu_selected}" />
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <Bbutton action="Pong" on:selection="{menu_selected}" />
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-3">
                        <p>{menu_selection}</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <MazeGame />
            </div>
        </div>
    </div>
</section>

<style global>
html {
    overflow-y: hidden;
}
</style>
