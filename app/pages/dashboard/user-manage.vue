<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
</script>
<template>
    <div class="px-6 py-6">
        <form action="" class="flex gap-x-2 flex-wrap gap-y-6">
            <div class="flex gap-2 items-center flex-wrap min-w-0">
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

        <div class="flex gap-3 text-xs mt-6 flex-wrap">
            <button @click="() => { }"
                class="bg-blue-100 text-blue-500 hover:bg-blue-400 hover:text-white border border-blue-500 rounded-sm px-4 py-1">+
                新增</button>
            <button @click="() => { }"
                class="bg-green-100 text-green-500 hover:bg-green-400 hover:text-white border border-green-500 rounded-sm px-4 py-1">
                修改</button>
            <button @click="() => { }"
                class="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white border border-red-500 rounded-sm px-4 py-1">-
                删除</button>
            <button @click="() => { }"
                class="bg-yellow-100 text-yellow-500 hover:bg-yellow-400 hover:text-white border border-yellow-500 rounded-sm px-4 py-1">e
                导出</button>
        </div>
        <div class="mt-2 overflow-x-auto">
            <table>
                <tr
                    class="py-10 text-gray-600 font-bold text-sm border-b border-b-gray-300 bg-gray-50">
                    <th class="min-w-50  py-4">角色编号</th>
                    <th class="min-w-50 ">角色名称</th>
                    <th class="min-w-50 ">权限字符</th>
                    <th class="min-w-50 ">显示顺序</th>
                    <th class="min-w-50 ">状态</th>
                    <th class="min-w-50 ">创建时间</th>
                    <th class="min-w-lg ">操作</th>
                </tr>
            </table>
        </div>
        <nav aria-label="page" class="flex justify-end mt-10 items-center gap-4 flex-wrap">
            <div class="text-sm">共 x 页</div>
            <select class="text-sm  border border-gray-300 rounded-xs pl-4 pr-4 h-7">
                <option value="10">共 10 页</option>
                <option value="10">共 20 页</option>
                <option value="10">共 30 页</option>
            </select>
            <div class="flex gap-2">
                <button class="bg-gray-100 font-bold text-gray-400 h-7 w-7">&lt;</button>
                <div
                    class="flex bg-blue-500 h-7 w-7 justify-center text-white items-center text-sm rounded-sm">
                    1</div>
                <button class="bg-gray-100 font-bold text-gray-400 h-7 w-7">&gt;</button>
            </div>
            <div class="flex gap-1 items-center flex-wrap">
                <span>前往</span>
                <input type="text" class="w-12 text-center border border-gray-200 rounded-sm h-8"
                    value="1">
                <span>页</span>
            </div>
        </nav>
    </div>
</template>
