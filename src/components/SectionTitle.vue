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
})
</script>

<template>
    <div class="section-title">
      <div class="container section-title-container">
        <h2 class="title">{{ title }}</h2>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
</template>
