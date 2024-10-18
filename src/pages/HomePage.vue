<template>
    <div class="Home">
        <SigninButton @userChanged="updateUser"/>
        <br>
        <p v-if="user">Bienvenue, {{ user.name }}!</p>
        <p v-else>Veuillez vous connecter pour continuer.</p>
    </div>
</template>

<script>
import SigninButton from '../components/SigninButton.vue';
export default {
  name: 'HomePage',
  components: {
    SigninButton
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleUserChanged(newUser) {
      this.$emit('userChanged', newUser); // Propage l'événement vers le parent
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
