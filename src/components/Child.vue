<template>
  <div class="box">
    <h3 class="title">Child</h3>
    {{ username }}
    <GrandChild :username="username" @logout="logout"/>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'
export default {
  components: {
    GrandChild
  },
  props: ['username'],
  methods: {
    logout() {
      console.log('Child emit')
      this.$emit('logout')
    }
  }
}
</script>

