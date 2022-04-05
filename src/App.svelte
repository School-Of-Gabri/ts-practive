<script lang="ts">
import {onMount} from "svelte"

// import {Pixi, Text} from "svelte-pixi"

import {Greeter} from "./lib/Greeter"

let name: string = "Anonymous"
let my_g_app

const set_name = () => {
    name = "Gabri Botha"
}

onMount(async () => {
    name = "Steve Smith"

    my_g_app = new Greeter(document.getElementById("greeter_section") as HTMLElement)
    console.log("Greeter has been created!", my_g_app)
})
</script>

<main>
    <h1>Hello {name}!</h1>
    <button on:click="{set_name}">Set Name!</button>
    <p
        >Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to
        build Svelte apps.</p>
    <div id="greeter_section"></div>
</main>

<style>
main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}
</style>
