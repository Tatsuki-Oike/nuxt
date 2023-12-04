<script setup lang="ts">

const id = ref("")
const successFlg = ref(false)
const data = ref()

const getFunc = async () => {
    if (id.value.trim() !== ''){
        const query = {
            id: id.value
        }

        const asyncData = await useLazyFetch(
            `/api/item/task/`,
            {
                key: "key4",
                method: "GET",
                query: query
            }
        )
        data.value = asyncData.data.value?.body
        successFlg.value = true
    } else {
        console.log("文字列入力せよ")
    }
    id.value = ""
}

</script>

<template>

    <h3 class="mt-5"> Task取得 </h3>

    <form @submit.prevent="getFunc" class="container mt-3">
        <div class="form-group">
            <label for="task">id:</label>
            <input type="text" class="form-control" v-model="id" />
        </div>

        <button type="submit" class="btn btn-outline-primary mt-3">Get</button>
    </form>
    <p class="mt-3"> {{data}} </p>
    <p class="alert alert-primary mt-3" v-if="successFlg"> SUCCESS </p>
      
</template>