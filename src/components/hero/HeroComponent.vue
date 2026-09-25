<script setup lang="ts">
import Navigation from '../navigation/NavigationComponent.vue'
import Button from '../shared/ButtonComponent.vue'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
<template>
  <section
    class="flex flex-col justify-start items-center py-[30px] px-2.5 bg-black-main w-full h-screen font-display text-white-main"
  >
    <Navigation />
    <!-- HERO-->
    <div class="w-full h-screen flex flex-col justify-end items-start gap-[30px]">
      <h1 class="font-black text-[50px] text-left">Celostne digitalne rešitve na enem mestu</h1>
      <p class="font-normal text-lg text-left">
        Premišljeno uporabniško izkušnjo in digitalni razvoj združujemo v celovite rešitve z
        dolgoročno vrednostjo.
      </p>
      <Button text="Začnimo sodelovanje" />
      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper>
    </div>
  </section>
</template>
