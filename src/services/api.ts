import axios from 'axios'

const URL = "https://api.themoviedb.org/3"

const api = axios.create({ // like "const options" here
    baseURL: URL,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyNmNkNmJkMGYyYWUyOGU1Y2EwOTQzMDhhYmEwZiIsIm5iZiI6MTczODk0MTYwNC4zODQsInN1YiI6IjY3YTYyNGE0NzdiOGNlZDQ1NjY3MTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhaReANvMsz9dZG5Um9V_HxWwz5QPtxJNKrLIluyW8s'
    },
    params: { language: 'US' }
})

// Fetch popular movies list

export const getPopularMovies = async () => {
    const response = await api.get("/movie/popular")
    return response.data.results
}

// Fetch movie details

export const getMovieDetails = async (id: string) => {
    const response = await api.get(`/movie/${id}`)
    return response.data
}

// Fetch movie credits

export const getMovieCredits = async (id: string) => {
    const response = await api.get(`/movie/${id}/credits`)
    return response.data
}