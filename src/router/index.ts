import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: HomePage ,
    },
    { 
        path: '/movie/:id', 
        name: 'movie-details',
        component: MovieDetails 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

console.log(routes);



export default router