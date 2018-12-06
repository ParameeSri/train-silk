<template>
  <div class="box">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="Position">No.</abbr></th>
          <th>Name</th>
          <th><abbr title="Played">Gender</abbr></th>
          <th colspan="2"><abbr title="Played">Picture</abbr></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Gender</abbr></th>
          <th colspan="2"><abbr title="Played">Picture</abbr></th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="item in customers" :key="item.id">
          <td> {{ item.id }}</td>
          <td> {{ item.firstName + ' ' +item.lastName }}</td>
          <td> {{ arrgen[item.gender] }}</td>
          <td>
              <figure class="image is-48x48">
                <img :src="lookupImage[item.gender]">
              </figure>
          </td>
          <td>
            <a class="button is-primary" @click="handleClick(item)">Detail</a></td>
        </tr>
      </tbody>  
    </table>
    <modal :cmodal="pcmodal" :hideDetail="hideDetail" :detail="detail"/>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'
import modal from '../components/modal.vue'
export default {
  components: {
    modal
  },
  data () {
    return {
      detail: {},
      customers: [],
      pcmodal: 'modal'
    }
  },
  async created() {
    let res = await axios.get('http://localhost:3000/customers')
    this.customers = res.data
    this.detail = { data: res.data }
  },
  computed: {
    arrgen() {
      return {
        'M': 'Male',
        'F': 'Female'
      }
    },
    lookupImage() {
      return {
        'M': male,
        'F': female
      }
    }
  },
  methods: {
    handleClick(obj) {
      console.log(obj)
      this.detail = obj
      this.pcmodal = `modal is-active`
      
    },
    hideDetail() {
      this.pcmodal = `modal`
    }
  }
}
</script>

