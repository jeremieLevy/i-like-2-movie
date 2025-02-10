<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const apiUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`

const movie = ref()
const errorMessage = ref('')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyNmNkNmJkMGYyYWUyOGU1Y2EwOTQzMDhhYmEwZiIsIm5iZiI6MTczODk0MTYwNC4zODQsInN1YiI6IjY3YTYyNGE0NzdiOGNlZDQ1NjY3MTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhaReANvMsz9dZG5Um9V_HxWwz5QPtxJNKrLIluyW8s'
    }
}

const getMovieDetails = async () => {
    try {
        const response = await fetch(apiUrl, options)
        if (!response.ok) throw Error("Error during fetching details")
        
        const data = await response.json()
        movie.value = data

        console.log(movie.value);
           
    } catch (error) {
        errorMessage.value = 'Failed to fetch movie'
    }
}

console.log(movie.value);

onMounted(() => getMovieDetails())

</script>


<template>

    <!-- <div class="container mx-auto my-2">
        <router-link :to="{ name: 'home' }">
            <button>< Back to Home</button>
        </router-link>
    </div> -->
    <div v-if="movie" class="container mx-auto flex mt-30">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`${movie.original_title}`">
        <div class="flex flex-col px-8">
            <h1>{{ movie.original_title }}</h1>
            <hr class="my-3">
            <h3 class="font-bold">Synopsis</h3>
            <p class="text-justify">{{ movie.overview }}</p>
        </div>
    </div>
    <div v-else>Chargement...</div>

</template>


<style scoped></style>