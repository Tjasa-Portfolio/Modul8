<script setup lang="ts">
defineProps<{ text: string }>()
const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    @click="emit('click', $event)"
    class="cursor-pointer inline px-5 py-2 justify-center items-center text-white-main text-center text-lg non-italic font-bold bg-orange-main rounded-[10px] hover:bg-violet-main"
  >
    {{ text }}
  </button>
</template>
