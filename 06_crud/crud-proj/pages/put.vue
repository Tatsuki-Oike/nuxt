<script setup lang="ts">

const id = ref("")
const successFlg = ref(false)

type putType = {
            id: string;
            change: {
                status: string;
            }
        }

const putFunc = async () => {
    if (id.value.trim() !== ''){
        const putData: putType = {
            id: id.value,
            change: {
                status: "done"
            }
        }

        await useLazyFetch(
            `/api/item/task/`,
            {
                key: "key5",
                method: "PUT",
                body: putData
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

    <h3 class="mt-5"> Status変更 </h3>

    <form @submit.prevent="putFunc" class="container mt-3">
        <div class="form-group">
            <label for="task">id:</label>
            <input type="text" id="task" class="form-control" v-model="id" />
        </div>

        <button type="submit" class="btn btn-outline-primary mt-3">Change</button>
    </form>

    <p class="alert alert-primary mt-3" v-if="successFlg"> SUCCESS </p>
      
</template>