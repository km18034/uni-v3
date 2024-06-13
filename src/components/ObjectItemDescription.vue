<script setup>
defineProps({
    objectId: {
        type: String,
        default: '1'
    },
    objectCategory: {
        type: String,
        default: 'parki'
    },
    title: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
})
</script>

<template>
    <div class="object-item-description">
        <div class="intro">
            <div class="image-container">
                <img class="image" :src="image" :alt="title">
            </div>
            <div class="intro">
                <h1>{{ title }}</h1>
                <p>{{ intro }}</p>
            </div>
        </div>
        <div class="description" v-html="description"></div>
    </div>    
</template>
  