<template>
    <h2 class="mt-3"> useAsyncData </h2>

    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'async'}"> useAsyncData </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'async-page1'}"> pick </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'async-page2'}"> transform </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'async-page3'}"> watch </NuxtLink>
    <br><br>

    <NuxtPage/> 
</template>