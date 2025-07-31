<template>
  <footer class="footer-casita">
    <div class="footer-center">
      <img
        class="footer-logo"
        src="@/assets/img/logo-la-casita-Maracena450.jpg"
        alt="CEI La Casita"
      />
    </div>
    <div class="footer-columns">
      <!-- Columna Junta -->
      <div class="footer-col">
        <h3>CENTRO INFANTIL AUTORIZADO</h3>
        <p>Autorizado por la Junta de Andalucía.<br /></p>
        <img
          class="footer-junta"
          src="@/assets/img/junta-andalucia-logo.png"
          alt="Junta de Andalucía"
        />
      </div>
      <!-- Horario -->
      <div class="footer-col">
        <h3>HORARIO</h3>
        <p>Lunes a Viernes<br />7:30h a 17:00h</p>
      </div>
      <!-- Contacto -->
      <div class="footer-col">
        <h3>DATOS DE CONTACTO</h3>
        <p><strong>Escuela Infantil la Casita</strong></p>
        <p>Calle Rubén Darío, 6<br />18200 Maracena, Granada</p>
        <p>
          Teléfono: <a href="tel:958415517">958 41 55 17</a><br />
          <a href="tel:687546051">687 54 60 51</a>
        </p>
        <p>Email: <a href="mailto:cei.lacasita2006@gmail.com">cei.lacasita2006@gmail.com</a></p>
      </div>
      <!-- Menú rápido -->
      <nav class="footer-col footer-menu">
        <h3>MENÚ DE NAVEGACIÓN</h3>
        <router-link v-for="item in menu" :key="item.to" :to="item.to">
          {{ item.text }}
        </router-link>
      </nav>
      <!-- Redes sociales -->
      <div class="footer-col footer-social">
        <h3>SÍGUENOS</h3>
        <div class="footer-social-icons">
          <a
            href="https://facebook.com/tu-casita"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="footer-social-btn fb"
          >
            <svg viewBox="0 0 32 32" width="34" height="34">
              <circle cx="16" cy="16" r="16" fill="#1877F3" />
              <path
                d="M22.3 16.1h-4.2v9.2h-3.5v-9.2h-2.1v-2.8h2.1v-1.6c0-2.4 1.1-3.8 4.1-3.8h2.6v2.8h-1.6c-1.1 0-1.1.4-1.1 1.1v1.5h2.7l-.3 2.8z"
                fill="#fff"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/tu-casita"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="footer-social-btn ig"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 448 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="448" height="512" rx="120" fill="url(#insta-gradient)" />
              <circle cx="224" cy="256" r="90" stroke="#fff" stroke-width="34" />
              <circle cx="343" cy="169" r="24" fill="#fff" />
              <defs>
                <linearGradient id="insta-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#fd5" />
                  <stop offset="50%" stop-color="#fd2b7a" />
                  <stop offset="100%" stop-color="#285AEB" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a
            href="https://wa.me/34687546051"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            class="footer-social-btn wa"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 448 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="224" cy="256" r="192" fill="#25D366" />
              <path
                d="M309 315c-11-5-30-15-34-17s-8-3-12 3-14 17-17 20-6 4-11 1a152 152 0 01-46-28 172 172 0 01-32-41c-3-5 0-8 2-11 2-2 5-5 7-8s3-5 5-8c2-4 1-7 0-9s-12-28-17-39c-4-11-8-10-11-10h-9c-4 0-8 1-12 5-3 3-16 16-16 39s17 45 19 48c2 3 34 54 82 73 49 20 49 14 58 13 9-1 29-12 33-23 4-11 4-21 3-22-2-2-6-3-11-5z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- Legal y copyright -->
    <div class="footer-copy">
      <div>
        <router-link to="/aviso-legal">Aviso Legal</router-link>
        <router-link to="/privacidad">Política de Privacidad</router-link>
        <router-link to="/cookies">Política de Cookies</router-link>
      </div>
      <span>
        &copy; {{ new Date().getFullYear() }} Escuela Infantil La Casita · Maracena.<br />
        Centro autorizado por la Junta de Andalucía.<br />
        Todos los derechos reservados.
      </span>
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
.footer-casita {
  background: var(--casita-turquesa, #6fd8ed);
  color: #fff;
  padding: 3.2rem 1rem 2rem 1rem;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 1.07rem;
  margin-top: 3.4rem;
}
.footer-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.8rem;
}
.footer-logo {
  width: 120px;
  max-width: 30vw;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 12px #00bfff1c;
  padding: 0.65rem;
}
.footer-columns {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}
.footer-col {
  max-width: 340px;
  min-width: 0;
  flex: 1 1 180px;
  margin-bottom: 0.7rem;
}
.footer-col h3 {
  font-size: 1.11em;
  font-weight: 700;
  margin-bottom: 0.45em;
  color: #fff;
  letter-spacing: 0.01em;
}
.footer-col h4 {
  font-size: 1.01em;
  font-weight: 600;
  margin: 0.7em 0 0.18em 0;
  color: #fff;
}
.footer-col p {
  margin: 0 0 0.7em 0;
  color: #fff;
  font-size: 0.98em;
}
.footer-junta {
  width: 128px;
  max-width: 60vw;
  background: #fff;
  border-radius: 0.6em;
  margin: 1em auto 0 auto;
  display: block;
  box-shadow: 0 2px 14px #0002;
}
.footer-menu {
  display: flex;
  flex-direction: column; /* <--- Esto fuerza columna SIEMPRE */
  align-items: center;
  gap: 0.65em;
  margin-top: 1.1em;
  width: 100%;
}
.footer-menu h3 {
  margin-bottom: 0.6em;
  font-size: 1.06em;
  color: #fff;
}
.footer-menu a {
  display: block; /* <--- Bloque para ocupar todo el ancho de columna */
  width: 100%; /* <--- Opcional, solo si quieres ocupen toda la columna */
  color: #fff;
  font-size: 1.03em;
  font-weight: 500;
  padding: 0.27em 0.2em;
  border-radius: 1em;
  text-decoration: none;
  transition:
    color 0.16s,
    background 0.14s;
  opacity: 0.98;
}
.footer-menu a:hover,
.footer-menu a.router-link-active {
  color: var(--casita-naranja, #f7931e);
  background: #fff;
}

/* --- Redes sociales columna --- */
.footer-social h3 {
  margin-bottom: 0.75em;
}
.footer-social-icons {
  display: flex;
  gap: 1.12em;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.1em;
}
.footer-social-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    box-shadow 0.17s,
    transform 0.13s;
  box-shadow: 0 2px 12px #00bfff26;
  font-size: 1.5em;
  border: none;
}
.footer-social-btn.fb svg {
  filter: none;
}
.footer-social-btn.ig svg {
  filter: none;
}
.footer-social-btn.wa svg {
  filter: none;
}
.footer-social-btn:hover {
  transform: scale(1.09);
  box-shadow: 0 6px 24px #00bfff26;
  background: var(--casita-naranja, #f7931e);
}
.footer-social-btn:hover svg,
.footer-social-btn:hover rect,
.footer-social-btn:hover circle {
  filter: brightness(1.18);
}

.footer-copy {
  margin-top: 2em;
  text-align: center;
  font-size: 0.96em;
  opacity: 0.94;
  letter-spacing: 0.01em;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
.footer-copy a {
  color: #fff;
  opacity: 0.96;
  margin: 0 0.8em;
  text-decoration: underline dotted;
  transition: color 0.16s;
  font-size: 1em;
}
.footer-copy a:hover {
  color: var(--casita-naranja, #f7931e);
}
.footer-copy span {
  margin-top: 0.6em;
  display: block;
}
/* Teléfono y email en enlaces blancos */
.footer-col a {
  color: #fff;
  text-decoration: underline;
  transition: color 0.15s;
}
.footer-col a:hover {
  color: var(--casita-naranja, #f7931e);
}
/* Desktop: columnas */
@media (min-width: 800px) {
  .footer-grid {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; /* <-- Importante: alinea todas las columnas arriba */
    text-align: left;
    gap: 0;
    margin-bottom: 1.7em;
  }
  .footer-columns {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2.3rem;
    max-width: 1400px;
    margin: 0 auto;
    text-align: left;
  }
  .footer-col {
    align-items: flex-start;
    text-align: left;
    width: auto;
    /* Opcional: fuerza misma altura para las columnas */
    min-height: 140px; /* Ajusta según la altura media de tus columnas */
    /* Si quieres columnas del mismo alto y espacio, puedes usar flex: 1 */
    /* flex: 1; */
  }
  .footer-menu {
    margin-top: 0; /* <--- Elimina margen superior extra del menú */
    min-width: 150px; /* Opcional: iguala ancho mínimo con otras columnas */
  }
  .footer-center {
    margin-bottom: 2.3rem;
  }
  .footer-logo {
    width: 150px;
    padding: 0.8rem;
  }
  .footer-social-icons {
    justify-content: flex-start;
  }
}
</style>
