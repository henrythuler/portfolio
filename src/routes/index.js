import TheHome from "@/components/home/TheHome.vue";
import TheProjects from "@/components/projects/TheProjects.vue";
import TheSkills from "@/components/skills/TheSkills.vue";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: TheHome},
        {path: '/skills', component: TheSkills},
        {path: '/projects', component: TheProjects}
    ]
})