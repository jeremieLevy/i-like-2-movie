import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetails from '../views/MovieDetails.vue'
// import NotFound from '../views/NotFound.vue'

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
    },
    // { path: '/:pathMatch(.*)*', component: NotFound }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router