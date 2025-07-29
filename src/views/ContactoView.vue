<template>
  <section class="contacto-section">
    <ContactoForm />
  </section>
</template>

<script setup>
import ContactoForm from '@/components/ContactoForm.vue'
</script>

<style scoped>
.contacto-section {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    100deg,
    var(--casita-turquesa-suave) 80%,
    var(--casita-rosa-suave) 100%
  );
}
</style>
