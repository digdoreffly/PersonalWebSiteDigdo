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
          <!-- Editorial Author Portrait Lockup (Above Headline) -->
          <div class="author-lockup">
            <figure
              ref="portraitFrame"
              class="portrait-stage"
              :style="tiltStyle"
              @pointermove="onPointerMove"
              @pointerleave="onPointerLeave"
            >
              <!-- Architectural Corner Marks -->
              <span class="crop-mark tl" aria-hidden="true"></span>
              <span class="crop-mark tr" aria-hidden="true"></span>
              <span class="crop-mark bl" aria-hidden="true"></span>
              <span class="crop-mark br" aria-hidden="true"></span>

              <!-- Warm Archival Paper Pedestal Backdrop (Lower 78% of height so hair pops out above) -->
              <div class="portrait-pedestal" aria-hidden="true">
                <span class="pedestal-grid"></span>
                <span class="pedestal-sun"></span>
                <span class="pedestal-tag">FIG. 01</span>
              </div>

              <!-- Transparent Cutout Portrait with Pop-Out Mask & Drop Shadow -->
              <div class="portrait-figure-wrap">
                <img
                  src="/images/digdo-portrait.png"
                  :alt="`${personal.name} — Portrait`"
                  width="532"
                  height="709"
                  fetchpriority="high"
                  class="portrait-img"
                />
              </div>
            </figure>

            <div class="author-meta">
              <p class="author-greeting serif-italic">
                {{ currentLang === 'id' ? 'Halo, saya Digdo —' : 'Hello, I’m Digdo —' }}
              </p>
              <p class="hero-kicker">
                {{ personal.name }}
              </p>
              <p class="author-subkicker">
                {{ t.heroKicker }}
              </p>
            </div>
          </div>

          <h1 class="hero-headline enter-up" style="animation-delay: 0.18s">
            {{ t.headlinePrefix }}
            <span class="serif-italic highlight">{{ t.headlineItalic }}</span>
            {{ t.headlineSuffix }}
          </h1>

          <p class="hero-lead enter-up" style="animation-delay: 0.26s">
            {{ t.lead }}
          </p>

          <div class="hero-actions enter-up" style="animation-delay: 0.34s">
            <router-link :to="{ path: '/', hash: '#projects' }" class="btn btn-primary">
              <span>{{ t.primaryCta }}</span>
              <span aria-hidden="true">↓</span>
            </router-link>
            <a :href="personal.cvFile" download class="btn btn-outline">
              <span>{{ t.secondaryCta }}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="hero-quick-links enter-fade" style="animation-delay: 0.42s">
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
        <aside
          class="hero-dossier paper-card enter-up"
          style="animation-delay: 0.24s"
          aria-label="Engineering specification summary"
        >
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
import { computed, ref } from 'vue'
import { personal, currentLang } from '../data/portfolio.js'

const t = computed(() => personal.copy[currentLang.value])

const portraitFrame = ref(null)
const tiltX = ref(0)
const tiltY = ref(0)
const shiftX = ref(0)
const shiftY = ref(0)

const tiltStyle = computed(() => ({
  '--tilt-x': `${tiltX.value}deg`,
  '--tilt-y': `${tiltY.value}deg`,
  '--shift-x': `${shiftX.value}px`,
  '--shift-y': `${shiftY.value}px`,
}))

function onPointerMove(e) {
  if (!portraitFrame.value) return
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const rect = portraitFrame.value.getBoundingClientRect()
  const normX = (e.clientX - rect.left) / rect.width - 0.5
  const normY = (e.clientY - rect.top) / rect.height - 0.5
  tiltY.value = Number((normX * 10).toFixed(2))
  tiltX.value = Number((-normY * 8).toFixed(2))
  shiftX.value = Number((normX * 5).toFixed(2))
  shiftY.value = Number((normY * 4).toFixed(2))
}

function onPointerLeave() {
  tiltX.value = 0
  tiltY.value = 0
  shiftX.value = 0
  shiftY.value = 0
}
</script>

<style scoped>
.hero {
  padding-block: clamp(2.25rem, 4.5vw, 4rem) clamp(4.5rem, 8vw, 6.5rem);
}

.hero-status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  padding-block-end: 1.4rem;
  margin-block-end: clamp(2rem, 3.8vw, 3rem);
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

/* =========================================================
   Editorial Author Portrait Lockup (Pop-Out Aperture Motion)
   ========================================================= */
.author-lockup {
  display: flex;
  align-items: flex-end;
  gap: 1.4rem;
  margin-block-end: 1.65rem;
  padding-block-end: 1.4rem;
  border-bottom: 1px solid var(--rule);
}

.portrait-stage {
  --tilt-x: 0deg;
  --tilt-y: 0deg;
  --shift-x: 0px;
  --shift-y: 0px;
  position: relative;
  width: 112px;
  height: 132px;
  flex-shrink: 0;
  perspective: 600px;
  isolation: isolate;
  cursor: pointer;
  transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transition: transform 0.35s var(--ease);
}

/* Architectural crop marks around the portrait stage */
.crop-mark {
  position: absolute;
  width: 8px;
  height: 8px;
  border-color: var(--accent);
  opacity: 0.65;
  pointer-events: none;
  z-index: 3;
  transition: transform 0.35s var(--ease), opacity 0.35s var(--ease);
}

.crop-mark.tl {
  inset-block-start: 14px;
  inset-inline-start: -4px;
  border-top: 1.5px solid var(--accent);
  border-left: 1.5px solid var(--accent);
}
.crop-mark.tr {
  inset-block-start: 14px;
  inset-inline-end: -4px;
  border-top: 1.5px solid var(--accent);
  border-right: 1.5px solid var(--accent);
}
.crop-mark.bl {
  inset-block-end: -4px;
  inset-inline-start: -4px;
  border-bottom: 1.5px solid var(--accent);
  border-left: 1.5px solid var(--accent);
}
.crop-mark.br {
  inset-block-end: -4px;
  inset-inline-end: -4px;
  border-bottom: 1.5px solid var(--accent);
  border-right: 1.5px solid var(--accent);
}

.portrait-stage:hover .crop-mark {
  opacity: 1;
  transform: scale(1.12);
}

/* Warm Archival Paper Pedestal (sits behind lower 84% of portrait so crown pops out) */
.portrait-pedestal {
  position: absolute;
  inset-inline: 0;
  inset-block-start: 20px;
  inset-block-end: 0;
  background: linear-gradient(
    165deg var(--in-oklab, ),
    var(--bg-paper) 0%,
    #DFD3BE 100%
  );
  border: 1px solid var(--rule-strong);
  border-radius: var(--radius-md);
  overflow: hidden;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation: pedestalUnfold 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
  }
}

.pedestal-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(20, 22, 28, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20, 22, 28, 0.07) 1px, transparent 1px);
  background-size: 18px 18px;
}

/* Warm terracotta editorial sun disc behind shoulders */
.pedestal-sun {
  position: absolute;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.22;
  inset-block-start: 16px;
  inset-inline-start: 50%;
  transform: translate(calc(-50% + var(--shift-x) * -0.8), calc(var(--shift-y) * -0.8));
  transition: transform 0.35s var(--ease), opacity 0.35s var(--ease), scale 0.35s var(--ease);
}

.portrait-stage:hover .pedestal-sun {
  opacity: 0.38;
  scale: 1.12;
}

.pedestal-tag {
  position: absolute;
  inset-block-start: 5px;
  inset-inline-end: 7px;
  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--text-ink-muted);
}

/* Cutout Figure Container — allows top of head to break out above pedestal */
.portrait-figure-wrap {
  position: absolute;
  inset-inline: 0;
  inset-block-start: 0;
  inset-block-end: 0;
  z-index: 2;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    animation: portraitPopRise 1s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
  }
}

.portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transform: translate(var(--shift-x), var(--shift-y)) scale(1.03);
  transform-origin: center bottom;
  /* Editorial warm toning + non-rectangular contour shadow */
  filter: drop-shadow(0 8px 14px rgba(17, 19, 24, 0.38)) contrast(1.04) saturate(0.92) sepia(0.07);
  mask-image: linear-gradient(to bottom, #000 88%, transparent 100%);
  transition: transform 0.35s var(--ease), filter 0.35s var(--ease);
}

.portrait-stage:hover .portrait-img {
  transform: translate(var(--shift-x), calc(var(--shift-y) - 3px)) scale(1.07);
  filter: drop-shadow(0 12px 18px rgba(17, 19, 24, 0.45)) contrast(1.05) saturate(1.02) sepia(0);
}

@keyframes pedestalUnfold {
  0% {
    clip-path: inset(100% 0 0 0 round 10px);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0 round 10px);
    opacity: 1;
  }
}

@keyframes portraitPopRise {
  0% {
    clip-path: inset(100% 0 0 0);
    transform: translateY(20px) scale(0.92);
    opacity: 0;
  }
  65% {
    opacity: 1;
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.author-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-block-end: 0.15rem;
}

.author-greeting {
  font-size: 1.25rem;
  color: var(--accent-amber);
  line-height: 1.15;
  margin-block-end: 0.15rem;
}

.hero-kicker {
  font-family: var(--font-heading);
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.author-subkicker {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
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
  .author-lockup {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .dossier-footer {
    grid-template-columns: 1fr;
  }
}
</style>
