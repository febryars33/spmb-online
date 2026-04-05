import inertia from '@inertiajs/vite'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import vue from '@vitejs/plugin-vue'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next/resolvers'
import laravel from 'laravel-vite-plugin'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
    },
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({ ssr: false }),
        inertia(),
        wayfinder(),
        components({
            resolvers: [BootstrapVueNextResolver()],
        }),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'if-function'],
            },
        },
    },
})
