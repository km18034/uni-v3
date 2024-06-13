<script setup>
import ObjectItem from '@/components/ObjectItem.vue';
import MapBanner from '@/components/MapBanner.vue';
import ChipChoice from '@/components/ChipChoice.vue';
</script>

<template>
    <main>
      <MapBanner
        :background-image="'../../dist/assets/img/map_' +  $route.params.category + '.png'"
      />

      <ChipChoice/>

      <ObjectItem
        v-for="(object, key) in objects.filter((obj) => obj.category === $route.params.category)"
        :key="object.id"
        :object-slug="object.slug"
        :object-category="object.category"
        :map-list="true"
        :title="object.title"
        :description="object.intro"
        :image="'../../dist/assets/img/' + object.image"
        :change-order="key%2 !== 0"
        :path="'../../dist/assets/svg/path_' + getPathNumber() + '.svg'"
      />
    </main>
</template>  

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      objects: sourceData.objects,
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
