<template>
  <div>
    <HeaDer />
    <h1>hello {{ name }} ,Welcome On upadet Restaurant</h1>
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
      <button v-on:click="addData()">Upadete</button><br />
    </div>
  </div>
</template>
<script>
import HeaDer from "./header.vue";
import axios from "axios";

export default {
  name: "UPDTed",
  components: {
    HeaDer,
  },
  methods: {
    async addData() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          rname: this.resto.rname,
          adress: this.resto.adress,
          contect: this.resto.contect,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HoMe" });
      }
    },
  },
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

  async mounted() {
    const user = localStorage.getItem("user");
    this.name = JSON.parse(user).name;

    // this.resto=result.data

    if (!user) {
      this.$router.push({ name: "SingUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.resto = result.data;
    console.log(result.data);
  },
};
</script>
<style scoped>
h1 {
  margin-top: 40px;
  text-align: center;
}
</style>
