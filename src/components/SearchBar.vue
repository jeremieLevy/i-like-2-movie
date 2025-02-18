<script setup lang="ts">
import { ref, computed } from 'vue'
import { searchMovies } from '../services/api';
import { useQuery } from "@tanstack/vue-query"
import { refDebounced } from '@vueuse/core'

const searchQuery = ref('')
const searchResults = computed(() => data.value || [])
const debouncedQuery = refDebounced(searchQuery, 500)

const { data, isLoading: isLoadingResults, error: errorResults } = useQuery({
    queryKey: ['searchResults', debouncedQuery],
    queryFn: () => searchMovies(debouncedQuery.value),
    staleTime: 60_000,
    gcTime: 500_000
})

</script>

<template>
    <div class="relative h-150 text-white mt-10">
        <div class="absolute inset-0">
            <img 
            src="/src/assets/Interstellar.jpg" alt="Background Image"
                class="object-cover object-center w-full h-150" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-150 text-center">

            <div class="relative w-160">
                <input 
                v-model="searchQuery" type="text" placeholder="Search movie"
                    class="w-full border border-purple-200 font-bold text-2xl rounded-4xl p-4 placeholder: text-center">

                <div 
                v-if="searchResults?.length"
                    class="absolute left-0 w-full mt-2 bg-gray-800 text-black shadow-xl rounded-2xl max-h-120 overflow-y-auto">
                    <ul>
                        <li 
                        v-for="result in searchResults" :key="result.id"
                            class="p-4 border-b border-gray-500 hover:bg-gray-600">
                            <router-link :to="`/movie/${result.id}`" class="text-blue-500">
                                <div class="flex items-center">
                                    <img 
                                    :src="`https://image.tmdb.org/t/p/w200${result.poster_path}`"
                                    :alt="result.title" class="w-20 rounded-2xl object-cover">
                                    <h2 class="text-xl font-bold ml-10">{{ result.title }} <span class="font-normal">({{
                                            result.release_date.split('-')[0] }})</span></h2>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-else-if="debouncedQuery && !isLoadingResults || errorResults" class="text-center mt-2 text-gray-100">
                    Sorry, there's no movie matching with "<span class="font-bold">{{ debouncedQuery }}</span>"
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>