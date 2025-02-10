<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

const movieUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`
const creditsUrl = `https://api.themoviedb.org/3/movie/${route.params.id}/credits?language=en-US`
// const imagesUrl = `https://api.themoviedb.org/3/movie/${route.params.id}/images`

const movie = ref()
const actors = ref()
// const images = ref()


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
        const response = await fetch(movieUrl, options)
        if (!response.ok) throw Error("Error during fetching details")

        const data = await response.json()
        movie.value = data

    } catch (error) {
        errorMessage.value = 'Failed to fetch movie'
    }
}

const getMovieCredits = async () => {

    try {
        const response = await fetch(creditsUrl, options)
        if (!response.ok) throw Error('Error during credits loading')

        const data = await response.json()
        actors.value = data

        console.log(actors.value);

    } catch (error) {
        errorMessage.value = 'Failed to fetch credits'
    }
}

// const getMovieImages = async () => {

//     try {
//         const response = await fetch(imagesUrl, options)
//         if (!response.ok) throw Error("Error during images loading")

//         const data = response.json()
//         images.value = data
//         console.log(images.value);

//     } catch (error) {
//         errorMessage.value = 'Failed to fetch images'
//     }

// }

onMounted(() => {
    getMovieDetails()
    getMovieCredits()
})


</script>


<template>

    <div v-if="movie" class="container mx-auto flex mt-30">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`${movie.original_title}`">
        <div class="flex flex-col px-8">
            <h1>{{ movie.original_title }}</h1>
            <hr class="my-3">
            <h3 class="font-bold text-purple-300">Synopsis</h3>
            <p class="text-justify mt-3">{{ movie.overview }}</p>
            <h3 class="font-bold mt-8 text-purple-300">Casting</h3>
            <div v-if="actors" class="mt-3">
                <ul class="inline-block" v-for="actor in actors.cast.slice(0, 6)">
                    <li>
                        <img 
                        class="w-15 h-15 rounded-full object-cover mx-2" 
                        :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`" 
                        :alt="`${actor.original_name}`">
                    </li>
                </ul>
            </div>
            <div v-else>Chargement...</div>
        </div>
    </div>
    <div v-else>Chargement...</div>

</template>


<style scoped></style>