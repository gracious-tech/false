
<template lang="pug">

h1 {{ religion.name }}
p(v-if='religion.summary') {{ religion.summary }}
ol
    li.belief(v-for='point in points' :key='point.title' :class='{primary: point.primary}')
        h2 {{ point.title }}
        p.explanation
            template(v-for='(part, i) in point.parts' :key='i')
                sup(v-if='part.footnotes.length')
                    template(v-for='(num, j) in part.footnotes' :key='num')
                        | {{ j ? ',' : '' }}
                        a(:href='`#fn-${num}`') {{ num }}
                template(v-else) {{ part.text }}
        blockquote.quote
            | {{ point.quote.text }}
            sup(v-if='point.quote_footnote')
                a(:href='`#fn-${point.quote_footnote}`') {{ point.quote_footnote }}
        p.response
            strong But Scripture says:
            |  {{ point.response }}
        blockquote.verse
            | {{ verses?.[point.verse] }}
            cite {{ point.verse }} (BSB)
        p.more(v-if='point.see_also?.length || point.further?.length')
            template(v-if='point.see_also?.length')
                strong See also:
                |  {{ point.see_also.join(', ') }}.
            template(v-if='point.further?.length')
                | {{ point.see_also?.length ? ' ' : '' }}
                strong Also see:
                template(v-for='(page, i) in point.further' :key='page.url')
                    | {{ i ? ', ' : ' ' }}
                    a(:href='page.url' target='_blank' rel='noopener') {{ page.label }}

section.footnotes(v-if='footnotes.length')
    h2 Sources
    ol
        li(v-for='(source, i) in footnotes' :key='i' :id='`fn-${i + 1}`')
            a(:href='source.url' target='_blank' rel='noopener') {{ source.label }}

</template>


<script lang="ts" setup>

import {get_religion} from '~/data/religions'
import {fetch_verses} from '~/bible'
import type {Source} from '~/data/religions'

// Resolve the religion from the route, or show a 404 if unknown
const route = useRoute()
const found = get_religion(String(route.params['religion']))
if (!found){
    throw createError({statusCode: 404, statusMessage: "Page not found", fatal: true})
}
const religion = found

useHead({title: religion.name})

// Fetch the text of each point's verse (done once at build time when prerendering)
const {data: verses} = await useAsyncData(`verses-${religion.slug}`,
    () => fetch_verses(religion.beliefs.map(belief => belief.verse)))

// Number every point's sources consecutively so they can be listed at the end of the page
const footnotes:Source[] = []
const points = religion.beliefs.map(belief => {
    const offset = footnotes.length
    footnotes.push(...belief.sources)

    // Split the explanation into text and groups of footnote markers like [1][2]
    const parts = belief.explanation.split(/((?:\[\d+\])+)/).map((text, i) => {
        if (i % 2 === 0){
            return {text, footnotes: [] as number[]}
        }
        const footnotes = [...text.matchAll(/\d+/g)].map(m => offset + Number(m[0]))
        return {text: '', footnotes}
    })

    // Footnote the quote with its source, if it has one
    const quote_footnote = belief.quote.source ? offset + belief.quote.source : 0

    return {...belief, parts, quote_footnote}
})

</script>


<style lang="sss" scoped>

.belief
    margin-bottom: 32px

h2
    font-size: 1.1em
    margin-bottom: 4px

// Primary points stand out as cards with a larger heading
.primary
    padding: 12px 16px
    border-left: 4px solid #b03030
    background-color: rgba(176, 48, 48, 0.06)
    h2
        font-size: 1.35em
        margin-top: 0
    > :last-child
        margin-bottom: 0

// Extra space between the last primary point and the secondary ones
.primary + .belief:not(.primary)
    margin-top: 40px

blockquote
    margin: 12px 0
    padding-left: 12px
    border-left: 3px solid rgba(128, 128, 128, 0.4)

.quote
    font-style: italic

.verse
    font-weight: 500
    cite
        display: block
        margin-top: 4px
        font-size: 0.9em
        font-style: normal
        opacity: 0.8

sup
    font-size: 0.7em
    a
        text-decoration: none
        padding: 0 1px

.more
    font-size: 0.9em

.footnotes
    margin-top: 48px
    font-size: 0.9em
    li
        margin-bottom: 4px
    li:target
        background-color: rgba(176, 48, 48, 0.12)

</style>
