import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import vue from '@vitejs/plugin-vue';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next/resolvers';
import laravel from 'laravel-vite-plugin';
import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.ts'],
            refresh: true,
            ssr: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
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
                silenceDeprecations: [
                    'mixed-decls',
                    'color-functions',
                    'global-builtin',
                    'import',
                    'if-function',
                ],
            },
        },
    },
});
