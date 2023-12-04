<script setup lang="ts">

type objType = {
            key1: string;
            key2: string;
        }
const sampleObj: objType = {
    key1: "value1",
    key2: "100"
}

const asyncData = await useLazyFetch(
    "/api/hello",
    {
        key: "key1",
        query: sampleObj
    }
)
const data = asyncData.data
const loadFlg = asyncData.pending

</script>

<template>
    <p> useLazyFetch </p>
    <p v-if="loadFlg"> データ読み込み中 </p>
    <p v-else>{{ data }}</p>
</template>