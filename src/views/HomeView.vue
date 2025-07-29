<template>
  <div class="junta-badge">
    <img src="@/assets/img/junta-andalucia-logo.png" alt="Junta de Andalucía" />
    <span>Centro adherido a la Junta de Andalucía</span>
  </div>
  <!-- HERO principal -->
  <section class="hero">
    <video class="hero-video-bg" :src="videoHeroBg" autoplay loop muted playsinline></video>
    <div class="hero-content">
      <h1>Educación Infantil Creativa en Maracena</h1>
      <p>Cariño, aprendizaje y diversión desde 0 a 3 años</p>
      <router-link to="/contacto" class="btn-primary btn-cta-pulse">Solicita visita</router-link>
    </div>
  </section>

  <!-- SOBRE NOSOTROS -->

  <section class="about-home container">
    <div class="about-grid">
      <div class="about-img">
        <img src="@/assets/img/sobrenosotros.jpg" alt="Equipo CEI La Casita" />
      </div>
      <div class="about-text">
        <h2>Sobre nosotros</h2>
        <p class="about-frase">
          <strong>“Creciendo juntos con alegría, cariño y creatividad.”</strong>
        </p>
        <p>
          En CEI La Casita, acompañamos a cada niño en sus primeros pasos, potenciando su desarrollo
          a través del juego, la emoción y el respeto.<br />
          Somos una familia educativa que disfruta cada pequeño logro y comparte la ilusión de
          aprender cada día.
        </p>
      </div>
    </div>
  </section>

  <!-- SERVICIOS DESTACADOS -->
  <section class="services-home container">
    <h2>Nuestros servicios</h2>
    <div class="service-list">
      <div class="service-card">
        <span class="service-icon">
          <!-- Horario amplio -->
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="20" fill="#00bfff" />
            <path
              d="M21 11v10l7 5"
              stroke="#fff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </span>
        <h3>Horario amplio</h3>
        <p>De 7:30 h a 17:00 h para facilitar la conciliación familiar.</p>
      </div>
      <div class="service-card">
        <span class="service-icon">
          <!-- Comedor casero -->
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="20" fill="#a4ce39" />
            <rect x="14" y="22" width="14" height="7" rx="2.5" fill="#fff" />
            <rect x="17" y="13" width="8" height="11" rx="4" fill="#fff" />
          </svg>
        </span>
        <h3>Comedor casero</h3>
        <p>Menús elaborados por nutricionista con productos frescos.</p>
      </div>
      <div class="service-card">
        <span class="service-icon">
          <!-- Inglés -->
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="20" fill="#f7931e" />
            <path
              d="M14 28v-7h4v7m10-11c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.46 1.12 4.66 2.86 6.15l-1.29 2.85A1 1 0 0 0 12 28h18a1 1 0 0 0 .86-1.5l-1.29-2.85A7.96 7.96 0 0 0 31 17z"
              stroke="#fff"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </span>
        <h3>Inmersión en inglés</h3>
        <p>Introducción temprana al idioma en un entorno lúdico.</p>
      </div>
      <div class="service-card">
        <span class="service-icon">
          <!-- Música -->
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="20" fill="#ff4da6" />
            <path
              d="M26 16V10l-10 3v15.5a2.5 2.5 0 1 0 2 2.45V19l6-1v8.5a2.5 2.5 0 1 0 2 2.45V16z"
              stroke="#fff"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </span>
        <h3>Estimulación musical</h3>
        <p>Desarrollo cognitivo y emocional a través de la música.</p>
      </div>
    </div>
  </section>

  <!-- GALERÍA DE INSTALACIONES -->
  <section class="carousel-home container">
    <h2>Instalaciones</h2>
    <div class="carousel-track">
      <div class="carousel-slide" v-for="img in imagenes" :key="img.src">
        <img :src="img.src" :alt="img.alt" />
        <span class="carousel-caption">{{ img.titulo }}</span>
      </div>
    </div>
  </section>

  <!-- EQUIPO EDUCATIVO -->
  <section class="team container">
    <h2>Equipo educativo</h2>
    <div class="team-list">
      <div v-for="n in 3" :key="n" class="team-member">
        <img :src="`https://randomuser.me/api/portraits/women/${10 + n}.jpg`" alt="educadora" />
        <h3>Educadora {{ n }}</h3>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="cta-final">
    <h2>¿Quieres conocernos mejor?</h2>
    <router-link to="/contacto" class="btn-secondary">Contacta con nosotros</router-link>
  </section>
</template>

<script setup>
const imagenes = [
  // Aulas
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula1.jpg', import.meta.url).href,
    alt: 'Aula 1',
    titulo: 'Aula 1',
  },
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula2.jpg', import.meta.url).href,
    alt: 'Aula 2',
    titulo: 'Aula 2',
  },
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula3.jpg', import.meta.url).href,
    alt: 'Aula 3',
    titulo: 'Aula 3',
  },
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula4.jpg', import.meta.url).href,
    alt: 'Aula 4',
    titulo: 'Aula 4',
  },
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula5.jpg', import.meta.url).href,
    alt: 'Aula 5',
    titulo: 'Aula 5',
  },
  {
    src: new URL('@/assets/img/instalaciones/aulas/aula6.jpg', import.meta.url).href,
    alt: 'Aula 6',
    titulo: 'Aula 6',
  },
  {
    src: new URL('@/assets/img/instalaciones/cocina/cocina1.jpg', import.meta.url).href,
    alt: 'Cocina',
    titulo: 'Cocina',
  },
  {
    src: new URL('@/assets/img/instalaciones/wc/wc1.jpg', import.meta.url).href,
    alt: 'WC',
    titulo: 'WC',
  },
  {
    src: new URL('@/assets/img/instalaciones/fachada/fachada.jpg', import.meta.url).href,
    alt: 'Fachada',
    titulo: 'Fachada',
  },
  // Añade más imágenes si las tienes
]
const videoHeroBg = new URL('@/assets/videos/hero-bg.mp4', import.meta.url).href
</script>

<style scoped>
/* HERO con gran impacto visual */
.hero {
  position: relative;
  overflow: hidden;
  min-height: 92vh;
  background: linear-gradient(120deg, var(--casita-turquesa), var(--casita-naranja));
  color: var(--casita-blanco);
  text-align: center;
  padding: 7em 1em 7em 1em;
  clip-path: ellipse(100% 75% at 50% 0);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.hero-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.5) blur(0.5px); /* oscurece para mejor legibilidad */
}
.hero-content h1 {
  position: relative;
  z-index: 2;
  font-size: 2.7rem;
  margin-bottom: 0.7em;
}
.hero-content p {
  font-size: 1.2rem;
  z-index: 7;
  margin-bottom: 1.2em;
}
.junta-badge {
  display: flex;
  align-items: center;
  gap: 0.8em;
  margin: 1em 0 0.7em 0;
  background: #6af308ff;
  color: #b7428aff;
  padding: 0.45em 1.2em;
  border-radius: 1.3em;
  font-weight: 700;
  font-size: 1.05em;
  box-shadow: 0 2px 12px #a4ce3933;
  z-index: 4;
}
.junta-badge img {
  height: 28px;
  width: auto;
  margin-right: 0.3em;
  z-index: 3;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #00bfff88, #f7931e66);
  z-index: 1;
  pointer-events: none;
}
.hero-cta {
  margin-top: 0.7em;
  font-size: 1.17em;
  padding: 0.9em 2.1em;
  border-radius: 1.3em;
  background: linear-gradient(90deg, var(--casita-naranja), var(--casita-turquesa));
  color: #fff;
  font-weight: 700;
  box-shadow: 0 2px 24px #00bfff33;
  transition:
    background 0.2s,
    transform 0.18s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.03em;
}
.hero-cta:hover,
.hero-cta:focus {
  background: linear-gradient(90deg, var(--casita-turquesa), var(--casita-naranja));
  transform: translateY(-2px) scale(1.04);
  color: #fff;
}

/* About */

.about-home {
  margin: 3.5em auto 2em auto;
  background: linear-gradient(
    120deg,
    var(--casita-turquesa-suave) 65%,
    var(--casita-naranja-suave)
  );
  border-radius: 2em;
  box-shadow: 0 2px 28px #00bfff18;
  padding: 2.5em 1.5em;
  max-width: 1100px;
}
.about-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
}
.about-img img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 7px solid var(--casita-blanco);
  box-shadow: 0 2px 16px #00bfff25;
  background: var(--casita-blanco);
}
.about-text {
  max-width: 450px;
  text-align: center;
}
.about-frase {
  color: var(--casita-turquesa);
  font-size: 1.18em;
  margin-bottom: 1.1em;
}
@media (min-width: 900px) {
  .about-grid {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .about-text {
    text-align: left;
  }
}
@media (max-width: 600px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 1.1rem;
  }
  .hero-cta {
    font-size: 1em;
    padding: 0.85em 1.5em;
  }
}

/* Servicios con tarjetas coloridas */
.services-home {
  padding: 3.5em 0;
}
.services-home h2 {
  color: var(--casita-turquesa);
  text-align: center;
  margin-bottom: 2em;
}
.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.1em;
  justify-content: center;
  align-items: stretch;
}
.service-card {
  background: linear-gradient(
    135deg,
    var(--casita-turquesa-suave) 70%,
    var(--casita-naranja-suave) 100%
  );
  border-radius: 1.6em;
  box-shadow: 0 4px 18px #00bfff21;
  padding: 2.2em 1.2em 2em 1.2em;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.17s,
    box-shadow 0.17s;
  min-height: 270px;
}
.service-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 32px #00bfff38;
}
.service-icon {
  margin-bottom: 1.3em;
  display: inline-block;
}
.service-card h3 {
  color: var(--casita-turquesa);
  font-size: 1.19em;
  margin-bottom: 0.5em;
  font-weight: 700;
}
.service-card p {
  color: var(--casita-negro);
  font-size: 1.03em;
  margin-bottom: 0;
}

/* Galería de instalaciones */
.gallery {
  padding: 3em 0;
}
.gallery h2 {
  color: var(--casita-naranja);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8em;
  margin-top: 2em;
}
.gallery-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 1em;
  box-shadow: 0 2px 12px #f7931e1a;
}

/* Equipo educativo con fotos circulares */
.team {
  padding: 3em 0 1.5em 0;
  text-align: center;
}
.team h2 {
  color: var(--casita-verde);
}
.team-list {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
  flex-wrap: wrap;
}
.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--casita-verde);
  object-fit: cover;
  background: var(--casita-blanco);
}
.team-member h3 {
  color: var(--casita-verde);
  margin-top: 0.7em;
  font-size: 1.12em;
}

/* CTA final con gradiente inverso */
.cta-final {
  background: linear-gradient(120deg, var(--casita-verde), var(--casita-turquesa));
  color: var(--casita-blanco);
  padding: 4em 1em 3em 1em;
  text-align: center;
  border-radius: 1.5em;
  margin: 3em auto 2em auto;
  box-shadow: 0 2px 20px #a4ce3933;
}
.cta-final h2 {
  margin-bottom: 1em;
}
.carousel-home {
  padding: 3em 0 1.5em 0;
}
.carousel-home h2 {
  color: var(--casita-naranja);
  margin-bottom: 1.5em;
  text-align: center;
}
.carousel-track {
  display: flex;
  gap: 2em;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--casita-naranja) var(--casita-turquesa-suave);
  padding-bottom: 1em;
  justify-content: center;
}
.carousel-slide {
  background: var(--casita-turquesa-suave);
  border-radius: 1.5em;
  box-shadow: 0 2px 16px #00bfff19;
  padding: 1em;
  text-align: center;
  min-width: 260px;
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.19s;
}
.carousel-slide img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 1em;
  margin-bottom: 1em;
  box-shadow: 0 2px 12px #00bfff22;
}
.carousel-caption {
  color: var(--casita-turquesa);
  font-size: 1.07em;
  font-weight: 600;
  margin-top: 0.4em;
}
.carousel-slide:hover {
  transform: scale(1.045);
  box-shadow: 0 8px 32px #00bfff31;
}
</style>
