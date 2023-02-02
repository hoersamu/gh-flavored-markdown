<template>
  <div
    class="bg-bg-default text-fg-default overflow-hidden h-screen"
    @click="nextSlide"
    ref="containerRef"
  >
    <div class="grid-container">
      <Slide1 :style="{ 'grid-area': 'slide-1' }" />
      <Slide2 :style="{ 'grid-area': 'slide-2' }" />
      <Slide3 :style="{ 'grid-area': 'slide-3' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
const slidenumber = ref(1);
const containerRef = ref<HTMLDivElement | null>(null);

const nextSlide = () => {
  const element = document.getElementById(`slide-${++slidenumber.value}`)?.scrollIntoView({ behavior: 'smooth'});
};
</script>

<style scoped>
.grid-container {
  display: grid;
  height: 200vh;
  width: 200vw;
  grid-template-columns: repeat(2, 100vw);
  grid-template-rows: repeat(2, 100vh);
  grid-template-areas:
    'slide-1 none'
    'slide-2 slide-3';
}
</style>
