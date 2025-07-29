<template>
  <CasitaHeader />
  <main>
    <router-view />
  </main>
  <CasitaFooter />
</template>

<script setup>
import CasitaHeader from './components/CasitaHeader.vue'
import CasitaFooter from './components/CasitaFooter.vue'
</script>
