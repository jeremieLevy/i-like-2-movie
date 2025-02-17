import { defineStore } from "pinia"

import type { MovieSummary } from "../types/response/tmdb-api/MovieSummary.type"

// export const useFavorites = defineStore("favorites", () => {
//     const favorites = ref<MovieSummary[]>([]) : State
//     const isFavorite = (id: number) => favorites.value.some(movie => movie.id === id) : getter

// Actions :
//     const addFavorite = (movie: MovieSummary) => {
//         if(!isFavorite(movie.id)) {
//             favorites.value.push(movie)
//         }
//     }

//     const removeFavorite = (id: number) => {
//         favorites.value = favorites.value.filter(movie => movie.id !== id)
//     }

//     return { favorites, isFavorite, addFavorite, removeFavorite }
// })

export const useFavorites = defineStore('favorites', {
    state: () => ({ favorites: <MovieSummary[]>([]) }),
    getters: {
        isFavorite: (state) => (id: number) => state.favorites.some(movie => movie.id === id),
        favoriteMovies: (state) => state.favorites
    },
    actions: {
        addFavorite(movie: MovieSummary) {
          if (!this.isFavorite(movie.id)) {
            this.favorites.push(movie)
          }
        },
        removeFavorite(id: number) {
          this.favorites = this.favorites.filter(movie => movie.id !== id)
        }
      }
})