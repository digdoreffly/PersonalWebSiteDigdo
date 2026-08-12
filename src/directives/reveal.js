// v-reveal — lightweight scroll-reveal directive backed by IntersectionObserver.
// Usage: <div v-reveal>...</div>  or  <div v-reveal="'fade-left'">...</div>
// Respects prefers-reduced-motion by showing content immediately, no animation.

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const reveal = {
  mounted(el, binding) {
    const variant = typeof binding.value === 'string' ? binding.value : 'fade-up'
    el.classList.add('reveal', variant)

    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    const delay = binding.arg ? Number(binding.arg) : 0
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
  },
}

export default reveal
