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
        <button class="absolute top-5 right-4 rounded-full p-2 shadow" @click="toggleFavorites()">
            <component 
                :is="favoritesStore.isFavorite(id) ? HeartIconSolid : HeartIconOutline"
                class="size-7 text-purple-600 hover:text-white" 
            />
        </button>
    </div>

</template>

<style scoped></style>