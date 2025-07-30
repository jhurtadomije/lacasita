<template>
  <!-- HERO principal (full width, fuera de container) -->
  <AnimAppear animation="fade-up" :delay="300">
    <section class="hero">
      <video class="hero-video-bg" :src="videoHeroBg" autoplay loop muted playsinline></video>
      <div class="hero-content">
        <h1 class="titulo-principal">Bienvenido a</h1>
        <span class="bienvenida">
          <span>L</span><span>A</span> <span>C</span><span>A</span><span>S</span><span>I</span
          ><span>T</span><span>A</span>
        </span>
        <h2 class="subtitulo-principal">Su escuela de Educación Infantil Creativa en Maracena</h2>
        <p>Cariño, aprendizaje y diversión desde 0 a 3 años</p>
        <router-link to="/contacto" class="btn-primary btn-cta-pulse">Solicita visita</router-link>
      </div>
    </section>
  </AnimAppear>

  <!-- SOBRE NOSOTROS -->

  <section class="about-home container">
    <h2 class="seccion-titulo">Sobre nosotros</h2>
    <div class="about-grid">
      <div class="about-text">
        <p class="about-frase">
          <strong>“Creciendo juntos con alegría, cariño y creatividad.”</strong>
        </p>
        <div class="about-img">
          <img src="@/assets/img/sobrenosotros.jpg" alt="Equipo CEI La Casita" />
        </div>
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

  <AnimAppear animation="zoom-in" :delay="550">
    <section class="services-home container">
      <h2 class="seccion-titulo">Nuestros servicios</h2>
      <div class="service-list">
        <!-- ... tus ServiceCard igual ... -->
        <ServiceCard
          title="Horario"
          summary="El centro permanece abierto de 7:30 a 17:00 h."
          :description="`
Para la conciliación laboral habilitamos un horario de aula matinal de 7:30 a 9:00.

El horario escolar es de 9:00 a 17:00 horas.`"
        >
          <template #icon>
            <img
              width="160"
              height="160"
              src="https://img.icons8.com/keek/100/clock.png"
              alt="clock"
            />
          </template>
        </ServiceCard>
        <ServiceCard
          title="Comedor"
          summary="Menú casero. Cocina propia."
          :description="`
Nuestros menús están elaborados por un nutricionista y seguimos un programa de comedor con el objetivo de conseguir la plena autonomía en hábitos relacionados con la comida (comer solo, estar bien sentado, masticar correctamente, etc.).

Nuestra comida se elabora cada día en la cocina de la escuela, utilizando productos frescos y de calidad. ¡Comida CASERA Y DE CALIDAD!`"
        >
          <template #icon>
            <img
              width="160"
              height="160"
              src="https://img.icons8.com/keek/100/cutlery.png"
              alt="cutlery"
            />
          </template>
        </ServiceCard>
        <ServiceCard
          title="Aprendizaje de inglés 0-3"
          summary="Clases de iniciación al inglés y actividades de inmersión."
          :description="`
Contamos con clases de iniciación al inglés con apoyo de materiales exclusivos, además de personal titulado y capacitado para el desarrollo de las actividades de inmersión lingüística.`"
        >
          <template #icon>
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/arcade/64/language-skill.png"
              alt="language-skill"
            />
          </template>
        </ServiceCard>
        <ServiceCard
          title="Estimulación musical 0-3"
          summary="Mejora de memoria, desarrollo y expresión emocional."
          :description="`
Gracias a la estimulación musical mejoramos nuestra memoria, el desarrollo cognitivo, las habilidades lingüísticas y la expresión de nuestras emociones.`"
        >
          <template #icon>
            <img
              width="160"
              height="160"
              src="https://img.icons8.com/keek/100/musical-notes.png"
              alt="musical-notes"
            />
          </template>
        </ServiceCard>
        <ServiceCard
          title="Psicomotricidad vivenciada"
          summary="Integramos desarrollo psíquico y motriz."
          :description="`
Mediante la cual enseñamos a los niños a integrar tanto elementos psíquicos como motrices.

Así educamos nuestras capacidades perceptivas, sensitivas, representativas y simbólicas y damos significado a las cosas que percibimos y sentimos.`"
        >
          <template #icon>
            <img
              width="160"
              height="160"
              src="https://img.icons8.com/color/48/crawling-baby-skin-type-1.png"
              alt="crawling-baby-skin-type-1"
            />
          </template>
        </ServiceCard>
      </div>
    </section>
  </AnimAppear>

  <!-- GALERÍA DE INSTALACIONES -->

  <AnimAppear animation="fade-down" :delay="750">
    <section class="carousel-home container">
      <h2 class="seccion-titulo">Nuestras Instalaciones</h2>
      <div class="carousel-track">
        <div class="carousel-slide" v-for="img in imagenes" :key="img.src">
          <img :src="img.src" :alt="img.alt" />
          <span class="carousel-caption">{{ img.titulo }}</span>
        </div>
      </div>
    </section>
  </AnimAppear>

  <!-- Sección Junta Andalucía -->

  <section class="junta-section container">
    <div class="junta-card">
      <img
        class="junta-logo"
        src="@/assets/img/junta-andalucia-logo.png"
        alt="Junta de Andalucía"
      />
      <div class="junta-texto">
        <h3 class="mini-titulo">Centro adherido</h3>
        <p>
          <strong>
            Centro de Educación Infantil adherido al Programa de ayudas a las familias de la
            <span>Junta de Andalucía</span>.
          </strong>
        </p>
      </div>
    </div>
  </section>

  <!-- Sección Ubicación -->

  <AnimAppear animation="zoom-in" :delay="1150">
    <section class="ubicacion-section container">
      <h2 class="seccion-titulo">¿Dónde estamos?</h2>
      <div class="ubicacion-content">
        <div class="ubicacion-info">
          <p>
            <strong>CEI La Casita</strong><br />
            C. Rubén Darío, 6<br />
            18200 Maracena, Granada, España
          </p>
          <a
            href="https://www.google.com/maps?q=C.+Rub%C3%A9n+Dar%C3%ADo,+6,+18200+Maracena,+Granada,+Espa%C3%B1a"
            class="btn-secondary"
            target="_blank"
            rel="noopener"
          >
            Abrir en Google Maps
          </a>
        </div>
        <div class="ubicacion-mapa">
          <iframe
            src="https://www.google.com/maps?q=C.+Rub%C3%A9n+Dar%C3%ADo,+6,+18200+Maracena,+Granada,+Espa%C3%B1a&output=embed"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </AnimAppear>

  <!-- CTA FINAL -->

  <AnimAppear animation="fade-up" :delay="1350">
    <h2 class="seccion-titulo">¿Quieres conocernos mejor?</h2>
    <section class="cta-final container">
      <router-link to="/contacto" class="btn-secondary">Contacta con nosotros</router-link>
    </section>
  </AnimAppear>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import AnimAppear from '@/components/AnimAppear.vue'
const imagenes = [
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
]
const videoHeroBg = new URL('@/assets/videos/hero-bg.mp4', import.meta.url).href
</script>

<style scoped>
/* --------- GENERALES Y TITULOS --------- */
h2,
.seccion-titulo {
  text-align: center;
  font-size: 2.5em;
  margin: 2.2em 0 1.2em 0;
  color: var(--casita-turquesa);
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.mini-titulo {
  text-align: center;
  font-size: 1.38em;
  color: var(--casita-verde);
  margin-bottom: 0.5em;
  font-weight: 800;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  box-sizing: border-box;
}

/* --------- HERO principal --------- */
.hero {
  position: relative;
  background: linear-gradient(120deg, var(--casita-rosa), var(--casita-turquesa));
  color: var(--casita-blanco);
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2em 1em 1.5em 1em;
  clip-path: ellipse(100% 75% at 50% 0);
  overflow: hidden;
}

.hero-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.58) blur(1.5px);
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 670px;
  opacity: 0;
  transform: translateY(60px);
  animation: heroFadeUp 1.6s cubic-bezier(0.56, 0.01, 0.24, 1.01) forwards;
  animation-delay: 0.5s;
}
@keyframes heroFadeUp {
  to {
    opacity: 1;
    transform: none;
  }
}
.titulo-principal {
  font-size: 2.3em;
  margin-bottom: 0.12em;
  font-weight: 900;
}
.subtitulo-principal {
  font-size: 1.27em;
  margin: 0.9em 0 0.7em 0;
  font-weight: 700;
  color: var(--casita-blanco);
}
.hero-content p {
  font-size: 1.09rem;
  margin-bottom: 1.2em;
}
.btn-cta-pulse {
  font-size: 1.05em;
  margin-top: 0.7em;
  padding: 0.85em 1.7em;
  border-radius: 1.3em;
  background: linear-gradient(90deg, var(--casita-naranja), var(--casita-turquesa));
  color: #fff;
  font-weight: 700;
  box-shadow: 0 2px 18px #00bfff2a;
  border: none;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.03em;
  animation: cta-pulse 1.8s infinite alternate;
  transition:
    background 0.2s,
    transform 0.18s;
}
@keyframes cta-pulse {
  to {
    box-shadow: 0 4px 28px #00bfff38;
    transform: scale(1.04);
  }
}
.btn-cta-pulse:hover,
.btn-cta-pulse:focus {
  background: linear-gradient(90deg, var(--casita-turquesa), var(--casita-naranja));
  transform: scale(1.06);
}

.bienvenida {
  display: block;
  font-family: 'Poppins', 'Comic Sans MS', cursive, sans-serif;
  font-size: 3.5em;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin: 0.07em 0 0.07em 0;
  text-shadow:
    0 4px 0 #fff,
    0 8px 16px #00000018;
  user-select: none;
}
.bienvenida span {
  display: inline-block;
  padding: 0 0.12em;
  margin: 0 0.02em;
  -webkit-text-stroke: 3px #fff;
  text-stroke: 3px #fff;
  background: transparent;
  --rot: -6deg;
  transition: filter 0.18s;
  text-shadow:
    0 5px 0 #fff,
    0 8px 16px #00000018;
  animation: bounce 1.85s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.2, 0.3, 1.6);
}
.bienvenida span:nth-child(1) {
  color: #b6d330;
  --rot: -7deg;
  animation-delay: 0s;
}
.bienvenida span:nth-child(2) {
  color: #fd2b7a;
  --rot: 3deg;
  animation-delay: 0.18s;
}
.bienvenida span:nth-child(3) {
  color: #ff9a21;
  --rot: -2deg;
  animation-delay: 0.36s;
}
.bienvenida span:nth-child(4) {
  color: #3fd6f5;
  --rot: 5deg;
  animation-delay: 0.12s;
}
.bienvenida span:nth-child(5) {
  color: #fd2b7a;
  --rot: -6deg;
  animation-delay: 0.21s;
}
.bienvenida span:nth-child(6) {
  color: #ffe546;
  --rot: 4deg;
  animation-delay: 0.44s;
}
.bienvenida span:nth-child(7) {
  color: #ff6b01;
  --rot: -2deg;
  animation-delay: 0.09s;
}
.bienvenida span:nth-child(8) {
  color: #43e889;
  --rot: 7deg;
  animation-delay: 0.33s;
}
.bienvenida span:hover {
  filter: brightness(1.12) drop-shadow(0 2px 12px #0002);
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0) scale(1) rotate(var(--rot));
  }
  25% {
    transform: translateY(-20%) scale(1.09) rotate(var(--rot));
  }
  35% {
    transform: translateY(-40%) scale(1.15) rotate(var(--rot));
  }
  55% {
    transform: translateY(-18%) scale(1.05) rotate(var(--rot));
  }
  75% {
    transform: translateY(0) scale(1) rotate(var(--rot));
  }
}

/* --------- SOBRE NOSOTROS --------- */
.about-home {
  background: linear-gradient(
    120deg,
    var(--casita-turquesa-suave) 70%,
    var(--casita-naranja-suave) 100%
  );
  border-radius: 2em;
  box-shadow: 0 2px 18px #00bfff15;
  margin: 0 auto;
  padding: 2em 1em;
  max-width: 1100px;
}
.about-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
}
.about-text {
  max-width: 100%;
  text-align: center;
}
.about-frase {
  color: var(--casita-turquesa);
  font-size: 1.2em;
  margin-bottom: 1.5em;
  font-weight: 600;
  text-align: center !important;
}
.about-img img {
  width: 90vw;
  max-width: 340px;
  height: 340px;
  border-radius: 19%;
  object-fit: cover;
  border: 5px solid var(--casita-blanco);
  box-shadow: 0 2px 10px #00bfff16;
  margin: 1.1em auto 1em auto;
}

/* --------- SERVICIOS --------- */
.services-home {
  margin: 0 auto;
  padding: 2.1em 0 1em 0;
  max-width: 1100px;
}
.service-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
}

/* --------- GALERÍA DE INSTALACIONES --------- */
.carousel-home {
  padding: 2em 0 1em 0;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
.carousel-track {
  display: flex;
  gap: 1.1em;
  overflow-x: auto;
  padding-bottom: 0.5em;
  justify-content: center;
  margin: 0 auto;
}
.carousel-slide {
  background: var(--casita-turquesa-suave);
  border-radius: 1em;
  box-shadow: 0 2px 10px #00bfff0f;
  padding: 1em;
  min-width: 220px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-slide img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 1em;
  margin-bottom: 1em;
}

/* --------- JUNTA ANDALUCÍA --------- */
.junta-section {
  margin: 2.1em auto 1.4em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  padding: 0;
}
.junta-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1em;
  padding: 1.2em 1em;
  background: linear-gradient(120deg, #fff 65%, var(--casita-turquesa-suave));
  border-radius: 1.2em;
  box-shadow: 0 2px 14px #00bfff13;
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
}
.junta-logo {
  height: 46px;
  width: auto;
  background: #fff;
  border-radius: 1em;
  padding: 0.45em;
}
.junta-texto p {
  margin: 0;
  font-size: 1em;
  color: var(--casita-negro);
  font-weight: 600;
}

/* --------- UBICACIÓN --------- */
.ubicacion-section {
  margin: 2.1em auto 1.6em auto;
  max-width: 1100px;
}
.ubicacion-content {
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.ubicacion-info {
  min-width: 200px;
  max-width: 300px;
  font-size: 1.03em;
  color: var(--casita-negro);
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
}
.ubicacion-mapa {
  min-width: 200px;
  width: 100%;
  max-width: 350px;
  border-radius: 1em;
  box-shadow: 0 2px 10px #00bfff10;
  overflow: hidden;
}
.ubicacion-mapa iframe {
  width: 100%;
  height: 170px;
  border: 0;
  border-radius: 1em;
  display: block;
}

/* --------- CTA FINAL --------- */
.cta-final {
  background: linear-gradient(120deg, var(--casita-verde), var(--casita-turquesa));
  color: var(--casita-blanco);
  padding: 2.5em 1em 2em 1em;
  text-align: center;
  border-radius: 1.2em;
  margin: 2em auto 1.3em auto;
  box-shadow: 0 2px 10px #a4ce3933;
  max-width: 800px;
  width: 100%;
}

/* --------- RESPONSIVE --------- */
@media (min-width: 700px) {
  .hero-content h1 {
    font-size: 2.7rem;
  }
  .hero-content p {
    font-size: 1.19rem;
  }
  .btn-cta-pulse {
    font-size: 1.15em;
  }
  .about-img img {
    width: 320px;
    height: 320px;
  }
  .about-home {
    padding: 3em 2.2em;
  }
  .service-list {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 3em;
  }
  .carousel-slide {
    min-width: 260px;
    max-width: 270px;
  }
  .carousel-slide img {
    height: 160px;
  }
  .junta-card {
    flex-direction: row;
    gap: 1.5em;
    max-width: 600px;
  }
  .junta-logo {
    height: 100px;
  }
  .ubicacion-content {
    flex-direction: row;
    justify-content: center;
  }
  .ubicacion-mapa {
    max-width: 420px;
  }
  .cta-final {
    max-width: 800px;
  }
}
</style>
