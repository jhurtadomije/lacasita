<template>
  <div class="contact-form-bg">
    <form class="contact-form-glass" @submit.prevent="enviarFormulario">
      <h2><span>✉️</span> ¡Escríbenos!</h2>
      <p class="sub-title">
        Resolvemos tus dudas y te contactamos rápido.<br />
        <span class="junta-badge">
          <img src="@/assets/img/junta-andalucia-logo.png" alt="Junta" />
          Centro adherido a la Junta de Andalucía
        </span>
      </p>
      <div class="form-row">
        <span class="form-icon">👤</span>
        <input
          type="text"
          v-model="nombre"
          required
          placeholder="Nombre y apellidos"
          autocomplete="name"
        />
      </div>
      <div class="form-row">
        <span class="form-icon">📧</span>
        <input
          type="email"
          v-model="email"
          required
          placeholder="Correo electrónico"
          autocomplete="email"
        />
      </div>
      <div class="form-row">
        <span class="form-icon">📱</span>
        <input type="tel" v-model="telefono" placeholder="Teléfono (opcional)" autocomplete="tel" />
      </div>
      <div class="form-row">
        <span class="form-icon">💬</span>
        <textarea
          v-model="mensaje"
          required
          placeholder="¿En qué podemos ayudarte?"
          rows="4"
        ></textarea>
      </div>
      <!-- CAPTCHA INFANTIL -->
      <div class="form-row captcha-row">
        <span class="form-icon">🏠</span>
        <label>
          ¿Cuánto es <strong>{{ captcha.num1 }}</strong> + <strong>{{ captcha.num2 }}</strong
          >?
          <input
            type="number"
            v-model="captcha.respuesta"
            required
            placeholder="Respuesta"
            min="0"
          />
        </label>
      </div>
      <span v-if="captchaError" class="captcha-error"
        >Respuesta incorrecta. Prueba de nuevo 😊</span
      >
      <!-- /CAPTCHA -->
      <button type="submit" class="btn-primary btn-cta-pulse" :disabled="enviando">
        {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
      </button>
      <transition name="pop">
        <p v-if="enviado" class="form-success">
          ¡Mensaje enviado! 😊<br />
          Te responderemos muy pronto.
        </p>
      </transition>
      <transition name="pop">
        <p v-if="error" class="form-error">Ha habido un error. Por favor, inténtalo de nuevo.</p>
      </transition>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const telefono = ref('')
const mensaje = ref('')

const enviado = ref(false)
const enviando = ref(false)
const error = ref(false)
const captchaError = ref(false)

// Captcha simple de suma
const captcha = ref({
  num1: Math.floor(2 + Math.random() * 4),
  num2: Math.floor(2 + Math.random() * 4),
  respuesta: '',
})

function resetCaptcha() {
  captcha.value.num1 = Math.floor(2 + Math.random() * 4)
  captcha.value.num2 = Math.floor(2 + Math.random() * 4)
  captcha.value.respuesta = ''
}

async function enviarFormulario() {
  enviado.value = false
  error.value = false
  captchaError.value = false
  enviando.value = true

  // Validar captcha
  const correcto = Number(captcha.value.respuesta) === captcha.value.num1 + captcha.value.num2
  if (!correcto) {
    captchaError.value = true
    enviando.value = false
    resetCaptcha()
    return
  }

  // Simulación de envío real
  setTimeout(() => {
    enviado.value = true
    enviando.value = false
    nombre.value = ''
    email.value = ''
    telefono.value = ''
    mensaje.value = ''
    resetCaptcha()
  }, 1500)
}
</script>

<style scoped>
/* FONDO DEGRADADO ANIMADO */
.contact-form-bg {
  min-height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #a4ce39 0%, #00bfff 55%, #ff4da6 100%);
  background-size: 300% 300%;
  animation: bgmove 10s ease-in-out infinite alternate;
}
@keyframes bgmove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* TARJETA GLASS EFFECT */
.contact-form-glass {
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.77);
  backdrop-filter: blur(14px) saturate(1.1);
  box-shadow: 0 6px 56px #00bfff24;
  border-radius: 2.1em;
  padding: 2.5em 1.6em 2.2em 1.6em;
  margin: 2.5em 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.1em;
  position: relative;
}

/* Encabezado y subrayado animado */
.contact-form-glass h2 {
  text-align: center;
  color: var(--casita-turquesa, #00bfff);
  font-weight: 900;
  margin-bottom: 0.7em;
  letter-spacing: 0.01em;
  font-size: 1.65em;
  text-shadow: 0 2px 12px #00bfff13;
}
.contact-form-glass .sub-title {
  color: var(--casita-negro, #444);
  text-align: center;
  margin-bottom: 0.9em;
  font-size: 1.1em;
  font-weight: 500;
}

.junta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7em;
  margin-top: 0.65em;
  background: #eaf7e1;
  color: #6cb742;
  padding: 0.32em 1.2em;
  border-radius: 1.1em;
  font-weight: 700;
  font-size: 1em;
  box-shadow: 0 2px 12px #a4ce3933;
}
.junta-badge img {
  height: 22px;
  width: auto;
}

.form-row {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.1em;
}

.form-icon {
  font-size: 1.17em;
  margin-right: 0.75em;
  color: var(--casita-turquesa, #00bfff);
  opacity: 0.9;
  user-select: none;
  width: 1.5em;
  text-align: center;
  flex-shrink: 0;
}

input,
textarea {
  flex: 1;
  background: rgba(255, 255, 255, 0.89);
  border: 2px solid #fff;
  border-radius: 1.1em;
  padding: 1em 1em 1em 0.9em;
  font-size: 1.05em;
  color: var(--casita-negro, #333);
  outline: none;
  box-shadow: 0 2px 8px #00bfff11;
  margin-bottom: 0;
  transition:
    border 0.2s,
    box-shadow 0.2s;
  resize: none;
}
input:focus,
textarea:focus {
  border: 2px solid var(--casita-turquesa, #00bfff);
  box-shadow: 0 4px 20px #00bfff16;
}
textarea {
  min-height: 90px;
}

.captcha-row {
  margin-bottom: 0.4em;
}
.captcha-error {
  color: #f55;
  font-size: 0.98em;
  margin-top: 0.3em;
  display: block;
  text-align: center;
  animation: pop 0.25s;
}

/* BOTÓN IMPACTANTE */
.btn-primary {
  background: linear-gradient(
    90deg,
    var(--casita-naranja, #f7931e) 60%,
    var(--casita-rosa, #ff4da6)
  );
  color: var(--casita-blanco, #fff);
  padding: 0.85em 2.1em;
  border-radius: 2em;
  font-weight: 700;
  font-size: 1.14em;
  box-shadow: 0 2px 22px #ff4da629;
  transition:
    background 0.22s,
    box-shadow 0.22s,
    transform 0.15s;
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  margin-top: 0.6em;
  letter-spacing: 0.01em;
}
.btn-primary:hover,
.btn-primary:focus-visible {
  background: linear-gradient(
    100deg,
    var(--casita-rosa, #ff4da6) 45%,
    var(--casita-naranja, #f7931e) 100%
  );
  box-shadow: 0 8px 32px #ff4da633;
  transform: scale(1.045);
}

/* Pulse animation for CTA */
.btn-cta-pulse {
  animation: pulse 1.7s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 2px 12px #f7931e33;
  }
  50% {
    transform: scale(1.07);
    box-shadow: 0 8px 36px #f7931e55;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 2px 12px #f7931e33;
  }
}

.form-success {
  color: var(--casita-verde, #3bb143);
  background: #f2fff2dd;
  text-align: center;
  margin-top: 1.3em;
  padding: 1em 0.5em;
  border-radius: 1.1em;
  font-weight: 700;
  font-size: 1.13em;
  box-shadow: 0 2px 16px #a4ce3933;
  animation: pop 0.4s;
}
.form-error {
  color: #f55;
  background: #fff3f3ee;
  text-align: center;
  margin-top: 1.2em;
  padding: 0.8em 0.5em;
  border-radius: 1.1em;
  font-weight: 700;
  animation: pop 0.25s;
}
@keyframes pop {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .contact-form-bg {
    min-height: 95vh;
    padding: 0;
  }
  .contact-form-glass {
    padding: 2em 0.7em 1.5em 0.7em;
    max-width: 99vw;
    margin: 1.7em 0;
  }
}
</style>
