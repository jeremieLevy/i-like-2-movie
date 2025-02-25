<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const { t } = useI18n()


const switchLanguage = () => {
    locale.value = locale.value === "en" ? "fr" : "en"
}

</script>

<template>

    <header class="flex justify-center">
        <nav class="bg-neutral-700/50 backdrop-blur-md shadow-md fixed top-7 rounded-2xl z-50 flex lg:space-x-52 md:space-x-20 items-center px-15 py-5">
            <router-link :to="{ name: 'home' }">
                <span class="relative text-3xl bottom-2">I like to <span class="font-bold">m🎥vie</span>
                    <span class="absolute text-sm text-purple-200 right-0.5 top-7">(movie)</span>
                </span>
            </router-link>
            <div class="flex justify-between items-center space-x-12">
                <ul class="flex justify-center space-x-6 font-semibold">
                    <li><a href="" class="hover:text-white">{{ t("trending") }}</a></li>
                    <router-link :to="{ name: 'favorites-movies' }">
                        <li><a href="" class="hover:text-white">{{ t("my_movies" )}}</a></li>
                    </router-link>
                    <li><a href="" class="hover:text-white">{{ t("actors" )}}</a></li>
                    <li><a href="" class="bg-white text-neutral-800 font-bold px-2 py-1 rounded-4xl hover:bg-purple-500 hover:text-white">{{ t("about") }}</a></li>
                </ul>
                <button 
                    class="rounded-xl border p-2 text-base font-bold" 
                    @click="switchLanguage">{{ locale === "en" ? "🇬🇧" : "🇫🇷" }}
                </button>
            </div>
        </nav>
    </header>

</template>

<i18n lang="json">
    {
      "en": {
        "trending": "Trending",
        "my_movies": "My movies",
        "actors": "Actors",
        "about": "About"
      },
      "fr": {
        "trending": "Tendances",
        "my_movies": "Mes films",
        "actors": "Acteurs",
        "about": "À propos"
      }
    }
</i18n>

<style scoped></style>