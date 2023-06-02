<template>
  <div>
    <img class="logo" src="../assets/logoresto.jpg" alt="" />

    <h1>Login</h1>

    <div class="input">
      <input type="email" placeholder="Enater your Email" v-model="email" />
      <input
        type="password"
        placeholder="Enater your Password"
        v-model="password"
      />
      <button v-on:click="getdata()">Login</button><br />
      <div class="login">
        <router-link to="singup" class="rout">Sing-up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LogiN",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async getdata() {
      const data = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if(data.status==200  && data.data.length>0){
    
 localStorage.setItem("user",JSON.stringify(data.data[0]))
 this.$router.push({name:"HoMe"})
console.log(data);

}

    },
  },
  mounted(){
    const user=localStorage.getItem("user");
    if(user){
 this.$router.push({name:"HoMe"})

    }
}
};
</script>
