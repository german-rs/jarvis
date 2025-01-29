<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="app-container">
    <header class="header ">
      <div class="header__wrapper container">
        <div class="header-left">
        <NavbarComponent />
        </div>
      <div class="header-right">
        <ThemeToggle />
      </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
