<template>
  <div class="header">
    <router-link to="/">Home </router-link>
    <router-link to="/add">Add Restaurant </router-link>
    <a href="" v-on:click="logout()">Logout </a>
  </div>
</template>

<script>
export default {
  name: "HeaDer",
  methods: {
    logout() {
     localStorage.clear();
      
        this.$router.push({ name:"LogiN" });
      
    },
  },
};
</script>
<style scoped>
h1 {
  margin-top: 50px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* margin: 10px; */
  padding: 10px;
  background-color: green;
  margin-top: 0;
  height: 30px;
}
.header a {
  padding: 30px;
  font-size: 20px;
  text-decoration: none;
  color: white;
}
</style>