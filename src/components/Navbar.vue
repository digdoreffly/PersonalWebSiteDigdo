<template>
  <header class="navbar enter-fade" :class="{ scrolled, open: menuOpen }">
    <div class="container navbar-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="brand-bracket">&lt;</span>DIGDO.DEV<span class="brand-bracket">/&gt;</span>
      </router-link>

      <nav class="nav-links">
        <router-link
          v-for="link in navLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="nav-link"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <button
        class="hamburger"
        :class="{ active: menuOpen }"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-nav">
        <router-link
          v-for="link in navLinks"
          :key="link.hash"
          :to="{ path: '/', hash: link.hash }"
          class="mobile-nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/portfolio.js'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
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
  top: 0;
  z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.35s var(--ease), border-color 0.35s var(--ease), backdrop-filter 0.35s var(--ease);
}

.navbar.scrolled {
  background: rgba(17, 24, 68, 0.65);
  border-bottom-color: var(--glass-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--cream);
}

.brand-bracket {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-link {
  position: relative;
  font-size: 0.9rem;
  color: var(--cream-soft);
  transition: color 0.25s var(--ease);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.25s var(--ease);
}

.nav-link:hover {
  color: var(--cream);
}

.nav-link:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 34px;
  height: 34px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--cream);
  transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-nav {
  display: none;
}

@media (max-width: 860px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 24px 24px;
    background: rgba(17, 24, 68, 0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
  }

  .mobile-nav-link {
    padding: 14px 6px;
    font-size: 1rem;
    color: var(--cream-soft);
    border-bottom: 1px solid var(--line);
  }

  .mobile-nav-link:last-child {
    border-bottom: none;
  }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
