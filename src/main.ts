/** @format */

import App from "./App.svelte"

const svelte_app = new App({
    target: document.body,
    props: {
        name: "world",
    },
})

export default svelte_app
