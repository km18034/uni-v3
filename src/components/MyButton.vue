<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    outline: {
        type: Boolean,
        default: false,
    },
    link: {
        type: String,
        default: '#',
    },
    target: {
        type: String,
        default: '_self',
    },
})
</script>

<template>
    <a :href="link" class="button" :target="target" :class="{'outline': outline}">
        {{ title }}
    </a>
</template>
