<template>
  <section id="profile" class="section profile">
    <div class="container">
      <div class="profile-grid">
        <div class="profile-copy" v-reveal="'fade-right'">
          <p class="section-tag">About Me</p>
          <h2 class="section-title">Who I Am</h2>
          <p class="profile-text">{{ about.paragraph }}</p>
        </div>

        <div class="profile-stats" v-reveal="'fade-left'">
          <div v-for="stat in about.stats" :key="stat.label" class="stat-card glass">
            <p v-if="stat.value !== null" class="stat-value">
              {{ counters[stat.label] }}{{ stat.suffix }}
            </p>
            <p v-else class="stat-icon">◆</p>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, onUnmounted, ref } from 'vue'
import { about } from '../data/portfolio.js'

const counters = reactive({})
about.stats.forEach((stat) => {
  counters[stat.label] = stat.value !== null ? 0 : null
})

let observer
const rootEl = ref(null)

function animateCounters() {
  const reduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  about.stats.forEach((stat) => {
    if (stat.value === null) return

    if (reduced) {
      counters[stat.label] = stat.value
      return
    }

    const duration = 900
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      counters[stat.label] = Math.floor(progress * stat.value)
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        counters[stat.label] = stat.value
      }
    }

    requestAnimationFrame(tick)
  })
}

onMounted(() => {
  const section = document.getElementById('profile')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  if (section) observer.observe(section)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.profile-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;
}

.profile-copy .section-tag,
.profile-copy .section-title {
  text-align: left;
}

.profile-text {
  margin-top: 20px;
  color: var(--cream-soft);
  font-size: 1.02rem;
  max-width: 520px;
}

.profile-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.stat-card {
  padding: 28px 20px;
  border-radius: var(--radius-md);
  text-align: center;
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: rgba(91, 141, 255, 0.4);
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 2.1rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-icon {
  font-size: 1.4rem;
  color: var(--accent);
}

.stat-label {
  margin-top: 8px;
  font-size: 0.84rem;
  color: var(--cream-dim);
  line-height: 1.4;
}

@media (max-width: 860px) {
  .profile-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .profile-copy .section-tag,
  .profile-copy .section-title,
  .profile-text {
    text-align: center;
    margin-inline: auto;
  }
}

@media (max-width: 480px) {
  .profile-stats {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .stat-card {
    padding: 20px 12px;
  }

  .stat-value {
    font-size: 1.6rem;
  }
}
</style>
