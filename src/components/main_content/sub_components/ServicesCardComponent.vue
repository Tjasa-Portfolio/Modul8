<script setup lang="ts">
import { ref } from 'vue'
import services_1 from '../../../assets/img/services_1.jpg'
import services_2 from '../../../assets/img/services_2.jpg'
const list_items = ref([
  {
    id: 1,
    background_src: services_1,
    text: 'UX/UI storitve',
    paragraph:
      'Načrtujemo pregledne in uporabniku prijazne digitalne izkušnje. Od raziskave in user flowov do vizualnega oblikovanja vmesnikov, ki so jasni, učinkoviti in estetski. Izvajamo pa tudi ostale grafične storitve po meri. ',
  },
  {
    id: 2,
    background_src: services_2,
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
    :style="{ backgroundImage: `url(${item.background_src})` }"
    class="image-overlay service-card flex w-full max-w-[381.021px] h-[457.887px] flex-shrink-0 flex-col items-start justify-end gap-[6.612px] rounded-[33px] border bg-cover bg-center p-[32.234px_29.754px] text-white-main backdrop-blur-[22.0678px] bg-[rgba(0,0,0,0.10)]"
  >
    <h3 class="font-black text-xl">{{ item.text }}</h3>
    <p class="font-medium text-[16px] py-4">{{ item.paragraph }}</p>
  </div>
</template>
