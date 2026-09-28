<script setup lang="ts">
import { ref } from 'vue'
import Button from '../shared/ButtonComponent.vue'

const list_items = ref([
  {
    id: 1,
    img_src: '',
    header_img: 'WeOrc',
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
    header_img: 'Seyfor',
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
    header_img: 'Gen-I',
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
    header_img: 'Loopyfull',
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
    header_img: 'iD',
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
    header_img: 'Quickintrip',
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
        <section class="w-full md:w-[50%] flex flex-col gap-6 mt-6 md:mt-0">
          <h3>{{ item.header_img }}</h3>
          <p>{{ item.paragraph }}</p>
          <span>Kaj smo naredili</span>
          <div class="w-full flex flex-row flex-wrap justify-start items-start gap-5">
            <Button v-for="button in item.buttons" :key="button.id" :text="button.text" />
          </div>
        </section>
      </div>
    </div>
    <div class="w-full bg-orange-main flex flex-for justify-center items-center px-5">
      <div
        class="flex w-full py-14 flex-col justify-center items-center text-left text-white-main gap-10 md:flex-row max-w-316.5"
      >
        <p>icon</p>
        <div>
          <h3 class="text-[27px] font-bold">
            Ste za to, da skupaj ustvarimo nekaj, kar zares šteje?
          </h3>
          <p class="text-lg">
            Z veseljem se bomo pogovorili o vaši ideji, projektu ali izzivu in raziskali, kako vam
            lahko pomagamo pri uresničitvi. Oglasite se nam kadarkoli.
          </p>
        </div>
        <Button text="Stopimo v kontakt" />
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
