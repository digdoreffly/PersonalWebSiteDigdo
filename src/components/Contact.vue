<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-card glass" v-reveal="'fade-up'">
        <p class="section-tag" style="justify-content: center">Get In Touch</p>
        <h2 class="contact-title">LET'S BUILD SOMETHING</h2>
        <p class="contact-desc">Have a project, opportunity, or idea? Let's connect.</p>

        <a :href="`mailto:${personal.email}`" class="btn btn-primary">Contact Me</a>

        <div class="contact-links">
          <a :href="`mailto:${personal.email}`" class="contact-link">
            <span class="icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            {{ personal.email }}
          </a>
          <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0H14v1.7h.06c.62-1.1 2.13-2.26 4.39-2.26 4.7 0 5.55 2.9 5.55 6.68V21h-4v-5.24c0-1.25-.02-2.86-1.75-2.86-1.75 0-2.02 1.36-2.02 2.77V21h-4V9Z" />
              </svg>
            </span>
            LinkedIn
          </a>
          <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path
                  d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54v-2.1c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.65 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.52.41.35.76 1.04.76 2.1v3.11c0 .3.2.65.76.54 4.44-1.48 7.64-5.66 7.64-10.6C23.25 5.48 18.27.5 12 .5Z"
                />
              </svg>
            </span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personal } from '../data/portfolio.js'
</script>

<style scoped>
.contact-card {
  padding: 70px 40px;
  border-radius: var(--radius-lg);
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at 50% 0%, var(--accent-soft), transparent 60%);
  pointer-events: none;
}

.contact-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--cream);
  margin-bottom: 14px;
  position: relative;
}

.contact-desc {
  color: var(--cream-soft);
  margin-bottom: 32px;
  position: relative;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
  margin-top: 36px;
  position: relative;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--cream-soft);
  transition: color 0.25s var(--ease);
}

.contact-link .icon {
  display: inline-flex;
  color: var(--accent);
}

.contact-link:hover {
  color: var(--cream);
}

@media (max-width: 560px) {
  .contact-card {
    padding: 50px 24px;
  }

  .contact-links {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
