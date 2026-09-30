<script setup lang="ts">
import { ref } from 'vue'

const buttons = ref([
  { id: 1, text: 'UX/UI storitve' },
  { id: 2, text: 'Programske rešitve' },
  { id: 3, text: 'Računovodske storitve' },
  { id: 4, text: 'Drugo' },
])

const selectedService = ref('')
const isSubmitting = ref(false)

const handleSubmit = async (event: SubmitEvent) => {
  const form = event.currentTarget as HTMLFormElement

  isSubmitting.value = true

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      form.reset()
      selectedService.value = ''
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <section
    id="kontakt"
    class="px-5 pb-10 border-0 rounded-[40px] shadow-form flex flex-col justify-center items-center w-full"
  >
    <h2>Stopimo v kontakt</h2>
    <div
      class="w-full pt-5 flex flex-col justify-center items-center md:flex-row md:items-start md:justify-start md:gap-10 xl:gap-20 max-w-316.5"
    >
      <form
        action="https://formspree.io/f/xyezopvd"
        method="POST"
        class="w-full md:w-[50%]"
        @submit.prevent="handleSubmit"
      >
        <!-- FORM BTNS-->
        <div class="flex flex-col justify-start items-start w-full">
          <label for="form-buttons" class="text-[16px] font-semibold"
            >Katero storitev želite?</label
          >
          <div
            id="form-buttons"
            class="flex flex-row flex-wrap justify-start items-start w-full gap-5 pt-2.5"
          >
            <button
              v-for="button in buttons"
              :key="button.id"
              type="button"
              :aria-pressed="selectedService === button.text"
              :class="[
                'px-4.5 py-2.75 rounded-[10px] border-solid border border-form-btn hover:cursor-pointer',
                selectedService === button.text &&
                  'bg-orange-main text-white-main border-orange-main font-bold',
              ]"
              @click="selectedService = button.text"
            >
              {{ button.text }}
            </button>
          </div>
        </div>
        <input type="hidden" name="service" :value="selectedService" />
        <!-- IME -->
        <div class="flex flex-col justify-start items-start w-full pt-5 gap-2.5">
          <label for="name" class="text-[16px] font-semibold">Vaše ime*</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Janez Novak"
            required
            class="px-4.5 py-2.75 border-solid border border-form-btn rounded-[10px] w-full"
          />
        </div>
        <!-- EMAIL -->
        <div class="flex flex-col justify-start items-start w-full pt-5 gap-2.5">
          <label for="email" class="text-[16px] font-semibold">Vaš e-mail naslov*</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="janez.novak@gmail.com"
            required
            class="px-4.5 py-2.75 border-solid border border-form-btn rounded-[10px] w-full"
          />
        </div>
        <!-- SPOROČILO -->
        <div class="flex flex-col justify-start items-start w-full pt-5 gap-2.5">
          <label for="sporocilo" class="text-[16px] font-semibold">Vaše sporočilo*</label>
          <textarea
            id="sporocilo"
            name="message"
            placeholder="Potrebovali bi... "
            required
            class="px-4.5 py-2.75 border-solid border border-form-btn rounded-[10px] w-full"
          />
        </div>

        <div class="pt-7.5 w-full flex flex-col justify-center items-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="hover:cursor-pointer w-full flex flex-row justify-center items-center font-bold text-lg py-2 px-5 text-white bg-black-main border border-black-main rounded-[10px]"
          >
            Oddaj Povpraševanje
          </button>
        </div>
      </form>
      <div
        class="w-full flex flex-col justify-start items-start md:items-start md:justify-start md:w-[50%] pt-17.5 md:pt-0 text-left"
      >
        <p class="text-base">
          Imate vprašanje, idejo ali potrebujete dodatne informacije? Z veseljem se pogovorimo in
          poiščemo pravo rešitev za vaše potrebe, želje.
        </p>
        <p class="pt-10 text-lg font-semibold">UX/UI in programerske rešitve</p>
        <div class="pt-3.5 flex flex-row justify-start items-center gap-2.5">
          <span>ikona</span>
          <a href="tel:+38640302772" class="text-base">+386 (0)40 302 772</a>
        </div>
        <span class="flex flex-row justify-start items-center gap-2.5 pt-10"
          ><p>ikona</p>
          <a href="mailto:info@modul8.si" class="font-normal text-base">info@modul8.si</a></span
        >
      </div>
    </div>
  </section>
</template>
