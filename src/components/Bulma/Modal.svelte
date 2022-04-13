<script lang="ts">
export let modalContent: any
</script>

<div on:click|self id="modal-js-example" class="modal">
    <div class="modal-background"></div>

    <div class="modal-content">
        <div class="box">
            <p>Modal JS example</p>
            <!-- Your content -->
            <svelte:component this="{modalContent}" on:click />
        </div>
    </div>

    <button class="modal-close is-large" aria-label="close"></button>
</div>
