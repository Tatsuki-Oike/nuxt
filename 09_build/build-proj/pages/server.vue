<script setup lang="ts">

type objType = {
            key1: string;
            key2: string;
        }
const sampleObj: objType = {
    key1: "value1",
    key2: "100"
}

const data = ref()
const post = async () => {
    const asyncData = await useLazyFetch(
    `/api/hello/`,
        {
            key: "key0",
            method: "POST",
            body: sampleObj
        }
    )
    data.value = asyncData.data.value
}
</script>

<template>
    <h2> server.vue </h2>
    <p> こちらは、サーバーにアクセスするページです </p>
    <p>{{ data }}</p>
    <button class="btn btn-primary" v-on:click="post"> POST </button>
</template>