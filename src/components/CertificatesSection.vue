<script setup>
import { certificates } from '../data/portfolioData'
</script>
<template>
  <section id="certificates" class="section alt"><div class="wrap narrow">
    <h2 class="sec-title" v-reveal>05. Certificates</h2>
    <ul class="certs">
      <li v-for="c in certificates" :key="c.name" class="card" v-reveal>
        <span class="ico" :style="{ '--c': c.color }" aria-hidden="true">{{ c.icon }}</span>
        <div><b>{{ c.name }}</b><small>{{ c.org }}<template v-if="c.year"> · {{ c.year }}</template></small></div>
        <a v-if="c.url" :href="c.url" target="_blank" rel="noopener">View Certificate</a>
      </li>
    </ul>
  </div></section>
</template>
