<template>
  <div class="container">
    <h2 class="mt-5"> Defaultのレイアウト </h2>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'index'}">Home</NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'page1'}">Page1</NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'page2'}">Page2</NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'page3'}">Page3</NuxtLink>
    <slot/>
  </div>
</template>
  