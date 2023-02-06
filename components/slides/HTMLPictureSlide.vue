<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
    >
      <span class="text-success-fg"> Darkmode </span>
      with &lt;picture&gt;
    </span>
    <CodeBlock class="absolute top-[40vh] left-[17vw] w-[35vw]" language="html">
      <pre>
&lt;picture&gt;
  &lt;source media="(prefers-color-scheme: dark)" srcset="octocat.png"&gt;
  &lt;img height="30" src="octocat-light.png"&gt;
&lt;/picture&gt;
      </pre>
    </CodeBlock>
    <CodeBlock class="absolute top-[40vh] left-[55vw]">
      <img
        class="w-[30vw]"
        src="/picturelight.png"
      />
      <img
        class="w-[30vw]"
        src="/picturedark.png"
      />
    </CodeBlock>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { Edges, Nodes } from '@/types/gitGraph';

const { width, height } = useWindowSize();

const nodes = computed<Nodes>(() => ({
  a: {
    x: -50,
    y: height.value * 0.9,
    stroke: 0,
  },
  b: {
    x: width.value / 2,
    y: height.value * 0.9,
    color: '#bd6d28',
  },
}));

const edges: Edges = {
  'a-b': {
    nodes: ['b', 'a'],
    color: '#bd6d28',
  },
};
</script>
