<template>
    <h2 class="mt-3"> useFetch </h2>

    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'fetch'}"> Home </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'fetch-page1'}"> watch </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'fetch-page2'}"> lazy </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'fetch-page3'}"> useLazyFetch </NuxtLink>
    <br><br>

    <NuxtPage/> 
</template>