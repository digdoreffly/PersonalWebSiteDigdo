<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-tag">Career</p>
        <h2 class="section-title">Experience</h2>
      </div>

      <div class="timeline">
        <div class="timeline-line"></div>

        <div v-for="item in experience" :key="item.company + item.period" class="timeline-item" v-reveal="'fade-right'">
          <span class="timeline-dot" :class="{ current: item.current }"></span>
          <div class="timeline-card glass">
            <div class="card-head">
              <div>
                <h3 class="role">{{ item.role }}</h3>
                <p class="company">
                  {{ item.company }}
                  <span v-if="item.location"> · {{ item.location }}</span>
                </p>
              </div>
              <span class="period" :class="{ current: item.current }">{{ item.period }}</span>
            </div>

            <p v-if="item.description" class="description">{{ item.description }}</p>

            <p v-if="item.project" class="project-name">Project: <span>{{ item.project }}</span></p>

            <ul v-if="item.responsibilities" class="responsibilities">
              <li v-for="task in item.responsibilities" :key="task">{{ task }}</li>
            </ul>

            <div v-if="item.technologies" class="tech-tags">
              <span v-for="tech in item.technologies" :key="tech" class="tag tag-accent">{{ tech }}</span>
            </div>

            <a
              v-if="item.liveUrl"
              :href="item.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="live-link"
            >
              Live: {{ item.liveLabel }} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/portfolio.js'
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 760px;
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
  margin-bottom: 34px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -36px;
  top: 26px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--navy);
  border: 2px solid var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

.timeline-dot.current {
  animation: pulseGlow 2s ease-in-out infinite;
}

.timeline-card {
  padding: 28px 30px;
  border-radius: var(--radius-md);
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.timeline-card:hover {
  transform: translateX(4px);
  border-color: rgba(91, 141, 255, 0.4);
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.role {
  font-size: 1.12rem;
  color: var(--cream);
  margin-bottom: 4px;
}

.company {
  color: var(--cream-soft);
  font-size: 0.92rem;
}

.period {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  color: var(--cream-dim);
  white-space: nowrap;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
}

.period.current {
  color: var(--accent);
  border-color: rgba(91, 141, 255, 0.4);
  background: var(--accent-soft);
}

.description {
  color: var(--cream-soft);
  margin-bottom: 14px;
}

.project-name {
  color: var(--cream-soft);
  margin-bottom: 14px;
}

.project-name span {
  color: var(--cream);
  font-weight: 500;
}

.responsibilities {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 18px;
  margin-bottom: 16px;
}

.responsibilities li {
  position: relative;
  padding-left: 16px;
  font-size: 0.88rem;
  color: var(--cream-dim);
}

.responsibilities li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
}

.live-link {
  display: inline-block;
  margin-top: 12px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s var(--ease);
}

.live-link:hover {
  border-color: var(--accent);
}

@media (max-width: 640px) {
  .timeline {
    padding-left: 28px;
  }

  .timeline-dot {
    left: -28px;
  }

  .timeline-card {
    padding: 22px 20px;
  }

  .responsibilities {
    grid-template-columns: 1fr;
  }
}
</style>
