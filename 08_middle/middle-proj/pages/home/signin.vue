<script setup lang="ts">

type UserType = {
    id: string;
    password: string;
    name: string;
    token?: string;
  }

// formの初期値
const loginId = ref("")
const password = ref("")
const username = ref("")
const noInputFlg = ref(false)

// 表示関連の初期値
const pending = ref(false)
const successFlg = ref(false)
const serverErrorFlg = ref(false)
const errorMsg = ref("")

const signin = async () => {
    if (
        loginId.value.trim() !== '' ||
        password.value.trim() !== '' ||
        username.value.trim() !== ''
     ){
        pending.value = true

        const user: UserType = {
            id: loginId.value,
            password: password.value,
            name: username.value
        }

        const asyncData = await useLazyFetch(
            `/api/user/`,
            {
                key: "key2",
                method: "POST",
                body: user
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
        noInputFlg.value = true
    }
    pending.value = false
    loginId.value = ""
    password.value = ""
    username.value = ""
}

</script>

<template>
     <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">新規ユーザー作成</h2>
                <form @submit.prevent="signin">
                <div class="mb-3">
                    <label for="loginId" class="form-label">ログインID</label>
                    <input type="text" id="loginId" v-model="loginId" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">パスワード</label>
                    <input type="password" id="password" v-model="password" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">ユーザー名</label>
                    <input type="text" id="username" v-model="username" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block float-end">新規作成</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>