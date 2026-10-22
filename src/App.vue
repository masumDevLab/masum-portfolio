<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
<template>
  <a class="skip" href="#about">Skip to content</a>
  <Navbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <div class="credentials-wrap">
      <div class="credentials-grid">
        <EducationSection />
        <CertificatesSection />
      </div>
    </div>
    <ContactSection />
  </main>
  <FooterSection />
</template>
