import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Main from '../store/views/main.vue'
import Detail from '../store/views/detail.vue'

// 二级路由
import Home from '../store/views/main/home.vue'
import Edu from '../store/views/main/edu.vue'
import Idea from '../store/views/main/idea.vue'
import Message from '../store/views/main/message.vue'
import My from '../store/views/main/my.vue'

// 三级路由
import Type from '../store/views/main/home/type.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/home/attention'
  },
  {
    path: '/detail/:id?',
    component: Detail
  },
  {
    path: '/main',
    component: Main,
    children: [{
      path: '/main/home',
      redirect: '/main/home/attention',
      component: Home,
      children: [{
        path: '/main/home/:type',
        component: Type
      }]
    },{
      path: '/main/edu',
      component: Edu
    },{
      path: '/main/idea',
      component: Idea
    },{
      path: '/main/message',
      component: Message
    },{
      path: '/main/my',
      component: My
    }]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
