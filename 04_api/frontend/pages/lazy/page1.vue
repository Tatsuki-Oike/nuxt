<script setup lang="ts">

const asyncData = await useAsyncData(
    "key5",
    (): Promise<any> => {
        // query & param
        type objType = {
            key1: string;
            key2: string;
        }
        const sampleObj: objType = {
            key1: "lazy",
            key2: "false"
        }
        const queryParams = new URLSearchParams(sampleObj)

        // url
        const apiUrl = "http://127.0.0.1:5000/api"
        const apiUrlQuery = `${apiUrl}/sleep?${queryParams}`

        // request
        const response = $fetch(apiUrlQuery)
        return response
    },
    {
        lazy: false
    }
)
const data = asyncData.data

</script>

<template>
    <p> lazy (false) </p>
    <p>{{ data }}</p>
</template>