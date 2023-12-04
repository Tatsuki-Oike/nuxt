<script setup lang="ts">

import { v4 as uuidv4 } from 'uuid'

const task = ref("")
const successFlg = ref(false)

type taskType = {
            id: string;
            task: string;
            status: string;
        }

const postFunc = async () => {
    if (task.value.trim() !== ''){
        const sampleTask: taskType = {
            id: uuidv4(),
            task: task.value,
            status: "todo"
        }

        await useLazyFetch(
            `/api/task/`,
            {
                key: "key6",
                method: "POST",
                body: sampleTask
            }
        )
        successFlg.value = true
    } else {
        console.log("文字列入力せよ")
    }
    task.value = ""
}

</script>

<template>

    <h3 class="mt-5"> Task追加 </h3>

    <form @submit.prevent="postFunc" class="container mt-3">
        <div class="form-group">
            <label for="task">Task:</label>
            <input type="text" class="form-control" v-model="task" />
        </div>

        <button type="submit" class="btn btn-outline-primary mt-3">Post</button>
    </form>

    <p class="alert alert-primary mt-3" v-if="successFlg"> SUCCESS </p>
      
</template>