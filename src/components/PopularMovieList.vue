<script setup lang="ts">
import MovieCard from './MovieCard.vue'
import { useQuery } from "@tanstack/vue-query"
import { getPopularMovies } from '../services/api'

const { data: popularMovies, isLoading, error } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
    staleTime: 60_000,
    gcTime: 100_000,
})

defineProps<{
    label: string
}>()


</script>

<template>

<div class="movie-list container mx-auto p-4 md:w-165 lg:w-220 xl:w-270">
        <h3 class="mb-5 text-center">{{ label }}</h3>
        <p v-if="isLoading">Chargement...</p>
        <p v-else-if="error" class="text-red-500 text-center mt-5">Error : {{ error }}</p>
        <div v-else class="grid gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <router-link 
                v-for="movie in popularMovies?.slice(0, 8)" 
                :key="movie.id" 
                :to="{ name: 'movie-details', params: { id: movie.id }}"
                class="cursor-pointer transform transition duration-200 hover:scale-105">
                <MovieCard 
                    :movie="movie"
                />
            </router-link>
        </div>
    </div>

</template>

<style scoped></style>