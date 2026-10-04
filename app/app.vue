
<template lang="pug">

header
    NuxtLink(to='/') False Beliefs
main
    NuxtPage

</template>


<script lang="ts" setup>

// Default page title, extended by each page
useHead({titleTemplate: title => title ? `${title} | False Beliefs` : "False Beliefs"})

</script>


<style lang="sss" scoped>

header
    padding: 16px
    font-weight: bold

main
    max-width: 800px
    margin: 0 auto
    padding: 16px

</style>
