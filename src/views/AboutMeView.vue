<script setup>
import Banner from '@/components/Banner.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import MyButton from '@/components/MyButton.vue';
</script>

<template>
  <main>
    <Banner
      title="Par mani"
      subtitle="Aizraujošas un piedzīvojumu pilnas ziņas gaida tieši te!"
      background-image="img/uni.png"
    />
    <SectionTitle
      title="Pievienojies maniem sociālajiem tīlkiem"
      subtitle="Iegūsti ikdienas devu iedvesmas, interesantu informāciju un sajūtu par piedalīšanos manā ceļojumā uz jaunām idejām un piedzīvojumiem!"
    />
    <div class="container buttons-container">
      <div class="buttons-container">
        <MyButton title="Facebook" :outline="true" link="https://www.facebook.com/" target="_blank"/>
        <MyButton title="LinkedIn" :outline="true" link="https://lv.linkedin.com/" target="_blank"/>
        <MyButton title="Instagram" :outline="true" link="https://www.instagram.com/" target="_blank"/>
      </div>
    </div>
  </main>
</template>
  