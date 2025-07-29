<template>
  <transition name="fade-down">
    <header class="casita-header" v-show="showHeader">
      <div class="header-flex">
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo-la-casita-Maracena450.jpg" alt="CEI La Casita" />
        </router-link>
        <!-- Hamburguesa solo se ve en móvil -->
        <button
          class="hamburger"
          @click="toggleMenu"
          :aria-expanded="menuOpen"
          aria-label="Abrir menú"
        >
          <span :class="{ bar: true, bar1: true, open: menuOpen }"></span>
          <span :class="{ bar: true, bar2: true, open: menuOpen }"></span>
          <span :class="{ bar: true, bar3: true, open: menuOpen }"></span>
        </button>
        <!-- MENÚ: SIEMPRE RENDERIZADO, pero solo 'open' en móvil si se pulsa -->
        <nav :class="{ open: menuOpen || isDesktop }">
          <router-link
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            @click="closeMenu"
            :class="{ active: $route.path === item.to }"
          >
            {{ item.text }}
          </router-link>
        </nav>
      </div>
      <div v-if="menuOpen && !isDesktop" class="nav-backdrop" @click="closeMenu"></div>
    </header>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const showHeader = ref(false)
const isDesktop = ref(window.innerWidth >= 900)

const menu = [
  { to: '/', text: 'Inicio' },
  { to: '/bienvenida', text: 'Bienvenida' },
  { to: '/equipo', text: 'Equipo' },
  { to: '/instalaciones', text: 'Instalaciones' },
  { to: '/blog', text: 'Blog' },
  { to: '/contacto', text: 'Contacto' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}

function updateDesktop() {
  isDesktop.value = window.innerWidth >= 900
  if (isDesktop.value) menuOpen.value = false
}

onMounted(() => {
  showHeader.value = true
  window.addEventListener('resize', updateDesktop)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateDesktop)
})
</script>

<style scoped>
.casita-header {
  background: linear-gradient(120deg, rgba(255, 77, 166, 0.93), rgba(0, 191, 255, 0.87));
  box-shadow: 0 2px 12px #00bfff33;
  position: sticky;
  top: 0;
  z-index: 1200;
}
.header-flex {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em 1.1em;
  position: relative;
}
.logo {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
}

.logo img {
  height: 56px;
  width: auto;
  border-radius: 0.8em;
  background: #fff;
  box-shadow: 0 2px 8px #00bfff15;
  transition: filter 0.18s;
}
.logo:hover img {
  filter: brightness(1.06);
}
/* HAMBURGUESA */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2em;
  z-index: 1101;
  margin-left: auto;
}
.bar {
  width: 32px;
  height: 4px;
  background: var(--casita-blanco);
  border-radius: 2.3px;
  transition: all 0.8s cubic-bezier(0.83, 0.01, 0.35, 1.31);
  display: block;
  position: relative;
}
.bar1.open {
  transform: translateY(10px) rotate(45deg);
}
.bar2.open {
  opacity: 0;
  transform: scaleX(0.5);
}
.bar3.open {
  transform: translateY(-10px) rotate(-45deg);
}
/* MENÚ SLIDE, MOBILE FIRST */
nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.99);
  box-shadow: 0 8px 32px #00bfff18;
  border-radius: 0 0 1.5em 1.5em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.39s cubic-bezier(0.77, 0, 0.18, 1),
    opacity 0.19s;
  z-index: 1100;
}
nav.open {
  max-height: 330px; /* ajusta según la cantidad de links */
  opacity: 1;
  pointer-events: auto;
}
nav a {
  color: var(--casita-turquesa);
  font-weight: 600;
  text-decoration: none;
  font-size: 1.18em;
  letter-spacing: 0.02em;
  position: relative;
  padding: 0.4em 0.9em;
  border-radius: 1.2em;
  transition:
    background 0.14s,
    color 0.14s;
}
nav a.active,
nav a:hover {
  background: var(--casita-turquesa-suave);
  color: var(--casita-verde);
}
.nav-backdrop {
  display: block;
  position: fixed;
  inset: 0;
  background: #0002;
  z-index: 1050;
  backdrop-filter: blur(2px);
}
/* ANIMACIONES */
.fade-down-enter-active {
  animation: fadeDownIn 0.7s cubic-bezier(0.25, 0.8, 0.35, 1) both;
}
.fade-down-leave-active {
  animation: fadeDownOut 0.3s cubic-bezier(0.25, 0.8, 0.35, 1) both;
}
@keyframes fadeDownIn {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeDownOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.slide-right-enter-active {
  animation: slideRightIn 0.7s cubic-bezier(0.42, 0, 0.42, 1.24) both;
}
.slide-right-leave-active {
  animation: slideRightOut 0.3s cubic-bezier(0.5, 0, 0.75, 1.06) both;
}
@keyframes slideRightIn {
  from {
    right: -110vw;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
}
@keyframes slideRightOut {
  from {
    right: 0;
    opacity: 1;
  }
  to {
    right: -110vw;
    opacity: 0;
  }
}
/* DESKTOP: A partir de 900px */
@media (min-width: 900px) {
  .header-flex {
    flex-direction: row;
    padding: 0.9em 2em;
  }
  .logo img {
    height: 78px;
  }
  .hamburger {
    display: none;
  }
  nav,
  nav.open {
    /* Horizontal en desktop, SIEMPRE visible y estático */
    position: static;
    height: auto;
    width: auto;
    background: transparent;
    box-shadow: none;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 1.2em;
    display: flex;
    right: unset !important;
    opacity: 1 !important;
  }
  .nav-backdrop {
    display: none;
  }
  nav a {
    color: var(--casita-blanco);
    font-size: 1.1em;
    background: none;
    padding: 0.33em 0.7em;
  }
  nav a.active,
  nav a:hover {
    background: var(--casita-rosa-suave);
    color: var(--casita-turquesa);
  }
}
</style>
