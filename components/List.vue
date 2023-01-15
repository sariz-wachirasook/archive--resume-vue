<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.title }}: {{ item.link }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: {
    title: string;
    link: string;
  }[];
}>();
</script>
