<script setup>
import { projects } from '../data/portfolioData'
</script>
<template>
  <section id="projects" class="section"><div class="wrap">
    <div class="head" v-reveal><h2 class="sec-title">02. My Projects</h2><span class="projects-note">Selected work</span></div>
    <div class="grid projects">
      <article v-for="(p, index) in projects" :key="p.title" class="card project" v-reveal>
        <div class="preview" :style="{ background: `linear-gradient(135deg,hsl(${p.hue[0]} 80% 45%),hsl(${p.hue[1]} 75% 55%))` }">
          <img v-if="p.image" class="project-image" :src="p.image" :alt="`${p.title} project preview`" loading="lazy" />
          <span v-else class="preview-icon" aria-hidden="true">{{ p.icon }}</span>
          <span class="project-number" aria-hidden="true">{{ index + 1 }}</span>
          <b v-if="p.featured" class="badge">Featured</b>
        </div>
        <div class="body">
          <h3>{{ p.title }}</h3><p>{{ p.desc }}</p>
          <ul class="chips"><li v-for="t in p.tech" :key="t">{{ t }}</li></ul>
          <div class="project-actions">
            <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a>
            <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener">Live Demo <span aria-hidden="true">↗</span></a>
            <span v-if="!p.repo && !p.demo" class="project-unavailable">Links coming soon</span>
          </div>
        </div>
      </article>
    </div>
  </div></section>
</template>
