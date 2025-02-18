<script setup lang="ts">
import { computed } from 'vue'

import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { useI18n } from 'vue-i18n'

import { getMovieDetails } from '../services/api'
import { getMovieCredits } from '../services/api'

import PopularMovieList from "../components/PopularMovieList.vue";

const route = useRoute()

const { t } = useI18n()

const movieId = computed(() => route.params.id as string)
// ligne au dessus équivalent à : const movieUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`

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

    <div v-if="errorMovie" class="mt-3 text-red">{{ t("error") }} 😬</div>
    <div v-else-if="isLoadingMovie">{{ t("loading") }}...</div>
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
            <div v-if="errorCredits" class="mt-3 text-red">{{ t("error") }} 😬</div>
            <div v-else-if="isLoadingCredits">{{ t("loading") }}...</div>
            <div v-else-if="credits" class="mt-3">
                <ul v-for="actor in credits.cast.slice(0,6)" :key="actor.id" class="inline-block">
                    <router-link :to="{ name: 'actor-details', params: { id: actor.id }}">
                         <li>
                            <img 
                            class="lg:w-15 lg:h-15 h-10 w-10 rounded-full object-cover mx-2 brightness-90 hover:brightness-110" 
                            :src="`https://image.tmdb.org/t/p/w500${actor.profile_path}`" 
                            :alt="`${actor.name}`">
                        </li>
                    </router-link>
                </ul>
                <p class="mt-5">{{ t("release_date") }} : <span class="font-bold text-purple">{{ movie.release_date }}</span></p>
            </div>
            <div v-else>❌ 🗒️ {{ t("no_credits_found") }}</div>
        </div>
    </div>
    <div v-else>❌ 🎥 {{ t("no_movies_found") }}</div>
    <PopularMovieList label="Similar movies" class="mt-10"/>

</template>

<i18n lang="json">
    {
      "en": {
        "release_date": "Release date",
        "similar_movies": "Similar movies",
        "loading": "Loading",
        "no_credits_found": "No credits found",
        "no_movies_found": "No movies found",
        "error": "Something went wrong"
      },
      "fr": {
        "release_date": "Date de sortie",
        "similar_movies": "Films similaires",
        "loading": "Chargement",
        "no_credits_found": "Aucun acteur trouvé",
        "no_movies_found": "Aucun film trouvé",
        "error": "Problème de chargement des données"
      }
    }
</i18n>

<style scoped></style>