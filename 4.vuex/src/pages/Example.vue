<template>
    <div class="wrapper">
        <div class="wrapper-content wrapper-content--fixed">
            <section>
                <h1>Example page</h1>
                <input type="text" v-model="message">
                <button class="btn btnPrimary" @click="setMessage">Change message</button>
                <br>
                <br>
                <p>{{ getMessage }}</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: null
        }
    },
    computed: {
        getMessage() {
            return this.$store.getters.getMessage
        }
    },
    methods: {
        setMessage () {
            this.$store.dispatch('setMessage', this.message)
        }
    }
}
</script>