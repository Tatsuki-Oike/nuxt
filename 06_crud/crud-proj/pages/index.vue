<script setup lang="ts">

const asyncData = await useLazyFetch(
    `/api/task/`,
    {
        key: "key1",
        method: "GET",
    }
)
const count = ref(0)
const data = asyncData.data
const loadFlg = asyncData.pending

const deleteFunc = async () => {

    const asyncData = await useLazyFetch(
        `/api/task/`,
        {
            key: "key2",
            method: "DELETE"
        }
    )
    const asyncData2 = await useLazyFetch(
        `/api/task/`,
        {
            key: "key3",
            method: "GET",
        }
    )

    data.value = asyncData2.data.value
    count.value = asyncData.data.value?.body.taskCount.count ?? 0
}

</script>

<template>
    <h3 class="mt-5"> Task一覧 </h3>
    <p v-if="loadFlg"> データ読み込み中 </p>
    <p v-else>{{ data }}</p>
    <button class="btn btn-danger mt-3" v-on:click="deleteFunc">Delete</button>
    <p v-if="count > 0" class="alert alert-outline-primary mt-3">
        消去したデータ数: {{ count }}
    </p>
</template>