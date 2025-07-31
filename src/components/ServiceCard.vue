<template>
  <div
    class="service-flip-card"
    :class="{ flipped }"
    @click="flipped = !flipped"
    tabindex="0"
    @keyup.enter="flipped = !flipped"
  >
    <div class="service-flip-card-inner">
      <div class="service-flip-card-front">
        <h2>{{ title }}</h2>
        <span class="service-icon">
          <slot name="icon"></slot>
        </span>
        <p>{{ summary }}</p>
        <span class="ver-mas">Ver más</span>
      </div>
      <div class="service-flip-card-back">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <span class="back-tip">Volver</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
  summary: String,
  description: String,
})
const flipped = ref(false)
</script>

<style scoped>
.service-flip-card {
  width: 97vw;
  max-width: 420px;
  min-width: 220px;
  min-height: 20em;
  height: 30em;
  perspective: 1200px;
  cursor: pointer;
  margin: 0 auto 1.2em auto;
  transition:
    box-shadow 0.16s,
    transform 0.15s;
  display: flex;
}

.service-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 20em;
  transition: transform 0.64s cubic-bezier(0.53, -0.02, 0.31, 1.09);
  transform-style: preserve-3d;
}

.service-flip-card.flipped .service-flip-card-inner {
  transform: rotateY(180deg);
}

.service-flip-card-front,
.service-flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 20em;
  background: #fff;
  border-radius: 1.5em;
  box-sizing: border-box;
  box-shadow: 0 2px 18px #00bfff22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.4em 1em 1.4em 1em;
  backface-visibility: hidden;
  transition: box-shadow 0.2s;
}

.service-flip-card-front {
  z-index: 2;
  background: linear-gradient(
    120deg,
    var(--casita-rosa-suave, #ffd2ea) 20%,
    var(--casita-turquesa-suave, #d2f3ff) 70%,
    var(--casita-naranja-suave, #ffe1c2) 100%
  );
}
.service-flip-card-back {
  z-index: 1;
  background: linear-gradient(120deg, #fff4fd 70%, #e7fbe0 100%);
  transform: rotateY(180deg);
}

/* --- Icono y títulos --- */
.service-icon {
  font-size: 3.2em;
  margin-bottom: 0.6em;
  margin-top: 0.5em;
  display: block;
}
h2 {
  margin-top: 0.1em;
  color: var(--casita-turquesa, #00bfff);
  margin-bottom: 0.6em;
  font-size: 1.8em;
  text-align: center;
}
.service-flip-card-front p,
.service-flip-card-back p {
  color: var(--casita-rosa);
  font-size: 1.12em;
  text-align: center;
  margin-bottom: 0.6em;
  margin-top: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}

/* --- Botones de acción --- */
.ver-mas,
.back-tip {
  display: inline-block;
  margin-top: auto;
  margin-bottom: 0.7em;
  color: var(--casita-naranja, #f7931e);
  background: var(--casita-blanco, #fff);
  font-weight: 600;
  font-size: 1em;
  border-radius: 1em;
  padding: 0.35em 1.2em;
  box-shadow: 0 2px 8px #f7931e11;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    transform 0.14s;
  user-select: none;
  align-self: center;
}
.service-flip-card-front:hover .ver-mas,
.service-flip-card-front:focus .ver-mas,
.service-flip-card-back:hover .back-tip,
.service-flip-card-back:focus .back-tip {
  background: var(--casita-naranja, #f7931e);
  color: var(--casita-blanco, #fff);
  box-shadow: 0 4px 16px #f7931e33;
  transform: scale(1.07);
}

/* --- Responsive --- */
@media (max-width: 700px) {
  .service-flip-card {
    width: 98vw;
    max-width: 98vw;
    min-width: 92vw;
    min-height: 20em;
  }
  .service-flip-card-inner,
  .service-flip-card-front,
  .service-flip-card-back {
    min-height: 20em;
    padding: 1.1em 0.7em 1.1em 0.7em;
  }
  .service-icon {
    font-size: 3.7em !important;
  }
  h3 {
    font-size: 1.17em !important;
  }
  .service-flip-card-front p,
  .service-flip-card-back p {
    font-size: 1.13em !important;
  }
}
@media (min-width: 900px) {
  .service-flip-card {
    width: 100%;
    max-width: 440px;
    min-height: 22em;
    margin: 0 1em 2em 1em;
  }
  .service-icon {
    font-size: 3.2em;
  }
  h3 {
    font-size: 1.34em;
  }
}
</style>
