<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[10vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold text-success-fg"
    >
      ASCII STL
    </span>
    <CodeBlock class="absolute top-[15vh] left-[17vw]" pre-class="h-[65vh]">
      <pre>
```stl
solid cube_corner
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 1.0 0.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 1.0 0.0 0.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 1.0
      vertex 0.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.577 0.577 0.577
    outer loop
      vertex 1.0 0.0 0.0
      vertex 0.0 1.0 0.0
      vertex 0.0 0.0 1.0
    endloop
  endfacet
endsolid
```
      </pre>
    </CodeBlock>
    <img class="absolute top-[50vh] left-[50vw] w-[40vw] -translate-y-1/2" src="asciistl.png"/>
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
