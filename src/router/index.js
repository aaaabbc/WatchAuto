import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
          path: '/helloWorld',
          name: 'helloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
