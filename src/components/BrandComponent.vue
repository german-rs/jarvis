<template>
  <img src="../../public/jarvis_2.svg" alt="Imagen" class="animar" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const randomRotate = Math.floor(Math.random() * 360) - 180
    const randomRotateEnd = Math.floor(Math.random() * 360) - 180

    document.documentElement.style.setProperty('--rotate', `${randomRotate}deg`)
    document.documentElement.style.setProperty('--rotate-end', `${randomRotateEnd}deg`)
  },
}
</script>

<style scoped lang="scss">
.img {
  max-height: 40px;
  width: auto;
}

.animar {
  animation: girarEscalar 8s linear infinite;
}

@keyframes girarEscalar {
  50% {
    transform: rotate(var(--rotate)) scale(0.8);
  }
  100% {
    transform: rotate(var(--rotate-end)) scale(1);
  }
}

body.dark-mode .animar {
filter: brightness(0.5) contrast(2) saturate(0);
filter: brightness(0.5) contrast(2) saturate(0) invert(77%) sepia(29%) saturate(1237%) hue-rotate(103deg) brightness(101%) contrast(101%);
}

</style>


<!-- https://codepen.io/cmlohr/pen/NWdKrzr -->