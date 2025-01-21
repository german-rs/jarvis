<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div class="app-container">
    <header class="header container">
      <div>
        <NavbarComponent />
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
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>
