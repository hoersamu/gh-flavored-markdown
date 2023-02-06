import VueCodeHighlight from 'vue-code-highlight';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCodeHighlight); //registers the v-highlight directive
});
