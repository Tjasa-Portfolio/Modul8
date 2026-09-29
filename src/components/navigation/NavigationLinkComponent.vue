<script setup lang="ts">
import { ref } from 'vue'

const list_items = ref([
  { id: 1, text: 'Domov', link: '/' },
  { id: 2, text: 'Storitve', link: '/#storitve' },
  { id: 3, text: 'Reference', link: '/references' },
  { id: 4, text: 'Vizija', link: '/#vizija' },
])
</script>
<template>
  <li
    v-for="item in list_items"
    :key="item.id"
    class="text-white-main text-lg font-normal hover:text-orange-main hover:font-extrabold hover:border-b-4 hover:border-b-orange-main cursor-pointer md:mx-2 lg:mx-10"
  >
    <RouterLink :to="item.link">{{ item.text }}</RouterLink>
  </li>
  <li>
    <RouterLink
      to="/#kontakt"
      class="cursor-pointer rounded-[10px] bg-orange-main px-5 py-2 text-center text-lg font-bold text-white-main hover:bg-violet-main"
    >
      Kontakt
    </RouterLink>
  </li>
</template>
