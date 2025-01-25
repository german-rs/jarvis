<template>
  <img src="../../public/jarvis_logo.webp" alt="Imagen" class="animar" />
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
</style>
