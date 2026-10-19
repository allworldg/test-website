export default defineNuxtRouteMiddleware(async (to) => {
    const requestFetch = useRequestFetch()
    const username = await requestFetch<string | null>('/api/user/auth')

    if (to.path === '/login') {
        if (username) {
            return navigateTo('/')
        }
        return
    }

    if (!username) {
        return navigateTo('/login')
    }
})
