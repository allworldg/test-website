<script setup lang="ts">

</script>
<template>
    <div class="bg-blue-sidebar flex flex-col">
        <header class="text-white flex justify-center items-center gap-4 py-2">
            <img src="https://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png" class="h-8 w-8">
            <div class="font-bold">管理系统</div>
        </header>
        <nav class="text-gray-200">
            <ul>
                <li class="">
                    <NuxtLink to="/dashboard/user-manage" class="h-12 pl-6 flex items-center" exact-active-class="bg-blue-choose">用户管理
                    </NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to="/dashboard/system-manage" class="h-12 pl-6 flex items-center" exact-active-class="bg-blue-choose">系统管理</NuxtLink>
                </li>
            </ul>
        </nav>

    </div>
</template>