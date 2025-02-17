<script setup lang="ts">
import AddToFavButton from "./AddToFavButton.vue"

defineProps<{
    id: number,
    poster: string,
    title: string,
    overview: string,
    rateLevel: number
}>()

</script>

<template>

    <div class="relative h-full rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.25)] shadow-indigo-500/50">
        <img :src="`https://image.tmdb.org/t/p/w500${poster}`" :alt="title">
        <div class="px-6 py-4">
            <div class="font-bold leading-none mb-2">
                <h3>{{ title }}</h3>
            </div>
            <!-- <p class="text-gray text-md text-justify line-clamp-5  ">{{ props.overview }}</p> -->
        </div>
        <AddToFavButton 
            :id="id"
            :poster="poster"
            :title="title"
            :overview="overview"
            :rateLevel="rateLevel" 
            class="absolute top-1 right-0.5" />
    </div>

</template>

<style scoped>

    .drop-shadow-lg {
        --tw-drop-shadow: drop-shadow(0 10px 8px rgb(221, 48, 255));
    }

</style>