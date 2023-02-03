<template>
  <Slide>
    <GitGraph :nodes="nodes" :edges="edges" />
  </Slide>
</template>

<script setup lang="ts">
const nodes = {
  'a': {
    x:50,
    y:50,
    color:'blue'
  },
  'b': {
    x:100,
    y:100,
    color:'red'
  },
  'c': {
    x:150,
    y:50,
    color:'green'
  },
}

const edges = {
  'a-b': {
    nodes:['b','a'],
    color:'blue'
  },
  'b-c': {
    nodes:['b','c'],
    color:'green'
  },
}
</script>