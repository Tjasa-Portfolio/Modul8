<script setup lang="ts">
import ApproachCard from './sub_components/ApproachCardComponent.vue'
</script>
<template>
  <div class="flex flex-col justify-center items-center px-5 max-w-316.5">
    <div class="text-center flex flex-col justify-center items-center gap-5">
      <h2 class="font-black text-black-main text-2xl">Naš pristop</h2>
      <p class="font-normal text-black-main text-[16px]">
        Premišljeno in strukturirano povezujemo izkušnje z uporabo najboljših tehnologij.
      </p>
    </div>
    <div
      class="flex flex-col w-full items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-4"
    >
      <ApproachCard />
    </div>
  </div>
</template>
