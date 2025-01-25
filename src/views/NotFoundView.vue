<template>
  <div class="not-found container">
    <h1 class="not-found__title">Página no encontrada</h1>
    <p class="not-found__message">Lo sentimos, pero la página que estás buscando no existe.</p>
    <p class="not-found__suggestion">
      Puedes volver a la
      <router-link to="/" class="not-found__link">página principal</router-link> o explorar otras
      secciones de nuestro sitio.
    </p>
    <router-link to="/" class="not-found__button">Volver a la página principal</router-link>
  </div>
</template>
