<template>
  <div id="app">
    <base_layout>
      <HomePage />
    </base_layout>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import base_layout from './components/base_layout.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    base_layout
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
