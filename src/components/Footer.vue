<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-col">
        <p class="footer-brand">
          Digdo Reffly Nugroho<span class="dot">.</span>
        </p>
        <p class="footer-note">
          {{
            currentLang === 'id'
              ? 'Fullstack Programmer & Web Developer · Cikarang / Depok, Indonesia'
              : 'Fullstack Programmer & Web Developer · Cikarang / Depok, Indonesia'
          }}
        </p>
      </div>

      <nav class="footer-links" aria-label="Footer">
        <a :href="`mailto:${personal.email}`">Email</a>
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="personal.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="personal.cvFile" download>CV (PDF)</a>
      </nav>

      <p class="copyright">
        © {{ year }} {{ personal.name }} —
        {{ currentLang === 'id' ? 'Dirancang dengan perhatian pada detail.' : 'Set in Plus Jakarta Sans & Instrument Serif.' }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { personal, currentLang } from '../data/portfolio.js'

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--rule);
  padding-block: 2.5rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem 2rem;
}

.footer-brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.98rem;
  color: var(--text-primary);
}

.dot {
  color: var(--accent);
}

.footer-note {
  margin-block-start: 0.2rem;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-links a {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: color 0.2s var(--ease);
}

.footer-links a:hover {
  color: var(--accent);
}

.copyright {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 720px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
