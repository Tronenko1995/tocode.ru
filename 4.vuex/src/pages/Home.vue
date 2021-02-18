<template>
    <div class="wrapper">
        <div class="wrapper-content wrapper-content--fixed">
            <section>
                <h1>Home page</h1>
                {{ message }}
            </section>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        message () {
            return this.$store.getters.getMessage
        }
    }
}
</script>