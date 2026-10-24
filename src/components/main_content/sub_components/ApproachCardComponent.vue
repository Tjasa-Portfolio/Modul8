<script setup lang="ts">
import { ref } from 'vue'
import enka from '../../../assets/img/enka.svg'
import dvojka from '../../../assets/img/dvojka.svg'
import trojka from '../../../assets/img/trojka.svg'
import stirka from '../../../assets/img/stirka.svg'
const list_items = ref([
  {
    id: 1,
    icon_src: enka,
    text: 'Razumevanje in analiza',
    paragraph:
      'Vsak projekt začnemo s pogovorom o vaših ciljih, skupinah uporabnikov in potrebah na trgu. Pregledamo in analiziramo obstoječo rešitev, vsebino in funkcionalnosti ter določimo ključne izzive - cilje. Tako pridobimo jasno izhodišče za načrtovanje uporabniške izkušnje in razvoja produkta',
  },
  {
    id: 2,
    icon_src: dvojka,
    text: 'Načrtovanje in zasnova',
    paragraph:
      'Na podlagi zbranih informacij oblikujemo strukturo in potek rešitve. Pripravimo uporabniške scenarije, informacijsko arhitekturo in UX/UI zasnovo. Pri tem skrbimo, da je rešitev razumljiva, pregledna in prilagojena potrebam uporabnikov kakor tudi vašeu informacijskemu sistemu.',
  },
  {
    id: 3,
    icon_src: trojka,
    text: 'Razvoj in izvedba',
    paragraph:
      'Potrjeno zasnovo pretvorimo v delujočo digitalno rešitev. Oblikujemo vmesnike ter razvijemo dogovorjene funkcionalnosti, pri čemer sproti preverjamo uporabnost, delovanje in prilagojenost različnim napravam. Tako ideja postopoma postane kakovosten in živ produkt.',
  },
  {
    id: 4,
    icon_src: stirka,
    text: 'Dolgoročna vrednost',
    paragraph:
      'Pred predajo rešitev testiramo, odpravimo morebitne pomanjkljivosti in jo pripravimo za uporabo. Po zagonu vam lahko pomagamo z vzdrževanjem, podporo in nadaljnjimi izboljšavami. Tako vaša digitalna rešitev ostaja uporabna, zanesljiva in pripravljena za nadaljno rast.',
  },
])
</script>
<template>
  <div
    v-for="item in list_items"
    :key="item.id"
    class="flex flex-col justify-start items-start p-7 w-full max-w-82.5 card-shadow rounded-[40px] h-97"
  >
    <div class="w-full flex flex-row justify-start items-start gap-5">
      <img :src="item.icon_src" alt="" />
      <h3 class="font-black text-[22px]">{{ item.text }}</h3>
    </div>

    <p class="text-[15px] pt-5">{{ item.paragraph }}</p>
  </div>
</template>

<style>
.card-shadow {
  box-shadow: 0 0 30px 0 rgba(164, 163, 163, 0.15);
}
</style>
