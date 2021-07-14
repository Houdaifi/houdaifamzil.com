import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function page(path) {
  return () => import(/* webpackChunkName: '' */ '../views/'+path+'.vue')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: page('Home')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: page('Projects')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: page('Resume')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: page('Contact')
  }
]

const router = new VueRouter({
  routes
})

export default router
