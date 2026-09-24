<script setup lang="ts">
import { ref } from 'vue'
import Button from './../shared/ButtonComponent.vue'

const list_items = ref([
  { id: 1, text: 'Domov' },
  { id: 2, text: 'Storitve' },
  { id: 3, text: 'Reference' },
  { id: 4, text: 'Vizija' },
])
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <nav
    class="flex flex-col content-center items-center shrink-0 px-5 py-2.5 bg-light-gray rounded-3xl w-full shadow-navigacija blur-navigacija"
  >
    <div class="flex flex-row justify-between items-center w-full">
      <span class="flex flex-row justify-start items-center"
        ><p>ikona</p>
        <p class="font-logo text-white-main font-normal text-[41px]">Modul8</p></span
      >
      <Button text="test Text" @click="toggleMenu" />
    </div>

    <ul v-if="isOpen" class="flex flex-col justify-center items-end w-full gap-1.5">
      <li
        v-for="item in list_items"
        :key="item.id"
        class="text-white-main text-lg font-normal hover:text-orange-main hover:font-extrabold hover:border-b-4 hover:border-b-orange-main cursor-pointer"
      >
        {{ item.text }}
      </li>
      <Button text="Kontakt" />
    </ul>
  </nav>
</template>
