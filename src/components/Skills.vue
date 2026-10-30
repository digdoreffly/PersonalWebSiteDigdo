<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-index">
          <span class="num">04</span>
          <span>/ {{ currentLang === 'id' ? 'Perangkat Teknis' : 'Technical Stack' }}</span>
        </p>
        <div class="section-title-group">
          <h2 class="section-title">
            {{ currentLang === 'id' ? 'Keahlian &' : 'Tools, Languages &' }}
            <span class="serif-italic">
              {{ currentLang === 'id' ? 'Lapisan Teknologi' : 'Data Infrastructure' }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{
              currentLang === 'id'
                ? 'Teknologi yang saya gunakan sehari-hari untuk merancang basis data, membangun backend, dan menyusun antarmuka pengguna.'
                : 'The core languages, frameworks, and database engines I rely on to ship production web and mobile software.'
            }}
          </p>
        </div>
      </div>

      <div class="stack-matrix" v-reveal="'fade-up'">
        <div
          v-for="group in skillGroups"
          :key="group.code"
          class="stack-cell"
        >
          <div class="cell-header">
            <span class="cell-code">[{{ group.code }}]</span>
            <h3 class="cell-title">
              {{ currentLang === 'id' ? group.titleId : group.title }}
            </h3>
          </div>
          <p class="cell-note">
            {{ currentLang === 'id' ? group.noteId : group.note }}
          </p>
          <ul class="cell-items" role="list">
            <li v-for="item in group.items" :key="item" class="cell-item">
              <span class="item-marker" aria-hidden="true"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups, currentLang } from '../data/portfolio.js'
</script>

<style scoped>
.stack-matrix {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--rule-strong);
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  overflow: hidden;
}

.stack-cell {
  padding: clamp(1.5rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stack-cell:nth-child(1),
.stack-cell:nth-child(2) {
  border-bottom: 1px solid var(--rule);
}

.stack-cell:nth-child(odd) {
  border-inline-end: 1px solid var(--rule);
}

.cell-header {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}

.cell-code {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
}

.cell-title {
  font-size: 1.15rem;
  color: var(--text-primary);
}

.cell-note {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.55;
  margin-block-end: 0.4rem;
}

.cell-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block-start: auto;
}

.cell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.75rem;
  background: var(--bg-ink);
  border: 1px solid var(--rule-strong);
  border-radius: var(--radius-xs);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-primary);
}

.item-marker {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

@media (max-width: 768px) {
  .stack-matrix {
    grid-template-columns: 1fr;
  }

  .stack-cell:nth-child(odd) {
    border-inline-end: none;
  }

  .stack-cell:not(:last-child) {
    border-bottom: 1px solid var(--rule);
  }
}
</style>
