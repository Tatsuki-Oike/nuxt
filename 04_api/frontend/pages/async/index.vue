<script setup lang="ts">

const asyncData = await useAsyncData(
    "key1",
    (): Promise<any> => {
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

        // request
        const response = $fetch(apiUrlQuery)
        return response
    }
)
const data = asyncData.data

</script>

<template>
    <p> useAsyncData </p>
    <p>{{ data }}</p>
</template>