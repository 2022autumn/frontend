import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
  path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/testScolar.vue')
  },
    {

    path: '/',
    name: 'homepage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/HomePage.vue')
     },

    {
    path: '/topbar1',
    name: 'topbar1',
    component: () => import('../components/topbar1')
  },
  {
    path: '/topbar2',
    name: 'topbar2',
    component: () => import('../components/topbar2')
  },
  {
    path:'/search_outcome',
    name:'search_outcome',
    component: () => import('../views/search_outcome')

  },
  {
    path:'/paper_details',
    name:'paper_details',
    component: () => import('../views/PaperDetails')
  },
  {
    path:'/cloud',
    name:'cloud',
    component:() => import('../views/zbh/trycloud2')
  },
  {
    path:'/testaxios',
    name:'testaxios',
    component:() => import('../views/zbh/test/testaxios')
  },
  {
    path:'/advancedSearch',
    name:'advancedSearch',
    component:() => import('../views/AdvancedSearch')
  },
  {
    path:'/signup',
    name:'signUp',
    component:() => import('../components/signup')
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../components/login')
  },
  {
    path:'/net',
    name:'net',
    component:() => import('../views/zbh/test/testnet')
  },
  {

    path:'/scholar_page',//学者主页
    name:'scholar_page',
    component:() => import('../views/zbh/scholar_page')
  },
  {
    path:'/advanced_outcome',//进行高级检索后跳转到的界面
    name:'advanced_outcome',
    component:() => import('../views/advanced_outcome')
  },
  {
    path:'/advanced_search_component',
    name:'advanced_search_component',
    component:() => import('../views/advanced_search_component')
  },

  {
    path:'/testzmx',
    name:'testzmx',
    component:() => import('../components/scholarSite')
  },
  {
    path:'/testscholar',
    name:'testscholar',
    component:() => import('../views/testScolar')

  },
  {
    path:'/personal_center',
    name:'personal_center',
    component:() => import('../views/PersonalCenter')
  },
  {
    path:'/collect',
    name:'collect',
    component:() => import('../components/xyj/collect')
  },,
  {
    path:'/collectDetail',
    name:'collectDetail',
    component:() => import('../components/xyj/collectDetail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
