import Vue from 'vue'
import VueRouter from 'vue-router'
import Materias from '../views/Materias'
import MateriasDoc from '../components/MateriasDoc'
import Login from '../components/Login'
import Register from '../components/Register'
import SignIn from '../components/SignIn'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/student/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/docente/materias',
    name: 'materiasdoc',
    component: MateriasDoc
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
  },
  {
    path: '/login',
    name: 'SignIn',
    component : SignIn
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
