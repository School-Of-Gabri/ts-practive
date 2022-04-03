<script lang="ts">
import QRCode from "qrcode"
import {onMount} from "svelte"

onMount(async () => {
    QRCode.toCanvas(
        document.getElementById("qrcode_canvas"),
        "Gabri made this QR code with love!",
        (error) => {
            if (error) console.error(error)
            console.log("success!")
        }
    )
})
</script>

<div class="qr_panel">
    <canvas id="qrcode_canvas"></canvas>
</div>

<style>
.qr_panel {
    outline: 4px solid green;
}
</style>
