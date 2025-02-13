import axios from 'axios'
import type { Movie } from '../types/response/tmdb-api/PopularMovies.type'
import type { MovieDetails } from '../types/response/tmdb-api/MovieDetails.type'
import type { Actor } from '../types/response/tmdb-api/Actor.type'
import type { MovieCredits } from '../types/response/tmdb-api/MovieCredits.type'
import type { MovieSummary } from '../types/response/tmdb-api/MovieSummary.type'

const api = axios.create({ // like "const options" here
    baseURL:  "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`
    },
    params: { language: 'US' }
})

// Fetch popular movies list

export const getPopularMovies = async (): Promise<Movie[]> => {
    const response = await api.get("/movie/popular")
    return response.data.results
}

// Fetch movie details

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
    const response = await api.get(`/movie/${id}`)
    return response.data 
}

// Fetch movie credits

export const getMovieCredits = async (id: string): Promise<MovieCredits> => {
    const response = await api.get(`/movie/${id}/credits`)
    return response.data
}

// Fetch actor details

export const getActorInfos = async (id: string): Promise<Actor> => {
    const response = await api.get(`/person/${id}`)
    return response.data
}

// Search for movie

export const searchMovies = async (query: string): Promise<MovieSummary[]> => {
    if (!query) return []

    const response = await api.get('/search/movie', {
        params: { 
            query,
            include_adult: false,
            page: 1
         }
    })

    return response.data.results
}