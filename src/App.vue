<template>
  <div class="min-h-screen flex flex-col">
    <Header @search="handleSearch" />

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <component 
          :is="Component" 
          ref="currentComponent"
          @vue:mounted="handleComponentMounted"
        />
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const router = useRouter();
const route = useRoute();
const currentComponent = ref(null);
const isSearching = ref(false);

const handleComponentMounted = (component) => {
  console.log('App: Component mounted in router view:', component);
  console.log('Component refs:', component.$refs);
};

const handleSearch = async (query) => {
  if (isSearching.value || !query.trim()) return;
  
  console.log('App: Received search query:', query);
  isSearching.value = true;

  try {
    // Only navigate if the query is different from the current one
    if (route.query.search !== query) {
      await router.push({ path: '/', query: { search: query } });
    }
    
    // Wait for the next tick to ensure the component is mounted
    await nextTick();
    
    // Try to find the HomeContent component and call its handleSearch method
    const homeComponent = currentComponent.value?.$refs?.homeContentRef;
    if (homeComponent?.handleSearch) {
      console.log('App: Found HomeContent component, calling handleSearch');
      await homeComponent.handleSearch(query);
    } else {
      console.error('App: HomeContent component not found or handleSearch not available', {
        currentComponent: currentComponent.value,
        refs: currentComponent.value?.$refs,
        homeComponent
      });
    }
  } finally {
    isSearching.value = false;
  }
};

onMounted(() => {
  console.log('App: Root component mounted');
  console.log('Current component ref:', currentComponent.value);
});
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

