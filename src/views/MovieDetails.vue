<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const movie = ref()
const apiUrl = `https://api.themoviedb.org/3/movie/${route.params.id}&language=en-US`

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTYyNmNkNmJkMGYyYWUyOGU1Y2EwOTQzMDhhYmEwZiIsIm5iZiI6MTczODk0MTYwNC4zODQsInN1YiI6IjY3YTYyNGE0NzdiOGNlZDQ1NjY3MTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RhaReANvMsz9dZG5Um9V_HxWwz5QPtxJNKrLIluyW8s'
    }
};

const getMovieDetails = async () => {
    try {
        const response = await fetch(apiUrl, options)
        if (!response.ok) throw Error("Error during fetching details")

        const data = await response.json()
        movie.value = data
        
    } catch (error) {

    }
}

onMounted(() => getMovieDetails())
</script>


<template>

    <div class="container mx-auto mt-2">
        <router-link :to="{ name: 'home' }">
            <button>Back to Home</button>
        </router-link>
    </div>



</template>

<style scoped>

</style>