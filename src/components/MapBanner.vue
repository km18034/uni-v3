<script setup>
defineProps({
    backgroundImage: {
        type: String
    },
})
</script>

<template>
    <div class="map" :style="{'background-image': 'url(' + backgroundImage + ')'}">
        
    </div>
</template>
