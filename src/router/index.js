import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import My from '@/components/My/my.vue'
import Ride from '@/components/Ride/Ride.vue'
import Buy from '@/components/Buy/Buy.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    
      component: Buy
    },
    {
      path: '/my',
     
      component: My
    },
    {
      path: '/ride',
      
      component: Ride
    },
    {
      path: '/buy',
     
      component: Buy
    }
  ]
})
