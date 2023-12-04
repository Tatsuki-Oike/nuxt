<script setup lang="ts">
const counter = useCounterStore();
</script>

<template>
    <h2 class="mt-5"> Comp1.vue </h2>
    <p> {{ counter.count }} </p>
</template>