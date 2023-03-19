// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        clientId: '',
        clientSecret: '',
    },
    css: [
        '~/assets/css/variables.css',
        '~/assets/css/main.css',
    ],
    app: {
        rootId: 'spotify',
    }
})
