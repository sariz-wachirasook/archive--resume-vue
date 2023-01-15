<template>
  <span
    class="px-1 py-0.5 bg-green-50 rounded inline-flex cursor-pointer hover:opacity-70 transition-opacity"
    :class="[generateColor(tag)]"
    >{{ tag }}</span
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  tag: string;
}>();

const generateColor = (tag: string) => {
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

  const hash = tag.split('').reduce((acc: any, char: string) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return colors[hash % colors.length];
};
</script>
