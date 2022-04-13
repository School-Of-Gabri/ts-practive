<script lang="ts">
import Fa from "svelte-fa"
import {faHome} from "@fortawesome/free-solid-svg-icons"
</script>

<!-- START NAV -->
<nav class="navbar is-link">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item brand-text" href="/index.html">
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
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
<style lang="scss">
</style>
