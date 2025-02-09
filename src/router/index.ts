import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/movie/:id', component: MovieDetails, props: true },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router