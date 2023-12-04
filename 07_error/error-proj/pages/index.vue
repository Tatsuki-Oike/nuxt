<script setup lang="ts">

type TaskType = {
  id: string;
  task: string;
  status: string;
}

const asyncData = await useLazyFetch(
    `/api/task/`,
    {
        key: "key1",
        method: "GET"
    }
)

// asyncDataの取得
const data = asyncData.data
const pending = asyncData.pending
const asyncStatus = asyncData.status

// taskListとserverErrorObj
const taskList = computed(
    (): TaskType[] | undefined => {
        let returnList;
        if(data.value !== null){
            returnList = data.value.body.taskList
        }
        return returnList
    }
)
const serverErrorObj = computed(
    () => {

        let flg = false
        let msg = ""

        switch (asyncStatus.value) {
            case "success":
                if(data.value?.statusCode===500){
                    flg = true
                    msg = "データベースの処理中にERRORが発生"    
                }
                break;
            case "error":
                flg = true
                msg = "サーバーの処理中にERRORが発生"
                break;
        }

        return {
            "flg": flg,
            "msg": msg
        }
    }
)

</script>

<template>
    <h3 class="mt-5"> Task一覧 </h3>
    <p v-if="pending"> データ読み込み中 </p>
    <template v-else>

        <p>{{ asyncData }}</p>

        <p class="alert alert-danger" v-if="serverErrorObj.flg">
            サーバーの処理中にERRORが出ました。Detail: {{ serverErrorObj.msg }}
        </p>

        <p v-else-if="taskList?.length===0"> 表示できるデータがありません </p>

        <table class="table" v-else>
            <thead>
                <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in data?.body.taskList" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.task }}</td>
                <td>{{ task.status }}</td>
                </tr>
            </tbody>
        </table>

    </template>
    
</template>