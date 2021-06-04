<template>
    <aside>
        <h3>Sign in anonymously</h3>
        <button class="button" @click="auth.signInAnonymously()">Sign In</button>

        <div v-if="newUser">
            <h3>Sign up for a new account</h3>
            <a href="#" @click="newUser = false">Sign In</a>
        </div>

        <div v-else>
            <h3>Sign in with Email</h3>
            <a href="#" @click="newUser = true">New user?</a>
        </div>

        <label for="email">Email</label>
        <input class="input" type="email" placeholder="Email" v-model="email" >
        
        <label for="password">Password</label>
        <input class="input" type="password" placeholder="Password" v-model="password" >

        <button class="button is-info" :class="{ 'is-loading' : loading }" @click="signInOrCreateUser()">{{ newUser ? "Sign Up" : "Sign In" }}</button>
        <p class="has-text-danger" v-if="errorMessage">{{errorMessage}}</p>
    </aside>
</template>

<script>
import { auth } from '../firebase.js'

export default {
    data() {
        return {
            auth,
            newUser: false,
            email: "",
            password: "",
            loading: false,
            errorMessage: ""
        }
    },

    methods: {
        async signInOrCreateUser() {
            this.loading = true;

            try {
                if( this.newUser ){
                    await auth.createUserWithEmailAndPassword(this.email, this.password)
                }
                else{
                    await auth.signInWithEmailAndPassword(this.email, this.password)
                }
            } catch (error) {
                this.errorMessage = error.message;
            }

            this.loading = false;
        }
    }
}
</script>