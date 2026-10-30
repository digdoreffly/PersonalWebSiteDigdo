<template>
  <article class="case-study surface-card" :class="{ featured: project.featured }">
    <!-- Case Study Top Meta Strip -->
    <header class="case-meta">
      <div class="meta-left">
        <span class="case-index">{{ project.index }}</span>
        <span class="case-category">
          {{ currentLang === 'id' ? project.categoryId : project.category }}
        </span>
        <span v-if="project.featured" class="primary-badge">
          {{ currentLang === 'id' ? 'Fokus Utama' : 'Primary System' }}
        </span>
      </div>
      <div class="meta-right">
        <span class="case-client">{{ project.client }}</span>
        <span class="meta-sep" aria-hidden="true">·</span>
        <span class="case-year">{{ project.year }}</span>
      </div>
    </header>

    <!-- Case Study Two-Column Content -->
    <div class="case-grid">
      <div class="case-narrative">
        <h3 class="case-title">
          {{ currentLang === 'id' ? project.nameId : project.name }}
        </h3>

        <p class="case-role">
          {{ currentLang === 'id' ? project.roleSummaryId : project.roleSummary }}
        </p>

        <p class="case-desc">
          {{ currentLang === 'id' ? project.descriptionId : project.description }}
        </p>

        <ul
          v-if="project.highlights"
          class="case-highlights"
          role="list"
        >
          <li
            v-for="(point, idx) in currentLang === 'id' ? project.highlightsId : project.highlights"
            :key="idx"
          >
            {{ point }}
          </li>
        </ul>

        <div class="case-footer">
          <div class="tech-tags" aria-label="Technologies used">
            <span v-for="tech in project.technologies" :key="tech" class="tag tag-accent">
              {{ tech }}
            </span>
          </div>

          <div class="case-actions">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm"
            >
              <span>{{ currentLang === 'id' ? project.liveLabelId : project.liveLabel }}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <span v-else class="deployment-tag">
              <span class="lock-dot" aria-hidden="true"></span>
              {{ currentLang === 'id' ? project.liveLabelId : project.liveLabel }}
            </span>

            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="github-link"
            >
              <span>GitHub</span>
              <span class="visually-hidden">({{ project.name }})</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Tactile System Architecture Schematic -->
      <aside class="case-schematic" :aria-label="`${project.name} architecture schematic`">
        <div class="schematic-head">
          <span class="schematic-label">ARCH // {{ project.schematic.title }}</span>
          <span class="schematic-count">{{ project.modules.length }} MODULES</span>
        </div>

        <div class="schematic-layers">
          <div
            v-for="(layer, lIdx) in project.schematic.layers"
            :key="layer.label"
            class="schematic-layer"
          >
            <div class="layer-meta">
              <span class="layer-step">L{{ lIdx + 1 }}</span>
              <span class="layer-name">{{ layer.label }}</span>
            </div>
            <div class="layer-nodes">
              <span v-for="node in layer.nodes" :key="node" class="node-pill">
                {{ node }}
              </span>
            </div>
          </div>
        </div>

        <div class="schematic-modules">
          <p class="modules-caption">
            {{ currentLang === 'id' ? 'Cakupan Modul & Fitur:' : 'System Modules & Scope:' }}
          </p>
          <div class="modules-wrap">
            <span v-for="m in project.modules" :key="m" class="module-chip">
              {{ m }}
            </span>
          </div>
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup>
import { currentLang } from '../data/portfolio.js'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.case-study {
  overflow: hidden;
  transition: border-color 0.25s var(--ease);
}

.case-study.featured {
  border-color: var(--rule-strong);
}

.case-study:hover {
  border-color: var(--accent-border);
}

.case-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  padding: 1rem clamp(1.5rem, 3vw, 2.25rem);
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.76rem;
}

.meta-left,
.meta-right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.case-index {
  color: var(--accent);
  font-weight: 600;
}

.case-category {
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.primary-badge {
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-xs);
  background: var(--bg-paper);
  color: var(--text-ink);
  font-weight: 600;
  font-size: 0.68rem;
  text-transform: uppercase;
}

.case-client {
  color: var(--text-secondary);
}

.meta-sep,
.case-year {
  color: var(--text-muted);
}

.case-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(1.75rem, 3.5vw, 3rem);
  padding: clamp(1.5rem, 3.2vw, 2.5rem);
  align-items: start;
}

.case-title {
  font-size: clamp(1.4rem, 1.1rem + 1vw, 1.85rem);
  color: var(--text-primary);
  margin-block-end: 0.45rem;
}

.case-role {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent-amber);
  margin-block-end: 1.15rem;
}

.case-desc {
  color: var(--text-secondary);
  font-size: 0.98rem;
  line-height: 1.7;
  margin-block-end: 1.25rem;
  max-width: 64ch;
}

.case-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-block-end: 1.75rem;
  padding-inline-start: 1.1rem;
}

.case-highlights li {
  position: relative;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.case-highlights li::before {
  content: '—';
  position: absolute;
  inset-inline-start: -1.1rem;
  color: var(--accent);
}

.case-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-block-start: 1.25rem;
  border-top: 1px solid var(--rule);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.case-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.deployment-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-muted);
  padding: 0.4rem 0.75rem;
  border: 1px dashed var(--rule-strong);
  border-radius: var(--radius-xs);
}

.lock-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-amber);
}

.github-link {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding-block: 0.25rem;
  border-bottom: 1px solid var(--rule-strong);
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.github-link:hover {
  color: var(--text-primary);
  border-color: var(--accent);
}

/* --- Architectural Schematic Box --- */
.case-schematic {
  background: var(--bg-ink);
  border: 1px solid var(--rule-strong);
  border-radius: var(--radius-sm);
  padding: 1.35rem;
}

.schematic-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-block-end: 0.85rem;
  margin-block-end: 1rem;
  border-bottom: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.schematic-count {
  color: var(--accent);
}

.schematic-layers {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schematic-layer {
  padding: 0.75rem;
  background: var(--bg-surface);
  border: 1px solid var(--rule);
  border-radius: var(--radius-xs);
}

.layer-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  margin-block-end: 0.5rem;
}

.layer-step {
  color: var(--accent);
  font-weight: 600;
}

.layer-name {
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.layer-nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.node-pill {
  font-family: var(--font-mono);
  font-size: 0.73rem;
  padding: 0.2rem 0.55rem;
  background: var(--bg-elevated);
  border: 1px solid var(--rule-strong);
  border-radius: 3px;
  color: var(--text-primary);
}

.schematic-modules {
  margin-block-start: 1rem;
  padding-block-start: 0.9rem;
  border-top: 1px solid var(--rule);
}

.modules-caption {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-block-end: 0.5rem;
}

.modules-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.module-chip {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-secondary);
  padding: 0.15rem 0.45rem;
  background: rgba(239, 232, 218, 0.04);
  border-radius: 3px;
}

@media (max-width: 920px) {
  .case-grid {
    grid-template-columns: 1fr;
  }
}
</style>
