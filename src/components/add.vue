<template>
  <div>
    <HeaDer />
    <h1>hello {{ namea }},Welcome On Add Restaurant</h1>

    <div class="input">
      <input
        type="text"
        placeholder="Enater  Restaurant Name"
        v-model="resto.rname"
      />
      <input
        type="text"
        placeholder="Enater  Restaurant Adress"
        v-model="resto.adress"
      />
      <input
        type="text"
        placeholder="Enater   Restaurant contect"
        v-model="resto.contect"
      />
      <button v-on:click="addData()">Add</button><br />
    </div>
  </div>
</template>
<script>
import axios from "axios";

import HeaDer from "./header.vue";
export default {
  name: "ADD",
  data() {
    return {
      namea: "",
      resto: {
        rname: "",
        adress: "",
        contect: "",
      },
    };
  },
  components: {
    HeaDer,
  },
  methods: {
    async addData() {
      const result = await axios.post("http://localhost:3000/restaurant", {
        rname: this.resto.rname,
        adress: this.resto.adress,
        contect: this.resto.contect,
      });
      if (result.status===201) {
        this.$router.push({ name: "HoMe" });
      }
    },
  },
  mounted() {
    const user = localStorage.getItem("user");
    this.namea = JSON.parse(user).name;

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
</style>
