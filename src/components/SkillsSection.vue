<script setup>
import { ref } from 'vue'
import { skills } from '../data/portfolioData'
const expandedSkills = ref(new Set())
const visibleItems = skill => expandedSkills.value.has(skill.title) ? skill.items : skill.items.slice(0, 6)
const toggleSkills = title => {
  const expanded = new Set(expandedSkills.value)
  expanded.has(title) ? expanded.delete(title) : expanded.add(title)
  expandedSkills.value = expanded
}
</script>
<template>
  <section id="skills" class="section alt"><div class="wrap">
    <h2 class="sec-title" v-reveal>03. My Skills</h2>
    <div class="grid skills">
      <article v-for="s in skills" :key="s.title" class="card skill" :style="{ '--c': s.color }" v-reveal>
        <div class="skill-heading"><span class="ico" aria-hidden="true">{{ s.icon }}</span><h3>{{ s.title }}</h3></div>
        <ul class="chips"><li v-for="t in visibleItems(s)" :key="t">{{ t }}</li></ul>
        <button v-if="s.items.length > 6" class="skills-toggle" type="button" :aria-expanded="expandedSkills.has(s.title)" @click="toggleSkills(s.title)">
          {{ expandedSkills.has(s.title) ? 'Show less' : `Show ${s.items.length - 6} more` }}
        </button>
      </article>
    </div>
  </div></section>
</template>
