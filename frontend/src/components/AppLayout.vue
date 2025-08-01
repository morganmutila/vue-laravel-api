<script setup>
import Navigation from "./Navigation.vue";
</script>

<template>
  <Navigation />
  <div
    class="max-w-[85rem] min-h-300 mx-auto py-10 px-4 sm:px-6 lg:px-8 dark:text-gray-200"
  >
    <RouterView />
  </div>
</template>
