import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    //一级路由
  {
    path:"/home",
    name:"home",
    component:()=>import("../views/home.vue"),
    //二级路由
    children:[
      {
         path:'/home/onepage',
         name:"onepage",
         component:()=>import("../views/home/onepage.vue"),
         //三级路由
         children:[
           {
             path:"/home/onepage/zhu",
             name:"zhu",
             component:()=>import("../views/page/zhu.vue")
           },
           {
              path:"/home/onepage/tui",
              name:"tui",
              component:()=>import("../views/page/tui.vue")
           },
           {
              path:"/home/onepage/hot",
              name:"hot",
              component:()=>import("../views/page/hot.vue")
           }
         ]
      },
      {
        path:'/home/dream',
        name:"dream",
        component:()=>import("../views/home/dream.vue")
     },
     {
      path:'/home/school',
      name:"school",
      component:()=>import("../views/home/school.vue")
     },
      {
        path:'/home/message',
        name:"message",
        component:()=>import("../views/home/message.vue")
      },
      {
        path:'/home/mine',
        name:"mine",
        component:()=>import("../views/home/mine.vue")
      }
    ]
   },
   {
     path:"/detail",
     name:"detail",
     component:()=>import("../views/detail")
   },
   {
     path:"/collect",
     name:"collect",
     component:()=>import("../views/collect.vue")
   },
   {
     path:"*",
     redirect:"/home/onepage/zhu"
   }
]

const router = new VueRouter({
  routes
})

export default router
