<script setup lang="ts">

// query & param
type objType = {
    key1: string;
    key2: string;
}
const sampleObj: objType = {
    key1: "value1",
    key2: "100"
}
const queryParams = new URLSearchParams(sampleObj)

// url
const apiUrl = "http://127.0.0.1:5000/api"
const apiUrlQuery = `${apiUrl}/helloWorld?${queryParams}`
const apiUrlParam = `${apiUrl}/param/0`

// request
const getResponse = await $fetch(apiUrlQuery)
const postResponse = await $fetch(apiUrlQuery, {"method": "POST", body: sampleObj})
const getResponseParam = await $fetch(apiUrlParam) as any

</script>

<template>
    <h2 class="mt-3">Home</h2>

    <p> GET {{ apiUrlQuery }}</p>
    <p>{{ getResponse }}</p>
    <br>

    <p> POST {{ apiUrlQuery }}</p>
    <p>{{ postResponse }}</p>
    <br>

    <p> GET {{ apiUrlParam }}</p>
    <p>{{ getResponseParam }}</p>
</template>