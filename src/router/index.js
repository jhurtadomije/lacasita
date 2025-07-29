import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BienvenidaView from '../views/BienvenidaView.vue'
import EquipoView from '../views/EquipoView.vue'
import InstalacionesView from '../views/InstalacionesView.vue'
import BlogView from '../views/BlogView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/bienvenida', name: 'Bienvenida', component: BienvenidaView },
  { path: '/equipo', name: 'Equipo', component: EquipoView },
  { path: '/instalaciones', name: 'Instalaciones', component: InstalacionesView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/contacto', name: 'Contacto', component: ContactoView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
