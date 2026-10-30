<template>
  <div class="app-shell">
    <a href="#main-content" class="skip-link visually-hidden">
      {{ currentLang === 'id' ? 'Langsung ke konten utama' : 'Skip to main content' }}
    </a>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { currentLang } from './data/portfolio.js'
</script>
