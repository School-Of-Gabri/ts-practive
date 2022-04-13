<script lang="ts">
import {createEventDispatcher} from "svelte"
const dispatch = createEventDispatcher()

function select(selection: String) {
    // console.log(`Button.svelte::select(${selection})`)
    dispatch("selection", selection)
}

export let action: String
</script>

<button class="button is-primary" on:click="{() => select(action)}">
    {action}
</button>

<style>
button {
    outline: 2px solid green;
}
</style>
