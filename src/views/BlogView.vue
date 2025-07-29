<template>
  <section class="blog-section container">
    <h1>Blog</h1>
    <p>Noticias, eventos y novedades de CEI La Casita.</p>
    <div class="blog-list">
      <article class="blog-card" v-for="n in 3" :key="n">
        <h2>Ejemplo de entrada {{ n }}</h2>
        <p>
          Resumen de la noticia o evento. Aquí aparecerá el contenido principal de la entrada del
          blog, con un enlace para leer más.
        </p>
        <button class="btn-secondary">Leer más</button>
      </article>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding-top: 2em;
}
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2em;
  margin-top: 2em;
}
.blog-card {
  background: var(--casita-blanco);
  border-radius: 1.5em;
  box-shadow: 0 2px 16px #00bfff14;
  padding: 2em;
  border-left: 7px solid var(--casita-turquesa);
}
.blog-card h2 {
  color: var(--casita-turquesa);
  margin-bottom: 1em;
}
</style>
