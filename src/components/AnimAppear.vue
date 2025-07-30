<template>
  <div
    ref="el"
    :class="['anim-appear', animation, { visible: inView }]"
    :style="{ '--delay': `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { animation, delay } = defineProps({
  animation: { type: String, default: 'fade-up' },
  delay: { type: Number, default: 0 },
})

// Si quieres que siempre se vea al cargar arriba del todo
const inView = ref(false)
const el = ref(null)
let observer = null

onMounted(() => {
  // Si la página está arriba al cargar, muestra la animación igualmente
  if (window.scrollY < 50 && el.value) {
    inView.value = true
  }
  observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) inView.value = true
    },
    { threshold: 0 },
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer && el.value) observer.disconnect()
})
</script>

<style scoped>
.anim-appear {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 1.1s cubic-bezier(0.53, 0, 0.19, 1) var(--delay, 0ms),
    transform 1s cubic-bezier(0.45, 0.01, 0.17, 1.09) var(--delay, 0ms);
  will-change: opacity, transform;
}
.anim-appear.visible {
  opacity: 1;
  transform: none;
}
.anim-appear.fade-down {
  transform: translateY(-60px);
}
.anim-appear.zoom-in {
  transform: scale(0.8);
}
.anim-appear.slide-left {
  transform: translateX(-70px);
}
.anim-appear.slide-right {
  transform: translateX(70px);
}
</style>
