<script setup lang="ts">
import { useFavorites } from "../store/favorites"

const favoritesStore = useFavorites()
console.log(favoritesStore.favorites)




</script>

<template>
    <div class="container mx-auto mt-50">
        <div v-if="favoritesStore.favorites">   
            <ul>
                <li 
                v-for="movie in favoritesStore.favorites" :key="movie.id"
                class="p-4 border-b border-gray-500 hover:bg-gray-600">
                <router-link :to="`/movie/${movie.id}`" class="text-blue-500">
                    <div class="flex items-center">
                        <img 
                        :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" 
                        :alt="movie.title" class="w-20 rounded-2xl object-cover">
                        <h2 class="text-xl font-bold ml-10">{{ movie.title }}</h2>
                    </div>
                </router-link>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>You have not added any favorite yet</p>
        </div>
    </div>
</template>

<style scoped>

</style>