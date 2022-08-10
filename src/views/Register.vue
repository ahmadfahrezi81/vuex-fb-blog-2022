<template lang="">
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" to="/login">Login</router-link>
            </p>
            <h2>Create Your FireBase Account</h2>
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
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
            </div>
            <button @click.prevent="signup">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import Email from "@/assets/Icons/envelope-regular.svg"
import Password from "@/assets/Icons/lock-alt-solid.svg"
import User from "@/assets/Icons/user-alt-light.svg"

//auth
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from '../firebase/config'
import {
    collection, onSnapshot,
    addDoc, deleteDoc, doc, updateDoc,
    query, orderBy, limit, setDoc
} from "firebase/firestore"; 

// const todoCollectionRefs = collection(db, "chat")

export default {
    name: "Register",
    setup(){
        return {Email, Password, User}
    }, 
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        };
    },
    methods: {
        // async register() {
        //     if (
        //         this.email !== "" &&
        //         this.password !== "" &&
        //         this.firstName !== "" &&
        //         this.lastName !== "" &&
        //         this.username !== ""
        //     ) {
        //         this.error = false;
        //         this.errorMsg = "";
        //         const firebaseAuth = await firebase.auth();
        //         const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        //         const result = await createUser;
        //         const dataBase = db.collection("users").doc(result.user.uid);
        //         await dataBase.set({
        //             firstName: this.firstName,
        //             lastName: this.lastName,
        //             username: this.username,
        //             email: this.email,
        //         });
        //         this.$router.push({ name: "Home" });
        //         return;
        //     }
        //     this.error = true;
        //     this.errorMsg = "Please fill out all the fields!";
        //     return;
        // },
        async signup(){
            console.log('Sign up action');

            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ) {
                const res = await createUserWithEmailAndPassword(
                    auth, this.email, this.password
                )

                console.log(res)

                if(res){
                    setDoc(doc(db, "users", res.user.uid), {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        username: this.username,
                        email: this.email,
                    })
                    this.$router.push('/')
                } 
            } else{
                this.error = true;
                this.errorMsg = "Please fill out all the fields!";
            }
        }
    },
}
</script>
<style lang="scss" scoped>

.register {
    h2 {
        max-width: 350px;
    }
}
</style>