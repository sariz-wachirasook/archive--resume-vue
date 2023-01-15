<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-gray-500" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              {{ item.title }}
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time>{{ item.date }}</time>
            </div>
          </div>
        </div>
        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: {
    title: string;
    date: string;
    description: string;
    company: string;
  }[];
}>();
</script>
