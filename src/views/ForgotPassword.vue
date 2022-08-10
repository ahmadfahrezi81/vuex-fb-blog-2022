<template lang="">
    <div class="reset-password">
        <Modal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal" />
        <Loading v-if="loading" />
        <div class="form-wrap">
            <form class="reset">
                <p class="login-register">
                    Back to
                    <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
                </p>
                <h2>Reset Password</h2>
                <p>Forgot your passowrd? Enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email" />
                        <img :src="Email" alt="svg" class="icon">
                    </div>
                </div>
                <button @click.prevent="resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>
<script>
import Email from "@/assets/Icons/envelope-regular.svg"
import Modal from "@/components/Modal.vue"
import Loading from "@/components/Loading.vue"
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/config'

export default {
    name: "ForgotPassword",
    setup(){
        return {Email}
    },
    data(){
        return{
            email: null,
            modalActive: false,
            modalMessage: "",
            loading: null

        }
    },
    components:{
        Modal,
        Loading
    },
    methods:{
        resetPassword(){
            this.loading = true;

            sendPasswordResetEmail(auth, this.email)
            .then(()=>{
                this.modalMessage = "Send to reset verification email to " + this.email
                this.loading = false;
                this.modalActive = true;
            }).catch((err)=>{
                this.modalMessage = err.message
                this.loading = false;
                this.modalActive = true;
            })
            
        },  
        closeModal(){
            this.modalActive = !this.modalActive
            this.email = ""
        }
    }
}
</script>
<style lang="scss" scoped>

.reset-password {
    position: relative;

    .form-wrap {
        .reset {
            h2 {
                margin-bottom: 8px;
            }

            p {
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
}
</style>