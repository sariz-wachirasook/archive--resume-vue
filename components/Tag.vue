<template>
  <span
    class="px-1 py-0.5 bg-green-50 rounded cursor-pointer hover:opacity-70 transition-opacity"
    :class="[generateColor(tag)]"
    v-html="tag"
  >
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag: string;
  icon?: string;
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
    'bg-gray-100',
    // 50
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-gray-200',
  ];

  const hash = tag.split('').reduce((acc: any, char: string) => {
    return acc + char.charCodeAt(0);
  }, 0);

  return colors[hash % colors.length];
};
</script>
