import { createRouter, createWebHistory } from 'vue-router'
import MainContentComponent from '@/components/main_content/MainContentComponent.vue'
import ReferencesComponent from '@/components/references/ReferencesComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
  routes: [
    { path: '/', component: MainContentComponent },
    { path: '/references', component: ReferencesComponent },
  ],
})

export default router
