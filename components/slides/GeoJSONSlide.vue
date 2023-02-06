<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[10vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold text-success-fg"
    >
    <span class="text-success-fg"> geoJSON </span>
    and
    <span class="text-success-fg"> topoJSON </span>
    </span>
    <CodeBlock class="absolute top-[15vh] left-[17vw]" pre-class="h-[65vh]">
      <pre>
```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 1,
      "properties": {
        "ID": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
              [-90,35],
              [-90,30],
              [-85,30],
              [-85,35],
              [-90,35]
          ]
        ]
      }
    }
  ]
}
```
      </pre>
    </CodeBlock>
    <img class="absolute top-[50vh] left-[50vw] w-[40vw] -translate-y-1/2" src="/geojson.png"/>
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
