import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function page(path) {
  return () => import(/* webpackChunkName: '' */ '../views/'+path+'.vue').then(m => m.default || m)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: page('Home')
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
  },
  {
    path: '*',
    name: '404',
    component: page('404')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
