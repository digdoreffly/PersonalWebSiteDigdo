<template>
  <article class="project-card glass" :class="{ featured: project.featured }">
    <span v-if="project.featured" class="featured-badge">★ Featured Project</span>

    <div class="card-image">
      <img :src="project.image" :alt="project.name" loading="lazy" />
    </div>

    <div class="card-body">
      <div class="card-top">
        <span class="category">{{ project.category }}</span>
      </div>
      <h3 class="name">{{ project.name }}</h3>
      <p class="desc">{{ project.description }}</p>

      <div v-if="project.modules" class="modules">
        <span v-for="m in project.modules" :key="m" class="tag">{{ m }}</span>
      </div>

      <div class="tech-tags">
        <span v-for="tech in project.technologies" :key="tech" class="tag tag-accent">{{ tech }}</span>
      </div>

      <div class="card-actions">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline btn-sm"
        >
          View Project ↗
        </a>
        <span v-else class="btn btn-outline btn-sm disabled">{{ project.liveLabel }}</span>

        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
          aria-label="View on GitHub"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.65 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.41.35.76 1.04.76 2.1v3.11c0 .3.2.65.76.54 4.44-1.48 7.64-5.66 7.64-10.6C23.25 5.48 18.27.5 12 .5Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.project-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s var(--ease), border-color 0.35s var(--ease), box-shadow 0.35s var(--ease);
  position: relative;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(91, 141, 255, 0.5);
  box-shadow: 0 26px 50px -20px rgba(91, 141, 255, 0.3);
}

.featured-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  padding: 5px 12px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  background: var(--accent);
  color: var(--navy-deep);
  font-weight: 600;
}

.card-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid var(--glass-border);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease);
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.card-body {
  padding: 26px 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.category {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.05em;
  color: var(--accent);
}

.name {
  font-size: 1.2rem;
  color: var(--cream);
}

.desc {
  color: var(--cream-soft);
  font-size: 0.92rem;
  flex: 1;
}

.modules,
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.btn.disabled {
  opacity: 0.55;
  cursor: default;
  pointer-events: none;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--glass-border);
  color: var(--cream-soft);
  transition: border-color 0.25s var(--ease), color 0.25s var(--ease), transform 0.25s var(--ease);
}

.icon-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}
</style>
