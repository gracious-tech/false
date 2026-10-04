
<template lang="pug">

h1 {{ religion.name }}
p(v-if='religion.summary') {{ religion.summary }}
ol
    li.belief(v-for='item in religion.beliefs' :key='item.belief')
        h2 {{ item.belief }}
        p.detail(v-if='item.detail') {{ item.detail }}
        p {{ item.response }}
        p.refs(v-if='item.refs.length') {{ item.refs.join('; ') }}
        p.sources(v-if='item.sources?.length')
            | {{ item.sources.length > 1 ? "Official sources:" : "Official source:" }}
            template(v-for='(source, i) in item.sources' :key='source.url')
                | {{ i ? ', ' : ' ' }}
                a(:href='source.url' target='_blank' rel='noopener') {{ source.label }}

</template>


<script lang="ts" setup>

import {get_religion} from '~/data/religions'

// Resolve the religion from the route, or show a 404 if unknown
const route = useRoute()
const found = get_religion(String(route.params['religion']))
if (!found){
    throw createError({statusCode: 404, statusMessage: "Page not found", fatal: true})
}
const religion = found

useHead({title: religion.name})

</script>


<style lang="sss" scoped>

.belief
    margin-bottom: 24px

h2
    font-size: 1.2em
    margin-bottom: 4px

.detail
    opacity: 0.85

.refs
    font-style: italic
    opacity: 0.8

.sources
    font-size: 0.9em

</style>
