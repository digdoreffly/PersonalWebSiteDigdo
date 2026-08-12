<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <p class="hero-greeting enter-up" style="animation-delay: 0.1s">HELLO, I'M</p>
        <h1 class="hero-name enter-up" style="animation-delay: 0.22s">{{ personal.name }}</h1>
        <p class="hero-role enter-fade" style="animation-delay: 0.38s">
          <span v-for="(role, i) in personal.roles" :key="role">
            {{ role }}<br v-if="i < personal.roles.length - 1" />
          </span>
        </p>
        <p class="hero-desc enter-fade" style="animation-delay: 0.5s">{{ personal.tagline }}</p>
        <div class="hero-actions enter-fade" style="animation-delay: 0.62s">
          <router-link :to="{ path: '/', hash: '#projects' }" class="btn btn-primary">
            View Projects
          </router-link>
          <a :href="personal.cvFile" download class="btn btn-outline">Download CV</a>
        </div>
      </div>

      <div class="hero-visual enter-fade" style="animation-delay: 0.75s">
        <div class="visual-glow"></div>
        <div class="terminal glass">
          <div class="terminal-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
            <span class="terminal-title">developer.js</span>
          </div>
          <div class="terminal-body">
            <p><span class="tok-key">const</span> <span class="tok-var">developer</span> = {</p>
            <p class="indent"><span class="tok-prop">name</span>: <span class="tok-str">'Digdo Reffly Nugroho'</span>,</p>
            <p class="indent"><span class="tok-prop">role</span>: <span class="tok-str">'Fullstack Programmer'</span>,</p>
            <p class="indent"><span class="tok-prop">stack</span>: [<span class="tok-str">'Vue'</span>, <span class="tok-str">'PHP'</span>, <span class="tok-str">'Kotlin'</span>],</p>
            <p class="indent"><span class="tok-prop">status</span>: <span class="tok-str">'building...'</span></p>
            <p>}<span class="cursor">|</span></p>
          </div>
        </div>

        <div class="float-chip chip-1">&lt;/&gt; Clean Code</div>
        <div class="float-chip chip-2">◎ REST API</div>
        <div class="grid-orb"></div>
      </div>
    </div>

    <div class="hero-scroll enter-fade" style="animation-delay: 0.9s">
      <span class="scroll-line"></span>
      SCROLL
    </div>
  </section>
</template>

<script setup>
import { personal } from '../data/portfolio.js'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 76px);
  display: flex;
  align-items: center;
  padding: 60px 0 100px;
  overflow: hidden;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.hero-greeting {
  font-family: var(--font-mono);
  letter-spacing: 0.22em;
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 18px;
}

.hero-name {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  color: var(--cream);
  margin-bottom: 18px;
}

.hero-role {
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--cream-soft);
  font-weight: 500;
  margin-bottom: 20px;
}

.hero-desc {
  max-width: 480px;
  color: var(--cream-dim);
  margin-bottom: 34px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* --- visual --- */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, var(--accent-soft), transparent 70%);
  filter: blur(10px);
  z-index: 0;
}

.grid-orb {
  position: absolute;
  inset: -30px;
  z-index: -1;
  background-image: radial-gradient(circle, rgba(234, 224, 207, 0.35) 1px, transparent 1px);
  background-size: 22px 22px;
  opacity: 0.12;
  border-radius: 50%;
}

.terminal {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.5);
  animation: floatY 6s ease-in-out infinite;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--glass-border);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-red { background: #ff6b6b; }
.dot-yellow { background: #ffd166; }
.dot-green { background: #4fd18b; }

.terminal-title {
  margin-left: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--cream-dim);
}

.terminal-body {
  padding: 22px 20px 26px;
  font-family: var(--font-mono);
  font-size: 0.86rem;
  line-height: 1.9;
  color: var(--cream-soft);
}

.terminal-body .indent {
  padding-left: 20px;
}

.tok-key { color: #a996ff; }
.tok-var { color: #5b8dff; }
.tok-prop { color: var(--cream); }
.tok-str { color: #7fe3b4; }

.cursor {
  color: var(--accent);
  animation: blink 1s step-end infinite;
}

.float-chip {
  position: absolute;
  padding: 8px 16px;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.76rem;
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(10px);
  color: var(--cream-soft);
  animation: floatY 5s ease-in-out infinite;
  z-index: 2;
}

.chip-1 {
  top: 10%;
  right: -8px;
  animation-delay: 0.4s;
}

.chip-2 {
  bottom: 8%;
  left: -18px;
  animation-delay: 1s;
}

.hero-scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--cream-dim);
}

.scroll-line {
  width: 1px;
  height: 26px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: pulseGlow 2s ease-in-out infinite;
}

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-desc {
    margin-inline: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-visual {
    margin-top: 40px;
  }
}

@media (max-width: 520px) {
  .hero {
    padding: 40px 0 80px;
    min-height: auto;
  }

  .terminal {
    max-width: 100%;
  }

  .float-chip {
    display: none;
  }

  .hero-scroll {
    display: none;
  }
}
</style>
