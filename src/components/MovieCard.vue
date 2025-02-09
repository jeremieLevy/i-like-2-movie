<script setup lang="ts">
// import { ref } from 'vue'

const props = defineProps({
    poster: String,
    title: String,
    overview: String,
    rateLevel: Number
})

</script>

<template>

    <div class="w-[200px] rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.25)] shadow-indigo-500/50">
        <img :src="`https://image.tmdb.org/t/p/w500${props.poster}`" :alt="title">
        <div class="px-6 py-4">
            <div class="font-bold leading-none mb-2">
                <h3>{{ props.title }}</h3>
            </div>
            <!-- <p class="text-gray text-md text-justify line-clamp-5  ">{{ props.overview }}</p> -->
        </div>
    </div>

</template>

<style scoped>
</style>