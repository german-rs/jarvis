<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <header class="header">
    <div>
      <NavbarComponent />
    </div>
  </header>

  <RouterView />
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>
