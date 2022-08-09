<template lang="">
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" to="/login">Login</router-link>
            </p>
            <h2>Regsiter to FireBlogs</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <img :src="User" alt="svg" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="LastName" v-model="lastName">
                    <img :src="User" alt="svg" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                    <img :src="User" alt="svg" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <img :src="Email" alt="svg" class="icon">
                </div>
                <div class="input">
                    <input type="text" placeholder="Password" v-model="password">
                    <img :src="Password" alt="svg" class="icon">
                </div>
            </div>
            <button @click.prevent="">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import Email from "@/assets/Icons/envelope-regular.svg"
import Password from "@/assets/Icons/lock-alt-solid.svg"
import User from "@/assets/Icons/user-alt-light.svg"

export default {
    name: "Register",
    setup(){
        return {Email, Password, User}
    }
}
</script>
<style lang="">
    
</style>