<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>

        <!-- modal Login -->
        <button class="btn btnPrimary" @click="modalLogin = !modalLogin">Login</button>
        <modalLogin @change="modalRegistration = !modalRegistration" v-show="modalLogin" @close="modalLogin = false"/>
        
        <!-- modal Registration -->
        <button class="btn btnPrimary" @click="modalRegistration = !modalRegistration">Registration</button>
        <modalRegistration @change="modalLogin = !modalLogin" v-show="modalRegistration" @close="modalRegistration = false"/>


      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalLogin from '@/components/ModalLogin.vue'
import modalRegistration from '@/components/ModalRegistration.vue'
export default {
  components: { modals, modalLogin, modalRegistration },
  data () {
    return {
      modalLogin: false,
      modalRegistration: false
    }
  }
}
</script>
