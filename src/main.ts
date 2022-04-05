/** @format */

import "./global.css"
import App from "./App.svelte"

let app_target: HTMLElement | null = document.getElementById("app")
const svelte_app = new App({
    target: !!app_target ? app_target : document.body,
})

export default svelte_app
