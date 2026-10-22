<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { nav, profile } from '../data/portfolioData'
const open = ref(false), active = ref('home')
const dark = ref(localStorage.getItem('theme') === 'dark')
const apply = () => { document.documentElement.dataset.theme = dark.value ? 'dark' : 'light'; localStorage.setItem('theme', dark.value ? 'dark' : 'light') }
const toggle = () => { dark.value = !dark.value; apply() }
let observer
const closeOnEscape = event => {
  if (event.key === 'Escape' && open.value) {
    open.value = false
    document.querySelector('.burger')?.focus()
  }
}
onMounted(() => {
  apply()
  observer = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (active.value = e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
  nav.forEach(id => { const el = document.getElementById(id); el && observer.observe(el) })
  document.addEventListener('keydown', closeOnEscape)
})
onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('keydown', closeOnEscape)
})
</script>
<template>
  <header class="nav">
    <a href="#home" class="logo nav-brand" aria-label="Masum home" @click="open = false">
      <span class="logo-m" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none"><path d="M10 29V11h4l6 9 6-9h4v18h-4V18l-6 9-6-9v11h-4Z" fill="currentColor" /><circle cx="32" cy="9" r="2" fill="var(--accent2)" /></svg>
      </span>
      <span class="logo-copy"><span class="logo-name">Masum</span><span class="logo-caption">PORTFOLIO</span></span>
    </a>
    <button class="burger" :aria-expanded="open" aria-controls="menu" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">{{ open ? '×' : '☰' }}</button>
    <nav id="menu" :class="{ open }" aria-label="Primary">
      <a v-for="id in nav" :key="id" :href="'#' + id" :class="{ active: active === id }" :aria-current="active === id ? 'true' : null" @click="open = false">{{ id[0].toUpperCase() + id.slice(1) }}</a>
      <button class="icon-btn" @click="toggle" :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'">
        <svg v-if="dark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
        <svg v-else aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
        </svg>
      </button>
      <a class="btn btn-grad sm" :href="profile.cv" download @click="open = false">Download CV</a>
    </nav>
  </header>
</template>
