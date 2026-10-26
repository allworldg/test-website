<script setup lang="ts">
import { SIDEBAR_COLLAPSE } from '~/constants';
const collapse = useState(SIDEBAR_COLLAPSE, () => false)
</script>
<template>
    <div class="bg-blue-sidebar flex flex-col">
        <header class="text-white flex justify-center items-center gap-4 py-2">
            <img src="https://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png" class="h-8 w-8 shrink-0">
            <Transition leave-from-class="opacity-100" leave-to-class="opacity-0"
               enter-from-class="opacity-0"
                enter-to-class="opacity-100" enter-active-class="transition-opacity duration-300">
                <div v-if="!collapse" class="font-bold whitespace-nowrap">管理系统</div>
            </Transition>
        </header>
        <nav class="text-gray-200">
            <ul>
                <li class="">
                    <NuxtLink to="/dashboard/user-manage" class="h-12 pl-6 flex items-center gap-2"
                        exact-active-class="bg-blue-choose">
                        <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1" class="w-4 h-4 fill-white shrink-0">
                            <path
                                d="m14.997 22.924c.042.551-.37 1.031-.921 1.073-.543.044-1.033-.369-1.073-.921-.217-2.847-2.634-5.076-5.503-5.076s-5.286 2.229-5.503 5.076c-.042.55-.51.96-1.073.921-.551-.042-.963-.522-.921-1.073.296-3.882 3.589-6.924 7.497-6.924s7.201 3.042 7.497 6.924zm-12.997-14.424c0-3.033 2.468-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.468 5.5-5.5 5.5-5.5-2.467-5.5-5.5zm2 0c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5zm19-4.5h-4.745l1.452-1.452c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.862 2.862c-.277.278-.431.647-.431 1.04s.153.762.431 1.04l2.862 2.862c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414l-1.523-1.523h4.816c.553 0 1-.448 1-1s-.447-1-1-1z" />
                        </svg>
                        <Transition leave-from-class="opacity-100" leave-to-class="opacity-0"
                            leave-active-class="transition-opacity duration-200"
                            enter-from-class="opacity-0" enter-to-class="opacity-100"
                            enter-active-class="transition-opacity duration-300">
                            <span v-if="!collapse" class="whitespace-nowrap">用户管理</span>
                        </Transition>
                    </NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to="/dashboard/system-manage"
                        class="h-12 pl-6 flex items-center  gap-2"
                        exact-active-class="bg-blue-choose">
                        <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1" class="w-4 h-4 fill-white shrink-0">
                            <path
                                d="m14.997 22.924c.042.551-.37 1.031-.921 1.073-.543.044-1.033-.369-1.073-.921-.217-2.847-2.634-5.076-5.503-5.076s-5.286 2.229-5.503 5.076c-.042.55-.51.96-1.073.921-.551-.042-.963-.522-.921-1.073.296-3.882 3.589-6.924 7.497-6.924s7.201 3.042 7.497 6.924zm-12.997-14.424c0-3.033 2.468-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.468 5.5-5.5 5.5-5.5-2.467-5.5-5.5zm2 0c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5zm19-4.5h-4.745l1.452-1.452c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-2.862 2.862c-.277.278-.431.647-.431 1.04s.153.762.431 1.04l2.862 2.862c.391.391 1.023.391 1.414 0s.391-1.023 0-1.414l-1.523-1.523h4.816c.553 0 1-.448 1-1s-.447-1-1-1z" />
                        </svg>

                        <Transition leave-from-class="opacity-100" leave-to-class="opacity-0"
                            leave-active-class="transition-opacity duration-200"
                            enter-from-class="opacity-0" enter-to-class="opacity-100"
                            enter-active-class="transition-opacity duration-300">
                            <span v-if="!collapse" class="whitespace-nowrap">系统管理</span>
                        </Transition>
                    </NuxtLink>
                </li>
            </ul>
        </nav>

    </div>
</template>