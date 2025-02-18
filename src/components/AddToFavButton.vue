<script setup lang="ts">
import { useFavorites } from '../store/favorites'

import { HeartIcon as HeartIconOutline } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

import type { MovieSummary } from '../types/response/tmdb-api/MovieSummary.type'

const props = defineProps<{ 
    movie: {
        id: number,
        title: string,
        poster_path?: string,
        release_date: string,
        vote_average: number
    }
}>()

const favoritesStore = useFavorites()

const toggleFavorites = () => {
    const movie: MovieSummary = {
        id: props.movie.id,
        title: props.movie.title,
        poster_path: props.movie.poster_path,
        release_date: '',
        vote_average: props.movie.vote_average
    }
    if (favoritesStore.isFavorite(movie.id)) {
        favoritesStore.removeFavorite(movie.id)
        console.log(favoritesStore.favorites)
    } else {
        favoritesStore.addFavorite(movie)
        console.log(favoritesStore.favorites)
    }
}
</script>

<template>
    <button class="absolute top-1 right-0.5 rounded-full p-2" @click.stop.prevent="toggleFavorites()">
        <component 
            :is="favoritesStore.isFavorite(movie.id) ? HeartIconSolid : HeartIconOutline"
            class="size-7 text-purple-500 hover:text-white drop-shadow-lg" />
    </button>
</template>