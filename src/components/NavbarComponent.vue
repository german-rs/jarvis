<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar">
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
