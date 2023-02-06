<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
    >
      <span class="text-success-fg"> Bits </span>
      and
      <span class="text-success-fg"> Pieces </span>
    </span>
    <span
      class="absolute top-[calc(20vh+200px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Special Repositories
    </span>
    <span
      class="absolute top-[calc(20vh+300px)] left-[23vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      .github for Organizations
    </span>
    <span
      class="absolute top-[calc(20vh+400px)] left-[23vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Username for Accounts
    </span>
    <a
      class="absolute top-[calc(20vh+500px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold underlined"
      href="https://docs.github.com/en/rest/markdown"
      referrerpolicy="no-referrer"
      target="_blank"
    >
      GitHub Markdown REST API
    </a>
  </SlideTemplate>
</template>

<script setup lang="ts">
import { Edges, Nodes } from '@/types/gitGraph';

const { width, height } = useWindowSize();

const nodes = computed<Nodes>(() => ({
  a: {
    x: width.value / 12,
    y: -50,
  },
  b: {
    x: width.value / 12,
    y: height.value / 5,
  },
  c: {
    x: width.value / 12,
    y: height.value + 50,
  },
  d: {
    x: width.value / 12 + 100,
    y: height.value / 5 + 200,
    color: '#bd6d28',
  },
  e: {
    x: width.value / 12 + 200,
    y: height.value / 5 + 300,
    color: '#a371f7',
  },
  f: {
    x: width.value / 12 + 200,
    y: height.value / 5 + 400,
    color: '#a371f7',
  },
  g: {
    x: width.value / 12 + 100,
    y: height.value / 5 + 500,
    color: '#bd6d28',
  },
}));

const edges: Edges = {
  'a-b': {
    nodes: ['b', 'a'],
  },
  'b-c': {
    nodes: ['b', 'c'],
  },
  'b-d': {
    nodes: ['b', 'd'],
    type: 'sCurvedRight',
    color: '#bd6d28',
  },
  'd-e': {
    nodes: ['d', 'e'],
    type: 'sCurvedRight',
    color: '#a371f7',
  },
  'e-f': {
    nodes: ['e', 'f'],
    color: '#a371f7',
  },
  'b-g': {
    nodes: ['d', 'g'],
    color: '#bd6d28',
  },
};
</script>
