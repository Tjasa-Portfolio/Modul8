<script setup lang="ts"></script>
<template>
  <footer class="w-full bg-black-main text-white-main flex flex-col justify-center items-center">
    <div
      class="flex flex-col justify-center items-center text-center py-20 px-12.5 w-full max-w-[700px]"
    >
      <!-- LOGO -->
      <div class="w-full">
        <span class="flex flex-row justify-center items-center"
          ><p>ikona</p>
          <p class="font-logo font-normal text-[60px]">Modul8</p></span
        >
      </div>
      <!-- TEXT -->
      <div class="py-12 font-display w-full flex flex-col justify-center items-center md:flex-row">
        <address class="text-white-main not-italic md:text-left md:w-3xl">
          <span class="font-bold text-[22px]">Modul8 - Aleš Frelih s.p. </span><br />
          <span class="font-normal text-base">Kokra 4a, </span><br />
          <span class="font-normal text-base md:flex md:flex-col"
            ><span>4205 Preddvor, </span><span>Slovenia</span></span
          >
        </address>
        <div class="w-full py-0.5 border-b border-orange-main my-7.5 md:hidden"></div>
        <div class="h-30 px-0.5 bg-orange-main mx-7.5 hidden md:flex"></div>
        <div class="w-full flex flex-col justify-center items-center gap-5 md:items-start">
          <span class="flex flex-row justify-start items-center gap-2.5"
            ><p>ikona</p>
            <a href="tel:+38640302772" class="font-normal text-base">+386 (0)40 302 772</a></span
          >
          <span class="flex flex-row justify-start items-center gap-2.5"
            ><p>ikona</p>
            <a href="mailto:info@modul8.si" class="font-normal text-base">info@modul8.si</a></span
          >
        </div>
      </div>
      <div class="w-full py-0.5 border-b border-footer-border"></div>
      <p class="py-5 text-xs">Vse pravice pridržane. © Modul8 2026</p>
    </div>
  </footer>
</template>
