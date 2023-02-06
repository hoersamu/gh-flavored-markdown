<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
      >Beautiful <span class="text-success-fg">HTML</span></span
    >
    <span
      class="absolute top-[calc(20vh+200px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Layouts
    </span>
    <span
      class="absolute top-[calc(20vh+300px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Darkmode pictures
    </span>
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
    x: width.value / 12 + 100,
    y: height.value / 5 + 300,
    color: '#bd6d28',
  },
  g: {
    x: width.value / 12 + 100,
    y: height.value * 0.8,
    stroke: 0,
    fillColor: 'transparent',
  },
  h: {
    x: width.value / 12 + 200,
    y: height.value * 0.9,
    fillColor: 'transparent',
    stroke: 0,
  },
  i: {
    x: width.value +50,
    y: height.value * 0.9,
    stroke: 0,
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
    color: '#bd6d28',
  },
  'e-g': {
    nodes: ['e', 'g'],
    color: '#bd6d28',
  },
  'g-h': {
    nodes: ['g', 'h'],
    color: '#bd6d28',
    type: 'curvedRight',
    amplitude: 1.0,
  },
  'h-i': {
    nodes: ['h', 'i'],
    color: '#bd6d28',
  },
};
</script>
