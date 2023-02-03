<template>
  <Slide>
    <v-network-graph
      :nodes="nodes"
      :edges="edges"
      :paths="paths"
      :configs="VNetworkGraphConfig"
      :layouts="layouts"
    />
  </Slide>
</template>

<script setup lang="ts">
import { Nodes, Layouts, VNetworkGraph } from 'v-network-graph';
import { ComputedRef } from 'vue';
import { VNetworkGraphConfig } from '../config/v-network-graph.config';

const { width, height } = useWindowSize();

const nodes: Nodes = nodesWithPlacementNode({
  node1: {},
  node2: {},
  node3: {},
  node4: {},
});

const edges = {
  edge1: {
    source: 'node1',
    target: 'node2',
  },
  edge2: {
    source: 'node2',
    target: 'node3',
  },
  edge3: {
    source: 'node2',
    target: 'node4',
  },
  edge4: {
    source: 'node2',
    target: 'node4',
  },
}

const x = computed(() => defautltXFromWindowWidth(width.value));

const layouts: ComputedRef<Layouts> = computed(() =>
  layoutWithPlacementNode({
    nodes: {
      node1: { x: x.value, y: -height.value},
      node2: { x: x.value, y: -height.value/4 },
      node3: { x: x.value, y: height.value },
      node4: { x: x.value+100, y: -height.value/10 },
    },
  },width.value, height.value)
);

const paths = pathsFromEdges(edges,['edge4']);
</script>
