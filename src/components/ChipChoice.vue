<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        <div class="chip-choice-container">
            <RouterLink :to="{ name: 'map', params: { category: 'parki' } }">Parki</RouterLink>
            <RouterLink :to="{ name: 'map', params: { category: 'kafejnicas' } }">Kafejnīcas</RouterLink>
            <RouterLink :to="{ name: 'map', params: { category: 'ednicas' } }">Ēdnīcas</RouterLink>
        </div> 
    </div>
</template>