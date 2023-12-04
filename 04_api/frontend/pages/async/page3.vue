<script setup lang="ts">

const value1 = ref("apple")
const asyncData = await useAsyncData(
    "key4",
    (): Promise<any> => {
        // query & param
        type objType = {
            key1: string;
            key2: string;
        }
        const sampleObj: objType = {
            key1: value1.value,
            key2: "100"
        }
        const queryParams = new URLSearchParams(sampleObj)

        // url
        const apiUrl = "http://127.0.0.1:5000/api"
        const apiUrlQuery = `${apiUrl}/helloWorld?${queryParams}`

        // request
        const response = $fetch(apiUrlQuery)
        return response
    },
    {
        watch: [value1]
    }
)
const data = asyncData.data

</script>

<template>
    <p> useAsyncData watch </p>
    <select v-model="value1">
      <option value="apple" selected>apple</option>
      <option value="banana">banana</option>
      <option value="cherry">cherry</option>
    </select>
    <p>{{ data }}</p>
</template>