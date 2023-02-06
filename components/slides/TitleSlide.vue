<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[33vh] left-[15vw] -translate-y-1/2 text-5xl md:text-8xl font-semibold"
      >GitHub Flavored <span class="text-success-fg">Markdown</span></span
    >
    <div class="absolute top-0 h-full w-full flex justify-center">
      <img src="https://octodex.github.com/images/manufacturetocat.png" class="h-1/4 md:h-1/2 mt-[70vh] md:mt-[40vh]" />
    </div>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { Edges, Nodes } from '@/types/gitGraph';

const { width, height } = useWindowSize();

const nodes = computed<Nodes>(() => ({
  'a': {
    x: width.value/12,
    y: height.value/3,
  },
  'b': {
    x:width.value/12,
    y:height.value+50,
  },
}))

const edges: Edges = {
  'a-b': {
    nodes:['b','a'],
  },
}
</script>
