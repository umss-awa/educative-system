import Vue from 'vue'
import VueRouter from 'vue-router'
import Materias from '../views/Materias'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/student/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/',
    name: 'Login',
    component : Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
