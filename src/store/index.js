import { createStore } from "vuex";

export default createStore({
    state(){
        return {
            socialMedias: [
                {
                    id: "github",
                    image: "/logo-github.png",
                    link: "https://github.com/henrythuler"
                },
                {
                    id: "linkedin",
                    image: "/logo-linkedin.png",
                    link: "https://www.linkedin.com/in/henrythuler/"
                }
            ],
            skills: [
                {
                    id: 'java',
                    title: "Java",
                    image: "/logo-java.png"
                },
                {
                    id: 'spring',
                    title: "Spring Framework",
                    image: "/logo-spring.png"
                },
                {
                    id: 'angular',
                    title: "Angular",
                    image: "/logo-angular.png"
                },
                {
                    id: 'vue',
                    title: "Vue.js",
                    image: "/logo-vue.png"
                },
                {
                    id: 'typescript',
                    title: "Typescript",
                    image: "/logo-typescript.png"
                },
                {
                    id: 'git',
                    title: "Git",
                    image: "/logo-git.png"
                },
                {
                    id: 'mongo',
                    title: "MongoDB",
                    image: "/logo-mongo.png"
                },
                {
                    id: 'oracle',
                    title: "Oracle DB",
                    image: "/logo-oracle.png"
                },
                {
                    id: 'postgre',
                    title: "PostgreSQL",
                    image: "/logo-postgre.png"
                },
                {
                    id: 'mysql',
                    title: "MySQL",
                    image: "/logo-mysql.png"
                },
            ],
            projects: [
                {
                    title: "OrangeX API",
                    image: "/logo-orange.png",
                    description: "",
                    link: "https://github.com/henrythuler/orangex-api",
                    usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-mongo.png"]
                },
                {
                    title: "Thuler Products",
                    image: "/thuler-products.png",
                    description: "",
                    link: "https://github.com/henrythuler/thuler-products",
                    usedSkills: ["/logo-java.png", "/logo-postgre.png"]
                }
            ]
        }
    }
})