<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <p class="brand">
          <span class="brand-bracket">&lt;</span>DIGDO.DEV<span class="brand-bracket">/&gt;</span>
        </p>
        <p class="tagline">Fullstack Programmer &amp; Web Developer</p>
      </div>

      <div class="footer-links">
        <a :href="`mailto:${personal.email}`">Email</a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="personal.github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <p class="copyright">© {{ year }} Digdo Reffly Nugroho</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { personal } from '../data/portfolio.js'

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--glass-border);
  padding: 48px 0 28px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--cream);
}

.brand-bracket {
  color: var(--accent);
}

.tagline {
  margin-top: 6px;
  font-size: 0.84rem;
  color: var(--cream-dim);
}

.footer-links {
  display: flex;
  gap: 28px;
}

.footer-links a {
  font-size: 0.86rem;
  color: var(--cream-soft);
  transition: color 0.25s var(--ease);
}

.footer-links a:hover {
  color: var(--accent);
}

.copyright {
  margin-top: 34px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--cream-dim);
}

@media (max-width: 560px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
