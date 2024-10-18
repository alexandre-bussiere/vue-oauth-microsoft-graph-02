<template>
  <header class="base-header">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
          <router-link v-if="user" to="/conversations">Conversations</router-link>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BaseHeader',
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser;
    }
  }
};
</script>

<style scoped>
.base-header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  margin-bottom: 5rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #00438a;
}

</style>
