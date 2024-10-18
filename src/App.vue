<template>
  <div id="app">
    <base_layout :user="user">
      <HomePage :user="user"  @userChanged="updateUser"/>
    </base_layout>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import base_layout from './components/base_layout.vue';

export default {
  data() {
    return {
      user: null,
    };
  },
  name: 'App',
  components: {
    HomePage,
    base_layout
  },
  methods: {
  updateUser(newUser) {
    this.user = newUser;
    console.log("User updated:", this.user);
  }
}

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
