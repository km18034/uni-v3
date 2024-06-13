<script setup>
import ObjectItem from '@/components/ObjectItem.vue';
import MapBanner from '@/components/MapBanner.vue';
</script>

<template>
    <main>
      <div class="back-btn-container py-3">
        <div @click="" class="back-btn ms-4">
          <RouterLink :to="{ name: 'map', params: { category: object.category } }">
            <span class="back-arrow"></span> Atpakaļ
          </RouterLink>
        </div>        
      </div>
      <MapBanner
        :background-image="'../../dist/assets/img/' +  object.map_image"
      />

      <ObjectItem
        :object-slug="object.slug"
        :object-category="object.category"
        :map-list="true"
        :title="object.title"
        :description="object.intro"
        :image="'../../dist/assets/img/' + object.image"
        :path="'../../dist/assets/svg/path_' + getPathNumber() + '.svg'"
        :show-button="false"
      />
      <div class="container">
        <div class="object-description" v-html="object.description"></div>
      </div>
    </main>
</template>  

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      object: sourceData.objects.find((obj) => obj.slug === this.$route.params.slug),
      isMobile: false,
    }
  },
  mounted() {
    this.isMobile = screen.width <= 760;
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.isMobile = screen.width <= 760;
      });
    })
  },
  methods: {
    getPathNumber() {
      return Math.floor(Math.random() * 4 + 1);
    },
  }
}
</script>
