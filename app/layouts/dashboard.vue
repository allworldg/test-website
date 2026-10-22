<script setup lang="ts">
import NavigationBar from '~/components/dashboard/NavigationBar.vue';
import SideBar from '~/components/dashboard/SideBar.vue';
const { data: user, error } = useFetch('/api/user', {
    method: 'get',
    default: () => null
})
if (error.value) {
    createError({
        status: error.value.status ?? 400,
        statusText: error.value.statusText ?? 'not login',
        fatal: true,
    })
}

</script>
<template>
    <div class="flex min-h-screen">
        <SideBar class="w-52 shrink-0 min-h-screen"></SideBar>
        <div class="flex flex-col flex-1">
            <header>
                <NavigationBar :user="user"></NavigationBar>
            </header>
            <main class="flex-1">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
