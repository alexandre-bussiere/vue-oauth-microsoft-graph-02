<template>
    <div class="Home">
            <SigninButton />
    </div>
</template>

<script>
import SigninButton from '../components/SigninButton.vue';
export default {
    name: 'HomePage',
    components: {
        SigninButton,
    },
}

</script>

<style scoped>
.Home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
}
</style>
