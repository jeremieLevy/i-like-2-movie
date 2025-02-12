<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query"

import { getMovieDetails } from "../services/api";

import PopularMovieList from "../components/PopularMovieList.vue";

const route = useRoute()

const movieId = computed(() => route.params.id as string)
// const movieUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`


const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetails(movieId.value),
    staleTime: 60_000,
    gcTime: 100_000
})

// const movie = ref()
// const actors = ref()

// const getMovieDetails = async () => {
//     try {
//         const response = await fetch(movieUrl, options)
//         if (!response.ok) throw Error("Error during fetching details")

//         const data = await response.json()
//         movie.value = data

//     } catch (error) {
//         errorMessage.value = 'Failed to fetch movie'
//     }
// }

// const getMovieCredits = async () => {

//     try {
//         const response = await fetch(creditsUrl, options)
//         if (!response.ok) throw Error('Error during credits loading')

//         const data = await response.json()
//         actors.value = data

//         console.log(actors.value);

//     } catch (error) {
//         errorMessage.value = 'Failed to fetch credits'
//     }
// }


// onMounted(() => {
//     getMovieDetails()
//     getMovieCredits()
// })

</script>


<template>

    <div v-if="movie" class="container mx-auto flex mt-30">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`${movie.original_title}`">
        <div class="flex flex-col px-8">
            <h1>{{ movie.title }}</h1>
            <hr class="my-3">
            <h3 class="font-bold text-purple-300">Synopsis</h3>
            <p class="text-justify mt-3">{{ movie.overview }}</p>
            <h3 class="font-bold mt-8 text-purple-300">Casting</h3>
            <!-- <div v-if="actors" class="mt-3 cursor-pointer">
                <ul class="inline-block" v-for="actor in actors.cast.slice(0, 6)" :key="actor.id">
                    <router-link :to="{ name: 'actor-details', params: { id: actor.id }}">
                         <li>
                            <img 
                            class="w-15 h-15 rounded-full object-cover mx-2" 
                            :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`" 
                            :alt="`${actor.original_name}`">
                        </li>
                    </router-link>
                </ul>
            </div> -->
            <!-- <div v-else>Chargement...</div> -->
        </div>
    </div>
    <div v-else>Chargement...</div>
    <PopularMovieList />


</template>


<style scoped></style>