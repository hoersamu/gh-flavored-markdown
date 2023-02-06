<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold text-success-fg"
    >
      Mermaid
    </span>
    <CodeBlock class="absolute top-[40vh] left-[17vw]">
      <pre>
Here is a simple flow chart:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
      </pre>
    </CodeBlock>
    <MermaidDiagramm class="absolute top-[38vh] left-[60vw]"/>
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
