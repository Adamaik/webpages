import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/LoginView.vue')
  },
  {
    path:'/operate',
    name:'operate',
    component:()=>import('../views/OperateView.vue'),
    children:[
      {
        path: '/operate/home',
        name: '主页',
        component: ()=>import('../views/HomePageView.vue'),
        children:[
          {
            path:'/operate/home/search',
            name:'搜索',
            component:()=>import('../views/SearchView.vue')
          }
        ]
      },
      {
        path: '/operate/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },{
        path:'/operate/test',
        name:'test',
        component:()=> import('../views/TestView.vue')
      },
      {
        path: '/operate/write',
        name: '写作',
        component: ()=>import('../views/WriteView.vue')
      }
    ]
  },
  {
    path:'*',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
