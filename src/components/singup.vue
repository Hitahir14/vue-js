<template>
<div>
<img class="logo" src="../assets/logoresto.jpg" alt="">

    <h1>SingUp</h1>

    <div class="input">
    <input type="text" placeholder="Enater your Name" v-model="name">
    <input type="email" placeholder="Enater your Email" v-model="email">
    <input type="password" placeholder="Enater your Password" v-model="password">
    <button v-on:click="addData()">SingUp</button><br>
    <div class="login">
<router-link to="login" class="rout">Login</router-link>
</div>
    </div>


</div>
</template>
<script>
import axios from "axios"

export default {
name:"SingUp",
data(){
    return{
        name:"",
        email:"",
        password:""

    }
},
methods:{
    async addData(){

const data =await axios.post("http://localhost:3000/user",{
    name:this.name,
    email:this.email,
    password:this.password,
})
console.log("result",data);

if(data.status==201){
    
 localStorage.setItem("user",JSON.stringify(data.data))
 this.$router.push({name:"HoMe"})


}

    }

},
mounted(){
    const user=localStorage.getItem("user");
    if(user){
 this.$router.push({name:"HoMe"})

    }
}
}
</script>
<style >
h1{
    margin-top:-30px ;
}

.input input{
    width: 380px;
    display: block;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    margin-bottom: 10px;
    border: 1px solid burlywood;
}
.input button{
    width: 390px;
    height: 35px;
    border: 1px solid burlywood;
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
.input button:hover{
background-color: blue;
}
.login{
    width: 100px;
    height: 25px;
    border: 1px solid black;
     margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    background-color: skyblue;
    padding-top: 8px;

}
.rout{
    text-decoration: none;
    color: white;
    text-align: center;
 
}
.login:hover{
background-color: blue;
}
</style>
