/** @format */

// import commonjs from '@rollup/plugin-commonjs'
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import css from "rollup-plugin-css-only"
// import livereload from 'rollup-plugin-livereload'
import svelte from "rollup-plugin-svelte"
// import { terser } from 'rollup-plugin-terser'
// import sveltePreprocess from 'svelte-preprocess'
// import { copy } from '@web/rollup-plugin-copy'
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

export default {
    input: "./src/main.ts",
    plugins: [
        typescript({
            sourceMap: !production,
            inlineSources: !production,
        }),
        // commonjs(),
        svelte({
            include: "src/**/*.svelte",
            // preprocess: [sveltePreprocess({
            // 	typescript: true,
            // 	sourceMap: !production,
            // 	postcss: false
            // })],
            // emitCss: true,
            compilerOptions: {
                dev: !production,
                // css: css => {
                // 	css.write("public/bundle.css")
                // },
                // generate: 'ssr',
                // hydratable: true
            },
        }),
        css({
            output: "bundle.css",
        }),

        resolve({
            // jsnext: true,
            browser: true,
            // dedupe: ['svelte']
        }),
        // typeCheck(),
        copy("./static", "./public"),
        // copy({
        // targets: [
        // 	{ src: './static/index.html', dest: './public' },
        // 	{ src: ['./static/favicon.png', './static/favicon.ico'], dest: './public' }
        // ]
        // patterns: './static/**/*.{html,png,ico}'
        // }),
        !production && serve(),
        // !production && livereload('./public'),
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
