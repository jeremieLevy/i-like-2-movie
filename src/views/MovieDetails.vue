<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
// import { useFavorites } from '../store/favorites';

import { getMovieDetails } from '../services/api'
import { getMovieCredits } from '../services/api'

import PopularMovieList from "../components/PopularMovieList.vue";

// const favoritesStore = useFavorites()

const route = useRoute()

const movieId = computed(() => route.params.id as string)
// const movieUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`

const { data: movie, isLoading: isLoadingMovie, error: errorMovie } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetails(movieId.value),
    staleTime: 60_000,
    gcTime: 100_000
})

const { data: credits, isLoading: isLoadingCredits, error: errorCredits } = useQuery({
    queryKey: ['credits', movieId],
    queryFn: () => getMovieCredits(movieId.value),
    staleTime: 60_000,
    gcTime: 100_000
})

</script>

<template>

    <div v-if="errorMovie" class="mt-3 text-red">Something went wrong 😬</div>
    <div v-else-if="isLoadingMovie">Loading movies...</div>
    <div v-else-if="movie" class="container mx-auto flex mt-30">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`${movie.original_title}`" class="w-72 h-full rounded-2xl">
        <div class="flex flex-col px-8">
            <div class="flex items-start">
                <h1>{{ movie.title }}</h1>
            </div>
            <hr class="my-3">
            <h3 class="font-bold text-purple-300">Synopsis</h3>
            <p class="text-justify mt-3">{{ movie.overview }}</p>
            <h3 class="font-bold mt-8 texit-purple-300">Casting</h3>
            <div v-if="errorCredits" class="mt-3 text-red">Something went wrong 😬</div>
            <div v-else-if="isLoadingCredits">Loading actors...</div>
            <div v-else-if="credits" class="mt-3">
                <ul v-for="actor in credits.cast.slice(0,6)" :key="actor.id" class="inline-block">
                    <router-link :to="{ name: 'actor-details', params: { id: actor.id }}">
                         <li>
                            <img 
                            class="w-15 h-15 rounded-full object-cover mx-2 brightness-90 hover:brightness-110" 
                            :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`" 
                            :alt="`${actor.name}`">
                        </li>
                    </router-link>
                </ul>
            </div>
            <div v-else>❌ 🗒️ No credits found</div>
        </div>
    </div>
    <div v-else>❌ 🎥 No movies found</div>
    <PopularMovieList label="Similar movies" class="mt-10"/>

</template>

<style scoped></style>