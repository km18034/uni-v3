<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    backgroundImage: {
        type: String,
    },
})
</script>

<template>
    <div class="banner" :style="{'background-image': 'url(' + backgroundImage + ')'}">
      <div class="container banner-container">
        <h1 class="page-title">{{ title }}</h1>
        <h2 class="page-subtitle">{{ subtitle }}</h2>        
      </div>
    </div>
</template>
  