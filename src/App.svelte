<script lang="ts">
// import PixiMain from "./components/Main/Pixi.svelte"
// import SvgMain from "./components/Main/Pixi.svelte"

import MazeGame from "./components/Games/Mazing.svelte"

import type {SvelteComponent} from "svelte"

import Fa from "svelte-fa"
import {faHome} from "@fortawesome/free-solid-svg-icons"
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

<section class="hero is-primary is-fullheight">
    <div class="hero-head">
        <!-- START NAV -->
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item brand-text" href="/index.html">
                        <img
                            src="http://bulma.io/images/bulma-type-white.png"
                            alt="Logo" />
                    </a>
                    <div class="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navMenu" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="#">
                            <Fa icon="{faHome}" />
                            <span>Home</span>
                        </a>
                        <a class="navbar-item" href="admin.html"> Projects </a>
                    </div>

                    <div class="navbar-end">
                        <a class="navbar-item" href="admin.html"> Docs </a>
                        <a class="navbar-item" href="admin.html"> Github </a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- END NAV -->
    </div>

    <div class="hero-body">
        <div class="container is-fullheight-with-navbar has-text-centered is-centered">
            <div class="columns is-desktop">
                <div class="column is-half">
                    <div class="columns">
                        <div class="column is-6 is-offset-3">
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
                </div>
                <div class="column">
                    <MazeGame />
                </div>
            </div>
            <div class="columns">
                <div class="column is-3">
                    <p>{menu_selection}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
</style>
