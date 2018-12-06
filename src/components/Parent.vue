<template>
  <div class="box">
    <h3 class="title">Parent</h3>
    {{ username }}
    <Child :username="username"  @logout="logout"/>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  props: ['username'],
  methods: {
    logout() {
      console.log('parent emit')
      this.$emit('logout')
    }
  }
}
</script>
