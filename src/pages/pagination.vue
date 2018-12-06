<template>
  <div>
    pagination
    <div>
      <table class="table">
      <tr v-for="c in customers" :key="c.id">
            <td><router-link :to="`customerProfile/${c.id}`">{{ c.id }}</router-link></td>
            <td>{{ c.firstName + " " + c.lastName  }} => {{ arrgen[c.gender] }} </td>
            <td>
            </td>
          </tr>
    </table>
    <!-- <a :key="p" v-for="p in totalPage" href="#">&nbsp;{{ p }}</a> -->
    <nav class="pagination is-right" role="navigation" aria-label="pagination">
      <!-- <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a> -->
      <ul class="pagination-list">
        <!-- <li><a class="pagination-link" aria-label="Goto page 1" :key="p" v-for="p in totalPage"  >{{ p }}</a></li> -->
        <li :key="p" v-for="p in totalPage" :aria-current="page">
          <router-link :class="'pagination-link ' + ( (page == p) ? ' is-current' : '' )" aria-label="Goto page 1"  :to="`/Pagination?limit=${limit}&page=${p}`">{{ p }}</router-link>
        </li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
      </ul>
    </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      customers: [],
      totalCustomer: 0,
      totalPage: 0,
      limit: 5,
      page: 1,
      arrgen: {
        M: "Male",
        F: "Female"
      }
    }
  },
  watch: {
    '$route.query'() {
      const { limit = 5, page = 1 } = this.$route.query
      this.page = page
      this.limit = limit
      this.getCustomer(limit, page)
    }
  },
  mounted() {
    const { limit = 5, page = 1 } = this.$route.query
    this.page = page
    this.limit = limit
    this.getCustomer(limit, page)
  },
  created() {
    console.log("created")
  },
  methods: {
    async getCustomer(limit, page) {
      try {
        const { data: customer, headers } = await axios.get(`http://localhost:3000/customers?_limit=${limit}&_page=${page}`)
        this.customers = customer
        this.totalCustomer = parseInt(headers['x-total-count'])
        this.totalPage = Math.ceil(this.totalCustomer / limit)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

