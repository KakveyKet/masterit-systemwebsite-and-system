import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutUsVue from '@/views/AboutUs.vue'
import ContactUsVue from '@/views/ContactUs.vue'

import ProductAndServiceVue from '@/views/ProductAndService.vue'
import SystemDevelopmentVue from '@/views/SystemDevelopment.vue'

import BusinessManagementSystemVue from '@/views/BusinessManagementSystem.vue'
import WebsiteDevelopmentVue from '@/views/WebsiteDevelopment.vue'
import BussinessManangerDevelopmentVue from '@/views/BussinessManangerDevelopment.vue'

import SystemDetails from '@/views/SystemDetails.vue'


import Dashboard from '@/admin/Dashboard.vue'
import ServiceAndProduct from '@/admin/ServiceAndProduct.vue'
import Product from '@/admin/Product.vue'
import Partner from '@/admin/Partner.vue'
import AnswerAndQuestion from '@/admin/AnswerAndQuestion.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUsVue
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsVue
  },
  {
    path: '/productsandservices',
    name: ProductAndServiceVue,
    component: ProductAndServiceVue
  },
  {
    path: '/systemdev',
    name: 'systemdev',
    component: SystemDevelopmentVue
  }, {
    path: '/websitedesigne',
    name: 'websitedesigne',
    component: WebsiteDevelopmentVue,
  }, {
    path: '/cms',
    name: 'cms',
    component: BusinessManagementSystemVue
  },
  {
    path: '/websitedev',
    name: 'websitedev',
    component: WebsiteDevelopmentVue
  }, {
    path: '/BussinessManangerDevelopmentVue',
    name: 'BussinessManangerDevelopmentVue',
    component: BussinessManangerDevelopmentVue
  }, {
    path: '/systemdev/:id',
    name: 'systemdetails',
    component: SystemDetails
  },
  {
    path: '/admin',
    name: 'admin',
    component: Dashboard,
  },
  {
    path: '/services',
    name: 'services',
    component: ServiceAndProduct
  }, {
    path: '/products',
    name: 'products',
    component: Product
  },
  {
    path: '/partner',
    name: 'partner',
    component: Partner
  }, {
    path: '/qanda',
    name: 'qanda',
    component: AnswerAndQuestion
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router


