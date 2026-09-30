<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const buttons = ref([
  { id: 1, text: 'UX/UI storitve' },
  { id: 2, text: 'Programske rešitve' },
  { id: 3, text: 'Drugo' },
])

const selectedService = ref('')
const isSubmitting = ref(false)
const isThankYouVisible = ref(false)
let thankYouTimeout: ReturnType<typeof setTimeout> | undefined

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
      isThankYouVisible.value = true
      thankYouTimeout = setTimeout(() => {
        isThankYouVisible.value = false
      }, 20000)
    }
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  if (thankYouTimeout) clearTimeout(thankYouTimeout)
})
</script>
<template>
  <section
    id="form"
    class="px-5 pb-10 border-0 rounded-[40px] drop-shadow-[0px_0px_30px_0px_rgba(164, 163, 163, 0.15)] flex flex-col justify-center items-center w-full"
  >
    <div
      v-if="isThankYouVisible"
      class="flex flex-col gap-5 min-h-112.5 items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M25.0003 4.1665C13.5212 4.1665 4.16699 13.5207 4.16699 24.9998C4.16699 36.479 13.5212 45.8332 25.0003 45.8332C36.4795 45.8332 45.8337 36.479 45.8337 24.9998C45.8337 13.5207 36.4795 4.1665 25.0003 4.1665ZM34.9587 20.2082L23.1462 32.0207C22.8545 32.3123 22.4587 32.479 22.042 32.479C21.6253 32.479 21.2295 32.3123 20.9378 32.0207L15.042 26.1248C14.4378 25.5207 14.4378 24.5207 15.042 23.9165C15.6462 23.3123 16.6462 23.3123 17.2503 23.9165L22.042 28.7082L32.7503 17.9998C33.3545 17.3957 34.3545 17.3957 34.9587 17.9998C35.5628 18.604 35.5628 19.5832 34.9587 20.2082Z"
          fill="#06AC00"
        />
      </svg>
      <p class="text-[#06AC00] text-2xl font-black">Hvala za vaše sporočilo!</p>
      <p class="text-center text-black-main text-[16px]">
        Kontaktirali vas bomo nazaj v najkrajšem možnem času. Želimo vam lep dan.
      </p>
    </div>
    <template v-else>
      <h2 class="font-black text-black-main text-2xl">Stopimo v kontakt</h2>
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
          <div class="flex flex-col w-full md:flex-row md:gap-7.5">
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

          <div class="g-recaptcha" data-sitekey="secret_recaptcha_key"></div>

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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M22.025 13.4375C21.4875 13.4375 21.0625 13 21.0625 12.475C21.0625 12.0125 20.6 11.05 19.825 10.2125C19.0625 9.4 18.225 8.925 17.525 8.925C16.9875 8.925 16.5625 8.4875 16.5625 7.9625C16.5625 7.4375 17 7 17.525 7C18.775 7 20.0875 7.675 21.2375 8.8875C22.3125 10.025 23 11.4375 23 12.4625C23 13 22.5625 13.4375 22.025 13.4375Z"
                  fill="black"
                />
                <path
                  d="M26.5377 13.4375C26.0002 13.4375 25.5752 13 25.5752 12.475C25.5752 8.0375 21.9627 4.4375 17.5377 4.4375C17.0002 4.4375 16.5752 4 16.5752 3.475C16.5752 2.95 17.0002 2.5 17.5252 2.5C23.0252 2.5 27.5002 6.975 27.5002 12.475C27.5002 13 27.0627 13.4375 26.5377 13.4375Z"
                  fill="black"
                />
                <path
                  d="M13.8125 18.6875L11.5 21C11.0125 21.4875 10.2375 21.4875 9.7375 21.0125C9.6 20.875 9.4625 20.75 9.325 20.6125C8.0375 19.3125 6.875 17.95 5.8375 16.525C4.8125 15.1 3.9875 13.675 3.3875 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C13.5375 16.65 13.675 16.775 13.8 16.9C14.3 17.3875 14.3125 18.1875 13.8125 18.6875Z"
                  fill="black"
                />
                <path
                  d="M27.4625 22.9123C27.4625 23.2623 27.4 23.6248 27.275 23.9748C27.2375 24.0748 27.2 24.1748 27.15 24.2748C26.9375 24.7248 26.6625 25.1498 26.3 25.5498C25.6875 26.2248 25.0125 26.7123 24.25 27.0248C24.2375 27.0248 24.225 27.0373 24.2125 27.0373C23.475 27.3373 22.675 27.4998 21.8125 27.4998C20.5375 27.4998 19.175 27.1998 17.7375 26.5873C16.3 25.9748 14.8625 25.1498 13.4375 24.1123C12.95 23.7498 12.4625 23.3873 12 22.9998L16.0875 18.9123C16.4375 19.1748 16.75 19.3748 17.0125 19.5123C17.075 19.5373 17.15 19.5748 17.2375 19.6123C17.3375 19.6498 17.4375 19.6623 17.55 19.6623C17.7625 19.6623 17.925 19.5873 18.0625 19.4498L19.0125 18.5123C19.325 18.1998 19.625 17.9623 19.9125 17.8123C20.2 17.6373 20.4875 17.5498 20.8 17.5498C21.0375 17.5498 21.2875 17.5998 21.5625 17.7123C21.8375 17.8248 22.125 17.9873 22.4375 18.1998L26.575 21.1373C26.9 21.3623 27.125 21.6248 27.2625 21.9373C27.3875 22.2498 27.4625 22.5623 27.4625 22.9123Z"
                  fill="black"
                />
              </svg>
            </div>
            <a href="tel:+38640302772" class="text-base">+386 (0)40 302 772</a>
          </div>
          <span class="flex flex-row justify-start items-center gap-2.5 pt-10"
            ><div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M21.25 4.375H8.75C5 4.375 2.5 6.25 2.5 10.625V19.375C2.5 23.75 5 25.625 8.75 25.625H21.25C25 25.625 27.5 23.75 27.5 19.375V10.625C27.5 6.25 25 4.375 21.25 4.375ZM21.8375 11.9875L17.925 15.1125C17.1 15.775 16.05 16.1 15 16.1C13.95 16.1 12.8875 15.775 12.075 15.1125L8.1625 11.9875C7.7625 11.6625 7.7 11.0625 8.0125 10.6625C8.3375 10.2625 8.925 10.1875 9.325 10.5125L13.2375 13.6375C14.1875 14.4 15.8 14.4 16.75 13.6375L20.6625 10.5125C21.0625 10.1875 21.6625 10.25 21.975 10.6625C22.3 11.0625 22.2375 11.6625 21.8375 11.9875Z"
                  fill="black"
                />
              </svg>
            </div>
            <a href="mailto:info@modul8.si" class="font-normal text-base">info@modul8.si</a></span
          >
        </div>
      </div>
    </template>
  </section>
</template>
