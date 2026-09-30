<script setup lang="ts">
import { ref } from 'vue'
import weorcLogo from '../../assets/img/references/weorc.svg'
import seyforLogo from '../../assets/img/references/seyfor.svg'
import genILogo from '../../assets/img/references/gen-i.png'
import myNextIdLogo from '../../assets/img/references/id.svg'
import quickontripLogo from '../../assets/img/references/quickontrip.svg'
import LoopyfullLogo from '../../assets/img/references/loopyfull.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToForm = () => {
  router.push({ path: '/', hash: '#form' })
}

const list_items = ref([
  {
    id: 1,
    img_src: '',
    header_img: weorcLogo,
    paragraph:
      'WeOrc je inovativna aplikacija, ki poenostavlja ustvarjanje digitalnih življenjepisov, kamor lahko uporabniki dodajo svoje zaposlitve in veščine ter zbirajo mnenja strank. Ta platforma uporabnikom ne omogoča le, da imajo vse informacije na enem mestu, temveč tudi, da svoje delo uporabijo kot dokaz svoje strokovnosti in zanesljivosti. Mnenja strank so ključnega pomena, saj jim omogočajo komentiranje storitev, pri čemer morajo biti ti komentarji v skladu s strogimi smernicami proti sovražnemu govoru, da se zagotovi varno in profesionalno okolje. Vsak profil na platformi WeOrc deluje kot osebna blagovna znamka, ki uporabnikom pomaga izstopati na konkurenčnem trgu dela.',
    buttons: [
      { id: 'b1', text: 'UX raziskava' },
      { id: 'b2', text: 'UX/UI oblikovanje' },
      { id: 'b3', text: 'Spletna aplikacija' },
      { id: 'b4', text: 'Test uporabnosti' },
    ],
  },
  {
    id: 2,
    img_src: '',
    header_img: seyforLogo,
    paragraph:
      'Seyfor je podjetje za razvoj programske opreme, ki razvija orodja, s katerimi podjetjem pomaga učinkovito upravljati administrativne naloge in zakonske obveznosti. Za ta UX/UI oblikovalski izziv je bila naloga ustvariti uporabniški vmesnik, ki zaposlenim omogoča pregledovanje, kategorizacijo in dodeljevanje prejetih pošiljk ter dokumentov (tako digitalnih kot fizičnih) za nadaljnjo interno obdelavo.',
    buttons: [
      { id: 'b1', text: 'UX raziskava' },
      { id: 'b2', text: 'UX/UI oblikovanje' },
      { id: 'b3', text: 'Programska oprema' },
      { id: 'b4', text: 'Test uporabnosti' },
    ],
  },
  {
    id: 3,
    img_src: '',
    header_img: genILogo,
    paragraph:
      'Portal Moj GEN-I je osrednje mesto za stranke podjetja GEN-I za upravljanje njihovih storitev: preverjanje porabe, pregled računov, spremljanje ponudb, oddajo zahtevkov za podporo in upravljanje merilnih mest. Merilno mesto je določena lokacija, kjer se meri poraba električne energije ali zemeljskega plina. Stranke imajo lahko več merilnih mest — na primer: primarno bivališče, vikend, poslovni prostor, garažo, nepremičnino za oddajo in ostale storitve povezane z upravljanjem energije.',
    buttons: [
      { id: 'b1', text: 'UX raziskava' },
      { id: 'b2', text: 'UX/UI oblikovanje' },
      { id: 'b3', text: 'Spletna aplikacija' },
    ],
  },
  {
    id: 4,
    img_src: '',
    header_img: LoopyfullLogo,
    paragraph:
      'Loopyfull je projekt, ki rešuje pomanjkanje sodobnih orodij v svetu kvačkanja. Ker so informacije trenutno razpršene po YouTubu in blogih, ta mobilna aplikacija na enem intuitivnem mestu združuje vadnice, generator vzorcev, informacije o preji in skupnost. Tako začetnikom kot izkušenim ustvarjalcem omogoča svobodo pri oblikovanju oblačil in dodatkov po meri, hkrati pa jih korak za korakom vodi do končnega izdelka. Projekt mi je omogočil raziskati potrebe te nišne skupnosti in zanje oblikovati preprosto in podporno uporabniško izkušnjo.',
    buttons: [
      { id: 'b1', text: 'UX raziskava' },
      { id: 'b2', text: 'UX/UI oblikovanje' },
      { id: 'b3', text: 'Programska oprema' },
      { id: 'b4', text: 'Test uporabnosti' },
    ],
  },
  {
    id: 5,
    img_src: '',
    header_img: myNextIdLogo,
    paragraph:
      'MyNextID je decentralizirana platforma za digitalno identiteto, ki jo organizacije uporabljajo za izdajanje, upravljanje in preverjanje digitalnih dokumentov ter poverilnic. Medtem ko je bila javna spletna stran pred kratkim prenovljena, sta interni aplikaciji — MyNextID Issuer in MyNextID Fleet Management — ostali zastareli, vizualno neskladni in težki za uporabo. V sklopu UX/UI oblikovanja smo izdelali koncept prenove za njihovo aplikacijio imenovano “Issuer”. Namesto površinske posodobitve smo razširili obseg in preoblikovali celoteno spletno aplikacijo.',
    buttons: [
      { id: 'b1', text: 'UX raziskava' },
      { id: 'b2', text: 'UX/UI oblikovanje' },
      { id: 'b3', text: 'Spletna aplikacija' },
    ],
  },
  {
    id: 6,
    img_src: '',
    header_img: quickontripLogo,
    paragraph:
      'Quickontrip je mobilna aplikacija za odkrivanje destinacij, zasnovana za pomoč uporabnikom pri raziskovanju Slovenije skozi skrbno izbrane izlete, znamenitosti, pokrajine, urbana doživetja, restavracije in prenočišča.Cilj projekta je bil ustvariti sodobno, intuitivno in navdihujočo popotniško aplikacijo, ki omogoča lahkotno raziskovanje Slovenije — ne glede na to, ali uporabniki iščejo ročno, brskajo po vnaprej pripravljenih kategorijah ali se zanašajo na geolokacijska priporočila v realnem času.',
    buttons: [
      { id: 'b1', text: 'UX/UI oblikovanje' },
      { id: 'b2', text: 'Mobilna aplikacija' },
    ],
  },
])
</script>
<template>
  <main class="w-full flex flex-col justify-center items-center">
    <div
      id="storitve"
      class="flex flex-col justify-center items-center px-5 py-25 max-w-316.5 gap-25 md:gap-50"
    >
      <div
        v-for="item in list_items"
        :key="item.id"
        class="w-full flex flex-col justify-center items-center md:items-start text-left md:flex-row even:md:flex-row-reverse md:gap-10"
      >
        <div class="bg-black border rounded-2xl max-w-150 w-full h-112.5 md:w-[50%]"></div>
        <section
          class="w-full md:w-[50%] flex flex-col gap-6 mt-6 md:mt-0 justify-start items-start"
        >
          <img v-if="item.header_img" :src="item.header_img" alt="Reference logo" class="h-14.25" />
          <p>{{ item.paragraph }}</p>
          <span>Kaj smo naredili</span>
          <div class="w-full flex flex-row flex-wrap justify-start items-start gap-5">
            <button
              v-for="button in item.buttons"
              :key="button.id"
              class="cursor-pointer inline px-3.75 py-2 justify-center items-center text-white-main text-center text-xs non-italic font-bold bg-orange-main rounded-[10px]"
            >
              {{ button.text }}
            </button>
          </div>
        </section>
      </div>
    </div>
    <div class="w-full bg-orange-main flex flex-for justify-center items-center px-5">
      <div
        class="flex w-full py-14 flex-col justify-center items-center text-left text-white-main gap-10 md:flex-row max-w-316.5"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="152"
            height="152"
            viewBox="0 0 152 152"
            fill="none"
          >
            <g filter="url(#filter0_d_204_5463)">
              <path
                d="M75.7905 118.563C85.0839 118.561 94.1239 115.532 101.543 109.936C108.963 104.34 114.358 96.4796 116.914 87.5444C119.469 78.6092 119.045 69.0849 115.706 60.4119C112.368 51.739 106.296 44.389 98.4085 39.4737C90.5214 34.5583 81.2482 32.345 71.9913 33.1683C62.7344 33.9916 53.9974 37.8068 47.1015 44.0369C40.2057 50.267 35.526 58.5732 33.7704 67.6993C32.0147 76.8254 33.2785 86.2749 37.3706 94.6189C37.8701 95.6364 38.0366 96.7834 37.7823 97.8842L34.0083 114.238C33.9019 114.697 33.9141 115.176 34.0437 115.629C34.1734 116.081 34.4162 116.494 34.7493 116.827C35.0825 117.16 35.4949 117.403 35.9479 117.533C36.4008 117.662 36.8793 117.675 37.3383 117.568L53.6876 113.79C54.7915 113.548 55.945 113.695 56.9529 114.206C62.8146 117.084 69.2602 118.575 75.7905 118.563Z"
                stroke="white"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M63.3086 65.1853C63.3084 63.2047 63.7795 61.2524 64.683 59.4898C65.5865 57.7273 66.8964 56.205 68.5046 55.0488C70.1128 53.8926 71.973 53.1356 73.9315 52.8405C75.8901 52.5454 77.8907 52.7206 79.7682 53.3515C81.6456 53.9825 83.346 55.0512 84.7288 56.4693C86.1115 57.8874 87.137 59.6141 87.7204 61.5069C88.3039 63.3996 88.4286 65.4041 88.0842 67.3546C87.7398 69.305 86.9362 71.1456 85.7398 72.7241C85.2744 73.2402 84.7803 73.7297 84.2598 74.1902C83.8343 74.551 83.6262 74.6989 83.21 74.9811L78.6821 78.1029C77.5627 78.8732 76.6476 79.9044 76.0158 81.1074C75.3841 82.3105 75.0547 83.6492 75.0561 85.0081"
                stroke="white"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M74.9941 102.329C77.5485 102.329 79.6191 100.258 79.6191 97.7036C79.6191 95.1493 77.5485 93.0786 74.9941 93.0786C72.4398 93.0786 70.3691 95.1493 70.3691 97.7036C70.3691 100.258 72.4398 102.329 74.9941 102.329Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_204_5463"
                x="-9.70898"
                y="-9.71924"
                width="171"
                height="171"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.115385 0 0 0 0 0.115385 0 0 0 0 0.115385 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_204_5463"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_204_5463"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div>
          <h3 class="text-[27px] font-bold">
            Ste za to, da skupaj ustvarimo nekaj, kar zares šteje?
          </h3>
          <p class="text-lg">
            Z veseljem se bomo pogovorili o vaši ideji, projektu ali izzivu in raziskali, kako vam
            lahko pomagamo pri uresničitvi. Oglasite se nam kadarkoli.
          </p>
        </div>
        <button
          type="button"
          @click="goToForm"
          class="cursor-pointer px-5 py-2 rounded-[10px] bg-black-main text-white-main font-bold text-lg w-62.5"
        >
          Stopimo v kontakt
        </button>
      </div>
    </div>
    <div class="w-full bg-turq-references flex flex-for justify-center items-center px-5">
      <div
        class="flex w-full py-14 flex-col justify-center items-center text-left text-white-main gap-10 md:flex-row max-w-316.5"
      >
        <div class="bg-black border rounded-2xl max-w-150 w-full h-112.5 md:w-[50%]"></div>
        <div class="w-full md:w-[50%]">
          <h3 class="text-[24px] font-bold">SharePoint On-Premise in Online UX/UI</h3>
          <p class="text-[16px] py-7.5">
            <span
              >Oblikujemo tudi sodobne in intuitivne uporabniške vmesnike (UX/UI) za SharePoint
              On-Premise in Online (Cloud). Zaradi poglobljenega razumevanja Microsoftovega
              ekosistema ustvarjamo rešitve, ki učinkovito premostijo razkorak med tehničnimi
              zmožnostmi platforme in dejanskimi potrebami uporabnikov. </span
            ><br /><br />
            <span
              >Od celovite osvežitve zastarelih intranetnih portalov do strukturiranja kompleksnih
              dokumentnih sistemov poskrbimo za poenostavljeno navigacijo, višjo produktivnost
              zaposlenih in vizualno dovršeno izkušnjo, ki je popolnoma usklajena z vašim
              CGP-jem.</span
            >
          </p>
          <div class="w-full flex flex-row justify-start items-start gap-2.5">
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
                  fill="white"
                />
              </svg>
            </div>
            <p>
              Imamo več letne izkušnje z SharePoint On-Premise in Online okolji ter njihovimi
              uporabniki iz različnih panog dela.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
