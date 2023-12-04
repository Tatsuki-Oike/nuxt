<script setup lang="ts">

const asyncData = await useAsyncData(
    "key7",
    (): Promise<any> => {
        // query & param
        type objType = {
            key1: string;
            key2: string;
        }
        const sampleObj: objType = {
            key1: "lazy",
            key2: "true"
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
        lazy: true
    }
)
const data = asyncData.data
const loadFlg = asyncData.pending

</script>

<template>
    <p> pending </p>
    <p v-if="loadFlg"> データ読み込み中 </p>
    <p v-else>{{ data }}</p>
</template>