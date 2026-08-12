import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'home', component: Home }],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 84, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
