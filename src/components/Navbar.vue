<template>
  <div class="box">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div v-for="item in productIds" :key="item">
          <router-link :to="`/${item}`">&nbsp; &nbsp; {{ item }} </router-link>
        </div>
      </div>
      <div>

      </div>
    </nav>
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      
      </div>
      <div class="navbar-menu">
        <div v-for="item in productIds" :key="item" >
          <router-link  :to="`/${item}`"  class="button is-primary"> {{ item }} </router-link>
        </div>
      </div>
    </nav> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productIds: ['home', 'about', 'form', 'customer', 'pagination', 'search', 'column', 'nested', 'vuex', 'product',
          'design'
        ],
      }
    }
  }
</script>