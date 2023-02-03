<template>
  <Slide>
    <v-network-graph
      :nodes="nodes"
      :edges="edges"
      :paths="paths"
      :configs="VNetworkGraphConfig"
      :layouts="layouts"
    />
    <span
      class="absolute top-[calc(25vh-2.25rem)] left-[15vw] text-8xl font-semibold"
      >GitHub flavored <span class="text-success-fg">Markdown</span></span
    >
    <div class="absolute top-0 h-full w-full flex justify-center">
      <img src="manufacturetocat.png" class="h-1/2 mt-[40vh]" />
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { Layouts, Nodes, VNetworkGraph } from 'v-network-graph';
import { ComputedRef } from 'vue';
import { VNetworkGraphConfig } from '../config/v-network-graph.config';

const { width, height } = useWindowSize();

const nodes: Nodes = nodesWithPlacementNode({
  node1: {},
  node2: {},
});

const edges = autoLinkNodes(nodes);

const x = computed(() => defautltXFromWindowWidth(width.value));

const layouts: ComputedRef<Layouts> = computed(() =>
  layoutWithPlacementNode({
    nodes: {
      node1: { x: x.value, y: height.value/18 },
      node2: { x: x.value, y: height.value + 50 },
    },
  },width.value, height.value)
);

const paths = pathsFromEdges(edges);
</script>
