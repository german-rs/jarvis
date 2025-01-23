<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <img class="navbar__img" src="../../public/logo.webp" alt="logo jarvis" />
    <ul class="navbar__list">
      <li class="navbar__item">
        <RouterLink to="/" class="navbar__link">Jarvis I.A.</RouterLink>
      </li>
      <li class="navbar__item">
        <RouterLink to="/about" class="navbar__link">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>
