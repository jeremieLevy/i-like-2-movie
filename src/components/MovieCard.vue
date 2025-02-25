<script setup lang="ts">
import AddToFavButton from "./AddToFavButton.vue"

defineProps<{
    movie: {
        id: number,
        title: string,
        poster_path?: string,
        release_date: string,
        vote_average: number
    }
}>()

</script>

<template>

    <div class="relative lg:h-full md:h-full h-20 rounded-2xl overflow-hidden">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title">
        <div class="px-6 py-4">
            <div class="font-bold leading-none mb-2">
                <h3>{{ movie.title }}</h3>
            </div>
            <!-- <p class="text-gray text-md text-justify line-clamp-5  ">{{ props.overview }}</p> -->
        </div>
        <AddToFavButton 
            :movie="movie"
            class="absolute top-1 right-0.5" />
    </div>

</template>

<style scoped>

    .drop-shadow-lg {
        --tw-drop-shadow: drop-shadow(0 10px 8px rgb(221, 48, 255));
    }

</style>