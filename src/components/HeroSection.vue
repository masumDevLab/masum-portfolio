<script setup>
import { profile, socials } from '../data/portfolioData'
import profileImage from '../assets/images/profile.png'
</script>
<template>
  <section id="home" class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow anim" style="--d:0s">Hello, I'm 👋</p>
        <h1 class="anim" style="--d:.1s">{{ profile.name }}</h1>
        <h2 class="anim" style="--d:.2s">{{ profile.title }}</h2>
        <p class="lead anim" style="--d:.3s">I’m a Software Engineering student passionate about developing innovative web applications and solving real-world problems through technology. I enjoy building user-focused digital solutions, exploring emerging technologies, and continuously expanding my technical skills.</p>
        <div class="row anim" style="--d:.4s"><a class="btn btn-grad" href="#projects">View My Projects</a><a class="btn btn-ghost" href="#contact">Contact Me</a></div>
        <div class="row socials anim" style="--d:.5s">
          <a v-for="s in socials.filter(s => ['LinkedIn', 'GitHub', 'Instagram', 'Facebook'].includes(s.label) && s.url)" :key="s.label" :href="s.url" :aria-label="s.label" :data-tooltip="s.label" target="_blank" rel="noopener">
            <svg v-if="s.label === 'LinkedIn'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.6 0h3.2v1.6h.1a3.5 3.5 0 0 1 3.2-1.8c3.4 0 4 2.2 4 5.1v6.6h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.1 1.5-2.1 3v5.9H9.1V9Z" /></svg>
            <svg v-else-if="s.label === 'GitHub'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" /></svg>
            <svg v-else-if="s.label === 'Instagram'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
            <svg v-else-if="s.label === 'Facebook'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3v3.1h2.8v8h3.4Z" /></svg>
          </a>
        </div>
        <p class="tag">Let's build something great together.</p>
      </div>
      <figure class="portrait anim" style="--d:.3s">
        <div class="photo"><img :src="profileImage" alt="Portrait of Masum" width="800" height="800" fetchpriority="high" /></div>
        <figcaption>Better Code, Better Tomorrow.</figcaption>
      </figure>
    </div>
  </section>
</template>
