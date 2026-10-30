<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="correspondence-card paper-card" v-reveal="'fade-up'">
        <div class="corr-top">
          <span class="corr-index">06 / {{ currentLang === 'id' ? 'Korespondensi' : 'Correspondence' }}</span>
          <span class="corr-location">{{ personal.location }}</span>
        </div>

        <div class="corr-body">
          <div class="corr-copy">
            <h2 class="corr-heading">
              {{
                currentLang === 'id'
                  ? 'Mari berdiskusi tentang sistem atau proyek yang sedang Anda bangun'
                  : 'Let’s talk about the systems or products your team is building'
              }}
            </h2>
            <p class="corr-desc">
              {{
                currentLang === 'id'
                  ? 'Baik untuk peluang full-time Software / Web Developer, pengembangan modul ERP & database, maupun kolaborasi aplikasi web dan Android—saya senang membaca pesan Anda.'
                  : 'Whether you are hiring for an engineering team, planning an internal ERP or inventory workflow, or looking for a dependable developer for a web/mobile build—feel free to reach out directly.'
              }}
            </p>

            <div class="corr-actions">
              <a :href="`mailto:${personal.email}`" class="btn-ink">
                <span>{{ currentLang === 'id' ? 'Kirim Email' : 'Send an Email' }}</span>
                <span aria-hidden="true">↗</span>
              </a>

              <button type="button" class="btn-ink-outline" @click="copyEmail">
                <span>
                  {{
                    copied
                      ? currentLang === 'id'
                        ? 'Alamat Email Disalin ✓'
                        : 'Email Copied ✓'
                      : personal.email
                  }}
                </span>
              </button>

              <span class="visually-hidden" aria-live="polite">
                {{
                  copied
                    ? currentLang === 'id'
                      ? 'Alamat email berhasil disalin ke clipboard.'
                      : 'Email address copied to clipboard.'
                    : ''
                }}
              </span>
            </div>
          </div>

          <div class="corr-channels">
            <h3 class="channels-label">
              {{ currentLang === 'id' ? 'Saluran Langsung' : 'Direct Channels' }}
            </h3>
            <ul class="channels-list" role="list">
              <li>
                <a :href="`mailto:${personal.email}`" class="channel-row">
                  <span class="ch-name">Email</span>
                  <span class="ch-val">{{ personal.email }} ↗</span>
                </a>
              </li>
              <li>
                <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="channel-row">
                  <span class="ch-name">LinkedIn</span>
                  <span class="ch-val">in/digdoreffly ↗</span>
                </a>
              </li>
              <li>
                <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="channel-row">
                  <span class="ch-name">GitHub</span>
                  <span class="ch-val">github.com/digdoreffly ↗</span>
                </a>
              </li>
              <li>
                <a :href="personal.cvFile" download class="channel-row">
                  <span class="ch-name">{{ currentLang === 'id' ? 'Dokumen CV' : 'Résumé / CV' }}</span>
                  <span class="ch-val">Download PDF ↓</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { personal, currentLang } from '../data/portfolio.js'

const copied = ref(false)
let copyTimer = null

async function copyEmail() {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(personal.email)
      copied.value = true
      if (copyTimer) clearTimeout(copyTimer)
      copyTimer = setTimeout(() => {
        copied.value = false
      }, 2600)
    }
  } catch {
    window.location.href = `mailto:${personal.email}`
  }
}
</script>

<style scoped>
.correspondence-card {
  padding: clamp(1.75rem, 4vw, 3.25rem);
}

.corr-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-block-end: 1.25rem;
  margin-block-end: clamp(1.75rem, 3.5vw, 2.5rem);
  border-bottom: 1.5px solid var(--text-ink);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-ink);
}

.corr-index {
  font-weight: 600;
}

.corr-location {
  color: var(--text-ink-muted);
}

.corr-body {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}

.corr-heading {
  font-size: clamp(1.65rem, 1.1rem + 2vw, 2.45rem);
  color: var(--text-ink);
  line-height: 1.16;
  margin-block-end: 1rem;
}

.corr-desc {
  color: var(--text-ink-muted);
  font-size: 1rem;
  line-height: 1.68;
  max-width: 56ch;
  margin-block-end: 1.85rem;
}

.corr-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.btn-ink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-block-size: 2.75rem;
  padding: 0.7rem 1.4rem;
  border-radius: var(--radius-sm);
  background: var(--text-ink);
  color: var(--bg-paper);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid var(--text-ink);
  transition: background-color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.btn-ink:hover {
  background: #B84A24;
  border-color: #B84A24;
  color: #FFF;
}

.btn-ink-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-block-size: 2.75rem;
  padding: 0.7rem 1.25rem;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text-ink);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  border: 1px solid rgba(20, 22, 28, 0.35);
  transition: border-color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.btn-ink-outline:hover {
  border-color: var(--text-ink);
  background: rgba(20, 22, 28, 0.06);
}

.corr-channels {
  padding-inline-start: clamp(0rem, 2.5vw, 2rem);
  border-inline-start: 1px solid var(--rule-ink);
}

.channels-label {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-ink-muted);
  margin-block-end: 0.85rem;
}

.channels-list {
  display: flex;
  flex-direction: column;
}

.channel-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.75rem;
  border-bottom: 1px solid var(--rule-ink);
  font-size: 0.88rem;
  transition: color 0.2s var(--ease);
}

.channel-row:hover .ch-val {
  color: #B84A24;
}

.ch-name {
  font-weight: 600;
  color: var(--text-ink);
}

.ch-val {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-ink-muted);
}

@media (max-width: 860px) {
  .corr-body {
    grid-template-columns: 1fr;
  }

  .corr-channels {
    padding-inline-start: 0;
    border-inline-start: none;
    padding-block-start: 1.5rem;
    border-top: 1px solid var(--rule-ink);
  }
}
</style>
