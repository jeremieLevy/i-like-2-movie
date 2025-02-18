<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLanguage = () => {
    locale.value = locale.value === "en" ? "fr" : "en"
}

</script>

<template>

    <header class="bg-neutral-800 fixed top-0 z-50 border-b-1 w-full">
        <nav class="container mx-auto flex justify-between items-center p-6 mb-2">
            <router-link :to="{ name: 'home' }">
                <span class="relative text-4xl">I like to <span class="font-bold">m🎥vie</span>
                    <span class="absolute text-sm text-purple-200 right-0.5 top-9">(movie)</span>
                </span>
            </router-link>
            <div class="flex justify-between items-center space-x-12">
                <ul class="flex justify-center space-x-6 font-bold">
                    <li><a href="" class="">{{ t("trending") }}</a></li>
                    <router-link :to="{ name: 'favorites-movies' }">
                        <li><a href="" class="">{{ t("my_movies" )}}</a></li>
                    </router-link>
                    <li><a href="" class="">{{ t("actors" )}}</a></li>
                    <li><a href="" class="bg-white text-neutral-800 font-bold px-2 py-1 rounded-4xl">{{ t("about") }}</a></li>
                </ul>
                <button class="rounded-xl border p-2 text-base font-bold" @click="switchLanguage">{{ locale === "en" ?
                    "🇬🇧" : "🇫🇷" }}</button>
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