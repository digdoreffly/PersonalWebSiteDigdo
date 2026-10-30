<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <div class="cert-header" v-reveal="'fade-up'">
        <h3 class="cert-section-label">
          {{ currentLang === 'id' ? 'Lisensi & Sertifikasi Kompetensi' : 'Professional Certifications & Licenses' }}
        </h3>
      </div>

      <ul class="cert-table" role="list" v-reveal="'fade-up'">
        <li
          v-for="cert in certificates"
          :key="cert.code"
          class="cert-row"
        >
          <span class="cert-code">{{ cert.code }}</span>
          <div class="cert-main">
            <h4 class="cert-title">
              {{ currentLang === 'id' ? cert.titleId : cert.title }}
            </h4>
            <p class="cert-focus">
              {{ currentLang === 'id' ? cert.focusId : cert.focus }}
            </p>
          </div>
          <span class="cert-issuer">{{ cert.issuer }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { certificates, currentLang } from '../data/portfolio.js'
</script>

<style scoped>
.certificates {
  border-top: none;
  padding-block-start: 0.5rem;
}

.cert-header {
  margin-block-end: 1.25rem;
}

.cert-section-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.cert-table {
  border: 1px solid var(--rule);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  overflow: hidden;
}

.cert-row {
  display: grid;
  grid-template-columns: 95px 1.2fr 1fr;
  gap: 1rem 2rem;
  align-items: baseline;
  padding: 1.35rem clamp(1.25rem, 2.5vw, 2rem);
  transition: background-color 0.2s var(--ease);
}

.cert-row:not(:last-child) {
  border-bottom: 1px solid var(--rule);
}

.cert-row:hover {
  background: var(--bg-elevated);
}

.cert-code {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
}

.cert-title {
  font-size: 1.02rem;
  color: var(--text-primary);
  margin-block-end: 0.2rem;
}

.cert-focus {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.cert-issuer {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  text-align: end;
}

@media (max-width: 780px) {
  .cert-row {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }

  .cert-issuer {
    text-align: start;
    margin-block-start: 0.25rem;
  }
}
</style>
