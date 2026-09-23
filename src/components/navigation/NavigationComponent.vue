<script setup lang="ts">
import Button from './../shared/ButtonComponent.vue'
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
      <Button text="test Text" />
    </div>

    <ul>
      <li>to test the font</li>
    </ul>
  </nav>
</template>
