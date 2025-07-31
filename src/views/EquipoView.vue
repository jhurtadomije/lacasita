<template>
  <section class="equipo-section container">
    <!-- PRESENTACIÓN abierta, sin cajas -->
    <div class="equipo-bienvenida">
      <h1 class="erase-colorido">
        <span v-for="(letra, i) in eraseArray" :key="i" :class="`color${(i % 8) + 1}`">{{
          letra
        }}</span>
      </h1>
      <h2 class="equipo-subtitulo">
        Un lugar donde crecer, compartir, disfrutar, aprender y ser feliz.
      </h2>
      <p>
        <strong>Una escuela que acoge a pequeños de 0 a 3 años</strong> y que
        <strong>basa su educación en el respeto, el cariño y la diversión</strong>
        para que los niños crezcan en un clima de confianza y seguridad y
        <strong>puedan sentirse como en casa.</strong>
        De ahí recibe su nombre <strong>LA CASITA</strong> y nos encontramos en Maracena (Granada).
      </p>
      <p>
        <strong>Raquel, su directora</strong>, está muy orgullosa del trabajo realizado y de la
        labor de su equipo de profesionales. Juntos quieren seguir ayudando a las familias a criar y
        educar a sus pequeños con ilusión y compromiso.
      </p>
      <p>Te esperamos, ven a conocernos.</p>
      <p class="equipo-continuacion">A continuación, nos puedes conocer una a una:</p>
    </div>

    <!-- Cards del equipo -->
    <div class="equipo-grid">
      <div class="equipo-card" v-for="(miembro, idx) in equipo" :key="miembro.nombre">
        <img :src="miembro.img" :alt="miembro.nombre" />
        <h2>{{ miembro.nombre }}</h2>
        <p class="rol">{{ miembro.rol }}</p>
        <button class="btn-ver-mas" @click="toggleDesc(idx)">
          <span v-if="abiertoIndex !== idx">Más <b>↓</b></span>
          <span v-else>Menos <b>↑</b></span>
        </button>
        <div class="alfombra-desc" :class="{ 'alfombra-open': abiertoIndex === idx }">
          <transition name="alfombra-contenido">
            <p v-if="abiertoIndex === idx" class="desc">{{ miembro.desc }}</p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const eraseText = 'Érase    una    vez . . .'
const eraseArray = eraseText.split('')

const equipo = [
  {
    nombre: 'Seño Raquel. (Raquel Sánchez)',
    rol: 'Directora y Educadora Infantil',
    desc: `Hola queridos papás y mamás, me llamo Raquel, soy Técnico Superior en Educación Infantil y Graduada en Magisterio Infantil. Me ocupo de la dirección del centro. Aprendo cada día de nuestros niños y comparto sus logros y avances.

Recuerdo mi infancia entre tizas de colores y muñecos sentados en fila escuchando atentos lo que cada día les preparaba para enseñarles. Poco a poco la niña fue creciendo y el sueño se volvió realidad. Mi oportunidad ha llegado y ahora todo es de verdad, siendo aún más bonito de cuando solo era un juego.

Me siento afortunada de formar parte de este equipo, por su trayectoria, su profesionalidad y sobre todo por el trabajo que llevamos a cabo día a día, hora tras hora, sin perder la sonrisa.`,
    img: new URL('@/assets/img/equipo/equipo1.jpg', import.meta.url).href,
  },
  {
    nombre: 'Seño Loles (María Dolores Velázquez)',
    rol: 'Educadora Infantil',
    desc: `Hola, mi nombre es Loles

Soy Técnico Especialista en Jardín de Infancia y Maestra en especialidad de Educación Musical.

Desarrollo este trabajo desde hace más de 17 años, aún así disfruto con mi trabajo como el primer día.

Me considero muy afortunada de poder disfrutar de los pequeños-grandes logros que con una canción, un cuento, un juego o una ficha mis niños van consiguiendo casi sin darse cuenta.

Vivo mi profesión como lo que es, algo totalmente vocacional y que me llena por completo.`,
    img: new URL('@/assets/img/equipo/equipo2.jpg', import.meta.url).href,
  },
  {
    nombre: 'Seño Mayte (María Teresa Fajardo)',
    rol: 'Educadora Infantil',
    desc: `Hola, me llamo Mayte y soy Maestra en la especialidad de Educación Infantil.

Trabajo en La Casita desde hace  más de 7 años, formamos una gran familia y me siento muy orgullosa de trabajar en este gran equipo.

Entre mis objetivos está el lograr que nuestros niños adquieran pautas de convivencia, hábitos y rutinas, desarrollando así su autonomía personal y su autoestima. Pero mi objetivo principal es que vengan contentos al cole, que sean felices y formemos parte de su familia. Para todo ello cuento con un ingrediente fundamental “Muchísimo cariño”.`,
    img: new URL('@/assets/img/equipo/equipo3.jpg', import.meta.url).href,
  },
  {
    nombre: 'Seño Sefi (Josefa González)',
    rol: 'Educadora Infantil',
    desc: `Hola, mi nombre es Sefi, soy técnico en Educación Infantil y mi función en este centro es la de apoyo. Atiendo el comedor, sustituyo si falta la seño titular de alguna clase, ayudo a los cambios, a las fichas que precisan tempera, etc. ¿Lo mejor de estar de apoyo?…. ¡que llego a conocer a todos los niños de la escuela!

Mi trabajo con los pequeños me hace feliz pues tengo verdadera vocación y disfruto muchísimo con ellos. Resulta muy gratificante observar su evolución.

¡SOMOS UN GRAN EQUIPO!`,
    img: new URL('@/assets/img/equipo/equipo4.jpg', import.meta.url).href,
  },
]
const abiertoIndex = ref(null)
function toggleDesc(idx) {
  abiertoIndex.value = abiertoIndex.value === idx ? null : idx
}
</script>

<style scoped>
/* ---- COLORIDO "Érase una vez..." ---- */
.erase-colorido {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Poppins', 'Comic Sans MS', cursive, sans-serif;
  font-size: 1.8em;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin-bottom: 0.12em;
  user-select: none;
  text-align: left;
  gap: 0.08em;
}
.erase-colorido span {
  display: inline-block;
  padding: 0 0.04em;
  margin: 0 0.01em;
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
  --rot: -6deg;
  text-shadow:
    0 2px 0 #fff,
    0 4px 8px #00000010;
  animation: bounceErase 1.7s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.2, 0.3, 1.6);
}
.erase-colorido span:nth-child(1) {
  color: #b6d330;
  --rot: -7deg;
  animation-delay: 0s;
}
.erase-colorido span:nth-child(2) {
  color: #fd2b7a;
  --rot: 3deg;
  animation-delay: 0.2s;
}
.erase-colorido span:nth-child(3) {
  color: #ff9a21;
  --rot: -2deg;
  animation-delay: 0.4s;
}
.erase-colorido span:nth-child(4) {
  color: #3fd6f5;
  --rot: 5deg;
  animation-delay: 0.1s;
}
.erase-colorido span:nth-child(5) {
  color: #fd2b7a;
  --rot: -6deg;
  animation-delay: 0.3s;
}
.erase-colorido span:nth-child(6) {
  color: #ffe546;
  --rot: 4deg;
  animation-delay: 0.6s;
}
.erase-colorido span:nth-child(7) {
  color: #ff6b01;
  --rot: -2deg;
  animation-delay: 0.5s;
}
.erase-colorido span:nth-child(8) {
  color: #43e889;
  --rot: 7deg;
  animation-delay: 0.4s;
}
.erase-colorido span:hover {
  filter: brightness(1.12) drop-shadow(0 2px 12px #0002);
}

@keyframes bounceErase {
  0%,
  100% {
    transform: translateY(0) scale(1) rotate(var(--rot));
  }
  25% {
    transform: translateY(-17%) scale(1.09) rotate(var(--rot));
  }
  35% {
    transform: translateY(-38%) scale(1.15) rotate(var(--rot));
  }
  55% {
    transform: translateY(-13%) scale(1.05) rotate(var(--rot));
  }
  75% {
    transform: translateY(0) scale(1) rotate(var(--rot));
  }
}

/* ---- SECCIÓN EQUIPO ---- */
.equipo-section {
  padding: 1.2em 0 0.7em 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1150px;
  background: linear-gradient(
    100deg,
    var(--casita-turquesa-suave, #e7fbfa) 70%,
    var(--casita-rosa-suave, #ffd2ea) 100%
  );
}
.equipo-bienvenida {
  margin-bottom: 1.4em;
  text-align: left;
  color: var(--casita-negro, #252525);
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 1em;
  padding: 0 0.5em;
}
.equipo-titulo {
  color: var(--casita-turquesa, #00bfff);
  font-size: 1.25em;
  font-weight: 800;
  margin-bottom: 0.17em;
  letter-spacing: 0.01em;
}
.equipo-subtitulo {
  color: var(--casita-rosa, #fd2b7a);
  font-size: 1.08em;
  font-weight: 700;
  margin-bottom: 1em;
  line-height: 1.18;
  text-align: center;
}
.equipo-bienvenida p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 1.1em;
  color: #252525;
  text-align: left;
}
.equipo-bienvenida strong {
  color: var(--casita-turquesa, #00bfff);
  font-weight: 700;
}
.equipo-continuacion {
  color: var(--casita-turquesa, #00bfff);
  font-size: 1.1em;
  font-style: italic;
  margin-bottom: 1.3em;
}

/* ---- GRID DE CARDS ---- */
.equipo-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile first: una por fila */
  gap: 2em;
  align-items: start;
}

.equipo-card {
  position: relative;
  background: linear-gradient(
    120deg,
    var(--casita-rosa-suave, #ffd2ea) 18%,
    var(--casita-turquesa-suave, #d2f3ff) 68%,
    var(--casita-naranja-suave, #ffe1c2) 100%
  );
  border-radius: 2em;
  box-shadow: 0 2px 16px #a4ce3914;
  padding: 2em 1.5em 2.2em 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.22s,
    box-shadow 0.22s;
  overflow: visible;
  min-height: 270px;
}
.equipo-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 36px #a4ce3966;
}
.equipo-card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1.1em;
  border: 3px solid var(--casita-verde, #a4ce39);
  background: var(--casita-blanco, #fff);
  box-shadow: 0 2px 8px #a4ce3930;
}
.equipo-card h2 {
  color: var(--casita-verde, #a4ce39);
  font-size: 1.18em;
  margin-bottom: 0.33em;
  font-weight: 700;
}
.equipo-card .rol {
  color: var(--casita-turquesa, #00bfff);
  font-size: 0.97em;
  margin-bottom: 1em;
  font-weight: 600;
}
.btn-ver-mas {
  background: linear-gradient(90deg, var(--casita-turquesa), var(--casita-verde));
  color: #fff;
  border: none;
  border-radius: 1.2em;
  padding: 0.35em 1.2em;
  margin: 1em 0 0.7em 0;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 0 2px 12px #00bfff25;
  transition:
    background 0.15s,
    transform 0.15s,
    box-shadow 0.2s;
}
.btn-ver-mas:hover {
  background: linear-gradient(90deg, var(--casita-verde), var(--casita-turquesa));
  transform: scale(1.07);
}

/* ---- ALFOMBRA DESLIZANTE ---- */
.equipo-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile first: una por fila */
  gap: 2em;
  align-items: start;
}

.equipo-card {
  position: relative;
  background: linear-gradient(
    120deg,
    var(--casita-rosa-suave, #ffd2ea) 18%,
    var(--casita-turquesa-suave, #d2f3ff) 68%,
    var(--casita-naranja-suave, #ffe1c2) 100%
  );
  border-radius: 2em;
  box-shadow: 0 2px 16px #a4ce3914;
  padding: 2em 1.5em 2.2em 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.22s,
    box-shadow 0.22s;
  overflow: visible;
  min-height: 270px;
}
.equipo-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 36px #a4ce3966;
}
.equipo-card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1.1em;
  border: 3px solid var(--casita-verde, #a4ce39);
  background: var(--casita-blanco, #fff);
  box-shadow: 0 2px 8px #a4ce3930;
}
.equipo-card h2 {
  color: var(--casita-verde, #a4ce39);
  font-size: 1.18em;
  margin-bottom: 0.33em;
  font-weight: 700;
}
.equipo-card .rol {
  color: var(--casita-turquesa, #00bfff);
  font-size: 0.97em;
  margin-bottom: 1em;
  font-weight: 600;
}
.btn-ver-mas {
  background: linear-gradient(90deg, var(--casita-turquesa), var(--casita-verde));
  color: #fff;
  border: none;
  border-radius: 1.2em;
  padding: 0.35em 1.2em;
  margin: 1em 0 0.7em 0;
  font-weight: 700;
  font-size: 1em;
  cursor: pointer;
  box-shadow: 0 2px 12px #00bfff25;
  transition:
    background 0.15s,
    transform 0.15s,
    box-shadow 0.2s;
}
.btn-ver-mas:hover {
  background: linear-gradient(90deg, var(--casita-verde), var(--casita-turquesa));
  transform: scale(1.07);
}

/* ---- ALFOMBRA DESLIZANTE ---- */
.alfombra-desc {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin-top: 0.7em;
  background: #fff9e6;
  border-radius: 1em;
  box-shadow: 0 4px 22px #a4ce3912;
  padding: 0 1em;
  transition:
    max-height 1.2s cubic-bezier(0.55, 0.13, 0.19, 1.01),
    opacity 0.9s,
    padding 0.8s;
}
.alfombra-desc.alfombra-open {
  max-height: 1000px; /* Cambia si algún texto es aún más largo */
  opacity: 1;
  padding: 1.2em 1em;
}

/* Para el fade del contenido interno al abrir/cerrar */
.alfombra-contenido-enter-active,
.alfombra-contenido-leave-active {
  transition: opacity 0.33s;
}
.alfombra-contenido-enter-from,
.alfombra-contenido-leave-to {
  opacity: 0;
}
.alfombra-contenido-enter-to,
.alfombra-contenido-leave-from {
  opacity: 1;
}

/* ---- ESCRITORIO: 2 columnas ---- */
@media (min-width: 700px) {
  .equipo-section {
    padding-top: 2.5em;
    padding-bottom: 2em;
  }
  .equipo-bienvenida {
    margin-bottom: 2.2em;
    font-size: 1.1em;
    padding: 0 1em;
  }
  .equipo-titulo {
    font-size: 2.2em;
  }
  .equipo-subtitulo {
    font-size: 1.38em;
  }
  .equipo-bienvenida p {
    font-size: 1.15em;
  }
  .equipo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .equipo-card img {
    width: 110px;
    height: 110px;
  }
}
</style>
