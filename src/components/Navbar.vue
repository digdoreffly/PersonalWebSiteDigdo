<template>
  <header class="navbar" :class="{ scrolled, open: menuOpen }">
    <div class="container navbar-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="brand-name">Digdo Reffly<span class="brand-dot">.</span></span>
        <span class="brand-meta">Software Engineer</span>
      </router-link>

      <nav class="nav-links" aria-label="Primary">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="nav-link"
        >
          <span class="nav-num">0{{ idx + 1 }}</span>
          <span>{{ currentLang === 'id' ? link.labelId : link.label }}</span>
        </router-link>
      </nav>

      <div class="nav-controls">
        <button
          type="button"
          class="lang-switch"
          :aria-label="currentLang === 'en' ? 'Switch language to Bahasa Indonesia' : 'Ganti bahasa ke Bahasa Inggris'"
          @click="toggleLang"
        >
          <span :class="{ active: currentLang === 'en' }">EN</span>
          <span class="lang-sep">/</span>
          <span :class="{ active: currentLang === 'id' }">ID</span>
        </button>

        <button
          type="button"
          class="hamburger"
          :class="{ active: menuOpen }"
          :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile">
        <router-link
          v-for="(link, idx) in navLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="mobile-nav-link"
          @click="closeMenu"
        >
          <span class="nav-num">0{{ idx + 1 }}</span>
          <span>{{ currentLang === 'id' ? link.labelId : link.label }}</span>
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks, currentLang, toggleLang } from '../data/portfolio.js'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  inset-block-start: 0;
  z-index: 100;
  background: rgba(17, 19, 24, 0.88);
  border-bottom: 1px solid var(--rule);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background-color 0.25s var(--ease), border-color 0.25s var(--ease);
}

.navbar.scrolled {
  background: rgba(17, 19, 24, 0.96);
  border-bottom-color: var(--rule-strong);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-block-size: 4.5rem;
}

.brand {
  display: inline-flex;
  align-items: baseline;
  gap: 0.75rem;
}

.brand-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.brand-dot {
  color: var(--accent);
}

.brand-meta {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-muted);
  padding-inline-start: 0.75rem;
  border-inline-start: 1px solid var(--rule-strong);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.65rem;
}

.nav-link {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: 0.86rem;
  color: var(--text-secondary);
  padding-block: 0.35rem;
  transition: color 0.2s var(--ease);
}

.nav-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  transition: color 0.2s var(--ease);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link:hover .nav-num {
  color: var(--accent);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  min-block-size: 2rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-xs);
  border: 1px solid var(--rule-strong);
  background: var(--bg-surface);
  font-family: var(--font-mono);
  font-size: 0.73rem;
  color: var(--text-muted);
  transition: border-color 0.2s var(--ease), color 0.2s var(--ease);
}

.lang-switch:hover {
  border-color: var(--text-secondary);
}

.lang-switch .active {
  color: var(--text-primary);
  font-weight: 600;
}

.lang-sep {
  opacity: 0.4;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  min-inline-size: 2.25rem;
  min-block-size: 2.25rem;
  padding: 0.4rem;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--text-primary);
  transition: transform 0.25s var(--ease);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(3.75px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  transform: translateY(-3.75px) rotate(-45deg);
}

.mobile-nav {
  display: none;
}

@media (max-width: 980px) {
  .brand-meta {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1.5rem 1.5rem;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--rule-strong);
  }

  .mobile-nav-link {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
    padding-block: 0.85rem;
    font-size: 0.96rem;
    color: var(--text-secondary);
  }

  .mobile-nav-link:not(:last-child) {
    border-bottom: 1px solid var(--rule);
  }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s var(--ease), transform 0.2s var(--ease);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
