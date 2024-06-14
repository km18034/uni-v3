<script setup>
import Banner from '@/components/Banner.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import MyButton from '@/components/MyButton.vue';
import Usp from '@/components/Usp.vue';
</script>

<template>
  <main>
    <Banner
      title="Latvijas Universitāte"
      subtitle="Nāc studēt Latvijas Universitātē!"
      background-image="img/uni.png"
    />

    <SectionTitle
      title="Kāpēc izvēlējos studijas Latvijas Universitātē?"
      subtitle="Sāc savu ceļu arī Tu uz veiksmīgu nākotni un iesaisties Latvijas Universitātes dinamiskajā un stimulējošajā vidē!"
    />

    <Usp/>

    <div class="container buttons-container mt-10">
      <div class="buttons-container">
        <MyButton
          title="Gribu studēt!"
          link="https://www.lu.lv/gribustudet/izvelies-panakumus/"
          target="_blank"
        />
      </div>
    </div>
  </main>
</template>
  