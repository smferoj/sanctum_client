<script setup>
 import { RouterView } from 'vue-router';

 import Header from './components/Header.vue';
import AboutView from './views/AboutView.vue';

</script>

<template>
 <div class="bg-gray-200 h-screen">
 <Header />
 <main class="bg-salte-300 w-full mx-auto min-h-[90vh] p-6 rounded shadow">
  <router-view>
  </router-view>
 </main>
 <HomeView/>
 
 
 
 </div>
</template>

<style scoped>
 
</style>
