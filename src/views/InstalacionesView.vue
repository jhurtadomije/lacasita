<template>
  <section class="instalaciones-section container">
    <h1>Instalaciones</h1>
    <p>
      Descubre nuestras aulas, patio y espacios educativos diseñados para el aprendizaje y el juego
      seguro.
    </p>

    <!-- Tabs para cambiar de categoría -->
    <div class="tabs">
      <button
        v-for="cat in categorias"
        :key="cat"
        :class="['tab-btn', { active: categoria === cat }]"
        @click="categoria = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Galería según la categoría -->
    <div class="instalaciones-galeria">
      <div class="instalacion-card" v-for="item in instalaciones[categoria]" :key="item.img">
        <img
          :src="item.img"
          :alt="item.nombre"
          class="zoomable-img"
          @click="abrirModal(item.img, item.nombre)"
          style="cursor: pointer"
        />
        <p>{{ item.desc }}</p>
      </div>
    </div>

    <!-- MODAL -->
    <transition name="modal-fade">
      <div v-if="modalAbierto" class="modal-overlay" @click.self="cerrarModal">
        <div class="modal-img-container">
          <button class="modal-close" @click="cerrarModal" aria-label="Cerrar">&times;</button>
          <img :src="modalImg" :alt="modalAlt" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const categoria = ref('Aulas')
const categorias = ['Aulas', 'Cocina', 'WC', 'Fachada']

const instalaciones = {
  Aulas: [
    {
      nombre: 'Aula 1',
      img: new URL('@/assets/img/instalaciones/aulas/aula1.jpg', import.meta.url).href,
      desc: 'Espacio para los más pequeños, lleno de color y juegos.',
    },
    {
      nombre: 'Aula 2',
      img: new URL('@/assets/img/instalaciones/aulas/aula2.jpg', import.meta.url).href,
      desc: 'Ambiente luminoso para aprender experimentando.',
    },
    {
      nombre: 'Aula 3',
      img: new URL('@/assets/img/instalaciones/aulas/aula3.jpg', import.meta.url).href,
      desc: 'Zona adaptada para actividades grupales y creativas.',
    },
    {
      nombre: 'Aula 4',
      img: new URL('@/assets/img/instalaciones/aulas/aula4.jpg', import.meta.url).href,
      desc: 'Perfecta para talleres de música y expresión artística.',
    },
    {
      nombre: 'Aula 5',
      img: new URL('@/assets/img/instalaciones/aulas/aula5.jpg', import.meta.url).href,
      desc: 'Rincón de cuentos, lectura y relajación.',
    },
    {
      nombre: 'Aula 6',
      img: new URL('@/assets/img/instalaciones/aulas/aula6.jpg', import.meta.url).href,
      desc: 'Aula multiusos, juegos simbólicos y psicomotricidad.',
    },
    {
      nombre: 'Aula 7',
      img: new URL('@/assets/img/instalaciones/aulas/aula7.jpg', import.meta.url).href,
      desc: 'Aprendizaje cooperativo y actividades libres.',
    },
    {
      nombre: 'Aula 8',
      img: new URL('@/assets/img/instalaciones/aulas/aula8.jpg', import.meta.url).href,
      desc: 'Materiales didácticos y juegos sensoriales.',
    },
    {
      nombre: 'Aula 9',
      img: new URL('@/assets/img/instalaciones/aulas/aula9.jpg', import.meta.url).href,
      desc: 'Espacio seguro para la creatividad y la diversión.',
    },
    {
      nombre: 'Aula 10',
      img: new URL('@/assets/img/instalaciones/aulas/aula10.jpg', import.meta.url).href,
      desc: 'Ambiente tranquilo para el desarrollo emocional.',
    },
  ],
  Cocina: [
    {
      nombre: 'Cocina 1',
      img: new URL('@/assets/img/instalaciones/cocina/cocina1.jpg', import.meta.url).href,
      desc: 'Cocina equipada para menús caseros y saludables.',
    },
    {
      nombre: 'Cocina 2',
      img: new URL('@/assets/img/instalaciones/cocina/cocina2.jpg', import.meta.url).href,
      desc: 'Instalaciones modernas y seguras para la alimentación de los peques.',
    },
  ],
  WC: [
    {
      nombre: 'WC 1',
      img: new URL('@/assets/img/instalaciones/wc/wc1.jpg', import.meta.url).href,
      desc: 'Baño adaptado para los niños, limpio y seguro.',
    },
    {
      nombre: 'WC 2',
      img: new URL('@/assets/img/instalaciones/wc/wc2.jpg', import.meta.url).href,
      desc: 'Higiene y comodidad en cada detalle.',
    },
    {
      nombre: 'WC 3',
      img: new URL('@/assets/img/instalaciones/wc/wc3.jpg', import.meta.url).href,
      desc: 'Espacio adaptado y accesible para todas las edades.',
    },
    {
      nombre: 'WC 4',
      img: new URL('@/assets/img/instalaciones/wc/wc4.jpg', import.meta.url).href,
      desc: 'Colores y diseño para sentirse como en casa.',
    },
  ],
  Fachada: [
    {
      nombre: 'Fachada',
      img: new URL('@/assets/img/instalaciones/fachada/fachada.jpg', import.meta.url).href,
      desc: 'Nuestro centro en Maracena.',
    },
  ],
}
// Modal
const modalAbierto = ref(false)
const modalImg = ref('')
const modalAlt = ref('')

function abrirModal(img, alt) {
  modalImg.value = img
  modalAlt.value = alt
  modalAbierto.value = true
}
function cerrarModal() {
  modalAbierto.value = false
}
</script>

<style scoped>
.instalaciones-section {
  padding-top: 1.2em;
  padding-bottom: 1.1em;
  min-height: 60vh;
}

/* Títulos */
.instalaciones-section h1 {
  text-align: center;
  color: var(--casita-turquesa);
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 0.2em;
}

.instalaciones-section > p {
  text-align: center;
  color: var(--casita-negro);
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 1.5em;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 0.7em;
  margin: 1.6em 0 1.2em 0;
  justify-content: center;
  flex-wrap: wrap;
}

.tab-btn {
  background: var(--casita-blanco);
  border: 2px solid var(--casita-naranja);
  color: var(--casita-naranja);
  border-radius: 2em;
  font-weight: 600;
  padding: 0.5em 1.3em;
  font-size: 1em;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
}
.tab-btn.active,
.tab-btn:hover {
  background: var(--casita-naranja);
  color: var(--casita-blanco);
  border-color: var(--casita-naranja);
}

/* Galería: Mobile primero (una columna) */
.instalaciones-galeria {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.3em;
  margin-top: 1.4em;
  margin-bottom: 0.7em;
}

.instalacion-card {
  background: linear-gradient(120deg, #fff5e7 70%, #d6f4ff 100%);
  border-radius: 1.1em;
  box-shadow: 0 2px 16px #00bfff10;
  padding: 1em 0.7em 1em 0.7em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    box-shadow 0.14s,
    transform 0.14s;
}

.instalacion-card:hover {
  box-shadow: 0 6px 26px #00bfff28;
  transform: translateY(-2px) scale(1.025);
}

/* Imagenes ajustadas */
.instalacion-card img {
  display: block;
  border-radius: 1em;
  max-width: 100%;
  width: auto;
  max-height: 9em;
  height: auto;
  object-fit: contain;
  margin-bottom: 0.9em;
  box-shadow: 0 0.13em 0.75em #0001;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
}

/* Título y texto de la card */
.instalacion-card h2 {
  color: var(--casita-naranja);
  font-size: 1.08em;
  font-weight: 800;
  margin-bottom: 0.38em;
}

.instalacion-card p {
  color: var(--casita-negro);
  font-size: 1em;
  margin-bottom: 0;
}
.zoomable-img {
  transition:
    box-shadow 0.18s,
    transform 0.18s;
}
.zoomable-img:hover {
  box-shadow: 0 6px 22px #00bfff24;
  transform: scale(1.04);
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: rgba(18, 36, 44, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-img-container {
  position: relative;
  background: #fff;
  border-radius: 1.2em;
  box-shadow: 0 10px 44px #0004;
  max-width: 94vw;
  max-height: 84vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em;
}
.modal-img-container img {
  max-width: 90vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  border-radius: 0.7em;
  background: #fafafa;
}
.modal-close {
  position: absolute;
  top: 0.29em;
  right: 0.7em;
  background: none;
  border: none;
  color: #00bfff;
  font-size: 2.2em;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  z-index: 2;
}
.modal-close:hover {
  color: #ff2b7a;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.26s cubic-bezier(0.7, 0.08, 0.33, 1);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Escritorio: varias columnas */
@media (min-width: 600px) {
  .instalaciones-galeria {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2em;
  }
  .instalaciones-section h1 {
    font-size: 2.3em;
  }
  .instalacion-card img {
    max-height: 11em;
  }
  .modal-img-container {
    padding: 0.13em;
    max-width: 99vw;
    max-height: 98vh;
  }
  .modal-img-container img {
    max-width: 98vw;
    max-height: 76vh;
  }
}
</style>
