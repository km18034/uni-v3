<script setup>
import ObjectItem from '@/components/ObjectItem.vue';
import Banner from '@/components/Banner.vue';
import MyButton from '@/components/MyButton.vue';
import HomePath from '@/components/HomePath.vue';
</script>

<template>
  <main>
    <Banner
      title="Mans ceļš uz Latvijas Universitāti"
      subtitle="Ienirsti manā ceļojuma burvībā"
      background-image="img/university.png"
    />    
    
    <div class="home-page">
      <HomePath/>
      
      <ObjectItem
        v-for="(object, key) in objects.filter((obj) => obj.showInFirstPage)"
        :key="object.id"
        :object-slug="object.slug"
        :object-category="object.category"
        :title="object.title"
        :description="object.intro"
        :image="'img/' + object.image"
        :change-order="key%2 !== 0"
      />

      <div class="container buttons-container mt-70 mt-md-100">
        <div class="buttons-container">
          <MyButton
            title="Visi apskates objekti"
            link="#/map/parki"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      objects: sourceData.objects,
    }
  },
}
</script>
