<script setup lang="ts">
const page = computed(() => Number(useRoute().params.page))

const { data: articleData, error } = await useFetch('/api/articles', {
    query: {
        page: page,
        limit: 10,
    }
})
if (error.value) {
    createError({
        status: error.value.status ?? 400,
        message: error.value.message ?? '请求错误',
        fatal: true,
    })
}
const articles = articleData.value?.articles
</script>
<template>
    <div class="min-h-screen bg-gray-100 ">
        <div class="max-w-3xl w-full bg-white mx-auto">
            <nav class="flex flex-row gap-12 py-4 text-sm justify-center">
                <NuxtLink v-if="page>1" :to="`/articles/${page - 1}`">&lt; prev</NuxtLink>
                <span v-else aria-disabled="true" class="text-gray-400">prev</span>
                <div>{{ page }} / 10</div>
                <NuxtLink v-if="page<10" :to="`/articles/${page + 1}`">next &gt;</NuxtLink>
                <span v-else aria-disabled="true" class="text-gray-400">next</span>
            </nav>
            <main v-for="article in articles" :key="article.id"
                class="flex flex-row border-b border-gray-200">
                <div class="px-7 py-8">
                    <div class="font-bold text-cyan-dark">123</div>
                </div>
                <div class="py-5">
                    <h2>
                        <a>{{ article.name }}</a>
                        <span>({{ article.domain }})</span>
                    </h2>
                    <div class="text-[#595959] space-x-2 text-sm">
                        by <a href="#" class="underline">kbyatnal</a>
                        <time>{{ article.publishAt }}</time>
                        <span>|</span>
                        <a href="#" class="underline">123 comments</a>
                    </div>
                </div>
            </main>

            <nav class="flex flex-row gap-12 py-4 text-sm justify-center">
                <a>&lt; prev</a>
                <div>{{ page }} / 10</div>
                <a>next &gt;</a>
            </nav>
        </div>
    </div>
</template>
