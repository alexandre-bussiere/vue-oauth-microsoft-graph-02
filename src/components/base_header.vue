<template>
  <header class="base-header">
    <nav>
      <ul>
        <li><a href="../App.vue">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
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
