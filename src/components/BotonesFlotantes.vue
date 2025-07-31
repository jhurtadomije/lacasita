<template>
  <!-- Botón subir a la derecha -->
  <button class="btn-fab btn-top" @click="scrollToTop" aria-label="Subir arriba">
    <!-- Flecha arriba Material Design -->
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 19V5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" />
      <path
        d="M6 11l6-6 6 6"
        stroke="#fff"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  <!-- Redes sociales (izquierda) -->
  <div class="fab-social-col">
    <a
      href="https://facebook.com/tucuenta"
      target="_blank"
      rel="noopener"
      class="btn-fab btn-facebook"
      aria-label="Facebook"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#1877F3" />
        <path
          d="M22.3 16.1h-4.2v9.2h-3.5v-9.2h-2.1v-2.8h2.1v-1.6c0-2.4 1.1-3.8 4.1-3.8h2.6v2.8h-1.6c-1.1 0-1.1.4-1.1 1.1v1.5h2.7l-.3 2.8z"
          fill="#fff"
        />
      </svg>
    </a>
    <!-- Instagram oficial -->
    <a
      href="https://instagram.com/tucuenta"
      class="btn-fab btn-instagram"
      target="_blank"
      rel="noopener"
      aria-label="Instagram"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 448 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="448" height="512" rx="120" fill="url(#insta-gradient)" />
        <circle cx="224" cy="256" r="90" stroke="#fff" stroke-width="34" />
        <circle cx="343" cy="169" r="24" fill="#fff" />
        <defs>
          <linearGradient id="insta-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fd5" />
            <stop offset="50%" stop-color="#fd2b7a" />
            <stop offset="100%" stop-color="#285AEB" />
          </linearGradient>
        </defs>
      </svg>
    </a>
    <!-- WhatsApp oficial -->
    <a
      href="https://wa.me/34600000000"
      class="btn-fab btn-whatsapp"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 448 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="224" cy="256" r="192" fill="#25D366" />
        <path
          d="M309 315c-11-5-30-15-34-17s-8-3-12 3-14 17-17 20-6 4-11 1a152 152 0 01-46-28 172 172 0 01-32-41c-3-5 0-8 2-11 2-2 5-5 7-8s3-5 5-8c2-4 1-7 0-9s-12-28-17-39c-4-11-8-10-11-10h-9c-4 0-8 1-12 5-3 3-16 16-16 39s17 45 19 48c2 3 34 54 82 73 49 20 49 14 58 13 9-1 29-12 33-23 4-11 4-21 3-22-2-2-6-3-11-5z"
          fill="#fff"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Botón subir derecha */
.btn-top {
  position: fixed;
  right: 1.2rem;
  bottom: 2.6rem;
  z-index: 2001;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 50%, #00bfff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px #00bfff4a;
  color: #fff;
  border: none;
  cursor: pointer;
  transition:
    transform 0.19s,
    box-shadow 0.19s;
  font-size: 1.38rem;
}
.btn-top:hover {
  filter: brightness(1.13);
  transform: scale(1.09) translateY(-3px);
  box-shadow: 0 6px 32px #00bfff34;
}

/* Columna redes sociales izquierda */
.fab-social-col {
  position: fixed;
  left: 1.2rem;
  bottom: 2.1rem;
  z-index: 2001;
  display: flex;
  flex-direction: column;
  gap: 1.17rem;
}

/* Botones redes */
.btn-fab {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 16px #00bfff32;
  font-size: 1.38rem;
  transition:
    transform 0.19s,
    box-shadow 0.19s;
  background: #00bfff;
  outline: none;
}
.btn-instagram {
  background: linear-gradient(135deg, #fd5 0%, #fd2b7a 50%, #285aeb 100%);
}
.btn-whatsapp {
  background: #25d366;
}
.btn-fab:hover {
  filter: brightness(1.15) drop-shadow(0 2px 14px #0001);
  transform: scale(1.09) translateY(-2px);
  box-shadow: 0 6px 32px #00bfff34;
}

/* Responsive tamaños */
@media (max-width: 600px) {
  .btn-fab,
  .btn-top {
    width: 46px;
    height: 46px;
  }
  .fab-social-col {
    gap: 0.8rem;
    left: 0.5rem;
    bottom: 1.1rem;
  }
  .btn-top {
    right: 0.5rem;
    bottom: 1.1rem;
  }
}
</style>
