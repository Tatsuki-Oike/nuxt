<script setup lang="ts">

definePageMeta({
    middleware: ["login"]
})

const config = useRuntimeConfig()

</script>

<template>
    <h2> env.vue </h2>
    <p> こちらは環境変数を利用するページです。 </p>
    <p> {{ config.public }} </p>
</template>