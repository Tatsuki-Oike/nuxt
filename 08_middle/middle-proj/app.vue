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

type UserType = {
    id: string;
    name: string;
  }

const logout = () => {
  const loginUserCookie = useCookie<UserType|null>("loginUser")
  loginUserCookie.value = null
  const loginTokenCookie = useCookie<string|null>("loginToken")
  loginTokenCookie.value = null
  return navigateTo("/")
}

</script>

<template>

  <div class="container">

    <h2 class="mt-5"> Hello, World </h2>

    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'index'}"> Home </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'users'}"> Users </NuxtLink>
    <NuxtLink class="btn btn-primary me-3" v-bind:to="{name: 'app'}"> App </NuxtLink>
    <button class="btn btn-outline-dark" v-on:click="logout">Log out</button>

    <NuxtPage/>

  </div>

</template>
