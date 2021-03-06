import Vue from 'vue'
import Router from 'vue-router'
import watch from '@/components/watch'
import finded from '@/page/finded'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'finded',
      component: finded,
      children: [
        {
          path: '/watch',
          name: 'watch',
          component: watch
        }
      ]
    }
  ]
})
