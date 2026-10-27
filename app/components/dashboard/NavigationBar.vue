<script setup lang="ts">
import { SIDEBAR_COLLAPSE } from '~/constants';

const props = defineProps<{
    user: { username: string } | null
}>()
const collapse = useState<boolean>(SIDEBAR_COLLAPSE, () => false)
</script>
<template>
    <div
        class="flex justify-between h-14 border-b-gray-300 border-b shadow-[0_2px_6px_-4px_rgba(0,0,0,0.3)] ">
        <div class="flex flex-row gap-2 items-center">
            <button @click="collapse = !collapse"
                class="cursor-pointer hover:bg-gray-100 self-stretch px-4">
                <svg data-v-49e15297 viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                    class="hamburger is-active w-5 h-5">
                    <path data-v-49e15297
                        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z">
                    </path>
                </svg>
            </button>

            <nav class="text-gray-400 ">
                首页
            </nav>
        </div>
        <div>
            {{ props.user?.username }}
        </div>
    </div>
</template>
