<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

import Navigation from '../navigation/NavigationComponent.vue'
import Button from '../shared/ButtonComponent.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import image34 from '../../assets/img/swiper/image 34.png'
import swiper1 from '../../assets/img/swiper/swiper_1.png'
import swiper2 from '../../assets/img/swiper/swiper_2.svg'
import swiper3 from '../../assets/img/swiper/swiper_3.png'
import swiper4 from '../../assets/img/swiper/swiper_4.png'
import swiper5 from '../../assets/img/swiper/swiper_5.png'
import swiper6 from '../../assets/img/swiper/swiper_6.svg'
import swiper7 from '../../assets/img/swiper/swiper_7.svg'
import heroVideo from '../../assets/img/hero_viewo.mp4'
import referencesHero from '../../assets/img/references_hero.png'

const list_items = ref([
  { id: 1, text: image34 },
  { id: 2, text: swiper1 },
  { id: 3, text: swiper2 },
  { id: 4, text: swiper3 },
  { id: 5, text: swiper4 },
  { id: 6, text: swiper5 },
  { id: 7, text: swiper6 },
  { id: 8, text: swiper7 },
])

const route = useRoute()
const router = useRouter()

const goToForm = () => {
  router.push({ path: '/', hash: '#form' })
}
</script>
<template>
  <section
    class="relative flex flex-col justify-start items-center overflow-hidden py-7.5 px-2.5 bg-black-main w-full h-screen font-display text-white-main"
  >
    <div
      v-if="route.path === '/references'"
      class="hero-media absolute right-0 top-0 z-0 h-full w-full bg-cover bg-center md:w-1/2"
      :style="{ backgroundImage: `url(${referencesHero})` }"
      aria-hidden="true"
    ></div>
    <div v-else class="hero-media absolute inset-0 z-0" aria-hidden="true">
      <video
        class="h-full w-full object-cover"
        :src="heroVideo"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
    <div
      :class="[
        'hero-overlay pointer-events-none absolute top-0 z-1 h-full bg-black/40',
        route.path === '/references' ? 'right-0 w-full md:w-1/2' : 'inset-0',
      ]"
      aria-hidden="true"
    ></div>
    <div class="relative z-10 flex h-full w-full flex-col items-center">
      <Navigation />
      <!-- HERO-->
      <div
        class="flex min-h-0 w-full flex-1 flex-col items-start justify-end gap-7.5 max-w-[1683px]"
      >
        <div
          :class="[
            'w-full flex flex-col justify-end items-start gap-7.5 max-w-182.75',
            route.path !== '/references' && 'pb-25',
          ]"
        >
          <h1 class="font-black text-[45px] md:text-[50px] text-left">
            {{
              route.path === '/references'
                ? 'Naše reference'
                : 'Celostne digitalne rešitve na enem mestu'
            }}
          </h1>
          <p v-if="route.path !== '/references'" class="font-normal text-lg text-left">
            Premišljeno uporabniško izkušnjo in digitalni razvoj združujemo v celovite rešitve z
            dolgoročno vrednostjo.
          </p>
          <p v-if="route.path === '/references'" class="text-orange-main text-xl">
            Združujemo izkušnje in strokovno znanje v premišljene digitalne rešitve.
          </p>
          <Button
            v-if="route.path !== '/references'"
            text="Začnimo sodelovanje"
            @click="goToForm"
          />
        </div>
      </div>
    </div>
    <div
      v-if="route.path !== '/references'"
      class="absolute -bottom-5 -left-0 z-10 w-[calc(100%+20px)] bg-black-main py-5"
    >
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
        <SwiperSlide v-for="slide in list_items" :key="slide.id" class="h-12.5 w-auto!">
          <img :src="slide.text" alt="" />
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
