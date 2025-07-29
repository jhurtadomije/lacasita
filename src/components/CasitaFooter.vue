<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <img
          src="@/assets/img/logo-la-casita-Maracena450.jpg"
          alt="CEI La Casita"
          class="footer-logo"
        />
        <p>CEI La Casita · Maracena<br />© 2024</p>
        <nav>
          <router-link to="/contacto">Contacto</router-link>
          <router-link to="/blog">Blog</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--casita-turquesa);
  color: var(--casita-blanco);
  padding: 2em 0;
  margin-top: 3em;
}
.footer-logo {
  height: 48px;
  margin-bottom: 1em;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.footer nav a {
  color: var(--casita-blanco);
  margin: 0 0.75em;
  font-size: 1em;
  transition: color 0.2s;
}
.footer nav a:hover {
  color: var(--casita-naranja);
}
</style>
