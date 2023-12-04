<script setup lang="ts">
type Props = {
    content: string
}
defineProps<Props>();
</script>

<template>
    <h2 class="mt-5"> Comp1.vue </h2>
    <p> {{ content }} </p>
</template>