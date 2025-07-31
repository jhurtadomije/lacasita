<template>
  <CasitaHeader />
  <main>
    <BotonesFlotantes />
    <transition name="page-fade" mode="out-in">
      <router-view />
    </transition>
  </main>
  <CasitaFooter />
</template>

<script setup>
import CasitaHeader from './components/CasitaHeader.vue'
import CasitaFooter from './components/CasitaFooter.vue'
import BotonesFlotantes from './components/BotonesFlotantes.vue'
</script>

<style>
/* Animación para el cambio de páginas */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 1.2s cubic-bezier(0.66, 0.14, 0.38, 1.03);
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
