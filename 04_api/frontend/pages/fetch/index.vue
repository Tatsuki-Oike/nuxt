<script setup lang="ts">

type objType = {
            key1: string;
            key2: string;
        }
const sampleObj: objType = {
    key1: "value1",
    key2: "100"
}

const asyncData = await useFetch(
    "http://127.0.0.1:5000/api/helloWorld",
    {
        key: "key9",
        query: sampleObj,
        transform: (data: any): string[] => {
            const status = data.status
            const method = data.body.method
            const query = data.body.query
            return [status, method, query]
        }
    }
)
const data = asyncData.data

</script>

<template>
    <p> useFetch </p>
    <p>{{ data }}</p>
</template>