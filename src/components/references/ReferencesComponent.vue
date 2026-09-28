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
  <div
    id="storitve"
    class="flex flex-col justify-center items-center px-5 py-25 max-w-316.5 gap-10.5"
  >
    <div
      v-for="item in list_items"
      :key="item.id"
      class="w-full flex flex-col justify-center items-center md:items-start text-left md:flex-row"
    >
      <div class="bg-black border rounded-2xl max-w-150 w-full h-112.5 md:w-[50%]"></div>
      <section class="w-full md:w-[50%] flex-col pl-10">
        <h3>{{ item.header_img }}</h3>
        <p>{{ item.paragraph }}</p>
        <span>Kaj smo naredili</span>
        <div class="w-full flex flex-row flex-wrap justify-start items-start gap-5">
          <Button
            v-for="button in item.buttons"
            :key="button.id"
            :text="button.text"
            class="mt-15"
          />
        </div>
      </section>
    </div>
  </div>
</template>
