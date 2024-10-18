<template>
    <div class="Home">
        <SigninButton/>
        <br>
        <p v-if="user">Bienvenue, {{ user.name }}!</p>
        <p v-else>Veuillez vous connecter pour continuer.</p>
    </div>
</template>

<script>
import SigninButton from '../components/SigninButton.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'HomePage',
  components: {
    SigninButton
  },
  computed: {
    ...mapGetters(['getUser']), 
    user() {
      return this.getUser; 
    }
  }    
};

</script>

<style scoped>
.Home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
}
</style>
