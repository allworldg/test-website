export default defineNuxtRouteMiddleware((to, from) => {
    const isLogin = useState('isLogin', () => false)
    if (!isLogin.value) {
        return navigateTo('/login')
    }
})