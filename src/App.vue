<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar/>
       
        <hr>
        <router-view />
        <!-- <input type="text" v-model="msg">
        <h3>{{ msg.split('').reverse() }}</h3>
        <p>{{ msg4.a }}</p>
        <div>{{ 1+1 }}</div>
        <button class="button" @click="hello(20)">Hello</button>
        <div></div>
        <p>{{ fullName }}</p>
        <p v-if="counter < 10">Counter less than 10</p>
        <p v-else>Counter greater than 10</p>
        <div> {{ displayText() }} </div>
        <input type="checkbox" v-model="single">
        <div></div>
        <input type="radio" value="male" v-model="gender">male
        <input type="radio" value="female" v-model="gender">female
        <div>{{ gender }}</div>
        <div>
          <select v-model="income">
            <option value="1">10,000</option>
            <option value="2">20,000</option>
            <option value="3">30,000</option>
          </select>
        </div>
        <div>
          <p v-for="(key, index) in numbers" :key="key">{{ index }} => {{ key }}</p>
        </div>-->
      </div>
    </section> 
  </div>

</template>

<script>
/* eslint-disable */
import 'bulma/css/bulma.min.css'
import Navbar from  './components/Navbar.vue'

export default {
  components: {
    'navbar': Navbar
  },
  data() {
    return {
      income: 1,
      gender: 'male',
      single: true,
      numbers: [10, 20, 30, 40],
      msg: 'Hello World',
      msg2: '',
      msg3: [],
      msg4: {
        a: 'A',
        b: 'B',
      },
      amount: [10, 20, 100],
      name: 'paramee',
      surname: 'srira',
      active: true,
      counter: 1
    }
  },
  methods: {
    hello(number) {
      console.log('hello xxxx', number)
    },
    world() {
      //console.log('world')
    },
    displayText(){
      switch(this.counter) {
        case this.counter < 10:
          return 'aaaa'
          break;
      }
    }
  },
  computed: {
    amountIncludeVat() {
      return this.amount * 1.07
    },
    fullName() {
      return `${this.name} ${this.surname}`
    }
  }
}
</script>
