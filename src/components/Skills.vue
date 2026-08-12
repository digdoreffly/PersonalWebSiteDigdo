<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-tag">Tech Stack</p>
        <h2 class="section-title">Skills &amp; Tools</h2>
        <p class="section-subtitle">Technologies I use to design, build, and ship applications end to end.</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.title"
          class="skill-card glass"
          v-reveal="'fade-up'"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <h3 class="skill-title">{{ group.title }}</h3>
          <div class="skill-chips">
            <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../data/portfolio.js'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card {
  padding: 28px 24px;
  border-radius: var(--radius-md);
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(91, 141, 255, 0.4);
  box-shadow: 0 20px 40px -20px rgba(91, 141, 255, 0.25);
}

.skill-title {
  font-size: 1.02rem;
  color: var(--cream);
  margin-bottom: 16px;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 960px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
