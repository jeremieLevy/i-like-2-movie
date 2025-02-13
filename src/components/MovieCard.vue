<script setup lang="ts">

defineProps<{
    poster: string,
    title: string, 
    overview: string,
    rateLevel: number
}>()

</script>

<template>

    <div class="h-full rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.25)] shadow-indigo-500/50">
        <img :src="`https://image.tmdb.org/t/p/w500${poster}`" :alt="title">
        <div class="px-6 py-4">
            <div class="font-bold leading-none mb-2">
                <h3>{{ title }}</h3>
            </div>
            <!-- <p class="text-gray text-md text-justify line-clamp-5  ">{{ props.overview }}</p> -->
        </div>
    </div>

</template>

<style scoped>
</style>