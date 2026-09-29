<script setup lang="ts">
import { ref } from 'vue'

const list_items = ref([
  {
    id: 1,
    text: 'Razumevanje in analiza',
    paragraph:
      'Vsako sodelovanje začnemo z razumevanjem vaših ciljev, potreb in izzivov. Analiziramo procese, uporabnike, finančni vidik ter izobraževalne potrebe, da dobimo celostno sliko in trdno izhodišče za nadaljnje delo.',
  },
  {
    id: 2,
    text: 'Načrtovanje in zasnova',
    paragraph:
      'Na podlagi analize oblikujemo jasen načrt in strukturo rešitev. To vključuje zasnovo uporabniške izkušnje, tehnično arhitekturo, računovodsko podporo ter pripravo učnih vsebin, prilagojenih vašemu okolju.',
  },
  {
    id: 3,
    text: 'Razvoj in izvedba',
    paragraph:
      'Rešitve postopno razvijamo in izvajamo z mislijo na uporabnost, stabilnost in preglednost. Poskrbimo za kakovostno izvedbo digitalnih rešitev, urejeno poslovno podporo ter učinkovito izvedbo izobraževanj.',
  },
  {
    id: 4,
    text: 'Dolgoročna vrednost',
    paragraph:
      'Po zaključku izvedbe ostajamo zanesljiv partner. Nudimo podporo, prilagoditve in nadaljnje izboljšave ter skrbimo, da rešitve dolgoročno ostanejo uporabne, razumljive in učinkovite. Vedno smo vam na voljo, če se kje kaj zaplete.',
  },
])
</script>
<template>
  <div
    v-for="item in list_items"
    :key="item.id"
    class="flex flex-col justify-end items-start p-7 w-full max-w-82.5"
  >
    <div class="w-full flex flex-row justify-start items-start">
      <span>{{ item.id }}</span>
      <h3 class="font-black text-[22px]">{{ item.text }}</h3>
    </div>

    <p class="text-[16px] pt-5">{{ item.paragraph }}</p>
  </div>
</template>
