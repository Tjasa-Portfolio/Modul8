<script setup lang="ts">
import { ref } from 'vue'

const list_items = ref([
  {
    id: 1,
    text: 'UX/UI storitve',
    paragraph:
      'Načrtujemo pregledne in uporabniku prijazne digitalne izkušnje. Od raziskave in user flowov do vizualnega oblikovanja vmesnikov, ki so jasni, učinkoviti in estetski. Izvajamo pa tudi ostale grafične storitve po meri. ',
  },
  {
    id: 2,
    text: 'Programiranje',
    paragraph:
      'Razvijamo spletne strani in aplikacije po meri, prilagojene specifičnim potrebam naročnikov. Poudarek je na funkcionalnosti, uporabnosti in rešitvah, ki se prilagajajo rasti vašega poslovanja.',
  },
])
</script>
<template>
  <div
    v-for="item in list_items"
    :key="item.id"
    class="bg-black flex flex-col justify-end items-start border rounded-2xl text-white-main p-8 max-w-150 w-full h-112.5"
  >
    <h3 class="font-black text-xl">{{ item.text }}</h3>
    <p class="font-medium text-[16px] pt-4">{{ item.paragraph }}</p>
  </div>
</template>
