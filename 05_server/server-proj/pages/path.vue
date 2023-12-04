<script setup lang="ts">

type objType = {
            key1: string;
            key2: string;
        }
const sampleObj: objType = {
    key1: "value1",
    key2: "100"
}

const asyncData1 = await useLazyFetch(
    "/api/hello",
    {
        key: "key4",
        query: sampleObj
    }
)
const data1 = asyncData1.data

const asyncData2 = await useLazyFetch(
    "/hello",
    {
        key: "key5",
        query: sampleObj
    }
)
const data2 = asyncData2.data

const asyncData3 = await useLazyFetch(
    "/path/hello",
    {
        key: "key6",
        query: sampleObj
    }
)
const data3 = asyncData3.data

</script>

<template>
    <p> useLazyFetch1 </p>
    <p>{{ data1 }}</p>
    <p> useLazyFetch2 </p>
    <p>{{ data2 }}</p>
    <p> useLazyFetch3 </p>
    <p>{{ data3 }}</p>
</template>