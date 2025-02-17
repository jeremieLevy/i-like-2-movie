<script setup lang="ts">
import { useFavorites } from '../store/favorites';

import { HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

import type { MovieSummary } from '../types/response/tmdb-api/MovieSummary.type';

const props = defineProps<{
    id: number,
    poster: string,
    title: string,
    overview: string,
    rateLevel: number
}>()

const favoritesStore = useFavorites()

const toggleFavorites = () => {
    const movie: MovieSummary = {
        id: props.id,
        title: props.title,
        poster_path: props.poster,
        release_date: '',
        vote_average: props.rateLevel
    }
    if (favoritesStore.isFavorite(movie.id)) {
        favoritesStore.removeFavorite(movie.id)
        console.log(favoritesStore.favorites);
    } else {
        favoritesStore.addFavorite(movie)
        console.log(favoritesStore.favorites);
    }
}

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
        <button class="absolute top-1 right-0.5 rounded-full p-2" @click="toggleFavorites()">
            <component 
                :is="favoritesStore.isFavorite(id) ? HeartIconSolid : HeartIconOutline"
                class="size-7 text-purple-500 hover:text-white drop-shadow-lg" 
            />
        </button>
    </div>

</template>

<style scoped>
.drop-shadow-lg {
    --tw-drop-shadow: drop-shadow(0 10px 8px rgb(221, 48, 255));
}
</style>