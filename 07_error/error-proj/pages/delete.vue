<script setup lang="ts">

// 表示関連の初期値
const taskCount: Ref<number|undefined> = ref(0)
const pending = ref(false)
const successFlg = ref(false)
const serverErrorFlg = ref(false)
const errorMsg = ref("")

// deleteのイベント
const deleteFunc = async () => {
    
    pending.value = true

    const asyncData = await useLazyFetch(
        `/api/task/`,
        {
            key: "key3",
            method: "DELETE",
        }
    )

    // asyncDataの取得
    const data = asyncData.data.value
    const asyncStatus = asyncData.status.value
    pending.value = false

    // 表示関連の初期値変更
    switch (asyncStatus) {
        case "success":
            if(data?.statusCode===500){
                serverErrorFlg.value = true
                errorMsg.value = "データベースの処理中にERRORが発生"    
            } else {
                successFlg.value = true
                serverErrorFlg.value = false
                taskCount.value = data?.body.taskCount.count
            }
            break;
        case "error":
            serverErrorFlg.value = true
            errorMsg.value = "サーバーの処理中にERRORが発生"
            break;
    }
    pending.value = false
}

</script>

<template>

    <h3 class="mt-5"> Task消去 </h3>

    <!-- formの入力 -->
    <form @submit.prevent="deleteFunc" class="container my-3">
        <button type="submit" class="btn btn-primary mt-3">Delete</button>
    </form>

    <!-- 結果の出力 -->
    <p v-if="pending"> データ送信中 </p>

    <template v-else>
        <p class="alert alert-danger" v-if="serverErrorFlg">
            サーバーの処理中にERRORが出ました。Detail: {{ errorMsg }}
        </p>

        <p class="alert alert-primary mt-3" v-else-if="successFlg"> 
            {{ taskCount }} 個のデータを消去しました。
        </p>
    </template>
   
</template>