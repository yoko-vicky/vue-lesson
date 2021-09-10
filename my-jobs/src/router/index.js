import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Jobs from '../views/jobs/Jobs.vue'
// import JobsDetails from '../views/jobs/JobsDetails.vue'
import NotFound from '../views/NotFound.vue'

// How to make component loading lazy loading?
// https://next.router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // make component lazy loding
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    // component: Jobs
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    // component: JobsDetails,
    component: () => import(/* webpackChunkName: "jobsDetails" */ '../views/jobs/JobsDetails.vue'),
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
