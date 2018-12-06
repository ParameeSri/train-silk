<template>
  <div>
    <h3>Search</h3>
    <input type="text" class="input" v-model="searchBy" @keyup="searchCustomer">
    <table class="table">
      <tr v-for="c in customers" :key="c.id">
            <td>
              {{ c.id }}
            </td>
            <td>
              {{ c.firstName }}
            </td>
            <td>
              {{ c.lastName }}
            </td>
          </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash'
export default {
  data() {
    return {
      searchBy: '',
      customers: [],
    }
  },
  created() {
    this.searchCustomer = debounce(this.searchCustomer,600)
  },
  methods: {
    searchCustomer() {
      this.doReq()
      console.log(this.searchBy)
    },
    async doReq() {
            try {
                let res = await axios.get(`http://localhost:3000/customers?q=${this.searchBy}`)
                this.customers = res.data
                console.log(this.customers)
            } catch (error) {
                console.log(error.message)
            }
        }
  }
}
</script>

