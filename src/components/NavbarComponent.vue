<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BrandComponent from '@/components/BrandComponent.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__icon">
      <RouterLink to="/">
        <BrandComponent class="navbar__icon--img" />
      </RouterLink>
    </div>

    <!-- Menú para escritorio -->
    <div class="navbar__desktop-menu">
      <ul class="navbar__list">
        <li class="navbar__item">
          <RouterLink to="/" class="navbar__link">INICIO</RouterLink>
        </li>
        <li class="navbar__item">
          <RouterLink to="/about" class="navbar__link">ACERCA</RouterLink>
        </li>
        <li class="navbar__item">
          <a href="#" class="navbar__link">ACCESIBILIDAD</a>
        </li>
      </ul>
    </div>

    <!-- Botón hamburguesa para móvil -->
    <button class="navbar__toggle" @click="toggleMenu">☰</button>

    <!-- Menú modal para móvil -->
    <div v-if="isMenuOpen" class="navbar__modal">
      <div class="navbar__modal-content">
        <button class="navbar__modal-close" @click="closeMenu">x</button>
        <ul class="navbar__list">
          <li class="navbar__item">
            <RouterLink to="/" class="navbar__link" @click="closeMenu">INICIO</RouterLink>
          </li>
          <li class="navbar__item">
            <RouterLink to="/about" class="navbar__link" @click="closeMenu">ACERCA</RouterLink>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link" @click="closeMenu">ACCESIBILIDAD</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
