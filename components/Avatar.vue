<template>
  <div class="rounded-full overflow-hidden w-full h-full max-w-[200px] max-h-[200px]">
    <nuxt-img :src="src" :alt="alt" :class="size" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: 'medium',
  },
});
</script>
