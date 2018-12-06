<template>
  <div class="box">
    <h3 class="title">GrandChild</h3>
    <!-- <p> Vuex Username: {{ usernamex }}</p>
    <p> amount: {{ amount }}</p>
    <p> usAmount: {{ usAmount }}</p>
    <p class="control">
      <button class="button is-danger" @click="logout">Logout</button>
    </p>
    <p class="control">
      <button class="button" @click="$store.commit('mutateAmount')">Reset Amount</button>
      <button class="button" @click="mutateAmount(100)">Reset Amount</button>
    </p> -->
    <pre>{{ customer }}</pre>
    <p class="control">
      <button class="button" @click="getCustomer">Get customer</button>
      <button class="button" @click="$store.dispatch('getCustomer')">Get customer dispatch</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

// const mapStates = { amount() {} }
// const computeds = { ...mapStates, xxx() {} }

// console.log(computeds)
export default {
  props: ['username'],
  methods: {
    logout() {
      this.$emit('logout')
    },
    ...mapMutations(['mutateAmount']),
    ...mapActions(['getCustomer'])
  },
  computed: {
    ...mapState(['amount','usernamex','customer']),
    ...mapGetters(['usAmount']),
    xxx() {}
  } 
  // computed: {
  //   vuexUsername() {
  //     return this.$store.state.username
  //   },
  //   vuexAmount () {
  //     return this.$store.getters.usAmount
  //   }
  // }
}
</script>
