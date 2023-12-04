<template>
    <h2 class="mt-3"> user </h2>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'user-id', params: {id: 0}}">UserId</NuxtLink>
    <NuxtLink class="btn btn-primary me-3" 
        v-bind:to="{name: 'user-page1'}">UserPage1</NuxtLink>
    <NuxtPage/>
</template>