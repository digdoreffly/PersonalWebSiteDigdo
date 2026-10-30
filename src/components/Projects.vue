<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-index">
          <span class="num">02</span>
          <span>/ {{ currentLang === 'id' ? 'Karya Terpilih' : 'Selected Works' }}</span>
        </p>
        <div class="section-title-group">
          <h2 class="section-title">
            {{ currentLang === 'id' ? 'Studi Kasus &' : 'Production Systems &' }}
            <span class="serif-italic">
              {{ currentLang === 'id' ? 'Arsitektur Aplikasi' : 'Case Studies' }}
            </span>
          </h2>
          <p class="section-subtitle">
            {{
              currentLang === 'id'
                ? 'Aplikasi enterprise, sistem inventaris mobile, dan platform web yang saya rancang dan bangun untuk kebutuhan operasional nyata.'
                : 'Enterprise platforms, warehouse mobile tools, and production web systems engineered around real operational requirements.'
            }}
          </p>
        </div>
      </div>

      <div class="case-studies-list">
        <div
          v-for="project in projects"
          :key="project.id"
          v-reveal="'fade-up'"
          class="case-study-wrapper"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, currentLang } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.case-studies-list {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
}
</style>
