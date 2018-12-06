import Home from './pages/Home.vue'
import About from './pages/About.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Product from './pages/Product.vue'
import From from './pages/Form.vue'
import customer from './pages/customer.vue'
import design from './pages/design.vue'
import customerProfile from './pages/CustomerProfile.vue'
import pagination from './pages/pagination.vue'
import Search from './pages/Search.vue'
import Column from './pages/Column.vue'
import Nested from './pages/Nested.vue'
import vuex from './pages/Vuex.vue'

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/product', component: Product },
  { path: '/form', component: From },
  { path: '/customer', component: customer },
  { path: '/design', component: design },
  { path: '/customerProfile/:id', component: customerProfile },
  { path: '/pagination', component: pagination },
  { path: '/search', component: Search },
  { path: '/column', component: Column },
  { path: '/nested', component: Nested },
  { path: '/vuex', component: vuex },
  { path: '*', component: PageNotFound }
]
