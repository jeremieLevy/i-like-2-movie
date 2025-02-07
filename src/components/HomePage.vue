<script setup lang="ts">
import { ref } from 'vue'
import MovieCard from './MovieCard.vue'

const api = ""

</script>

<template>
    <div class="bg-neutral-800 fixed top-0 z-50 border-b-1 w-full">
        <nav class="container mx-auto flex justify-between items-center p-6">
            <a href="#" class="text-4xl">I like to <span class="font-bold">m🎥vie</span></a>
            <ul class="flex justify-center space-x-6">
                <li><a href="" class="">Trending</a></li>
                <li><a href="" class="">Movies</a></li>
                <li><a href="" class="">Actors</a></li>
                <li><a href="" class="bg-white text-neutral-800 font-bold px-2 py-1 rounded-4xl">About</a></li>
            </ul>
        </nav>
    </div>
    <div class="relative h-150 text-white overflow-hidden mt-10">
        <div class="absolute inset-0">
            <img src="/src/assets/Interstellar.jpg"
                alt="Background Image" class="object-cover object-center w-full h-150" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-150 text-center">
            <input type="text" placeholder="Search movie by title" class="border font-bold text-3xl rounded-4xl p-4">
        </div>
    </div>
    <div class="container mx-auto flex justify-center">
        <MovieCard v-for="i in 5" :key="i"/> 
    </div>
    
    
</template>

<style scoped>
</style>