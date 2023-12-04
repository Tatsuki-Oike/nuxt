<template>
    <h2 class="mt-3"> lazy </h2>

    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'lazy'}"> Home </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'lazy-page1'}"> lazy (false) </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'lazy-page2'}"> lazy (true) </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'lazy-page3'}"> pending </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'lazy-page4'}"> useLazyAsyncData </NuxtLink>
    <br><br>

    <NuxtPage/> 
</template>