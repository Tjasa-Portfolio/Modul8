<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits<{ close: [] }>()
const route = useRoute()

const list_items = ref([
  { id: 1, text: 'Domov', link: '/' },
  { id: 2, text: 'Storitve', link: '/#storitve' },
  { id: 3, text: 'Reference', link: '/references' },
  { id: 4, text: 'Vizija', link: '/#vizija' },
])
</script>
<template>
  <li
    v-for="item in list_items"
    :key="item.id"
    class="mx-10 cursor-pointer text-lg font-normal text-white-main md:mx-2 lg:mx-10"
  >
    <RouterLink
      :to="item.link"
      @click="emit('close')"
      :class="['navigation-link', { 'navigation-link-active': route.path === item.link }]"
    >
      {{ item.text }}
    </RouterLink>
  </li>
  <li>
    <RouterLink
      to="/#form"
      @click="emit('close')"
      class="contact-link inline-flex cursor-pointer items-center rounded-[10px] bg-orange-main px-5 py-2 text-center text-lg font-bold text-white-main mx-10 md:mx-0 md:ml-10"
    >
      Kontakt
    </RouterLink>
  </li>
</template>

<style scoped>
.contact-link:hover,
.contact-link:focus-visible {
  animation: kf-52-1973-background-color 1.250123s linear forwards;
}

@keyframes kf-52-1973-background-color {
  0% {
    animation-timing-function: linear(
      0,
      0.0216,
      0.0747,
      0.1458,
      0.2255,
      0.3076,
      0.3879,
      0.4638,
      0.5339,
      0.5974,
      0.6542,
      0.7044,
      0.7484,
      0.7866,
      0.8196,
      0.8479,
      0.8722,
      0.8928,
      0.9103,
      0.9251,
      0.9375,
      0.948,
      0.9568,
      0.9642,
      0.9703,
      0.9754,
      0.9797,
      0.9832,
      0.9862,
      0.9886,
      0.9906,
      0.9923,
      0.9936,
      0.9948,
      0.9957,
      0.9965,
      0.9971,
      0.9976,
      0.9981,
      0.9984,
      0.9987,
      0.9989,
      0.9991,
      0.9993,
      0.9994,
      0.9995,
      0.9996,
      0.9997,
      0.9997,
      0.9998,
      0.9998
    );
    background-color: var(--color-orange-main);
  }

  100% {
    background-color: var(--color-violet-main);
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-link:hover,
  .contact-link:focus-visible {
    animation: none;
    background-color: var(--color-violet-main);
  }
}

.navigation-link {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0;
  transition: color 300ms ease;
}

.navigation-link::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(to right, var(--color-orange-main), var(--color-orange-main));
  transition: width 300ms ease;
}

.navigation-link:hover,
.navigation-link:focus-visible,
.navigation-link-active {
  color: var(--color-orange-main);
}

.navigation-link:hover::before,
.navigation-link:focus-visible::before,
.navigation-link-active::before {
  width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .navigation-link,
  .navigation-link::before {
    transition: none;
  }
}
</style>
