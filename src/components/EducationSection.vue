<script setup>
import { education, experience } from '../data/portfolioData'
</script>
<template>
  <section id="experience" class="section"><div class="wrap narrow">
    <h2 class="sec-title" v-reveal>04. Education &amp; Experience</h2>
    <h3 class="sub">Education</h3>
    <ol class="timeline"><li v-for="e in education" :key="e.title" v-reveal><span class="dot" aria-hidden="true">{{ e.icon }}</span><b>{{ e.title }}</b><span>{{ e.place }}</span><small>{{ e.when }}</small><small v-if="e.result">{{ e.result }}</small></li></ol>
    <h3 class="sub">Experience</h3>
    <ol v-if="experience.length" class="timeline"><li v-for="e in experience" :key="e.title"><span class="dot" aria-hidden="true">{{ e.icon }}</span><b>{{ e.title }}</b><a v-if="e.url" :href="e.url" target="_blank" rel="noopener">{{ e.place }} ↗</a><span v-else>{{ e.place }}</span><p v-if="e.description">{{ e.description }}</p><small v-if="e.when">{{ e.when }}</small></li></ol>
    <p v-else class="card empty">Currently building projects and developing practical software engineering skills.</p>
  </div></section>
</template>
