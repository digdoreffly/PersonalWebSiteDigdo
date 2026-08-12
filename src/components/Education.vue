<template>
  <section id="education" class="section education">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-tag">Background</p>
        <h2 class="section-title">Education</h2>
      </div>

      <div class="timeline">
        <div class="timeline-line"></div>
        <div v-for="item in education" :key="item.school" class="timeline-item" v-reveal="'fade-right'">
          <span class="timeline-dot"></span>
          <div class="timeline-card glass">
            <p class="timeline-period">{{ item.period }}</p>
            <h3 class="timeline-school">{{ item.school }}</h3>
            <p class="timeline-degree">{{ item.degree }}</p>
            <p class="timeline-location">{{ item.location }}</p>
            <p class="timeline-note">{{ item.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '../data/portfolio.js'
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  padding-left: 36px;
}

.timeline-line {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--glass-border));
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -36px;
  top: 22px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--navy);
  border: 2px solid var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

.timeline-card {
  padding: 26px 28px;
  border-radius: var(--radius-md);
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.timeline-card:hover {
  transform: translateX(4px);
  border-color: rgba(91, 141, 255, 0.4);
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.timeline-school {
  font-size: 1.15rem;
  color: var(--cream);
  margin-bottom: 4px;
}

.timeline-degree {
  color: var(--cream-soft);
  margin-bottom: 4px;
}

.timeline-location {
  color: var(--cream-dim);
  font-size: 0.88rem;
  margin-bottom: 10px;
}

.timeline-note {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--cream-soft);
  padding: 5px 12px;
  border-radius: 999px;
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border);
}

@media (max-width: 480px) {
  .timeline {
    padding-left: 28px;
  }

  .timeline-dot {
    left: -28px;
  }

  .timeline-card {
    padding: 20px;
  }
}
</style>
