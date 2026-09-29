<script setup lang="ts">
import Button from '../shared/ButtonComponent.vue'
import Accordion from './sub_components/AccordionComponent.vue'
import ServicesCard from './sub_components/ServicesCardComponent.vue'
</script>
<template>
  <div id="storitve" class="flex flex-col justify-center items-center px-5 py-25 max-w-316.5">
    <div class="text-center flex flex-col justify-center items-center gap-5">
      <h2 class="font-black text-black-main text-2xl">Celostne storitve na enem mestu</h2>
      <p class="font-normal text-black-main text-[16px]">
        Povezujemo uporabniško izkušnjo in digitalni razvoj v celostne rešitve z dolgoročno
        vrednostjo
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-15 mt-10 md:flex-row w-full">
      <ServicesCard />
    </div>

    <!-- FAQ -->
    <Accordion />
    <Button text="Nekaj naših referenc" class="mt-15" />
  </div>
</template>
