<template>
  <div v-highlight>
    <pre :class="`language-${language} ${preClass}`"><code><slot/></code></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  language: {
    type: String,
    default: 'md',
  },
  preClass: {
    type:String,
    default:''
  }
});
</script>
