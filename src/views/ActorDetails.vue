<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const actorUrl = `https://api.themoviedb.org/3/person/${route.params.id}language=en-US`

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyNmNkNmJkMGYyYWUyOGU1Y2EwOTQzMDhhYmEwZiIsIm5iZiI6MTczODk0MTYwNC4zODQsInN1YiI6IjY3YTYyNGE0NzdiOGNlZDQ1NjY3MTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhaReANvMsz9dZG5Um9V_HxWwz5QPtxJNKrLIluyW8s'
    }
}

const actorInfos = ref()
const errorMessage = ref('')

const getActorInfos = async () => {

    try {

        const response = await fetch(actorUrl, options)
        if (!response.ok) throw Error("Error during info's loading")
    
        const data = await response.json()
        actorInfos.value = data
        console.log(actorInfos.value);
    
    } catch (error) {
        errorMessage.value = 'Failed to fetch actor infos'
    }
}

onMounted(() => getActorInfos())

</script>

<template>

     <div v-if="actorInfos" class="container mx-auto flex items-start mt-32">
        <img :src="`https://image.tmdb.org/t/p/w500${actorInfos.profile_path}`" alt="" class="w-72 h-72 object-cover rounded-2xl mr-10 ml-5">
        <div class="flex-col ml-10 ">
            <h2 class="text-5xl font-semibold">{{ actorInfos.name }}</h2>
            <p class="text-justify mt-8 line-clamp-5">{{ actorInfos.biography }}</p>
            <!-- <button @click="showFullText" class="mt-5 border px-2 rounded-full cursor-pointer">Show More ↓</button> -->
        </div>  
     </div>

</template>

<style scoped>
</style>