<script setup lang="ts">

type LoginUserType = {
    id: string;
    password: string;
  }

type UserType = {
    id: string;
    name: string;
  }

// formの初期値
const loginId = ref("")
const password = ref("")
const noInputFlg = ref(false)

// 表示関連の初期値
const pending = ref(false)
const successFlg = ref(false)
const serverErrorFlg = ref(false)
const errorMsg = ref("")

// Cookie関連
const loginFunc = (user: any) => {
    const loginUserCookie = useCookie<UserType|null>("loginUser")
    loginUserCookie.value = {
        id: user.id,
        name: user.name
    }
    const loginTokenCookie = useCookie<string|null>("loginToken")
    loginTokenCookie.value = user.token
}

const login = async () => {
    if (loginId.value.trim() !== '' && password.value.trim() !== ''){
        serverErrorFlg.value = false
        pending.value = true

        const user: LoginUserType = {
            id: loginId.value,
            password: password.value,
        }

        const asyncData = await useLazyFetch(
            `/api/login/`,
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
                } else if(!data?.body.user) {
                    serverErrorFlg.value = true
                    errorMsg.value = "IDが正しくありません"
                } else if(!data.body.user.token) {
                    serverErrorFlg.value = true
                    errorMsg.value = "パスワードが正しくありません"
                } else {
                    serverErrorFlg.value = false
                    successFlg.value = true
                    loginFunc(data.body.user)
                    return navigateTo("/app")
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
}

</script>

<template>
    
    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">ログイン</h2>
                <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="username" class="form-label">ログインID</label>
                    <input type="text" id="username" v-model="loginId" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">パスワード</label>
                    <input type="password" id="password" v-model="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">ログイン</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>

    <p class="alert alert-danger mt-5" v-if="serverErrorFlg">
            {{ errorMsg }}
    </p>

</template>