type UserType = {
    id: string;
    name: string;
  }

export default defineNuxtRouteMiddleware(
    (to, from) => {
        const loginUserCookie = useCookie<UserType|null>("loginUser")
        const loginTokenCookie = useCookie<string|null>("loginToken")
        if(!loginUserCookie.value || !loginTokenCookie.value){
            return navigateTo("/")
        }
        else{
            return;
        }
    }
)
