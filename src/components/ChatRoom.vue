<template>
    <main>
        <h3>Welcome to {{chatId}} chatroom</h3>
    </main>
</template>

<script>
export default {
    computed: {
        chatId() {
            return this.$route.params.id;
        }
    }
}
</script>