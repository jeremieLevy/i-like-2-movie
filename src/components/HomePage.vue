<script setup lang="ts">
</script>

<template>
    <header>
        <nav class="container mx-auto flex justify-center items-center p-6">
            <a href="#" class="text-4xl">I 💜 to <span class="font-bold">m🎥vie</span></a>
        </nav>
    </header>
    <div>
        <ul class="flex justify-center space-x-6 mb-5">
            <li><a href="">Trending</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Actors</a></li>
            <li><a href="">About</a></li>
        </ul>
    </div>
    <div class="relative h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
            <img src="/src/assets/Interstellar.jpg"
                alt="Background Image" class="object-cover object-center w-full h-150" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-150 text-center">
            <!-- <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1> -->
            <input type="text" placeholder="Search movie by title" class="font-bold text-4xl rounded p-4">
        </div>
    </div>
</template>

<style scoped>
</style>