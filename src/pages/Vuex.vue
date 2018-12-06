<template>
  <div>
    
    <table class="table">
      <tr v-for="c in customer" :key="c.id">
            <td><router-link :to="`customerProfile/${c.id}`">{{ c.id }}</router-link></td>
            <td>{{ c.firstName + " " + c.lastName }}</td>
          </tr>
    </table>
    <pre>{{ customerNames }}</pre>
    <button class="button" @click="getCustomer">Get customer</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getCustomer']),
    ...mapGetters(['femaleCustomer'])
  },
  computed: {
    ...mapState(['customer']),
    ...mapGetters(['customerNames'])
  },
  created() {
    // console.log(this.customer,'xxx')
  } 
}
</script>

