<template>
  <section id="education" class="section education">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-index">
          <span class="num">05</span>
          <span>/ {{ currentLang === 'id' ? 'Pendidikan & Sertifikasi' : 'Education & Credentials' }}</span>
        </p>
        <div class="section-title-group">
          <h2 class="section-title">
            {{ currentLang === 'id' ? 'Latar Belakang' : 'Academic Foundation &' }}
            <span class="serif-italic">
              {{ currentLang === 'id' ? 'Akademik' : 'Qualifications' }}
            </span>
          </h2>
        </div>
      </div>

      <div class="edu-list">
        <article
          v-for="item in education"
          :key="item.school"
          class="edu-card surface-card"
          v-reveal="'fade-up'"
        >
          <div class="edu-meta">
            <span class="edu-period">{{ item.period }}</span>
            <span class="edu-location">{{ item.location }}</span>
          </div>

          <div class="edu-main">
            <h3 class="edu-school">{{ item.school }}</h3>
            <p class="edu-degree">
              {{ currentLang === 'id' ? item.degreeId : item.degree }}
            </p>
            <p class="edu-summary">
              {{ currentLang === 'id' ? item.summaryId : item.summary }}
            </p>
          </div>

          <div class="edu-gpa">
            <span class="gpa-badge">
              {{ currentLang === 'id' ? item.noteId : item.note }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education, currentLang } from '../data/portfolio.js'
</script>

<style scoped>
.education {
  padding-block-end: 2.5rem;
}

.edu-card {
  display: grid;
  grid-template-columns: 240px 1fr auto;
  gap: 1.5rem 2.5rem;
  align-items: start;
  padding: clamp(1.5rem, 3vw, 2.25rem);
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-family: var(--font-mono);
}

.edu-period {
  font-size: 0.82rem;
  color: var(--accent);
}

.edu-location {
  font-size: 0.76rem;
  color: var(--text-muted);
}

.edu-school {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-block-end: 0.25rem;
}

.edu-degree {
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent-amber);
  margin-block-end: 0.65rem;
}

.edu-summary {
  font-size: 0.92rem;
  color: var(--text-secondary);
  max-width: 60ch;
}

.gpa-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.45rem 0.85rem;
  background: var(--bg-paper);
  color: var(--text-ink);
  border-radius: var(--radius-xs);
}

@media (max-width: 820px) {
  .edu-card {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
