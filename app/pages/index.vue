
<template lang="pug">

h1 False Beliefs
p A quick reference for why other religions and sects differ from biblical Christianity.
ul
    li(v-for='religion in religions' :key='religion.slug')
        NuxtLink(:to='`/${religion.slug}`') {{ religion.name }}

</template>


<script lang="ts" setup>

import {religions} from '~/data/religions'

</script>
