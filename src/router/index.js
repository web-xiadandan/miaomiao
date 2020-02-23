import Vue from 'vue'
import VueRouter from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    cinemaRouter,
    mineRouter,
    movieRouter,
    // 重定向，即默认页面
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})