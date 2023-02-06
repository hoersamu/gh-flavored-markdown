<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
      >Why use <span class="text-success-fg">Markdown?</span></span
    >
    <span
      class="absolute top-[calc(20vh+200px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Readable
    </span>
    <span
      class="absolute top-[calc(20vh+300px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Concise
    </span>
    <span
      class="absolute top-[calc(20vh+400px)] left-[17vw] -translate-y-1/2 text-2xl md:text-3xl font-semibold"
    >
      Widely used
    </span>
    <div class="absolute top-[40vh] left-[60vw] w-1/3">
      <svg
        class="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 144 144"
        aria-hidden="true"
      >
        <path
          stroke-width="2"
          d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
        />
      </svg>
      <blockquote class="relative">
        <div class="text-2xl font-medium leading-9 text-gray-900">
          <p>
            The overriding design goal for Markdown’s formatting syntax is to
            make it as <span class="text-success-fg font-bold"> readable </span> as possible. The idea is that a
            Markdown-formatted document should be <span class="text-success-fg font-bold"> publishable as-is </span>, as plain
            text, without looking like it’s been marked up with tags or
            formatting instructions.
          </p>
        </div>
        <footer class="mt-8">
          <div class="flex">
            <div class="ml-4 lg:ml-0">
              <div class="text-base font-medium text-gray-900">John Gruber</div>
              <div class="text-base font-medium text-indigo-600">
                <a
                  href="http://daringfireball.net/projects/markdown/"
                  target="_blank"
                  referrerpolicy="no-referrer"
                  class="underlined"
                >
                  daringfireball.net
                </a>
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
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
  f: {
    x: width.value / 12 + 100,
    y: height.value / 5 + 400,
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
    color: '#bd6d28',
  },
  'e-f': {
    nodes: ['e', 'f'],
    color: '#bd6d28',
  },
};
</script>
