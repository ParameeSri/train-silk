<template>
  <div>
    <h3>Nested</h3>
    <input type="text" class="input" v-model="username">
    <p>{{ username }}</p>
    <Parent :username="username"  @logout="logout"/>
  </div>
</template>

<script>
import Parent from '../components/Parent.vue'

export default {
  components: {
    Parent
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {
    logout() {
      this.username = ''
    }
  }
}
</script>
