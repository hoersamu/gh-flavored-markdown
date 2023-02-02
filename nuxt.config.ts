// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    baseURL: '/gh-flavored-markdown'
  }
})
