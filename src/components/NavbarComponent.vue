<script setup>
import { RouterLink } from 'vue-router'
import BrandComponent from '@/components/BrandComponent.vue'
</script>

<template>
  <nav class="navbar">
    <div class="navbar__icon">
      <RouterLink to="/">
        <BrandComponent class="navbar__icon--img" />
      </RouterLink>
    </div>
    <ul class="navbar__list">
      <li class="navbar__item">
        <RouterLink to="/" class="navbar__link">Inicio</RouterLink>
      </li>
      <li class="navbar__item">
        <RouterLink to="/about" class="navbar__link">Acerca</RouterLink>
      </li>
      <li class="navbar__item">
        <a href="#" class="navbar__link">Accesibilidad</a>
      </li>
    </ul>
  </nav>
</template>
