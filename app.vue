<template>
  <div class="overflow-hidden h-screen">
    <div :style="containerStyle">
      <component
        v-for="(slide, index) in slides.flat()"
        :is="slide"
        :style="{ 'grid-area': `slide-${index + 1}` }"
        :id="`slide-${index + 1}`"
        ref="slideRef"
      />
    </div>
    <Overlay />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';
import { defaultSlideConfig } from './config/slide.config';
import { SlideChangeCallbackFunction } from './types/slides';

const slides = [
  resolveComponent('TitleSlide'),
  resolveComponent('WhyMDSlide'),
  [
    resolveComponent('HTMLSlide'),
    resolveComponent('HTMLPositioningSlide'),
    resolveComponent('HTMLPictureSlide'),
  ],
  resolveComponent('MathTexSlide'),
  [
    resolveComponent('DiagramsSlide'),
    resolveComponent('MermaidSlide'),
    resolveComponent('GeoJSONSlide'),
    resolveComponent('ASCIISTLSlide'),
  ],
  resolveComponent('BitsAndPiecesSlide'),
  resolveComponent('UsefulResourcesSlide'),
  resolveComponent('QASlide'),
];

const columnCount = Math.max(
  ...slides.filter(Array.isArray).map((row) => row.length)
);
let gridTemplateAreas = '';
let slideCount = 1;
slides.forEach((row, index) => {
  const rowElements = Array.isArray(row) ? row : [row];
  const rowAreas = [];
  for (let i = 0; i < columnCount; i++) {
    rowAreas.push(
      rowElements[i]
        ? `${defaultSlideConfig.slidePrefix}${slideCount++}`
        : `none-${index}`
    );
  }

  gridTemplateAreas += `"${rowAreas.join(' ')}" `;
});

const containerStyle: CSSProperties = {
  display: 'grid',
  gridTemplateRows: `repeat(${slides.length}, 100vh)`,
  gridTemplateColumns: `repeat(${columnCount}, 100vw)`,
  gridTemplateAreas,
};

const router = useRouter();
const route = useRoute();

const currentSlide = ref(defaultSlideConfig.initialSlide);

const scrollToSlide: SlideChangeCallbackFunction = (behavior) => {
  document
    .getElementById(`slide-${currentSlide.value}`)
    ?.scrollIntoView({ behavior: behavior || 'smooth' });
  window.history.pushState(null,"",`#slide-${currentSlide.value}`);
};

const nextSlide: SlideChangeCallbackFunction = (behavior) => {
  if (currentSlide.value === slides.flat().length) return; // Don't go above the last slide
  currentSlide.value++;
  scrollToSlide(behavior);
};

const previousSlide: SlideChangeCallbackFunction = (behavior) => {
  if (currentSlide.value === 1) return; // Don't go below 1 (first slide)
  currentSlide.value--;
  scrollToSlide(behavior);
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
  scrollToSlide('auto');
};

onMounted(() => {
  window.addEventListener('keyup', keyListener);
  window.addEventListener('resize', onResize);
  if (route.hash.startsWith(`#${defaultSlideConfig.slidePrefix}`)) {
    const routeSlide = parseInt(
      route.hash.replace(`#${defaultSlideConfig.slidePrefix}`, '')
    );
    if (routeSlide > 0 && routeSlide <= slides.flat().length) {
      currentSlide.value = routeSlide;
      scrollToSlide('auto');
    }
  }
});
onBeforeUnmount(() => {
  window.removeEventListener('keyup', keyListener);
  window.removeEventListener('resize', onResize);
});

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
</script>

<style scoped>
.grid-container {
  display: grid;

  grid-template-columns: repeat(4, 100vw);
  grid-template-rows: repeat(8, 100vh);
  grid-template-areas:
    'slide-1 n1 n1 n1'
    'slide-2 n1 n1 n1'
    'slide-3 slide-4 slide-5 n2'
    'slide-6 n3 n3 n3'
    'slide-7 slide-8 slide-9 slide-10'
    'slide-11 n4 n4 n4'
    'slide-12 n4 n4 n4'
    'slide-13 n4 n4 n4';
}
</style>
