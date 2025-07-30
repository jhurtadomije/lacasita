<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Columna logos -->
        <div class="footer-col footer-logo-col">
          <div class="logo-group">
            <img
              src="@/assets/img/junta-andalucia-logo.png"
              alt="Junta de Andalucía"
              class="footer-junta-logo"
            />
            <img
              src="@/assets/img/logo-la-casita-Maracena450.jpg"
              alt="CEI La Casita"
              class="footer-logo"
            />
          </div>
          <p class="footer-autorizado">Centro autorizado por la Junta de Andalucía</p>
        </div>
        <!-- Menú principal -->
        <nav class="footer-col footer-menu">
          <router-link v-for="item in menu" :key="item.to" :to="item.to">
            {{ item.text }}
          </router-link>
        </nav>
        <!-- Legal -->
        <div class="footer-col footer-legal">
          <router-link to="/aviso-legal">Aviso Legal</router-link>
          <router-link to="/privacidad">Política de Privacidad</router-link>
          <router-link to="/cookies">Política de Cookies</router-link>
        </div>
      </div>
      <div class="footer-copy">
        <p>
          &copy; {{ new Date().getFullYear() }} CEI La Casita · Maracena<br />
          Centro de Educación Infantil autorizado por la Junta de Andalucía.<br />
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menu = [
  { to: '/', text: 'Inicio' },
  { to: '/bienvenida', text: 'Bienvenida' },
  { to: '/equipo', text: 'Equipo' },
  { to: '/instalaciones', text: 'Instalaciones' },
  { to: '/blog', text: 'Blog' },
  { to: '/contacto', text: 'Contacto' },
]
</script>

<style scoped>
.footer {
  background: var(--casita-turquesa, #00bfff);
  color: var(--casita-blanco, #fff);
  padding: 2.2em 0 1.1em 0;
  margin-top: 3.4em;
  box-shadow: 0 -2px 12px #00bfff22;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 94vw;
  padding: 0 1.2em;
  box-sizing: border-box;
}
.footer-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.1em;
  text-align: center;
  margin-bottom: 1.2em;
}
.footer-col {
  display: flex;
  flex-direction: column;
  align-items: center; /* <<< Centramos todo en móvil */
  justify-content: center;
  gap: 0.45em;
  text-align: center; /* <<< Por si acaso */
  width: 100%;
}
.logo-group {
  display: flex;
  gap: 1.2em;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.3em;
}
.footer-junta-logo {
  height: 2.5rem;
  max-width: 18vw;
  width: auto;
  background: #fff;
  border-radius: 0.8em;
  padding: 0.24em 0.5em;
  box-shadow: 0 1px 10px #00bfff10;
}
.footer-logo {
  height: 3.3rem;
  max-width: 28vw;
  width: auto;
  border-radius: 1.1em;
  background: #fff;
  box-shadow: 0 1px 10px #00bfff18;
  transition: filter 0.18s;
}
.footer-logo:hover {
  filter: brightness(1.08) drop-shadow(0 2px 7px #00bfff22);
}
.footer-autorizado {
  font-size: 0.98em;
  opacity: 0.92;
  margin-top: 0.3em;
}
.footer-menu {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.1em;
  justify-content: center;
  align-items: center;
}
.footer-menu a {
  color: var(--casita-blanco, #fff);
  font-size: 1.06em;
  font-weight: 500;
  padding: 0.35em 0.8em;
  border-radius: 1em;
  transition:
    background 0.14s,
    color 0.14s;
  text-decoration: none;
}
.footer-menu a:hover,
.footer-menu a.router-link-active {
  background: var(--casita-blanco, #fff);
  color: var(--casita-naranja, #f7931e);
}
.footer-legal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.6em;
  font-size: 0.97em;
  justify-content: center;
  align-items: center;
}
.footer-legal a {
  color: var(--casita-blanco, #fff);
  opacity: 0.92;
  border-bottom: 1px dotted #fff4;
  padding-bottom: 1px;
  text-decoration: none;
  transition:
    color 0.16s,
    border 0.16s;
}
.footer-legal a:hover,
.footer-legal a.router-link-active {
  color: var(--casita-naranja, #f7931e);
  border-bottom: 1px solid var(--casita-naranja, #f7931e);
}
.footer-copy {
  margin-top: 1.2em;
  text-align: center;
  font-size: 0.97em;
  opacity: 0.93;
  letter-spacing: 0.01em;
  line-height: 1.4;
}
/* Desktop columnas */
@media (min-width: 800px) {
  .footer-grid {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    gap: 0;
    margin-bottom: 1.7em;
  }
  .footer-col {
    align-items: flex-start;
    text-align: left;
    width: auto;
  }
  .logo-group {
    margin-bottom: 0.1em;
    gap: 1.3em;
    justify-content: flex-start;
  }
  .footer-junta-logo {
    height: 2.7rem;
    max-width: 8vw;
  }
  .footer-logo {
    height: 4.1rem;
    max-width: 10vw;
    margin-bottom: 0;
  }
  .footer-menu,
  .footer-legal {
    flex-direction: column;
    gap: 0.43em;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.08em;
  }
  .footer-menu a,
  .footer-legal a {
    padding: 0.17em 0;
    font-size: 1em;
  }
  .footer-copy {
    font-size: 1.02em;
    margin-top: 0.8em;
  }
}
</style>
