<script setup lang="ts">
defineProps<{ text: string }>()
const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    @click="emit('click', $event)"
    class="button cursor-pointer inline px-5 py-2 justify-center items-center text-white-main text-center text-lg non-italic font-bold bg-orange-main rounded-[10px]"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.button:hover,
.button:focus-visible {
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
  .button:hover,
  .button:focus-visible {
    animation: none;
    background-color: var(--color-violet-main);
  }
}
</style>
