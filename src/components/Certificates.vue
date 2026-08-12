<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-tag">Credentials</p>
        <h2 class="section-title">Certificates</h2>
      </div>

      <div class="cert-grid">
        <div
          v-for="(cert, i) in certificates"
          :key="cert.title"
          class="cert-card glass"
          v-reveal="'fade-up'"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <div class="cert-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 class="cert-title">{{ cert.title }}</h3>
          <p class="cert-issuer">{{ cert.issuer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { certificates } from '../data/portfolio.js'
</script>

<style scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.cert-card {
  padding: 30px 26px;
  border-radius: var(--radius-md);
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
}

.cert-card:hover {
  transform: translateY(-6px);
  border-color: rgba(91, 141, 255, 0.4);
}

.cert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: var(--accent);
  background: var(--accent-soft);
  margin-bottom: 18px;
}

.cert-title {
  font-size: 1.02rem;
  color: var(--cream);
  margin-bottom: 8px;
}

.cert-issuer {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--cream-dim);
}

@media (max-width: 860px) {
  .cert-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
