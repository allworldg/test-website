<script setup lang="ts">
const username = ref('')
const password = ref('')
const errorMessage = ref('')

function onSubmit() {
    errorMessage.value = ''

    if (!username.value || !password.value || username.value.length < 3 || password.value.length < 6) {
        errorMessage.value = '账号和密码长度不能少于6位'
        return
    }

    $fetch('/api/user', {
        method: 'POST',
        body: {
            username: username.value,
            password: password.value,
        },
    })
        .then(async () => {
            await navigateTo('/dashboard')
        })
        .catch((error) => {
            const apiError = error as {
                data?: { statusMessage?: string }
                statusMessage?: string
            }
            errorMessage.value = apiError.data?.statusMessage
                ?? apiError.statusMessage
                ?? '登录失败，请稍后重试'
        })
}

definePageMeta({
    layout: 'login',
    middleware: 'auth',
})
</script>
<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <form class="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            @submit.prevent="onSubmit">
            <h1 class="mb-6 text-xl font-semibold">登录</h1>

            <label for="account" class="mb-1 block text-sm">账号</label>
            <input id="account" v-model="username" type="text" placeholder="请输入账号"
                class="mb-4 w-full rounded border border-gray-300 px-3 py-2" />

            <label for="password" class="mb-1 block text-sm">密码</label>
            <input id="password" v-model="password" type="password" placeholder="请输入密码"
                class="mb-5 w-full rounded border border-gray-300 px-3 py-2" />

            <p v-if="errorMessage" class="mb-4 text-sm text-red-600" role="alert">{{ errorMessage }}
            </p>

            <button type="submit"
                class="w-full rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
                登录
            </button>
        </form>
    </div>
</template>
