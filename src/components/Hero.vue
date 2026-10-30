<template>
  <section class="hero">
    <div class="container">
      <!-- Top Editorial Status Strip -->
      <div class="hero-status-bar enter-fade">
        <div class="status-indicator">
          <span class="status-dot" aria-hidden="true"></span>
          <span class="status-text">{{ t.statusLabel }}</span>
        </div>
        <div class="status-location">
          <span>{{ personal.location }}</span>
        </div>
      </div>

      <!-- Main Asymmetric Editorial Grid -->
      <div class="hero-grid">
        <div class="hero-main">
          <p class="hero-kicker enter-up" style="animation-delay: 0.05s">
            {{ personal.name }} — {{ t.heroKicker }}
          </p>

          <h1 class="hero-headline enter-up" style="animation-delay: 0.12s">
            {{ t.headlinePrefix }}
            <span class="serif-italic highlight">{{ t.headlineItalic }}</span>
            {{ t.headlineSuffix }}
          </h1>

          <p class="hero-lead enter-up" style="animation-delay: 0.2s">
            {{ t.lead }}
          </p>

          <div class="hero-actions enter-up" style="animation-delay: 0.28s">
            <router-link :to="{ path: '/', hash: '#projects' }" class="btn btn-primary">
              <span>{{ t.primaryCta }}</span>
              <span aria-hidden="true">↓</span>
            </router-link>
            <a :href="personal.cvFile" download class="btn btn-outline">
              <span>{{ t.secondaryCta }}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="hero-quick-links enter-fade" style="animation-delay: 0.36s">
            <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="quick-link">
              GitHub ↗
            </a>
            <span class="sep" aria-hidden="true">·</span>
            <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="quick-link">
              LinkedIn ↗
            </a>
            <span class="sep" aria-hidden="true">·</span>
            <a :href="`mailto:${personal.email}`" class="quick-link">
              {{ personal.email }}
            </a>
          </div>
        </div>

        <!-- Right Column: Warm Archival Paper Engineering Dossier -->
        <aside class="hero-dossier paper-card enter-up" style="animation-delay: 0.22s" aria-label="Engineering specification summary">
          <div class="dossier-header">
            <span class="dossier-code">INDEX // DRN—2026</span>
            <span class="dossier-stamp">{{ t.fieldNotesTitle }}</span>
          </div>

          <dl class="dossier-list">
            <div v-for="note in t.fieldNotes" :key="note.code" class="dossier-row">
              <dt class="dossier-term">
                <span class="term-code">{{ note.code }}</span>
                <span>{{ note.label }}</span>
              </dt>
              <dd class="dossier-desc">{{ note.value }}</dd>
            </div>
          </dl>

          <div class="dossier-footer">
            <div class="dossier-footer-item">
              <span class="meta-label">DEGREE</span>
              <span class="meta-val">S.Kom (Informatics) · Gunadarma</span>
            </div>
            <div class="dossier-footer-item">
              <span class="meta-label">CERTIFICATION</span>
              <span class="meta-val">BNSP Certified Programmer</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { personal, currentLang } from '../data/portfolio.js'

const t = computed(() => personal.copy[currentLang.value])
</script>

<style scoped>
.hero {
  padding-block: clamp(2.5rem, 5vw, 4.5rem) clamp(4.5rem, 8vw, 6.5rem);
}

.hero-status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  padding-block-end: 1.5rem;
  margin-block-end: clamp(2.25rem, 4vw, 3.5rem);
  border-bottom: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent-olive);
  flex-shrink: 0;
}

.status-location {
  color: var(--text-muted);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.32fr 0.88fr;
  gap: clamp(2.25rem, 4.5vw, 4rem);
  align-items: start;
}

.hero-kicker {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  margin-block-end: 1.1rem;
}

.hero-headline {
  font-size: clamp(2.15rem, 1.35rem + 2.8vw, 3.55rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-block-end: 1.5rem;
}

.hero-headline .highlight {
  color: var(--bg-paper);
  font-weight: 400;
  border-bottom: 1px solid var(--accent);
  padding-inline: 0.08em;
}

.hero-lead {
  font-size: clamp(1rem, 0.94rem + 0.25vw, 1.125rem);
  line-height: 1.72;
  color: var(--text-secondary);
  max-width: 62ch;
  margin-block-end: 2.25rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-block-end: 2.25rem;
}

.hero-quick-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  padding-block-start: 1.4rem;
  border-top: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.quick-link {
  color: var(--text-secondary);
  transition: color 0.2s var(--ease);
}

.quick-link:hover {
  color: var(--accent);
}

.sep {
  opacity: 0.45;
}

/* --- Warm Archival Paper Dossier --- */
.hero-dossier {
  padding: clamp(1.5rem, 3vw, 2rem);
  position: relative;
}

.dossier-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-block-end: 1rem;
  margin-block-end: 0.5rem;
  border-bottom: 1.5px solid var(--text-ink);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.dossier-code {
  font-weight: 600;
  color: var(--text-ink);
}

.dossier-stamp {
  padding: 0.2rem 0.5rem;
  background: var(--text-ink);
  color: var(--bg-paper);
  border-radius: 3px;
  font-size: 0.68rem;
}

.dossier-list {
  display: flex;
  flex-direction: column;
}

.dossier-row {
  padding-block: 0.95rem;
}

.dossier-row:not(:last-child) {
  border-bottom: 1px solid var(--rule-ink);
}

.dossier-term {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-ink-muted);
  margin-block-end: 0.3rem;
}

.term-code {
  color: #B84A24;
  font-weight: 600;
}

.dossier-desc {
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--text-ink);
}

.dossier-footer {
  margin-block-start: 0.75rem;
  padding-block-start: 1rem;
  border-top: 1.5px solid var(--text-ink);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.dossier-footer-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.meta-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.06em;
  color: var(--text-ink-muted);
}

.meta-val {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-ink);
}

@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .dossier-footer {
    grid-template-columns: 1fr;
  }
}
</style>
