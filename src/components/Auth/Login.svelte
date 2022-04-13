<script lang="ts">
let username: String
let password: String
</script>

<section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
        <div class="login">
            <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
            <form>
                <div class="field">
                    <div class="control">
                        <input
                            class="input is-medium is-rounded"
                            type="email"
                            placeholder="hello@example.com"
                            autocomplete="username"
                            required />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input
                            class="input is-medium is-rounded"
                            type="password"
                            placeholder="**********"
                            autocomplete="current-password"
                            required />
                    </div>
                </div>
                <br />
                <button
                    class="button is-block is-fullwidth is-primary is-medium is-rounded"
                    type="submit">
                    Login
                </button>
            </form>
            <br />
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <a href="#">Create an Account</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</section>

<style>
* {
    font-family: "Nunito Sans", sans-serif;
}

:root {
    --shadowDark: #d9dde6;
    --background: #e4e9f2;
    --shadowLight: #eff5fe;
}

body {
    background: var(--background);
}

.hero-body {
    justify-content: center;
}

.login {
    border-radius: 25px;
    padding: 1.5rem;
    box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
}

input {
    background: var(--shadowDark) !important;
}

a {
    font-weight: 600;
}
</style>
