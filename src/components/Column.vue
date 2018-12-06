<template>
  <div>
    <h3 class="title">Customer</h3>
    <button class="button is-success" @click="getCustomers">GET</button>
    <hr>
    <table class="table">
      <tr v-for="c in customers" :key="c.id">
            <td><router-link :to="`customerProfile/${c.id}`">{{ c.id }}</router-link></td>
            <td>{{ c.firstName + " " + c.lastName  }} => {{ arrgen[c.gender] }} </td>
            <td>
              <figure class="image is-128x128" v-if="c.gender==='M'">
                <img :src="img">
              </figure>
              <figure class="image is-128x128" v-else>
                <img :src="img2">
              </figure>
            </td>
          </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'
/* eslint-disable */
export default {
  data() {
    return {
      customers: [],
      img: male,
      img2: female,
      arrgen: {
        'M': 'Male',
        'F': 'Female'
      }
    }
  },
  methods: {
    async getCustomers() {
      try {
        let res = await axios.get('http://localhost:3000/customers')
        this.customers = res.data
      } catch(error) {
        console.log(error.message)
      }
    },
  }
}
</script>

