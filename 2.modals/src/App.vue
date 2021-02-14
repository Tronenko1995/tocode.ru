<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>

        <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
        <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show second modal</button>

        <!-- first modal -->
        <div class="container">
          <modals
          title="First modal"
          v-show="modalFirst"
          @close="modalFirst = false">
          <div slot="body">
            <p>text text text text text text text</p>
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
          </div>
          </modals>
        </div>


        <!-- Second modal -->
        <div class="container">
          <modals
          title="Modal with Form"
          v-show="modalSecond.show"
          @close="modalSecond.show = false">
          <div slot="body">
            <form @submit.prevent="submitModalSecond">
              <label>Name</label>
              <input type="text" required v-model="modalSecond.name">
              <label>Email</label>
              <input type="email" required v-model="modalSecond.email">
              <button class="btn btnPrimary">Submit!</button>
            </form>
          </div>
          </modals>
        </div>

        <!-- modal with validate -->
        <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show Modal Validate</button>
        <modalValidate v-show="modalValidate" @close="modalValidate = false"/>



      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'
export default {
  components: { modals, modalValidate },
  data () {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitModalSecond: function () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>
