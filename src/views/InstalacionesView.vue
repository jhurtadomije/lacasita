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
        <img :src="item.img" :alt="item.nombre" />
        <h2>{{ item.nombre }}</h2>
        <p>{{ item.desc }}</p>
      </div>
    </div>
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
      desc: 'Nuestro centro en Maracena, moderno y accesible.',
    },
  ],
}
</script>

<style scoped>
.instalaciones-section {
  padding-top: 2em;
}
.tabs {
  display: flex;
  gap: 1em;
  margin: 2em 0 1.5em 0;
  justify-content: center;
  flex-wrap: wrap;
}
.tab-btn {
  background: var(--casita-blanco);
  border: 2px solid var(--casita-naranja);
  color: var(--casita-naranja);
  border-radius: 2em;
  font-weight: 600;
  padding: 0.6em 1.7em;
  font-size: 1.05em;
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
.instalaciones-galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2em;
  margin-top: 2em;
}
.instalacion-card {
  background: var(--casita-naranja-suave);
  border-radius: 1.5em;
  box-shadow: 0 2px 16px #f7931e21;
  padding: 1em 1em 1.5em 1em;
  text-align: center;
}
.instalacion-card img {
  border-radius: 1em;
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin-bottom: 1em;
}
.instalacion-card h2 {
  color: var(--casita-naranja);
  margin-bottom: 0.5em;
}
.instalacion-card p {
  color: var(--casita-negro);
  font-size: 1em;
  margin-bottom: 0;
}
</style>
