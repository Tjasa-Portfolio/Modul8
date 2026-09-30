<script setup lang="ts">
import { ref } from 'vue'
import NavigationLink from './NavigationLinkComponent.vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}
</script>
<template>
  <nav
    class="flex flex-col content-center items-center shrink-0 px-5 py-2.5 bg-light-gray-nav rounded-3xl w-full shadow-navigacija blur-navigacija max-w-[1683px]"
  >
    <div class="flex flex-row justify-between items-center w-full">
      <RouterLink to="/" @click="closeMenu"
        ><img src="../../assets/img/modul8_logo.svg" alt="" class="h-11.25"
      /></RouterLink>

      <button class="md:hidden cursor-pointer" @click="toggleMenu">
        <img src="../../assets/img/modul8_hamburger.svg" alt="hamburger icon" />
      </button>

      <ul class="md:flex flex-row justify-end items-end w-full gap-1.5 md:gap-0 hidden">
        <NavigationLink @close="closeMenu" />
      </ul>
    </div>

    <ul
      v-if="isOpen"
      class="flex flex-col justify-evenly items-end w-full gap-5 md:hidden pt-20 py-10 absolute top-0 z-50 bg-light-gray-nav-open shadow-navigacija blur-navigacija h-full"
    >
      <button class="md:hidden cursor-pointer absolute top-10 right-8 z-50" @click="closeMenu">
        <img src="../../assets/img/modul8_hamburger.svg" alt="hamburger icon" />
      </button>
      <NavigationLink @close="closeMenu" />
    </ul>
  </nav>
</template>
