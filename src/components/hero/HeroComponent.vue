<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

import Navigation from '../navigation/NavigationComponent.vue'
import Button from '../shared/ButtonComponent.vue'
</script>
<template>
  <section
    class="flex flex-col justify-start items-center py-7.5 px-2.5 bg-black-main w-full h-screen font-display text-white-main"
  >
    <Navigation />
    <!-- HERO-->
    <div class="w-full h-screen flex flex-col justify-end items-start gap-7.5 max-w-[1683px]">
      <div class="w-full flex flex-col justify-end items-start gap-7.5 max-w-182.75">
        <h1 class="font-black text-[50px] text-left">Celostne digitalne rešitve na enem mestu</h1>
        <p class="font-normal text-lg text-left">
          Premišljeno uporabniško izkušnjo in digitalni razvoj združujemo v celovite rešitve z
          dolgoročno vrednostjo.
        </p>
        <Button text="Začnimo sodelovanje" />
      </div>
      <Swiper
        class="hero-swiper w-full"
        :modules="[Autoplay, FreeMode]"
        :free-mode="{ enabled: true, momentum: false }"
        :slides-per-view="'auto'"
        :space-between="50"
        :speed="5000"
        :autoplay="{ delay: 1, disableOnInteraction: false }"
        :loop="true"
        :allow-touch-move="false"
      >
        <SwiperSlide v-for="slide in 15" :key="slide" class="w-auto!">
          Slide {{ slide }}
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.hero-swiper :deep(.swiper-wrapper) {
  transition-timing-function: linear;
}
</style>
