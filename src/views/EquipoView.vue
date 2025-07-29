<template>
  <section class="equipo-section container">
    <h1>Nuestro Equipo</h1>
    <p class="equipo-desc">
      Profesionales dedicadas a la educación y el bienestar de los pequeños.
    </p>
    <div class="equipo-grid">
      <div class="equipo-card" v-for="miembro in equipo" :key="miembro.nombre">
        <img :src="miembro.img" :alt="miembro.nombre" />
        <h2>{{ miembro.nombre }}</h2>
        <p class="rol">{{ miembro.rol }}</p>
        <p class="desc">{{ miembro.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const equipo = [
  {
    nombre: 'Seño Raquel. (Raquel Sánchez)',
    rol: 'Directora y Educadora Infantil',
    desc: `Hola queridos papás y mamás, me llamo Raquel, soy Técnico Superior en Educación Infantil y Graduada en Magisterio Infantil. Me ocupo de la dirección del centro. Aprendo cada día de nuestros niños y comparto sus logros y avances.

Recuerdo mi infancia entre tizas de colores y muñecos sentados en fila escuchando atentos lo que cada día les preparaba para enseñarles. Poco a poco la niña fue creciendo y el sueño se volvió realidad. Mi oportunidad ha llegado y ahora todo es de verdad, siendo aún más bonito de cuando solo era un juego.

Me siento afortunada de formar parte de este equipo, por su trayectoria, su profesionalidad y sobre todo por el trabajo que llevamos a cabo día a día, hora tras hora, sin perder la sonrisa.`,
    img: new URL('@/assets/img/equipo/equipo1.jpg', import.meta.url).href,
  },
  {
    nombre: 'Seño Loles (María Dolores Velázquez)',
    rol: 'Educadora Infantil',
    desc: `Hola, mi nombre es Loles

Soy Técnico Especialista en Jardín de Infancia y Maestra en especialidad de Educación Musical.

Desarrollo este trabajo desde hace más de 17 años, aún así disfruto con mi trabajo como el primer día.

Me considero muy afortunada de poder disfrutar de los pequeños-grandes logros que con una canción, un cuento, un juego o una ficha mis niños van consiguiendo casi sin darse cuenta.

Vivo mi profesión como lo que es, algo totalmente vocacional y que me llena por completo.`,
    img: new URL('@/assets/img/equipo/equipo2.jpg', import.meta.url).href,
  },
  {
    nombre: 'Seño Mayte (María Teresa Fajardo)',
    rol: 'Educadora Infantil',
    desc: `Hola, me llamo Mayte y soy Maestra en la especialidad de Educación Infantil.

Trabajo en La Casita desde hace  más de 7 años, formamos una gran familia y me siento muy orgullosa de trabajar en este gran equipo.

Entre mis objetivos está el lograr que nuestros niños adquieran pautas de convivencia, hábitos y rutinas, desarrollando así su autonomía personal y su autoestima. Pero mi objetivo principal es que vengan contentos al cole, que sean felices y formemos parte de su familia. Para todo ello cuento con un ingrediente fundamental “Muchísimo cariño”.`,
    img: new URL('@/assets/img/equipo/equipo3.jpg', import.meta.url).href,
  },

  {
    nombre: 'Seño Sefi (Josefa González)',
    rol: 'Educadora Infantil',
    desc: `Hola, mi nombre es Sefi, soy técnico en Educación Infantil y mi función en este centro es la de apoyo. Atiendo el comedor, sustituyo si falta la seño titular de alguna clase, ayudo a los cambios, a las fichas que precisan tempera, etc. ¿Lo mejor de estar de apoyo?…. ¡que llego a conocer a todos los niños de la escuela!

Mi trabajo con los pequeños me hace feliz pues tengo verdadera vocación y disfruto muchísimo con ellos. Resulta muy gratificante observar su evolución.

¡SOMOS UN GRAN EQUIPO!`,
    img: new URL('@/assets/img/equipo/equipo4.jpg', import.meta.url).href,
  },
]
</script>

<style scoped>
.equipo-section {
  padding-top: 2em;
}
.equipo-section h1 {
  color: var(--casita-verde);
  text-align: center;
}
.equipo-desc {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 2.2em auto;
  color: var(--casita-negro);
}
.equipo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2em;
  justify-content: center;
}
.equipo-card {
  background: var(--casita-verde-suave);
  border-radius: 2em;
  box-shadow: 0 2px 16px #a4ce3914;
  padding: 2em 1.5em 2.2em 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.22s,
    box-shadow 0.22s;
}
.equipo-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 36px #a4ce3966;
}
.equipo-card img {
  border-radius: 50%;
  width: 110px;
  height: 110px;
  object-fit: cover;
  margin-bottom: 1.2em;
  border: 4px solid var(--casita-verde);
  background: var(--casita-blanco);
  box-shadow: 0 2px 8px #a4ce3930;
}
.equipo-card h2 {
  color: var(--casita-verde);
  font-size: 1.25em;
  margin-bottom: 0.4em;
  font-weight: 700;
}
.equipo-card .rol {
  color: var(--casita-turquesa);
  font-size: 1em;
  margin-bottom: 1em;
  font-weight: 600;
}
.equipo-card .desc {
  color: var(--casita-negro);
  font-size: 1em;
  margin: 0;
}
</style>
