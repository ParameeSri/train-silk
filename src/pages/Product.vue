<template>
  <div class="box">
    <h3 class="title">Product Page</h3>
    <hr>
      <input type="text" class="input" v-model="user.username" placeholder="username">
      <input type="text" class="input" v-model="user.password" placeholder="password">
      <p class="control">
        <button @click="postLogin" class="button">
          Save
        </button>
        <div>
          {{ token }}
        </div>
      </p>
    <hr>
    <p class="control">
      <button class="button" @click="getProducts">Get Product</button>
    </p>
    <pre>{{ products }}</pre>
    <div>
        <input type="text" name="product_name_en" class="input" placeholder="Product name" v-model="product.product_name_en">
    </div>
    <div>
        <input type="text" name="unit_en" class="input" placeholder="Input" v-model="product.unit_en">
    </div>
    <p class="control">
      <button @click="postProduct" class="button is-success">Save</button>
    </p>
    <p class="control">
      <button @click="deleteProduct" class="button is-warning">Delete</button>
    </p>
  </div>
</template>

<script>
  import axios from '../axios.js'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        token: '',
        user: {},
        products: [],
        product: {}
      }
    },
    mounted() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    },
    methods: {
      async postLogin() {
        // const { data } = await axios.post('http://localhost:3000/api/user/login', this.user)
        const { data } = await axios.post('/api/user/login', this.user)
        this.token = data.token

        localStorage.setItem('token', data.token)
      },
      async getProducts() {
        const { data } = await axios.get('http://localhost:3000/api/product?price=500', { headers: { 'authorization': this.token }
      })
        this.products = data
      },
      async postProduct() {
        console.log(this.product)
        const res = await axios.post('http://localhost:3000/api/product',this.product)
        console.log('res =>', res)
      },
      async deleteProduct() {
        const res = await axios.delete('http://localhost:3000/api/product/103')
        console.log('res =>', res)
      }
    }
  }
</script>