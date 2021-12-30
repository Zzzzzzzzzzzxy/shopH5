import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)
const routes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Profile',
    component: Profile
  },

]

//
const router = new Router({
  routes
  // mode: 'history'
})

export default router
