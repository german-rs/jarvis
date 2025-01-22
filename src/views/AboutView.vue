<template>
  <div class="about">
    <h1 class="about__title">About</h1>
    <section class="about__section">
      <img
        class="about__image"
        src="../../public/german-rs.webp"
        alt="Foto de perfil Germán Riveros"
      />
      <p class="about__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum libero molestiae esse illo!
        Debitis similique quam nihil libero quos explicabo quasi et incidunt! Est sunt odio iure
        autem quo tempora vero perspiciatis consequuntur, error placeat doloribus aliquid facilis
        tenetur dolores assumenda sequi esse laborum vitae. Natus nesciunt repellat consectetur
        eaque?
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    gap: 2em;
  }

  &__image {
    margin-top: 2em;
    width: 300px;
  }

  &__description {
    max-width: 600px;
  }
}
</style>
