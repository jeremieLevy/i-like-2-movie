<script setup lang="ts">
import PopularMovieList from '../components/PopularMovieList.vue'

</script>

<template>
    
    <!-- Hero Header -->

    <div class="relative h-150 text-white overflow-hidden mt-10">
        <div class="absolute inset-0">
            <img src="/src/assets/Interstellar.jpg" alt="Background Image"
                class="object-cover object-center w-full h-150" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-150 text-center">
            <input type="text" placeholder="Search movie by title" class="border font-bold text-3xl rounded-4xl p-4">
        </div>
    </div>

    <PopularMovieList />


</template>

<style scoped></style>