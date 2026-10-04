// Nuxt config (fully static site, generated via `nuxt generate`)
import {religions} from './app/data/religions'


export default defineNuxtConfig({
    compatibilityDate: '2026-10-01',
    devtools: {enabled: false},
    css: ['~/assets/main.sss'],
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            meta: [
                {name: 'description', content: "Quick reference for false beliefs of other religions"},
            ],
        },
    },
    nitro: {
        prerender: {
            // Ensure every religion page is generated even if not linked anywhere
            routes: ['/', ...religions.map(r => `/${r.slug}`)],
        },
    },
    typescript: {
        strict: true,
    },
})
