<template>
  <svg height="100%" width="100%">
    <g clip-path="url(#clipPath)">
      <path
        v-for="edge in computedEdges"
        :d="edge.d"
        :stroke="edge.color || 'red'"
        stroke-width="8"
        fill="transparent"
      />
      <g id="nodes">
        <circle
          v-for="node in nodes"
          fill="transparent"
          r="16"
          :cx="node.x"
          :cy="node.y"
          :stroke="node.color || 'red'"
          stroke-width="8"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

type Node = {
  x: number;
  y: number;
  color?: string;
};
type Nodes = Record<string, Node>;
type Edge = {
  color?: string;
  nodes: [string, string];
};
type Edges = Record<string, Edge>;

const props = defineProps({
  nodes: {
    type: Object as PropType<Nodes>,
    default: () => ({}),
  },
  edges: {
    type: Object as PropType<Edges>,
    default: () => ({}),
  },
});

const computedEdges = computed(() => {
  return Object.entries(props.edges)
    .filter(([key, edge]) => {
      return edge.nodes.every((node) => props.nodes[node]);
    })
    .reduce((acc, [key, edge]) => {
      const { x: ax, y: ay } = props.nodes[edge.nodes[0]];
      const { x: bx, y: by } = props.nodes[edge.nodes[1]];

      const l = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(by - ay, 2));
      const t = 16;
      const tl = t / l;
      const cx = (bx-ax)*tl
      const cy = (by-ay)*tl

      acc[key] = {
        ...edge,
        d: `M ${ax+cx},${ay+cy} L ${bx-cx},${by-cy}`,
      };
      return acc;
    }, {} as Record<string, Edge & { d: string }>);
});
</script>
