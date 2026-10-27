<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>
<template>
    <div class="px-4 py-6">
        <form action="" class="flex gap-2 flex-wrap">
            <div class="flex gap-2 items-center flex-wrap">
                <label for="">角色管理</label>
                <input placeholder="请输入角色名称"
                    class="border rounded-sm border-gray-300 pl-2 py-1 text-sm focus:border-blue-500 focus:outline-none w-50"></input>
            </div>
            <div class="flex gap-2 items-center flex-wrap">
                <label for="">权限字符</label>
                <input placeholder="请输入权限名称"
                    class="border rounded-sm border-gray-300 pl-2 py-1 text-sm focus:border-blue-500 focus:outline-none w-50"></input>
            </div>
            <div class="flex gap-2 items-center flex-wrap">
                <label for="">状态</label>
                <input placeholder="状态"
                    class="border rounded-sm border-gray-300 pl-2 py-1 text-sm focus:border-blue-500 focus:outline-none w-50"></input>

            </div>
            <div class="flex gap-2 items-center flex-wrap">
                <label for="">创建时间</label>
                <input placeholder="开始时间 - 结束时间"
                    class="border rounded-sm border-gray-300 pl-2 py-1 text-sm focus:border-blue-500 focus:outline-none w-50"></input>
            </div>
        </form>

    </div>
</template>