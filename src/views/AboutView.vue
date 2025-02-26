<script setup>
import BrandComponent from '@/components/BrandComponent.vue'
</script>
<template>
  <div class="about container">
    <main class="about__main">
      <section class="about__section">
        <div class="about__section-img">
          <BrandComponent />
        </div>

        <div class="about__section-description">
          <div class="about__title-wrapper">
            <h1 class="about__title">Acerca de</h1>
          </div>

          <div class="about__text">
            <p class="about__text-paragraph">
              Jarvis es un chat inteligente que utiliza la tecnología de Cohere para ofrecer
              servicios avanzados de procesamiento de lenguaje natural. Esta aplicación de
              mensajería, basada en inteligencia artificial, facilita la comunicación fluida entre
              usuarios y un asistente virtual. Jarvis se ha creado como proyecto final de un
              bootcamp frontend.
            </p>
          </div>
        </div>
      </section>

      <div class="about__link">
        <a class="about__link--anchor" href="https://germanriveros.cl" target="_blank"
          >VISITA MI PORTAFOLIO DIGITAL</a
        >
      </div>
    </main>
  </div>
</template>
