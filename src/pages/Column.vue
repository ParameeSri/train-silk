<template>
  <div>
    <h3 class="title">Customer</h3>
    <button class="button is-success" @click="getCustomers">GET</button>
    <hr>
    <input type="radio" name="gender" value="M" v-model="gender">Male
    <input type="radio" name="gender" value="F" v-model="gender">Female
    <!-- <div class="columns" v-for="(row, idx) in columnCustomers" :key="idx" >
      <div class="column" v-for="(obj, idx) in row" :key="idx">{{ obj.firstName }}</div>
    </div> -->
    <pre>{{ genderCustomers }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'
import { chunk } from 'lodash'
/* eslint-disable */
export default {
  data() {
    return {
      gender: 'M',
      customers: [],
      img: male,
      img2: female,
      arrgen: {
        'M': 'Male',
        'F': 'Female'
      }
    }
  },
  computed: {
    columnCustomers() {
      return chunk(this.customers, 5)
    },
    genderCustomers() {
      return this.customers.filter(c => c.gender === this.gender)
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

