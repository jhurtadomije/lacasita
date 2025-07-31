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
  <AnimAppear animation="fade-up" :delay="900">
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
            En CEI La Casita, acompañamos a cada niño en sus primeros pasos, potenciando su
            desarrollo a través del juego, la emoción y el respeto.<br />
            Somos una familia educativa que disfruta cada pequeño logro y comparte la ilusión de
            aprender cada día.
          </p>
        </div>
      </div>
    </section>
  </AnimAppear>

  <!-- SERVICIOS DESTACADOS -->

  <AnimAppear animation="zoom-in" :delay="800">
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

  <AnimAppear animation="fade-down" :delay="300">
    <section class="carousel-home container">
      <h2 class="seccion-titulo">Nuestras Instalaciones</h2>
      <div class="carousel-track">
        <div class="carousel-slide" v-for="img in visibleImages" :key="img.src">
          <img :src="img.src" :alt="img.alt" />
          <span class="carousel-caption">{{ img.titulo }}</span>
        </div>
      </div>
      <div class="carousel-dots">
        <span
          v-for="n in totalPages"
          :key="n"
          :class="{ active: current === n - 1 }"
          @click="goToSlide(n - 1)"
        ></span>
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

  <AnimAppear animation="zoom-in" :delay="450">
    <section class="ubicacion-section container">
      <h2 class="seccion-titulo">¿Dónde estamos?</h2>
      <div class="ubicacion-mapa">
        <iframe
          src="https://www.google.com/maps?q=C.+Rub%C3%A9n+Dar%C3%ADo,+6,+18200+Maracena,+Granada,+Espa%C3%B1a&output=embed"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
      </div>
    </section>
  </AnimAppear>

  <!-- CTA FINAL -->

  <AnimAppear animation="fade-up" :delay="300">
    <section class="cta-final container">
      <h2 class="seccion-titulo">¿Quieres conocernos mejor?</h2>
      <router-link to="/contacto" class="btn-secondary"> Contacta con nosotros </router-link>
    </section>
  </AnimAppear>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import AnimAppear from '@/components/AnimAppear.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

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

const current = ref(0)
const slidesToShow = ref(window.innerWidth < 700 ? 1 : 3)
const isMobile = ref(window.innerWidth < 700)

// -- Actualiza slidesToShow según tamaño pantalla
function updateResponsive() {
  if (window.innerWidth < 700) {
    slidesToShow.value = 1
    isMobile.value = true
  } else {
    slidesToShow.value = 3
    isMobile.value = false
  }
}

onMounted(() => {
  updateResponsive()
  window.addEventListener('resize', updateResponsive)
  // Autoplay en todos los tamaños (opcional: solo móvil si quieres)
  interval = setInterval(() => {
    current.value = (current.value + 1) % totalPages.value
  }, 2800)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateResponsive)
  clearInterval(interval)
})

// -- Cálculo imágenes visibles (paginado)
const visibleImages = computed(() => {
  const start = current.value * slidesToShow.value
  return imagenes.slice(start, start + slidesToShow.value)
})

// -- Cuántas páginas tiene el carrusel
const totalPages = computed(() => Math.ceil(imagenes.length / slidesToShow.value))

// -- Cambiar de página
function goToSlide(idx) {
  current.value = idx
}

let interval = null
</script>

<style scoped>
/* --------- GENERALES Y TITULOS --------- */
h2,
.seccion-titulo {
  text-align: center;
  font-size: 2em;
  color: var(--casita-turquesa);
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.2;
}
.mini-titulo {
  text-align: center;
  font-size: 1.1em;
  color: var(--casita-verde);
  margin-bottom: 0.5em;
  font-weight: 800;
}
.container {
  width: 94vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 auto 0 auto;
}

/* --------- HERO principal --------- */
.hero {
  position: relative;
  background: linear-gradient(120deg, var(--casita-rosa), var(--casita-turquesa));
  color: var(--casita-blanco);
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.7em 0 3.5rem 0;
  clip-path: ellipse(100% 80% at 50% 0);
}
.hero-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.58) blur(1.5px);
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 44em;
  margin-bottom: 1.5em;
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
  font-size: 1.6em;
  margin-bottom: 0.12em;
  font-weight: 900;
}
.subtitulo-principal {
  font-size: 1.05em;
  margin: 0.9em 0 0.7em 0;
  font-weight: 700;
  color: var(--casita-blanco);
}
.hero-content p {
  font-size: 1em;
  margin-bottom: 1.2em;
}
.btn-cta-pulse {
  font-size: 1em;
  margin-top: 0.7em;
  padding: 0.7em 1.3em;
  border-radius: 1.3em;
  background: linear-gradient(90deg, var(--casita-naranja), var(--casita-turquesa));
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0.12em 1.1em #00bfff2a;
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
    box-shadow: 0 0.19em 2em #00bfff38;
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
  font-size: 2.1em;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin: 0.09em 0 0.09em 0;
  text-shadow:
    0 2px 4px #fff,
    0 5px 12px #0001;

  user-select: none;
}
.bienvenida span {
  display: inline-block;
  padding: 0 0.07em;
  margin: 0 0.01em;
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
  background: transparent;
  --rot: -6deg;
  transition: filter 0.18s;
  text-shadow:
    0 2px 0 #fff,
    0 4px 8px #00000010;
  animation: bounce 1.85s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.2, 0.3, 1.6);
}
.bienvenida span:nth-child(1) {
  color: #b6d330 !important;
  --rot: -7deg;
  animation-delay: 0s;
}
.bienvenida span:nth-child(2) {
  color: #fd2b7a !important;
  --rot: 3deg;
  animation-delay: 0.18s;
}
.bienvenida span:nth-child(3) {
  color: #ff9a21 !important;
  --rot: -2deg;
  animation-delay: 0.36s;
}
.bienvenida span:nth-child(4) {
  color: #3fd6f5 !important;
  --rot: 5deg;
  animation-delay: 0.12s;
}
.bienvenida span:nth-child(5) {
  color: #fd2b7a !important;
  --rot: -6deg;
  animation-delay: 0.21s;
}
.bienvenida span:nth-child(6) {
  color: #ffe546 !important;
  --rot: 4deg;
  animation-delay: 0.44s;
}
.bienvenida span:nth-child(7) {
  color: #ff6b01 !important;
  --rot: -2deg;
  animation-delay: 0.09s;
}
.bienvenida span:nth-child(8) {
  color: #43e889 !important;
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
  box-shadow: 0 0.12em 1.1em #00bfff15;
  padding: 0;
  margin-top: -3em;
  width: 100%;
  max-width: 1100px;
}
.about-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
}
.about-img img {
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 5%;
  object-fit: cover;
  border: 0.3em solid var(--casita-blanco);
  box-shadow: 0 0.1em 0.7em #00bfff16;
  margin: 0 auto 0 auto;
}

.services-home {
  margin-top: -8em;
}
.service-list {
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto 0 auto;
  margin-top: 1em;
}

/* --------- GALERÍA DE INSTALACIONES --------- */

/* === Desktop by defecto === */
.carousel-home {
  margin-top: -4.1em;
  justify-content: center;
}
.carousel-track {
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  width: 100%;
  max-width: 1150px;
  overflow: hidden;
}
.carousel-slide {
  flex: 0 0 calc(33.33% - 1.33em);
  max-width: 320px;
  min-width: 220px;
  opacity: 1 !important;
  transform: none !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--casita-turquesa-suave);
  transition: box-shadow 0.2s;
}
.carousel-slide img {
  width: 100%;
  max-width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 1em;
  margin-bottom: 0.7em;
}
.carousel-caption {
  margin-top: 0.5em;
  font-weight: 700;
  color: var(--casita-turquesa);
  font-size: 1.09em;
  text-align: center;
}
.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 0.6em;
  gap: 0.4em;
}
.carousel-dots span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #d4f2f5;
  opacity: 0.7;
  cursor: pointer;
  transition:
    opacity 0.2s,
    background 0.2s;
  border: 1.5px solid #c4e5e9;
}
.carousel-dots span.active {
  background: var(--casita-turquesa);
  opacity: 1;
  border: 1.5px solid var(--casita-turquesa);
}

/* === MÓVIL: SOLO una imagen visible === */
@media (max-width: 700px) {
  .carousel-track {
    overflow-x: hidden;
    gap: 0;
    display: flex;
  }
  .carousel-slide {
    display: none;
    min-width: 95vw;
    max-width: 95vw;
    margin: 0 auto;
    padding: 1em 0.4em 1.4em 0.4em;
  }
  .carousel-slide.active {
    display: flex !important;
  }
  .carousel-slide img {
    height: 54vw;
    min-height: 150px;
    max-height: 230px;
  }
}
/* --------- JUNTA ANDALUCÍA --------- */
.junta-section {
  margin: 1.5em auto 0.8em auto;
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
  gap: 1em;
  padding: 1.5em 1.1em 1.2em 1.1em;
  background: #fff;
  border-radius: 1.3em;
  box-shadow: 0 4px 18px #00bfff18;
  border-top: 5px solid #137752;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.junta-logo {
  height: 54px;
  width: auto;
  background: #fff;
  border-radius: 1em;
  padding: 0.3em 1.1em;
  object-fit: contain;
  box-shadow: 0 2px 14px #13775224;
  margin-bottom: 0.6em;
}

.junta-texto h3.mini-titulo {
  color: #137752;
  margin-bottom: 0.15em;
  font-size: 1.1em;
  font-weight: 700;
}
.junta-texto p {
  margin: 0;
  font-size: 1.05em;
  color: #137752;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
}
.junta-texto span {
  color: #137752;
  font-weight: bold;
}

/* Botón opcional para enlace oficial */
.btn-junta {
  display: inline-block;
  margin-top: 1.1em;
  padding: 0.5em 1.3em;
  background: #137752;
  color: #fff;
  border-radius: 2em;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 2px 8px #13775218;
  transition: background 0.16s;
}
.btn-junta:hover {
  background: #0d5b3e;
}

/* Responsive: móvil */
@media (max-width: 480px) {
  .junta-card {
    max-width: 98vw;
    padding: 1em 0.4em;
  }
  .junta-logo {
    height: 38px;
    padding: 0.22em 0.7em;
  }
}

/* --------- UBICACIÓN --------- */
.ubicacion-section {
  max-width: 1100px;
  padding: 0;
  justify-items: center;
}

.ubicacion-content {
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  justify: center;
  width: 100%;
}

.ubicacion-info {
  min-width: 260px;
  max-width: 330px;
  font-size: 1.04em;
  color: var(--casita-negro);
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  background: var(--casita-turquesa-suave, #e7fbfa);
  border-radius: 1.1em;
  padding: 1.1em 1em;
  box-shadow: 0 2px 12px #00bfff17;
}

.ubicacion-info strong {
  color: var(--casita-turquesa, #00bfff);
  font-weight: 800;
  font-size: 1.1em;
}

.btn-secondary {
  display: inline-block;
  margin: 0.7em auto 0 auto;
  padding: 0.65em 1.5em;
  font-weight: 700;
  font-size: 1em;
  background: linear-gradient(90deg, var(--casita-verde, #a4ce39), var(--casita-turquesa, #00bfff));
  color: #fff;
  border: none;
  border-radius: 1.2em;
  cursor: pointer;
  box-shadow: 0 2px 12px #00bfff25;
  text-decoration: none;
  transition:
    background 0.19s,
    transform 0.17s;
}

.btn-secondary:hover,
.btn-secondary:focus {
  background: linear-gradient(90deg, var(--casita-turquesa, #00bfff), var(--casita-verde, #a4ce39));
  transform: scale(1.06);
}

/* Mapa responsivo y estilizado */

.ubicacion-mapa {
  min-width: 200px;
  width: 94vw;
  max-width: 370px;
  border-radius: 1.1em;
  box-shadow: 0 0.1em 0.7em #00bfff16;
  overflow: hidden;
}

.ubicacion-mapa iframe {
  width: 100%;
  height: 65vh;
  min-height: 180px;
  max-height: 370px;
  border: 0;
  border-radius: 1.1em;
  display: block;
}

@media (min-width: 380px) {
  .ubicacion-content {
    flex-direction: row;
    justify-content: center;
    gap: 2.5em;
    align-items: center;
  }
  .ubicacion-info {
    text-align: center;
    align-items: center;
  }
  .ubicacion-mapa {
    max-width: 50em;
  }
}

/* --------- CTA FINAL --------- */
.cta-final {
  background: linear-gradient(
    120deg,
    var(--casita-verde, #a4ce39),
    var(--casita-turquesa, #00bfff)
  );
  color: var(--casita-blanco, #fff);
  padding: 2em 1em 2em 1em;
  text-align: center;
  border-radius: 1.2em;
  margin: 2.3em auto 1.4em auto;
  box-shadow: 0 0.1em 0.7em #a4ce3933;
  max-width: 95vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
}

.cta-final .seccion-titulo {
  color: #fff;
  margin-bottom: 1.2em;
}

.btn-secondary {
  display: inline-block;
  margin: 0 auto;
  padding: 0.78em 2.1em;
  font-weight: 800;
  font-size: 1.18em;
  background: #fff;
  color: var(--casita-verde, #a4ce39);
  border: none;
  border-radius: 1.8em;
  box-shadow: 0 2px 12px #00bfff1c;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition:
    background 0.17s,
    color 0.17s,
    transform 0.16s,
    box-shadow 0.18s;
}

.btn-secondary:hover,
.btn-secondary:focus {
  background: var(--casita-verde, #a4ce39);
  color: #fff;
  box-shadow: 0 4px 16px #00bfff32;
  transform: scale(1.05);
}

@media (max-width: 420px) {
  .hero-content {
    max-width: 98vh;
  }
  .bienvenida {
    font-size: 1.6em;
    line-height: 1.15;
    word-break: break-word;
    white-space: normal;
  }
  .titulo-principal {
    font-size: 1.09em;
  }
  .subtitulo-principal {
    font-size: 0.98em;
    line-height: 1.18;
    word-break: break-word;
    white-space: normal;
  }
}

/* --------- RESPONSIVE --------- */
@media (max-width: 700px) {
  h2,
  .seccion-titulo {
    font-size: 2.6em;
  }
  .hero-content {
    max-width: 42em;
  }
  .bienvenida {
    font-size: 2.2em;
  }
  .carousel-track {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2em;
    justify-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1150px; /* máximo ancho */
  }
  .carousel-slide {
    min-width: 220px;
    max-width: 280px;
    border-radius: 1em;
    box-shadow: 0 0.1em 0.7em #00bfff0f;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--casita-turquesa-suave);
    transition: box-shadow 0.2s;
    opacity: 0;
    transform: translateY(35px) scale(0.96);
    animation: gridFadeIn 0.7s cubic-bezier(0.72, 0, 0.35, 1.18) forwards;
    animation-delay: calc(0.13s * var(--i, 1));
  }
  @keyframes gridFadeIn {
    to {
      opacity: 1;
      transform: none;
    }
  }

  .carousel-slide img {
    width: 100%;
    max-width: 260px;
    height: 180px;
    object-fit: cover;
    border-radius: 1em;
    margin-bottom: 0.7em;
  }
  .carousel-caption {
    margin-top: 0.5em;
    font-weight: 700;
    color: var(--casita-turquesa);
    font-size: 1.09em;
    text-align: center;
  }
  .carousel-slide:hover {
    box-shadow: 0 8px 36px #00bfff1f;
    transform: translateY(-6px) scale(1.025);
    z-index: 2;
  }
  @media (min-width: 700px) {
    .service-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 3em;
      justify-items: center;
    }
  }

  .about-img img {
    width: 42em;
  }
  .ubicacion-mapa {
    max-width: 90vh;
  }
}
@media (min-width: 1100px) {
  .about-home,
  .carousel-home,
  .services-home,
  .instalaciones-home,
  .junta-section,
  .ubicacion-section {
    justify-items: center;
    max-width: 1200px;
    margin-bottom: 1em;
    margin-top: 1.2em;
  }
  .service-list {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3em;
  }
}
</style>
