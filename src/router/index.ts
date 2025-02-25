import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetails from '../views/MovieDetails.vue'
import ActorDetails from '../views/ActorDetails.vue'
import FavoritesMovies from '../views/FavoritesMovies.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: HomePage
    },
    { 
        path: '/movie/:id', 
        name: 'movie-details',
        component: MovieDetails 
    },
    {
        path: '/person/:id',
        name: 'actor-details',
        component: ActorDetails
    },
    {
        path: '/my-movies',
        name: 'favorites-movies',
        component: FavoritesMovies
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router