<script setup lang="ts">
const route = useRoute()
const userId = route.params.id
</script>

<template>
    <h2 class="mt-3"> user / [id] </h2>
    <p> {{ userId }} </p>
</template>