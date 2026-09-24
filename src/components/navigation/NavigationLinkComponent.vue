<script setup lang="ts">
import { ref } from 'vue'
import Button from './../shared/ButtonComponent.vue'

const list_items = ref([
  { id: 1, text: 'Domov' },
  { id: 2, text: 'Storitve' },
  { id: 3, text: 'Reference' },
  { id: 4, text: 'Vizija' },
])
</script>
<template>
  <li
    v-for="item in list_items"
    :key="item.id"
    class="text-white-main text-lg font-normal hover:text-orange-main hover:font-extrabold hover:border-b-4 hover:border-b-orange-main cursor-pointer md:mx-2 lg:mx-10"
  >
    {{ item.text }}
  </li>
  <Button text="Kontakt" />
</template>
