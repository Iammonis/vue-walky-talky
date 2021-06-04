<template>
    <div>
        Logged in as {{ user.uid }}

        <button class="button" @click="auth.signOut()">Signout</button>
    </div>
</template>

<script>
import { auth } from '../firebase'

export default {
    data() {
        return {
            auth
        }
    },
    props: ['user']
}
</script>