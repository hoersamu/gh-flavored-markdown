// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/gh-flavored-markdown',
  },
  css: ['v-network-graph/lib/style.css'],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  ssr: false,
});
