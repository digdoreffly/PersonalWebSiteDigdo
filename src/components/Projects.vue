<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-tag">Portfolio</p>
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">
          A selection of enterprise, web, and mobile applications I have built.
        </p>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          v-reveal="'fade-up'"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
