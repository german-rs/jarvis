<template>
  <nav class="navbar">
    <div class="navbar__icon">
      <RouterLink to="/">
        <img src="../../public/jarvis_logo.webp" alt="Logo" class="navbar__logo" />
      </RouterLink>
    </div>
    <ul class="navbar__list">
      <li class="navbar__item">
        <RouterLink to="/" class="navbar__link">Inicio</RouterLink>
      </li>
      <li class="navbar__item">
        <RouterLink to="/about" class="navbar__link">Acerca</RouterLink>
      </li>
    </ul>
  </nav>
</template>
