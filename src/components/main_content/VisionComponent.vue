<script setup lang="ts">
import { ref } from 'vue'

const list_items = ref([
  {
    id: 1,
    text: 'Celosten pristop na enem mestu',
    paragraph:
      'Projekt vodimo z vami od začetne zasnov, žičnih modelov in prototipiranja pa vse do razvoja in končnega lansiranja aplikacije. ',
  },
  {
    id: 2,
    text: 'Jasna in pregledna komunikacija',
    paragraph: 'Brez zapletanja, brez ovinkarjenja, z jasnimi dogovori in razumljivimi rešitvami.',
  },
  {
    id: 3,
    text: 'Rešitve, prilagojene potrebam',
    paragraph:
      'Ne uporabljamo generičnih pristopov – vsaka rešitev je prilagojena vašim željam, potrebam in zmožnostim. ',
  },
  {
    id: 4,
    text: 'Zanesljiv in strokoven odnos',
    paragraph: 'Delujemo odgovorno, natančno in z mislijo na dolgoročno sodelovanje.',
  },
])
</script>
<template>
  <div id="vizija" class="flex flex-col justify-center items-center px-5 py-25 max-w-316.5">
    <div class="text-left flex flex-col justify-start items-start gap-5 md:flex-row w-full">
      <div class="bg-black border rounded-2xl max-w-150 w-full h-112.5 md:w-[50%]"></div>
      <div class="md:w-[50%]">
        <h2 class="font-black text-black-main text-2xl">Naša vizija in poslanstvo</h2>
        <article class="flex flex-col justify-center items-start text-left gap-5 pt-7.5">
          <p class="font-normal text-black-main text-[16px]">
            V Modul8 ne ustvarjamo zgolj vizualno privlačnih vmesnikov, temveč premišljeno
            prepletamo vrhunsko uporabniško izkušnjo z zanesljivim digitalnim razvojem. Združujemo
            kreativno vizijo in tehnično izvedbo ter ju povezujemo v pregledne, celostne rešitve na
            enem mestu. Naš cilj so digitalni produkti, ki uporabnike vodijo intuitivno, vašemu
            podjetju pa prinašajo stabilno in dolgoročno vrednost.
          </p>
          <p class="font-normal text-black-main text-[16px]">
            Naše poslanstvo je strankam nuditi celostno podporo – od UX/UI oblikovanja do razvoja
            spletnih strani in aplikacij po meri. Vsako storitev izvajamo premišljeno, pregledno in
            prilagojeno dejanskim potrebam naročnika, s poudarkom na razumljivosti, kakovosti in
            dolgoročni vrednosti.
          </p>
          <p class="font-normal text-black-main text-[16px]">
            S svojim delom želimo poenostavljati kompleksne izzive in izboljševati digitalne
            izkušnje. Naš cilj ni le izvedba storitev, temveč zanesljivo partnerstvo, ki temelji na
            zaupanju, strokovnosti in jasni komunikaciji.
          </p>
        </article>
      </div>
    </div>
    <!-- SECOND -->
    <div
      class="text-left flex flex-col justify-start items-start gap-5 mt-25 md:flex-row-reverse w-full"
    >
      <div class="bg-black border rounded-2xl max-w-150 w-full h-112.5 md:w-[50%]"></div>
      <div class="md:w-[50%]">
        <h2 class="font-black text-black-main text-2xl">Zakaj izbrati prav nas?</h2>
        <ul class="flex flex-col justify-center items-start text-left gap-5 pt-7.5">
          <li
            v-for="item in list_items"
            :key="item.id"
            class="flex flex-row justify-center items-start gap-2.5"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M26.9496 13.4252L25.2496 11.4502C24.9246 11.0752 24.6621 10.3752 24.6621 9.8752V7.7502C24.6621 6.4252 23.5746 5.3377 22.2496 5.3377H20.1246C19.6371 5.3377 18.9246 5.0752 18.5496 4.7502L16.5746 3.0502C15.7121 2.3127 14.2996 2.3127 13.4246 3.0502L11.4621 4.7627C11.0871 5.0752 10.3746 5.3377 9.88711 5.3377H7.72461C6.39961 5.3377 5.31211 6.4252 5.31211 7.7502V9.8877C5.31211 10.3752 5.04961 11.0752 4.73711 11.4502L3.04961 13.4377C2.32461 14.3002 2.32461 15.7002 3.04961 16.5627L4.73711 18.5502C5.04961 18.9252 5.31211 19.6252 5.31211 20.1127V22.2502C5.31211 23.5752 6.39961 24.6627 7.72461 24.6627H9.88711C10.3746 24.6627 11.0871 24.9252 11.4621 25.2502L13.4371 26.9502C14.2996 27.6877 15.7121 27.6877 16.5871 26.9502L18.5621 25.2502C18.9371 24.9252 19.6371 24.6627 20.1371 24.6627H22.2621C23.5871 24.6627 24.6746 23.5752 24.6746 22.2502V20.1252C24.6746 19.6377 24.9371 18.9252 25.2621 18.5502L26.9621 16.5752C27.6871 15.7127 27.6871 14.2877 26.9496 13.4252ZM20.1996 12.6377L14.1621 18.6752C13.9871 18.8502 13.7496 18.9502 13.4996 18.9502C13.2496 18.9502 13.0121 18.8502 12.8371 18.6752L9.81211 15.6502C9.44961 15.2877 9.44961 14.6877 9.81211 14.3252C10.1746 13.9627 10.7746 13.9627 11.1371 14.3252L13.4996 16.6877L18.8746 11.3127C19.2371 10.9502 19.8371 10.9502 20.1996 11.3127C20.5621 11.6752 20.5621 12.2752 20.1996 12.6377Z"
                  fill="#FF6933"
                />
              </svg>
            </div>
            <div>
              <p class="text-lg text-orange-main font-bold">{{ item.text }}</p>
              <p class="font-normal text-black-main text-[16px]">
                {{ item.paragraph }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
