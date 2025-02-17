import { defineStore } from "pinia"
import { ref } from 'vue'

import type { MovieSummary } from "../types/response/tmdb-api/MovieSummary.type"

export const useFavorites = defineStore("favorites", () => {
    const favorites = ref<MovieSummary[]>([])
    const isFavorite = (id: number) => favorites.value.some(movie => movie.id === id)

    const addFavorite = (movie: MovieSummary) => {
        if(!isFavorite(movie.id)) {
            favorites.value.push(movie)
        }
    }

    const removeFavorite = (id: number) => {
        favorites.value = favorites.value.filter(movie => movie.id !== id)
    }

    return { favorites, isFavorite, addFavorite, removeFavorite }
})