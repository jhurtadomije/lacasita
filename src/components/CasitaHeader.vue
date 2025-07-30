<template>
  <transition name="fade-down">
    <header class="casita-header" v-show="showHeader">
      <div class="header-flex">
        <!-- Logo centrado en móvil, izquierda en desktop -->
        <router-link to="/" class="logo">
          <img src="@/assets/img/logo-la-casita-Maracena450.jpg" alt="CEI La Casita" />
        </router-link>
        <!-- Hamburguesa solo en móvil -->
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
        <!-- Menú siempre renderizado -->
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

.casita-header {
  background: linear-gradient(120deg, rgba(255, 77, 166, 0.93), rgba(0, 191, 255, 0.87));
  box-shadow: 0 2px 12px #00bfff33;
  position: sticky;
  top: 0;
  z-index: 1200;
}
.header-flex {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 4.4rem;
  padding: 0.7em 1.1em;
  box-sizing: border-box;
  max-width: 96vw;
  margin: 0 auto;
}

/* Logo: centrado absoluto móvil, izq en desktop */
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  height: 3.7rem;
  max-width: 44vw;
  width: auto;
  border-radius: 0.7em;
  background: #fff;
  box-shadow: 0 0.17em 0.6em #00bfff13;
  transition:
    filter 0.18s,
    transform 0.18s;
}
.logo img:hover {
  filter: brightness(1.07) drop-shadow(0 2px 10px #00bfff22);
  transform: scale(1.04) rotate(-1.5deg);
}
/* Hamburguesa a la derecha en móvil */
.hamburger {
  margin-left: auto;
  z-index: 1101;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  padding: 1.1em 0.7em 1.1em 0.7em;
  cursor: pointer;
}
.bar {
  width: 2.1em;
  height: 0.36em;
  background: var(--casita-blanco, #fff);
  border-radius: 0.18em;
  transition: all 0.29s cubic-bezier(0.83, 0.01, 0.35, 1.31);
  display: block;
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

/* Menú deslizante, mobile first */
nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 0.5em 2em #00bfff16;
  border-radius: 0 0 1em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transition:
    max-height 0.35s cubic-bezier(0.77, 0, 0.18, 1),
    opacity 0.18s;
  z-index: 1100;
}
nav.open {
  max-height: 22em;
  opacity: 1;
  pointer-events: auto;
}
nav a {
  color: var(--casita-turquesa, #00bfff);
  font-weight: 600;
  text-decoration: none;
  font-size: 1.13rem;
  letter-spacing: 0.02em;
  position: relative;
  padding: 0.45em 1em;
  border-radius: 1.2em;
  margin: 0.08em 0;
  transition:
    background 0.13s,
    color 0.13s;
}
nav a.active,
nav a:hover {
  background: var(--casita-turquesa-suave, #d2f3ff);
  color: var(--casita-verde, #8dc63f);
  text-decoration: underline 0.13em;
}
.nav-backdrop {
  display: block;
  position: fixed;
  inset: 0;
  background: #0001;
  z-index: 1050;
  backdrop-filter: blur(2px);
}

/* DESKTOP desde 900px (56em) */
@media (min-width: 56em) {
  .header-flex {
    min-height: 6.5rem;
    padding: 1.3em 2.5em;
    max-width: 66rem;
    justify-content: space-between;
  }
  .logo {
    position: static;
    left: unset;
    transform: none;
    margin: 0;
    justify-content: flex-start;
  }
  .logo img {
    height: 5.4rem;
    max-width: 16vw;
  }
  .hamburger {
    display: none;
  }
  nav,
  nav.open {
    position: static;
    background: none;
    box-shadow: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    max-height: none !important;
    opacity: 1 !important;
    pointer-events: auto;
    gap: 2em;
  }
  nav a {
    color: var(--casita-blanco, #fff);
    background: none;
    font-size: 1.17rem;
    padding: 0.38em 1.1em;
    margin: 0 0.06em;
  }
  nav a.active,
  nav a:hover {
    background: var(--casita-rosa-suave, #ffe1c2);
    color: var(--casita-turquesa, #00bfff);
    text-decoration: underline 0.14em;
  }
  .nav-backdrop {
    display: none;
  }
}
</style>
