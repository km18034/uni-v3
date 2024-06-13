import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Map from '@/views/Map.vue'
import AboutUni from '@/views/AboutUni.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ObjectView from '@/views/ObjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMeView,
      props: true,
    },
    {
      path: '/about-uni',
      name: 'about-uni',
      component: AboutUni,
      props: true,
    },
    {
      path: '/map/:category',
      name: 'map',
      component: Map,
      props: true,
    },
    {
      path: '/object/:slug',
      name: 'object',
      component: ObjectView,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 600);
    });
  },
})

export default router
