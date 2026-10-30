<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-index">
          <span class="num">03</span>
          <span>/ {{ currentLang === 'id' ? 'Riwayat Karir' : 'Career Ledger' }}</span>
        </p>
        <div class="section-title-group">
          <h2 class="section-title">
            {{ currentLang === 'id' ? 'Pengalaman' : 'Professional' }}
            <span class="serif-italic">
              {{ currentLang === 'id' ? 'Profesional & Industri' : 'Experience' }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{
              currentLang === 'id'
                ? 'Perjalanan membangun perangkat lunak di lingkungan manufaktur, otomotif, dan proyek klien independen.'
                : 'A chronological record of engineering roles across manufacturing, automotive, and independent client engagements.'
            }}
          </p>
        </div>
      </div>

      <ol class="ledger-list" role="list">
        <li
          v-for="item in experience"
          :key="item.company + item.period"
          class="ledger-row"
          v-reveal="'fade-up'"
        >
          <!-- Left Column: Period, Company & Meta -->
          <div class="ledger-meta">
            <div class="period-line">
              <span v-if="item.current" class="active-dot" aria-hidden="true"></span>
              <span class="period-text">
                {{ currentLang === 'id' ? item.periodId : item.period }}
              </span>
            </div>
            <h3 class="company-name">{{ item.company }}</h3>
            <p class="employment-meta">
              <span>{{ currentLang === 'id' ? item.typeId : item.type }}</span>
              <span v-if="item.location"> · {{ item.location }}</span>
            </p>
          </div>

          <!-- Right Column: Role, Narrative, Responsibilities & Tech -->
          <div class="ledger-body">
            <div class="role-header">
              <h4 class="role-title">
                {{ currentLang === 'id' ? item.roleId : item.role }}
              </h4>
              <span v-if="item.project" class="project-ref">
                {{ item.project }}
              </span>
            </div>

            <p v-if="item.description" class="role-summary">
              {{ currentLang === 'id' ? item.descriptionId : item.description }}
            </p>

            <ul
              v-if="item.responsibilities"
              class="role-tasks"
              role="list"
            >
              <li
                v-for="task in currentLang === 'id' ? item.responsibilitiesId : item.responsibilities"
                :key="task"
              >
                {{ task }}
              </li>
            </ul>

            <div class="ledger-footer">
              <div v-if="item.technologies" class="tech-tags">
                <span v-for="tech in item.technologies" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>

              <a
                v-if="item.liveUrl"
                :href="item.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="live-link"
              >
                <span>{{ item.liveLabel }}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { experience, currentLang } from '../data/portfolio.js'
</script>

<style scoped>
.ledger-list {
  display: flex;
  flex-direction: column;
}

.ledger-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem 3rem;
  padding-block: clamp(2rem, 4vw, 2.75rem);
}

.ledger-row:first-child {
  padding-block-start: 0.5rem;
}

.ledger-row:not(:last-child) {
  border-bottom: 1px solid var(--rule);
}

.ledger-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.period-line {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-block-end: 0.2rem;
}

.active-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-olive);
}

.company-name {
  font-size: 1.12rem;
  color: var(--text-primary);
}

.employment-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.ledger-body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.role-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.role-title {
  font-size: 1.25rem;
  color: var(--text-primary);
}

.project-ref {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--accent-amber);
  padding: 0.2rem 0.55rem;
  background: var(--bg-surface);
  border: 1px solid var(--rule);
  border-radius: var(--radius-xs);
}

.role-summary {
  color: var(--text-primary);
  font-size: 0.98rem;
  line-height: 1.65;
  max-width: 65ch;
}

.role-tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline-start: 1.1rem;
}

.role-tasks li {
  position: relative;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 68ch;
}

.role-tasks li::before {
  content: '·';
  position: absolute;
  inset-inline-start: -0.9rem;
  color: var(--accent);
  font-weight: 700;
}

.ledger-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-block-start: 0.35rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.live-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  border-bottom: 1px solid var(--accent-border);
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.live-link:hover {
  color: var(--text-primary);
  border-color: var(--text-primary);
}

@media (max-width: 820px) {
  .ledger-row {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
}
</style>
