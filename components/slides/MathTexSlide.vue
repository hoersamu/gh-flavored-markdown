<template>
  <SlideTemplate>
    <GitGraph :nodes="nodes" :edges="edges" />
    <span
      class="absolute top-[20vh] left-[17vw] -translate-y-1/2 text-3xl md:text-5xl font-semibold"
    >
      Impressive
      <span class="text-success-fg"> Math </span>
    </span>
    <CodeBlock class="absolute top-[40vh] left-[17vw] w-[35vw]">
      <pre>
## Inline Math
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$


## Block Math

**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$


## Math as code block

```math
\sqrt{3}
```
      </pre>
    </CodeBlock>
    <CodeBlock class="absolute top-[40vh] left-[55vw]">
      <img
        class="w-[30vw]"
        src="math.png"
      />
    </CodeBlock>
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
}));

const edges: Edges = {
  'a-b': {
    nodes: ['b', 'a'],
  },
  'b-c': {
    nodes: ['b', 'c'],
  },
};
</script>
