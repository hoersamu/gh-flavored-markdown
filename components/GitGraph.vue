<template>
  <svg height="100%" width="100%">
    <g clip-path="url(#clipPath)">
      <path
        v-for="edge in computedEdges"
        :d="edge.d"
        :stroke="edge.color ?? defaultEdgeColor"
        :stroke-width="edge.stroke ?? defaultStroke"
        fill="transparent"
      />
      <g id="nodes">
        <circle
          v-for="node in nodes"
          :cx="node.x"
          :cy="node.y"
          :fill="node.fillColor ?? defaultNodeFillColor"
          :stroke="node.color ?? defaultNodeStrokeColor"
          r="16"
          :stroke-width="node.stroke ?? defaultStroke"
        />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Edge, Edges, Nodes } from '@/types/gitGraph';

const props = defineProps({
  nodes: {
    type: Object as PropType<Nodes>,
    default: () => ({}),
  },
  edges: {
    type: Object as PropType<Edges>,
    default: () => ({}),
  },
  defaultNodeStrokeColor: {
    type: String,
    default: '#58a6ff',
  },
  defaultNodeFillColor: {
    type: String,
    default: '#0d1117',
  },
  defaultEdgeColor: {
    type: String,
    default: '#58a6ff',
  },
  defaultStroke: {
    type: Number,
    default: 8,
  },
  defaultAmplitude: {
    type: Number,
    default: 0.5,
  },
});

const getCenterBetweenPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => ({
  x: (x1 + x2) / 2,
  y: (y1 + y2) / 2,
});

const getHalfDiagonal = (x1: number, y1: number, x2: number, y2: number) => ({
  x: (x1 - x2) / 2,
  y: (y1 - y2) / 2,
});

const getThirdPoint = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  amplitude: number,
  mirrored = false
) => {
  const { x: xc, y: yc } = getCenterBetweenPoints(x1, y1, x2, y2);

  const { x: xd, y: yd } = getHalfDiagonal(x1, y1, x2, y2);

  const modifier = mirrored ? -1 : 1;
  return {
    x: xc - yd * modifier * amplitude,
    y: yc + xd * modifier * amplitude,
  };
};

const computedEdges = computed(() => {
  return Object.entries(props.edges)
    .filter(([_, edge]) => {
      return edge.nodes.every((node) => props.nodes[node]);
    })
    .reduce((acc, [key, edge]) => {
      const { x: x1, y: y1 } = props.nodes[edge.nodes[0]];
      const { x: x2, y: y2 } = props.nodes[edge.nodes[1]];

      // Logic for moving the endpoint outside of the circle
      // const l = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(by - ay, 2));
      // const t = 16;
      // const tl = t / l;
      // const cx = (bx-ax)*tl
      // const cy = (by-ay)*tl

      let d = `M ${x1 /*+cx*/} ${y1 /*+cy*/}`;
      if (edge.type && edge.type !== 'straight') {
        if (edge.type.startsWith('s')) {
          const { x: xc, y: yc } = getCenterBetweenPoints(x1, y1, x2, y2);

          const { x: x3, y: y3 } = getThirdPoint(
            x1,
            y1,
            xc,
            yc,
            edge.amplitude ?? props.defaultAmplitude,
            edge.type.endsWith('Right')
          );

          d += ` Q ${x3} ${y3} ${xc} ${yc} T ${x2} ${y2}`;
        } else {
          const { x: x3, y: y3 } = getThirdPoint(
            x1,
            y1,
            x2,
            y2,
            edge.amplitude ?? props.defaultAmplitude,
            edge.type.endsWith('Right')
          );
          d += ` Q ${x3} ${y3} ${x2} ${y2}`;
        }
      } else {
        d += ` L ${x2 /*-cx*/} ${y2 /*-cy*/}`;
      }

      acc[key] = {
        ...edge,
        d,
      };
      return acc;
    }, {} as Record<string, Edge & { d: string }>);
});
</script>
