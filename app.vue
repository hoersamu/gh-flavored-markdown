<template>
  <div class="text-fg-default overflow-hidden h-screen">
    <div class="grid-container">
      <component v-for="slide, index in slides" :is="slide" :style="{ 'grid-area': `slide-${index+1}` }" :id="`slide-${index+1}`"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

useHead({
  title: 'GitHub flavored Markdown',
  link: [
    {
      rel: 'preload',
      href: 'Mona-Sans.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
    {
      rel: 'icon',
      href: 'favicon.svg',
    },
  ],
});

const slides = [
  resolveComponent('Slide1'),
  resolveComponent('Slide2'),
  resolveComponent('Slide3'),
  resolveComponent('Slide4'),
]

const slideNumber = ref(1);

const scrollToSlide = (smooth = true) => {
  document
    .getElementById(`slide-${slideNumber.value}`)
    ?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  router.replace(`#slide-${slideNumber.value}`);
};

const nextSlide = () => {
  if (slideNumber.value === slides.length) return; // Don't go above the last slide
  slideNumber.value++;
  scrollToSlide();
};

const previousSlide = () => {
  if (slideNumber.value === 1) return; // Don't go below 1 (first slide)
  slideNumber.value--;
  scrollToSlide();
};

const keyListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      nextSlide();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      previousSlide();
      break;
  }
};

const onResize = () => {
  scrollToSlide(false);
};

onMounted(() => {
  window.addEventListener('keyup', keyListener);
  window.addEventListener('resize', onResize);
  if (route.hash.startsWith('#slide-')) {
    const routeSlideNumber = parseInt(route.hash.replace('#slide-', ''));
    if (routeSlideNumber > 0 && routeSlideNumber < 4) {
      slideNumber.value = routeSlideNumber;
    }
  }
});
onBeforeUnmount(() => {
  window.removeEventListener('keyup', keyListener);
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.grid-container {
  display: grid;
  height: 300vh;
  width: 200vw;
  grid-template-columns: repeat(1, 100vw);
  grid-template-rows: repeat(3, 100vh);
  grid-template-areas:
    'slide-1 n1'
    'slide-2 slide-3'
    'slide-4 n2';
}
</style>
