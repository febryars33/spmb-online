// resources/js/ssr.ts
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import type { DefineComponent } from 'vue';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import Layout from './layouts/App.vue';
// import { install as dompurify } from '@/plugins/dompurify'

const appName = import.meta.env.VITE_APP_NAME;

createServer((page) =>
    createInertiaApp({
        title: (title) => (title ? `${title} - ${appName}` : appName),
        page,
        render: renderToString,
        resolve: (name) => {
            const pages = import.meta.glob<DefineComponent>(
                './pages/**/*.vue',
                { eager: true },
            );
            const page = pages[`./pages/${name}.vue`];

            if (!page) {
                throw new Error(`Page ./pages/${name}.vue not found.`);
            }

            page.default.layout = page.default.layout || Layout;

            return page;
        },
        setup({ App, props, plugin }) {
            const app = createSSRApp({ render: () => h(App, props) }).use(
                plugin,
            );

            // dompurify(app)
            return app;
        },
    }),
);
