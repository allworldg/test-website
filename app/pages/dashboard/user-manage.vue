<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>
<template>
    <div class="px-4 py-6">
        <form action="" class="flex gap-x-2 flex-wrap gap-y-6">
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
            <div class="flex flex-wrap gap-4 text-sm">
                <button @click="() => { }"
                    class="bg-blue-500 text-white hover:bg-blue-200 border border-blue-500 rounded-sm px-4 py-1">+
                    搜索</button>

                <button @click="() => { }"
                    class="bg-white text-black hover:bg-blue-200 border border-gray-300 rounded-sm px-4 py-1">+
                    重置</button>
            </div>
        </form>

        <div class="flex gap-3 text-xs mt-6">
            <button @click="() => { }"
                class="bg-blue-100 text-blue-500 hover:bg-blue-400 hover:text-white border border-blue-500 rounded-sm px-4 py-1">+
                新增</button>
            <button @click="() => { }"
                class="bg-green-100 text-green-500 hover:bg-green-400 hover:text-white border border-green-500 rounded-sm px-4 py-1"> 修改</button>
            <button @click="() => { }"
                class="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white border border-red-500 rounded-sm px-4 py-1">- 删除</button>
            <button @click="() => { }"
                class="bg-yellow-100 text-yellow-500 hover:bg-yellow-400 hover:text-white border border-yellow-500 rounded-sm px-4 py-1">e 导出</button>
        </div>


    </div>
</template>
