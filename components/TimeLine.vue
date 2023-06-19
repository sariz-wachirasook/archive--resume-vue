<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title" class="mb-2 last:mb-0">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <a
              :href="item.link"
              target="_blank"
              class="h-10 w-10 rounded-full bg-gray-100 overflow-hidden shadow block"
            >
              <NuxtImg :src="item.logo" alt="" class="w-full h-full object-contain" />
            </a>
          </div>
          <div class="ml-3 w-full">
            <div class="grid grid-cols-[2fr,1fr]">
              <div>
                <p class="text-sm font-bold text-gray-900">
                  {{ item.title }}
                </p>
                <p class="text-sm font-medium text-gray-900">
                  {{ item.company }}
                </p>
              </div>
              <div class="text-sm text-gray-500 text-right">
                <time>{{ item.date }}</time>
              </div>
            </div>

            <div
              v-if="item.description"
              class="mt-2 text-sm text-gray-500"
              v-html="item.description"
            ></div>
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
    logo: string;
    link: string;
  }[];
}>();
</script>
