<template>
  <div class="box">
    <div class="field">
        <label>Name</label>
        <div class="control">
          <input type="text" :class="cssClass('name')" name="name" v-model="customer.name" v-validate="'required|min:5'">
        </div>
        <p class="help is-danger">{{ errors.first('name') }}</p>
        <p>{{ errors.has('name') }}</p>
    </div>
    <div class="field">
        <label>Surname</label>
        <div class="control">
          <input type="text" 
            :class="cssClass('surname')"
            name="surname" 
            v-model="customer.surname" 
            v-validate="'required|min:5'">
        </div>
        <p class="help is-danger">{{ errors.first('surname') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {}
    }
  },
  methods: {
    cssClass(field) {
      return `input${ this.errors.has(field) ? ' is-danger': ''}` // this.errors.has(field) ? 'input is-danger' : 'input'
    }
  }
}
</script>

<style scoped>
  p {
    color: red;
  }
</style>


