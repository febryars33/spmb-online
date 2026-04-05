// resources/js/app.ts
import { createInertiaApp } from '@inertiajs/vue3'
import 'bootstrap'
import { createBootstrap } from 'bootstrap-vue-next'
import type { DefineComponent } from 'vue'
import { createSSRApp, h } from 'vue'
import Layout from './Layouts/App.vue'
import Theme from './plugins/theme'
import '@asika32764/vue-animate/dist/vue-animate.css';

// import { install as dompurify } from '@/plugins/dompurify'
// import Theme from './theme'

const appName = import.meta.env.VITE_APP_NAME

Theme.init()

createInertiaApp({
    progress: false,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue', { eager: true })
        const page = pages[`./Pages/${name}.vue`]

        if (!page) throw new Error(`Page ./Pages/${name}.vue not found.`)

        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createBootstrap())

        // dompurify(app)
        app.mount(el)
    },
})
