<script setup lang="ts">
import { ref } from 'vue'
import Button from './../shared/ButtonComponent.vue'
import NavigationLink from './NavigationLinkComponent.vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <nav
    class="flex flex-col content-center items-center shrink-0 px-5 py-2.5 bg-light-gray rounded-3xl w-full shadow-navigacija blur-navigacija max-w-[1683px]"
  >
    <div class="flex flex-row justify-between items-center w-full">
      <span class="flex flex-row justify-start items-center"
        ><p>ikona</p>
        <p class="font-logo text-white-main font-normal text-[41px]">Modul8</p></span
      >
      <Button class="md:hidden" text="test Text" @click="toggleMenu" />

      <ul class="md:flex flex-row justify-end items-end w-full gap-1.5 hidden">
        <NavigationLink />
      </ul>
    </div>

    <ul v-if="isOpen" class="flex flex-col justify-center items-end w-full gap-1.5 md:hidden">
      <NavigationLink />
    </ul>
  </nav>
</template>
