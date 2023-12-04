<script setup lang="ts">
const count = ref(0)
const double = computed(
    () => {
        return count.value * 2
    }
)
const plusOne = () => {
    count.value++
}

</script>

<template>
    <h2> ref.vue </h2>
    <p> こちらは、動的なページです </p>
    <p> count: {{ count }} </p>
    <p> double: {{ double }} </p>
    <button class="btn btn-primary" v-on:click="plusOne"> plusOne </button>
</template>