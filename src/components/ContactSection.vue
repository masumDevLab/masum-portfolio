<script setup>
import { reactive, ref } from 'vue'
import { profile } from '../data/portfolioData'
const f = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({}), status = ref('idle'), deliveryError = ref('')
const validate = () => {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!f.name.trim()) errors.name = 'Please enter your name.'
  if (!f.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errors.email = 'Please enter a valid email address.'
  if (!f.subject.trim()) errors.subject = 'Please add a subject.'
  if (f.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return !Object.keys(errors).length
}
async function submit() {
  if (!validate()) return
  status.value = 'sending'
  deliveryError.value = ''
  try {
    const payload = new URLSearchParams({
      name: f.name.trim(),
      email: f.email.trim(),
      subject: f.subject.trim(),
      message: f.message.trim(),
      _subject: `Portfolio message: ${f.subject.trim()}`,
      _replyto: f.email.trim()
    })
    const r = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: payload
    })
    const result = await r.json()
    if (!r.ok || (result.success !== true && result.success !== 'true')) {
      throw new Error(result.message || 'Message could not be sent.')
    }
    status.value = 'sent'; Object.assign(f, { name: '', email: '', subject: '', message: '' })
  } catch (error) {
    status.value = 'error'
    deliveryError.value = error instanceof Error ? error.message : 'Could not send the message. Please try again.'
  }
}
const fields = [['name', 'Your Name', 'text'], ['email', 'Email Address', 'email'], ['subject', 'Subject', 'text']]
</script>
<template>
  <section id="contact" class="section contact-section"><div class="wrap two contact-layout">
    <div class="contact-intro" v-reveal>
      <h2 class="sec-title">06. Get In Touch</h2>
      <h3 class="contact-title">Let's Work<br />Together</h3>
      <p class="contact-description">I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
      <ul class="contact-details">
        <li v-if="profile.email">
          <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
          <div><small>Email</small><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></div>
        </li>
        <li>
          <span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg></span>
          <div><small>Location</small><span>{{ profile.location }}</span></div>
        </li>
      </ul>
    </div>
    <form class="card form contact-form" novalidate @submit.prevent="submit" v-reveal>
      <h3>Send a Message</h3>
      <div class="form-row">
        <div v-for="[k, label, type] in fields.slice(0, 2)" :key="k">
          <label :for="k">{{ label }}</label>
          <input :id="k" :type="type" v-model="f[k]" :aria-invalid="!!errors[k]" :aria-describedby="errors[k] ? k + '-e' : null" :placeholder="k === 'name' ? 'Your name' : 'you@example.com'" required />
          <p v-if="errors[k]" :id="k + '-e'" class="err">{{ errors[k] }}</p>
        </div>
      </div>
      <div v-for="[k, label, type] in fields.slice(2)" :key="k">
        <label :for="k">{{ label }}</label>
        <input :id="k" :type="type" v-model="f[k]" :aria-invalid="!!errors[k]" :aria-describedby="errors[k] ? k + '-e' : null" placeholder="What's this about?" required />
        <p v-if="errors[k]" :id="k + '-e'" class="err">{{ errors[k] }}</p>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" rows="4" v-model="f.message" :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'message-e' : null" placeholder="Tell me a little about your project or idea..." required></textarea>
        <p v-if="errors.message" id="message-e" class="err">{{ errors.message }}</p>
      </div>
      <button class="btn btn-grad contact-submit" :disabled="status === 'sending'">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
        {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
      </button>
      <p role="status" class="note" :class="{ ok: status === 'sent' }">
        <template v-if="status === 'sent'">Thanks! Your message was submitted. If this is your first FormSubmit submission, check your inbox for its activation email.</template>
        <template v-else-if="status === 'error'">Sorry, sending failed: {{ deliveryError }}</template>
      </p>
    </form>
  </div></section>
</template>
