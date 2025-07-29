<template>
  <section class="bienvenida-section container">
    <div class="bienvenida-grid">
      <!-- Logo grande -->
      <div class="bienvenida-logo">
        <img src="@/assets/img/logo-la-casita-Maracena450.jpg" alt="Logo CEI La Casita" />
      </div>
      <!-- Texto de bienvenida -->
      <div class="bienvenida-texto">
        <h1>
          Bienvenidos al <span class="destacado">Centro de Educación Infantil LA CASITA</span>
        </h1>
        <p>
          Nuestro centro abre sus puertas en el <b>año 2006</b>, y se encuentra
          <b>adherido a la Junta de Andalucía</b>, cubriendo el primer ciclo de Educación Infantil
          de <b>0 a 3 años</b>.<br /><br />
          Estamos muy orgullosos de nuestro tamaño. Ser una <b>escuela de tan sólo 35 plazas</b>,
          nos permite estar al lado de cada uno de nuestros pequeños, saber lo que necesitan en todo
          momento y conocer en profundidad cada familia y así darles
          <b>un trato más cercano</b>.<br /><br />
          Somos una <b>pequeña gran escuela</b>, cuyo principal objetivo es el bienestar y la
          felicidad de nuestros pequeños. Perseguimos alimentar sus sueños e ilusiones, cuidando los
          pequeños detalles con mucho amor y cariño.<br /><br />
          Nuestra metodología está basada en el <b>aprendizaje por Proyectos</b>, a través de ellos
          <span class="destacado2">
            exploramos, experimentamos, cambiamos y transformamos nuestro mundo.
          </span>
        </p>
        <p class="gracias">Gracias por confiarnos lo más importante de vuestras vidas.</p>
        <div class="firma-directora">
          <img
            src="@/assets/img/equipo/equipo1.jpg"
            alt="Raquel Sánchez, Directora"
            class="foto-directora"
          />
          <div>
            <strong>Raquel Sánchez</strong><br />
            Directora CEI La Casita en Maracena (Granada)
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bienvenida-section {
  margin: 3em auto 2em auto;
  background: linear-gradient(
    100deg,
    var(--casita-turquesa-suave) 70%,
    var(--casita-rosa-suave) 100%
  );
  border-radius: 2em;
  box-shadow: 0 2px 28px #00bfff18;
  padding: 2.5em 2em 2.5em 2em;
  max-width: 1100px;
}
.bienvenida-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
}
.bienvenida-logo img {
  width: 240px;
  max-width: 90vw;
  border-radius: 1em;
  box-shadow: 0 2px 24px #00bfff11;
  background: #fff;
  padding: 1em;
}
.bienvenida-texto {
  max-width: 600px;
  font-size: 1.08em;
  color: var(--casita-negro);
}
.bienvenida-texto h1 {
  color: var(--casita-turquesa);
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1em;
}
.bienvenida-texto .destacado {
  color: var(--casita-rosa);
  font-weight: 800;
}
.bienvenida-texto .destacado2 {
  color: var(--casita-naranja);
  font-weight: 700;
}
.bienvenida-texto b {
  color: var(--casita-turquesa);
  font-weight: 700;
}
.gracias {
  margin: 2em 0 1.2em 0;
  font-style: italic;
  color: var(--casita-turquesa);
  font-size: 1.05em;
}
.firma-directora {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-top: 1.5em;
}
.directora-foto {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--casita-verde);
  box-shadow: 0 2px 8px #a4ce3929;
  background: #fff;
}
.firma-directora div {
  font-size: 1em;
  color: var(--casita-negro);
}
@media (max-width: 600px) {
  .firma-directora {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
  }
  .directora-foto {
    margin-bottom: 0.4em;
  }
}
@media (min-width: 900px) {
  .bienvenida-grid {
    flex-direction: row;
    align-items: flex-start;
    gap: 3.2em;
  }
  .bienvenida-logo img {
    width: 260px;
    min-width: 200px;
    margin-top: 0.6em;
  }
  .bienvenida-texto {
    max-width: 600px;
    font-size: 1.08em;
    text-align: left;
  }
}
</style>
