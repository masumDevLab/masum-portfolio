import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

// v-reveal: adds .in when the element scrolls into view (one shared observer)
const io = new IntersectionObserver((entries) => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
}), { threshold: 0.12 })
createApp(App).directive('reveal', { mounted: el => { el.classList.add('reveal'); io.observe(el) } }).mount('#app')
