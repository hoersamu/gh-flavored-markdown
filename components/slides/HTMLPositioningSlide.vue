<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
    >
    <span class="text-success-fg">Layout</span>
      powered by CSS
    </span>
    <CodeBlock class="absolute top-[40vh] left-[17vw] w-[35vw]" language="html">
      <pre>
# Beautiful HTML

This image is center aligned using HTML

&lt;div display="flex" align="center"&gt;
    &lt;img height="30" src="octocat.webp"&gt;
&lt;/div&gt;
      </pre>
    </CodeBlock>
    <CodeBlock class="absolute top-[40vh] left-[55vw]">
      <img
        class="w-[30vw]"
        src="htmlalign.png"
      />
    </CodeBlock>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { Edges, Nodes } from '@/types/gitGraph';

const { width, height } = useWindowSize();

const nodes = computed<Nodes>(() => ({
  a: {
    x: width.value + 50,
    y: height.value * 0.9,
  },
  b: {
    x: width.value / 4,
    y: height.value * 0.9,
    color: '#bd6d28',
  },
  c: {
    x: -50,
    y: height.value * 0.9,
  },
}));

const edges: Edges = {
  'a-b': {
    nodes: ['a', 'b'],
    color: '#bd6d28',
  },
  'b-c': {
    nodes: ['b', 'c'],
    color: '#bd6d28',
  },
};
</script>
