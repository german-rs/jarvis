<script setup>
import BrandComponent from '@/components/BrandComponent.vue'
</script>

<template>
  <main class="not-found container">
    <div class="not-found__wrapper" >
      <div class="not-found__img">
        <BrandComponent />
      </div>
      <p class="not-found__number">404</p>
      <h1 class="not-found__title">Página no encontrada</h1>
      <router-link to="/" class="not-found__button">VOLVER A LA PÁGINA PRINCIPAL</router-link>
    </div>
  </main>


</template>

