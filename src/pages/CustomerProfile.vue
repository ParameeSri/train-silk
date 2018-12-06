<template>
  <div>
    CustomerProfile 
      <div>
        {{ customers }}
      </div>
      <hr>
      <div>{{ customers.id }}</div>
      <div>{{ customers.firstName }}</div>
      <div>{{ customers.lastName }}</div>
      <div>{{ customers.company }}</div>
      <div>{{ customers.email }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            customers: {}
        }
    },
    mounted() {
        console.log('mounted')
        console.log(this.$route.params.id)
        this.doReq()
    },
    created() {
        console.log('created')
    },
    methods: {
        async doReq() {
            try {
                let res = await axios.get(`http://localhost:3000/customers/${this.$route.params.id}`)
                this.customers = res.data
                console.log(this.customers)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>

