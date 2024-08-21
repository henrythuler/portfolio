import TheHome from "@/components/home/TheHome.vue";
import TheSkills from "@/components/skills/TheSkills.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: TheHome},
        {path: '/skills', component: TheSkills},
    ]
})