<script setup lang="ts">

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

defineProps({
  error: Object
})

const clearError = async () => {
    await navigateTo("/")
}
</script>

<template>
    <div class="container">
        <h1 class="mt-5 text-danger">StatuCode: {{ error?.statusCode }}</h1>
        <div class="my-4">
            <div class="card border-danger">
            <div class="card-header bg-danger text-light py-3">
                <h5 class="card-title">{{ error?.message }} </h5>
            </div>
            <div class="card-body text-danger">
                <p class="card-text">{{ error?.stack }}</p>
            </div>
            </div>
        </div>
        <button class="btn btn-outline-dark" v-on:click="clearError">return</button>
    </div>
</template>