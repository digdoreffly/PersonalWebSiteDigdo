<template>
  <section id="profile" class="section profile">
    <div class="container">
      <div class="section-head" v-reveal="'fade-up'">
        <p class="section-index">
          <span class="num">01</span>
          <span>/ {{ currentLang === 'id' ? 'Pendekatan' : 'Approach' }}</span>
        </p>
        <div class="section-title-group">
          <h2 class="section-title">
            {{ t.title }},
            <span class="serif-italic">{{ t.italicHighlight }}</span>
          </h2>
        </div>
      </div>

      <div class="profile-layout">
        <div class="profile-prose" v-reveal="'fade-up'">
          <p v-for="(para, i) in t.paragraphs" :key="i" class="prose-paragraph">
            {{ para }}
          </p>
        </div>

        <div class="principles-column" v-reveal="'fade-up'">
          <h3 class="principles-heading">
            {{ currentLang === 'id' ? 'Prinsip Kerja Utama' : 'Working Principles' }}
          </h3>
          <ol class="principles-list" role="list">
            <li v-for="item in t.principles" :key="item.num" class="principle-item">
              <span class="principle-num">{{ item.num }}</span>
              <div class="principle-body">
                <h4 class="principle-title">{{ item.title }}</h4>
                <p class="principle-detail">{{ item.detail }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { about, currentLang } from '../data/portfolio.js'

const t = computed(() => about.copy[currentLang.value])
</script>

<style scoped>
.profile-layout {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: start;
}

.profile-prose {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.prose-paragraph {
  font-size: clamp(1.02rem, 0.96rem + 0.25vw, 1.14rem);
  line-height: 1.78;
  color: var(--text-secondary);
  max-width: 62ch;
}

.prose-paragraph:first-child {
  color: var(--text-primary);
  font-size: clamp(1.08rem, 1rem + 0.3vw, 1.22rem);
}

.principles-column {
  background: var(--bg-surface);
  border: 1px solid var(--rule);
  border-radius: var(--radius-md);
  padding: clamp(1.5rem, 3vw, 2.25rem);
}

.principles-heading {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  padding-block-end: 1rem;
  border-bottom: 1px solid var(--rule);
}

.principles-list {
  display: flex;
  flex-direction: column;
}

.principle-item {
  display: grid;
  grid-template-columns: 2.25rem 1fr;
  gap: 0.75rem;
  padding-block: 1.25rem;
}

.principle-item:not(:last-child) {
  border-bottom: 1px solid var(--rule);
}

.principle-num {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.35rem;
  line-height: 1.1;
  color: var(--accent);
}

.principle-title {
  font-size: 1rem;
  color: var(--text-primary);
  margin-block-end: 0.35rem;
}

.principle-detail {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@media (max-width: 860px) {
  .profile-layout {
    grid-template-columns: 1fr;
  }
}
</style>
