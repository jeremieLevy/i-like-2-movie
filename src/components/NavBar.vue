<script setup lang="ts">
</script>

<template>

    <header class="bg-neutral-800 fixed top-0 z-50 border-b-1 w-full">
        <nav class="container mx-auto flex justify-between items-center p-6">
            <router-link :to="{ name: 'home' }">
                <span class="text-4xl">I like to <span class="font-bold">m🎥vie</span></span>
            </router-link>
            <ul class="flex justify-center space-x-6">
                <li><a href="" class="">Trending</a></li>
                <li><a href="" class="">Movies</a></li>
                <li><a href="" class="">Actors</a></li>
                <li><a href="" class="bg-white text-neutral-800 font-bold px-2 py-1 rounded-4xl">About</a></li>
            </ul>
        </nav>
    </header>

</template>

<style scoped>
</style>