<script setup lang="ts">
import NavigationBar from '~/components/dashboard/NavigationBar.vue';
import SideBar from '~/components/dashboard/SideBar.vue';
import { SIDEBAR_COLLAPSE } from '~/constants';
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
const collapse = useState<boolean>(SIDEBAR_COLLAPSE, () => false)

</script>
<template>
    <div class="flex min-h-screen">
        <SideBar class="shrink-0 min-h-screen duration-300 transition-[width] max-lg:hidden" :class="collapse ? 'w-16' : 'w-52'"></SideBar>
        <div class="flex flex-col flex-1">
            <header>
                <NavigationBar :user="user"></NavigationBar>
                <div class="flex items-center h-8 border-b border-b-gray-300 pl-2">
                    <div class="">this is breadcrum3b</div>
                </div>
            </header>
            <main class="flex-1">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
