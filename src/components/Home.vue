<template>
  <div>
    <HeaDer />
    <h1>hello {{ name }} ,Welcome On Home Page</h1>
    <table border="1px">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>adress</th>
        <th>conect</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in restaurant" :key="item">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.rname }}
        </td>
        <td>
          {{ item.adress }}
        </td>
        <td>
          {{ item.contect }}
        </td>
        <td>
          <router-link :to="'/update' + item.id">Update</router-link>
          <form action="">
          <button v-on:click="getdelet(item.id)">delete</button>
          </form>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import HeaDer from "./header.vue";
import axios from "axios";
export default {
  name: "HoMe",
  data() {
    return {
      name: "",
      restaurant: {},
    };
  },
  components: {
    HeaDer,
  },
  methods: {
    async getdelet(id) {
      const resut = await axios.delete(
        "http://localhost:3000/restaurant/" + id
      );
     if(resut.status==200){
        console.log(resut);
     }
      
    },
  },

  async mounted() {
    const user = localStorage.getItem("user");
    this.name = JSON.parse(user).name;

    const result = await axios.get("http://localhost:3000/restaurant");
    this.restaurant = result.data;
    console.log(this.restaurant);
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }
  },
};
</script>
<style scoped>
h1 {
  margin-top: 40px;
  text-align: center;
}

table {
  width: 800px;
  height: 150px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid black;
  border-collapse: collapse;

  font-size: 15px;
}
</style>
