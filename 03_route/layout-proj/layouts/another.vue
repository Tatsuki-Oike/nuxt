<template>
  <div class="container">
    <h2 class="mt-5"> Page3のレイアウト </h2>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'index'}">Home</NuxtLink>
    <slot/>
  </div>
</template>
  