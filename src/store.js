import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const foo = {
  foo: 'FOO'
}
const bar = { ...foo,
  bar: 'BAR'
}

console.log(bar)

export default new Vuex.Store({
  state: {
    usernamex: 'admin',
    amount: 100,
    customer: [],
    loading: false,
    token: ''
  },
  getters: {
    usAmount(state) {
      return state.amount / 30
    },
    femaleCustomer(state) {
      return state.customer.filter(c => c.gender === 'F')
    },
    customerNames(state) {
      return state.customer.map(c => {
        return c.firstName + ' ' + c.lastName
      })
    },
    targetCustomer(state) {
      return state.customer.filter(c => {
        return c.age >= 25
      }).map(c => {
        return c.email
      })
    }
  },
  mutations: {
    mutateAmount(state, value) {
      state.amount += value
    },
    mutateCustomers(state, value) {
      state.customer = value
    }
  },
  actions: { // การทำอะไรซักอย่าง หลาย ๆ mutation
    async getCustomer(context) {
      const {
        data
      } = await axios.get('http://localhost:3000/customers')
      context.commit('mutateCustomers', data)
      // try {
      //   context.commit('loading', true)
      //   context.commit('mutateCustomers', [1, 2, 3, 4, 5])
      //   context.commit('loading', false)
      // } catch (e) {
      //   context.commit('loading', false)
      // }
    }
  }
})