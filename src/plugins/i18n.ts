import { createI18n } from "vue-i18n"

export const i18n = createI18n({
    legacy: false, // Using Composition API with i18n
    locale: "en", 
    fallbackLocale: "fr",
    messages: {
        en: { app_title: "I like to Movie (movie)" },
        fr: { app_title: "I like to Movie (movie)" }
    }
})