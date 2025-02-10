<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue'

const apiUrl = "https://api.themoviedb.org/3/movie/popular"

interface Movie {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number
}

const popularMovies = ref(<Movie[]>([]))
const isLoading = ref(true)
const errorMessage = ref('')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyNmNkNmJkMGYyYWUyOGU1Y2EwOTQzMDhhYmEwZiIsIm5iZiI6MTczODk0MTYwNC4zODQsInN1YiI6IjY3YTYyNGE0NzdiOGNlZDQ1NjY3MTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhaReANvMsz9dZG5Um9V_HxWwz5QPtxJNKrLIluyW8s'
    }
};

const getPopularMovies = async () => {
    try {
        const response = await fetch(apiUrl, options)
        if (!response.ok) throw Error("Erreur during movies loading")

        const data = await response.json()

        popularMovies.value = data.results

    } catch (error) {
        errorMessage.value = "Failed to fetch movies"
    } finally {
        isLoading.value = false
    }
}

onMounted(() => getPopularMovies())

</script>

<template>

    <!-- Hero Header -->

    <div class="relative h-150 text-white overflow-hidden mt-10">
        <div class="absolute inset-0">
            <img src="/src/assets/Interstellar.jpg" alt="Background Image"
                class="object-cover object-center w-full h-150" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-150 text-center">
            <input type="text" placeholder="Search movie by title" class="border font-bold text-3xl rounded-4xl p-4">
        </div>
    </div>

    <!-- Popular Movies List -->

    <div class="movie-list container mx-auto p-4 md:w-165 lg:w-220 xl:w-270">
        <p v-if="isLoading">Chargement...</p>
        <p v-else-if="errorMessage" class="text-red-500 text-center mt-5">{{ errorMessage }}</p>
        <div v-else class="grid gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <router-link 
                v-for="movie in popularMovies.slice(0, 8)" 
                :key="movie.id" 
                :to="{ name: 'movie-details', params: { id: movie.id }}"
                class="cursor-pointer transform transition duration-200 hover:scale-105">
                <MovieCard 
                    :poster="movie.poster_path" 
                    :title="movie.title" 
                    :overview="movie.overview"
                    :rate-level="movie.vote_average" 
                />
            </router-link>
        </div>
    </div>

</template>

<style scoped></style>