<template>
  <span class="p-1 bg-green-50 rounded inline-flex" :class="[generateColor(tag)]">{{ tag }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag: string;
}>();

const generateColor = (tag) => {
  // random color by tag
  const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-indigo-100',
    'bg-purple-100',
    'bg-pink-100',
  ];

  const hash = tag.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return colors[hash % colors.length];
};
</script>
