<script setup lang="ts">

const asyncData = await useLazyFetch(
    `/api/user/`,
    {
        key: "key3",
        method: "GET"
    }
)

// asyncDataの取得
const data = asyncData.data
const pending = asyncData.pending
const asyncStatus = asyncData.status

// taskListとserverErrorObj
const userList = computed(
    () => {
        let returnList;
        if(data.value !== null){
            returnList = data.value.body.userList
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
    <h3 class="mt-5"> User一覧 </h3>
    <p v-if="pending"> データ読み込み中 </p>
    <template v-else>

        <p class="alert alert-danger" v-if="serverErrorObj.flg">
            サーバーの処理中にERRORが出ました。Detail: {{ serverErrorObj.msg }}
        </p>

        <p v-else-if="userList?.length===0"> 表示できるデータがありません </p>

        <table class="table" v-else>
            <thead>
                <tr>
                <th>LoginID</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in data?.body.userList" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                </tr>
            </tbody>
        </table>
        
    </template>
</template>