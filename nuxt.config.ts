// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/gh-flavored-markdown',
  },
  components: [{ path: '~/components/', pathPrefix: false }],
  css: [
    'vue-code-highlight/themes/window.css',
    'vue-code-highlight/themes/duotone-sea.css',
  ],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  ssr: false,
  vite: {
    define: {
      global:'window'
    }
  }
});
