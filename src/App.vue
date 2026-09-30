<script setup lang="ts">
import Hero from './components/hero/HeroComponent.vue'
import MainContent from './components/main_content/MainContentComponent.vue'
import Footer from './components/footer/FooterComponent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <Hero />
  <MainContent v-if="route.path === '/'" />
  <RouterView v-else />
  <Footer />
</template>
