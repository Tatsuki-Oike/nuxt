<script setup lang="ts">

// headerの設定
useHead({
  title: "sample",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      rel: "stylesheet", 
      integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", 
      crossorigin: "anonymous"}
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", 
      integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous"
    }
  ]
})

// vueのデータと関数
const count = ref(2)

const double = computed(() => count.value*2)
const plusOne = () => count.value++
const reset = () => count.value = 0

</script>

<template>

  <div class="container">
    <h2 class="mt-5"> Hello, World </h2>
    <p> count: {{ count }} </p>
    <p> double: {{ double }} </p>
    <button class="btn btn-primary me-3" v-on:click="plusOne">plusOne</button>
    <button class="btn btn-primary" v-on:click="reset">reset</button>
    <Comp1 content="Hello, Comp1"/>
  </div>

</template>
