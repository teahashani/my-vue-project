<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HomeContent from './components/HomeContent.vue';

const route = useRoute();
const homeContentRef = ref(null);
const isProcessing = ref(false);

// Watch for search query changes in the URL
watch(() => route.query.search, async (newQuery) => {
  if (isProcessing.value || !newQuery) return;
  
  isProcessing.value = true;
  try {
    if (homeContentRef.value?.handleSearch) {
      console.log('Home: Calling handleSearch with query:', newQuery);
      await homeContentRef.value.handleSearch(newQuery);
    }
  } finally {
    isProcessing.value = false;
  }
}, { immediate: true }); // Runs on initial load if a query exists

onMounted(() => {
  console.log('Home component mounted');
  console.log('HomeContent ref:', homeContentRef.value);
});

// Expose the HomeContent ref to parent components
defineExpose({
  homeContentRef
});
</script>

<template>
  <div class="w-full">
    <HomeContent ref="homeContentRef" />
  </div>
</template>

<style scoped>
.w-full {
  width: 100%;
}
</style>
