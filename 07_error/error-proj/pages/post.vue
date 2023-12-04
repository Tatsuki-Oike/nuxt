<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

type taskType = {
            id: string;
            task: string;
            status: string;
        }

// Form入力の初期値の設定
const task = ref("")
const noTaskFlg = ref(false)

// 表示関連の初期値
const pending = ref(false)
const successFlg = ref(false)
const serverErrorFlg = ref(false)
const errorMsg = ref("")

// postのイベント
const postFunc = async () => {
    if (task.value.trim() !== ''){
        pending.value = true
        noTaskFlg.value = false

        const sampleTask: taskType = {
            id: uuidv4(),
            task: task.value,
            status: "todo"
        }

        const asyncData = await useLazyFetch(
            `/api/task/`,
            {
                key: "key2",
                method: "POST",
                body: sampleTask
            }
        )

        // asyncDataの取得
        const data = asyncData.data.value
        const asyncStatus = asyncData.status.value
        pending.value = true

        // 表示関連の初期値変更
        switch (asyncStatus) {
            case "success":
                if(data?.statusCode===500){
                    serverErrorFlg.value = true
                    errorMsg.value = "データベースの処理中にERRORが発生"    
                } else {
                    serverErrorFlg.value = false
                    successFlg.value = true
                }
                break;
            case "error":
                serverErrorFlg.value = true
                errorMsg.value = "サーバーの処理中にERRORが発生"
                break;
        }
        
    } else {
        noTaskFlg.value = true
    }
    pending.value = false
    task.value = ""
}

</script>

<template>

    <h3 class="mt-5"> Task追加 </h3>

    <!-- formの入力 -->
    <form @submit.prevent="postFunc" class="container my-3">
        <div class="form-group">
            <label for="task">Task:</label>
            <input type="text" class="form-control" v-model="task" />
        </div>

        <button type="submit" class="btn btn-primary mt-3">Post</button>
    </form>

    <!-- 結果の出力 -->
    <p class="alert alert-danger" v-if="noTaskFlg"> Taskを入力してください </p>
    <template v-else>

        <p v-if="pending"> データ送信中 </p>

        <template v-else>
            <p class="alert alert-danger" v-if="serverErrorFlg">
                サーバーの処理中にERRORが出ました。Detail: {{ errorMsg }}
            </p>

            <p class="alert alert-primary mt-3" v-else-if="successFlg"> SUCCESS </p>
        </template>

    </template>
    
</template>