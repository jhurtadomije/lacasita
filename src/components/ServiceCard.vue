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
        <span class="service-icon">
          <slot name="icon"></slot>
        </span>
        <h3>{{ title }}</h3>
        <p>{{ summary }}</p>
        <span class="ver-mas">Ver más</span>
      </div>
      <div class="service-flip-card-back">
        <h3>{{ title }}</h3>
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
  width: 100%;
  max-width: 380px;
  min-height: 370px;
  perspective: 1200px;
  cursor: pointer;
  margin: auto;
}
.service-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 370px;
  transition: transform 0.64s cubic-bezier(0.53, -0.02, 0.31, 1.09);
  transform-style: preserve-3d;
}
.service-flip-card.flipped .service-flip-card-inner {
  transform: rotateY(180deg);
}

/* --- Caras de la card --- */
.service-flip-card-front,
.service-flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 370px;
  max-height: 370px;
  overflow: hidden;
  padding: 2.1em 1.4em 2.3em 1.4em;
  border-radius: 2em;
  box-sizing: border-box;
  box-shadow: 0 4px 18px #00bfff22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  backface-visibility: hidden;
  transition: box-shadow 0.2s;
}
.service-flip-card-front {
  z-index: 2;
  background: linear-gradient(
    120deg,
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
  font-size: 2.7em;
  margin-bottom: 1em;
  margin-top: 0.9em;
  display: block;
}
h3 {
  margin-top: 0.1em;
  color: var(--casita-turquesa, #00bfff);
  margin-bottom: 0.6em;
  font-size: 1.28em;
  text-align: center;
}
.service-flip-card-front p,
.service-flip-card-back p {
  font-size: 1.04em;
  text-align: center;
  margin-bottom: 0.8em;
  margin-top: 0;
  flex: 1 1 auto;
  max-height: 7.2em;
  overflow-y: auto;
}

/* --- Botones de acción --- */
.ver-mas,
.back-tip {
  display: inline-block;
  margin-top: auto;
  margin-bottom: 0.6em;
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
@media (max-width: 600px) {
  .service-flip-card,
  .service-flip-card-inner,
  .service-flip-card-front,
  .service-flip-card-back {
    min-height: 220px;
    max-width: 98vw;
  }
}
</style>
