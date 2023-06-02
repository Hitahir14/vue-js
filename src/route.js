import {createRouter,createWebHistory} from "vue-router"
import HoMe from "./components/Home.vue"
import SingUp from "./components/singup.vue"
import LogiN from "./components/login.vue"
import ADD from "./components/add.vue"
import UPDTed from "./components/update.vue"

const routes=[
    {
        name:"HoMe",
        path:"/",
        component:HoMe
    },
    {
        name:"SingUp",
        path:"/singup",
        component:SingUp
    },
    {
        name:"LogiN",
        path:"/login",
        component:LogiN
    },
    {
        name:"ADD",
        path:"/add",
        component:ADD
    },
    {
        name:"UPDTed",
        path:"/update:id",
        component:UPDTed
    }

]

const router=createRouter({
    history:createWebHistory(),

    routes,
});
export default router