<template>
  <section>
    <h1>Contacto</h1>
    <form>
      <label>
        Nombre:
        <input type="text" name="nombre" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Mensaje:
        <textarea name="mensaje" required></textarea>
      </label>
      <button class="btn-primary" type="submit">Enviar</button>
    </form>
  </section>
</template>
