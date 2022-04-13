/** @format */

import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-css-only"
import livereload from "rollup-plugin-livereload"
import svelte from "rollup-plugin-svelte"
// import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from "svelte-preprocess"
import postcss from "rollup-plugin-postcss"
import path from "path"
import fs from "fs"

const production = !process.env.ROLLUP_WATCH

function serve() {
    let server

    function toExit() {
        if (server) server.kill(0)
    }

    return {
        writeBundle() {
            if (server) return
            server = require("child_process").spawn(
                "npm",
                ["run", "start", "--", "--dev"],
                {
                    stdio: ["ignore", "inherit", "inherit"],
                    shell: true,
                }
            )

            process.on("SIGTERM", toExit)
            process.on("exit", toExit)
        },
    }
}

function copy(from, to, overwrite = false) {
    return {
        name: "copy-files",
        generateBundle() {
            const log = (msg) => console.log("\x1b[36m%s\x1b[0m", msg)
            log(`copy files: ${from} → ${to}`)
            fs.readdirSync(from).forEach((file) => {
                const fromFile = `${from}/${file}`
                const toFile = `${to}/${file}`
                if (fs.existsSync(toFile) && !overwrite) return
                log(`• ${fromFile} → ${toFile}`)
                fs.copyFileSync(path.resolve(fromFile), path.resolve(toFile))
            })
        },
    }
}

function typeCheck() {
    return {
        writeBundle() {
            require("child_process").spawn("svelte-check", {
                stdio: ["ignore", "inherit", "inherit"],
                shell: true,
            })
        },
    }
}

export default {
    input: "./src/main.ts",
    plugins: [
        typescript({
            sourceMap: !production,
            inlineSources: !production,
        }),
        typeCheck(),
        copy("./static", "./dist"),
        commonjs(),
        svelte({
            include: "src/**/*.svelte",
            preprocess: sveltePreprocess({
                sourceMap: !production,
                typescript: true,
                postcss: {
                    plugins: [require("autoprefixer")()],
                },
                emitCss: true,
            }),
            compilerOptions: {
                dev: !production,
                // generate: 'ssr',
                // hydratable: true
            },
        }),
        css({
            output: "bundle.css",
        }),

        nodeResolve({
            jsnext: true,
            browser: true,
            dedupe: ["svelte"],
        }),
        postcss(),
        !production && serve(),
        !production && livereload("."),
        // production && terser()
    ],
    output: {
        sourcemap: true,
        // sourcemap: !production,
        format: "iife",
        name: "ts-practive-app",
        file: "./public/bundle.js",
    },
    watch: {
        clearScreen: false,
    },
}
