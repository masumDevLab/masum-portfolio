<script setup>
import { profile, goals } from '../data/portfolioData'
const info = [['📍', 'Location', profile.location], ['🎂', 'Age', profile.age], ['🎓', 'Education', profile.degree], ['📅', 'Expected Graduation', profile.graduation]]
</script>
<template>
  <section id="about" class="section alt"><div class="wrap two">
    <div v-reveal>
      <h2 class="sec-title">01. About Me</h2>
      <p>I am a Software Engineering student at Chengdu Neusoft University with a passion for full-stack development and artificial intelligence. I work with technologies such as Java, JavaScript, Vue.js, Spring Boot, Python, and MySQL to build practical applications and solve real-world problems.

I am committed to continuous learning, improving my technical skills, and creating innovative digital solutions that make a meaningful impact.</p>
      <ul class="info"><li v-for="i in info" :key="i[1]"><span aria-hidden="true">{{ i[0] }}</span><div><small>{{ i[1] }}</small><b>{{ i[2] }}</b></div></li></ul>
      <p class="script">Turning ideas into code.</p>
    </div>
    <div class="goals" v-reveal>
      <h3>My Goals 🌱</h3>
      <ul><li v-for="g in goals" :key="g"><span class="check" aria-hidden="true">✓</span>{{ g }}</li></ul>
    </div>
  </div></section>
</template>
