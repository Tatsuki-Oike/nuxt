<script setup lang="ts">

const id = ref("")
const successFlg = ref(false)

const deleteFunc = async () => {
    if (id.value.trim() !== ''){
        const query = {
            id: id.value
        }

        await useLazyFetch(
            `/api/item/task/`,
            {
                key: "key7",
                method: "DELETE",
                query: query
            }
        )
        successFlg.value = true
    } else {
        console.log("文字列入力せよ")
    }
    id.value = ""
}

</script>

<template>

    <h3 class="mt-5"> Task消去 </h3>

    <form @submit.prevent="deleteFunc" class="container mt-3">
        <div class="form-group">
            <label for="task">id:</label>
            <input type="text" class="form-control" v-model="id" />
        </div>

        <button type="submit" class="btn btn-outline-danger mt-3">Delete</button>
    </form>
    
    <p class="alert alert-primary mt-3" v-if="successFlg"> SUCCESS </p>
      
</template>