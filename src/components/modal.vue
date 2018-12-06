<template>
  <div>
     <div :class="cmodal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" @click="hideDetail"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <div>{{ detail.firstName }} {{ detail.lastName }}</div>
          <div>{{ detail.age }}</div>
          <div>{{ detail.gender }}</div>
          <div>{{ detail.company }}</div>
          <div>{{ detail.email }}</div>
          <div>{{ detail.contactDate }}</div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary">Save changes</button>
          <button class="button" @click="hideDetail">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'modal',
    props: {
        detail: Object,
        cmodal: String,
        handleClick: Function,
        hideDetail: Function
    }
}
</script>
