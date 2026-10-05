
// Auto-detect Bible references in page content and show the passage on hover/click

import {translation} from '~/bible'


// Set to true to turn the enhancer on
const enabled = false


// Load the enhancer only when enabled, and rescan content after every page change
export default defineNuxtPlugin(nuxt_app => {
    if (!enabled){
        return
    }

    // Lazily create the enhancer so its code and styles are only downloaded when enabled
    let enhancer:Promise<import('@gracious.tech/fetch-enhancer').BibleEnhancer>|undefined
    const get_enhancer = () => {
        enhancer ??= Promise.all([
            import('@gracious.tech/fetch-enhancer'),
            import('@gracious.tech/fetch-client/client.css'),
            import('@gracious.tech/fetch-enhancer/styles.css'),
        ]).then(([{BibleEnhancer}]) => new BibleEnhancer({
            translations: [translation],
            // Keep scroll position when the enhancer adds a history entry for its popup
            before_history_push: () => {
                history.replaceState({...history.state, scroll_y: window.scrollY}, '')
            },
        }))
        return enhancer
    }

    // Discover references within the main content once each page has rendered
    nuxt_app.hook('page:finish', async () => {
        const root = document.querySelector('main')
        if (root instanceof HTMLElement){
            await (await get_enhancer()).discover_bible_references(root)
        }
    })
})
