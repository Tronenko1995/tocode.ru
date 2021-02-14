<template>
    <modal
    title="Login"
    @close="closeModalValidate()">
    <div slot="body">
    <form @submit.prevent="onSubmit">
        
        <!-- email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
            <label>Email</label>
            <input 
            v-model="email" 
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()">
            <p class="errorText" v-if="!$v.email.required">Filed is required</p>    
            <p class="errorText" v-if="!$v.email.email">Email is not correct</p>    
        </div>
        
        <!-- Password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
            <label>Password</label>
            <input 
            v-model="password" 
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()">
            <p class="errorText" v-if="!$v.password.required">Filed is required</p>    
            <p class="errorText" v-if="!$v.password.minLength">Name must have at least {{ $v.password.$params.minLength.min }} !</p>    
        </div>
        
        
        <button class="btn btnPrimary">Login</button>
        <button class="btn" @click.prevent="[$emit('close'),$emit('change')]">I need a registration</button>
    </form>
    </div>
    </modal>
</template>


<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'
export default {
    components: {
        modal
    },
    data () {
        return {
            email: '',
            password: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(8)
        },
    },
    methods: {
        onSubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                const user = {
                    email: this.email,
                    password: this.password
                }
                console.log(user)
                this.closeModalValidate()
            }
        },
        closeModalValidate () {
                this.email = ''
                this.password = ''
                this.$v.$reset()
                this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.form-item .errorText {
    color: #ff0000;
    display: none;
    margin-bottom: 9px;
    font-size: 14px;
}

.form-item.errorInput .errorText {
    display: block;
}

input.error {
    border: 1px solid #ff0000;
}
</style>