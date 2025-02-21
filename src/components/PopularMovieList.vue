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

<div class="movie-list container mx-auto p-4">
        <h3 class="mb-5 text-center">{{ label }}</h3>
        <p v-if="isLoading">Chargement...</p>
        <p v-else-if="error" class="text-red-500 text-center mt-5 ">Error : {{ error }}</p>
        <div v-else class="relative">
        <div class="overflow-x-auto overflow-y-12 scroll-smooth scrollbar-hide">
            <div class="grid grid-flow-col auto-cols-max gap-4">
                <router-link 
                    v-for="movie in popularMovies" 
                    :key="movie.id" 
                    :to="{ name: 'movie-details', params: { id: movie.id }}"
                    class="cursor-pointer max-w-60">
            
                    <MovieCard :movie="movie" />
                </router-link>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>