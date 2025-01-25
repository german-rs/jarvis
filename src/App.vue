<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="app-container">
    <header class="header container">
      <div class="header-left">
        <NavbarComponent />
      </div>
      <div class="header-right">
        <ThemeToggle />
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

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border: 1px solid #374151;
}

.header-left {
  border: 1px solid red;
}
</style>
