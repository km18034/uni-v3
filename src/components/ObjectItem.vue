<script setup>
defineProps({
    objectSlug: {
        type: String,
        default: 'maras-dikis'
    },
    objectCategory: {
        type: String,
        default: 'parki'
    },
    changeOrder: {
        type: Boolean,
        default: false,
    },
    mapList: {
        type: Boolean,
        default: false,
    },
    title: {
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
    path: {
        type: String,
    },
    showButton: {
        type: Boolean,
        default: true,
    }
})
</script>

<template>
    <div class="object-item" :class="{'change-order': changeOrder, 'map-list-item': mapList}">
        <div class="image-container">
            <img class="image" :src="image" :alt="title">
        </div>
        <div class="description">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <RouterLink v-if="showButton" :to="{ name: 'object', params: { slug: objectSlug } }">Apskatīties kartē</RouterLink>
            <span v-if="path" class="path">
                <img :src="path" alt="path">
            </span>
        </div>
    </div>    
</template>
  