<script setup lang="ts">

// reactive
const count = ref(0)
const double = computed(
    () => {
        return count.value * 2
    }
)
const plusOne = () => {
    count.value++
}

// asyncData
const asyncData = await useLazyFetch(
    `http://127.0.0.1:5000/api/task`,
    {
        key: "key4",
        method: "GET"
    }
)
const data = asyncData.data
const pending = asyncData.pending

</script>

<template>

    <h3 class="mt-5"> SSG </h3>

    <h4 class="mt-4"> Ref </h4>
    <p> count: {{ count }} </p>
    <p> double: {{ double }} </p>
    <button class="btn btn-outline-primary" v-on:click="plusOne"> plusOne </button>

    <h4 class="mt-4"> async </h4>
    <p v-if="pending"> データ読み込み中 </p>
    <p v-else>{{ data }}</p>

    <NuxtLink class="btn btn-outline-dark me-3" v-bind:to="{name: 'index'}"> Home </NuxtLink>
    
</template>