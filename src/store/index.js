import { createStore } from "vuex";

export default createStore({
    state(){
        return {
            language: 'english',
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
            portuguese: {
                header: ["Home", "Habilidades", "Projetos"],
                homeIntro: "Olá, meu nome é Henry Thuler!",
                homeDesc: "Desenvolvedor com experiência no ecossistema Java (JavaEE) e Spring Framework, trabalhando em ambientes de metodologias ágeis. Possuo sólido conhecimento no desenvolvimento de APIs REST, páginas web com Vue.js, e com um perfil autodidata, proativo e disciplinado. Tenho facilidade em absorver novos conhecimentos e resolver problemas complexos. Busco constantemente aprimorar minhas habilidades comportamentais, técnicas e enfrentar novos desafios que me ajudem com isso, acredito firmemente no aprendizado contínuo como um pilar essencial para um profissional excelente.",
                projects: [
                    {
                        title: "OrangeX API",
                        image: "/logo-orange.png",
                        description: "API de uma rede social baseada no X, desenvolvida com Java Spring Boot, MongoDB e autenticação JWT.",
                        link: "https://github.com/henrythuler/orangex-api",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-mongo.png"]
                    },
                    {
                        title: "Thuler Products",
                        image: "/thuler-products.png",
                        description: "Sistema de gerenciamento de produtos que permite a inserção, atualização, leitura e deleção em um banco de dados PostgreSQL. Desenvolvido com Java EE (JDBC, JSP, Servlets e JSTL)",
                        link: "https://github.com/henrythuler/thuler-products",
                        usedSkills: ["/logo-java.png", "/logo-postgre.png"]
                    },
                    {
                        title: "Connect Care API",
                        image: "/connect-care.jpg",
                        description: "API REST para agendamento de consultas médicas, desenvolvido com Java, Spring Framework, JWT Authentication, Swagger e PostgreSQL.",
                        link: "https://github.com/henrythuler/connect-care-api",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-postgre.png"]
                    }
                ]
            },
            english: {
                header: ["Home", "Skills", "Projects"],
                homeIntro: "Hey, my name is Henry Thuler!",
                homeDesc: "Software Developer with Java (JavaEE) and Spring Framework experience, working on agile environments. With solid knowledge in REST APIs development, web pages using Vue.js, and also a self-taught, self-starter and disciplined profile, I can easily learn new things and solve complex problems. I am constantly improving my soft and hard skills and finding new challenges that help me with it, I strongly believe in lifelong learning as an essential pillar for an excelent professional.",
                projects: [
                    {
                        title: "OrangeX API",
                        image: "/logo-orange.png",
                        description: "A X like social media API, developed with Java Spring Framework, MongoDB and JWT authentication.",
                        link: "https://github.com/henrythuler/orangex-api",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-mongo.png"]
                    },
                    {
                        title: "Thuler Products",
                        image: "/thuler-products.png",
                        description: "A product management system that allows insert, update, read and delete in a PostgreSQL database. Developed with Java (JDBC, JSP, Servlets and JSTL).",
                        link: "https://github.com/henrythuler/thuler-products",
                        usedSkills: ["/logo-java.png", "/logo-postgre.png"]
                    },
                    {
                        title: "Connect Care API",
                        image: "/connect-care.jpg",
                        description: "A REST API for appointments with doctors, developed with Java, Spring Framework, JWT Authentication, Swagger and a PostgreSQL database.",
                        link: "https://github.com/henrythuler/connect-care-api",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-postgre.png"]
                    }
                ]
            }
        }
    },
    mutations: {
        changeLanguage(state){
            if(state.language === 'english'){
                state.language = 'portuguese'
            }else{
                state.language = 'english'
            }
        }
    },
    getters: {
        currentLanguage(state){
            return state.language
        },
        portugueseHeader(state){
            return state.portuguese.header
        },
        portugueseHomeIntro(state){
            return state.portuguese.homeIntro
        },
        portugueseHomeDesc(state){
            return state.portuguese.homeDesc
        },
        portugueseProjects(state){
            return state.portuguese.projects
        },
        englishHeader(state){
            return state.english.header
        },
        englishHomeIntro(state){
            return state.english.homeIntro
        },
        englishHomeDesc(state){
            return state.english.homeDesc
        },
        englishProjects(state){
            return state.english.projects
        }
    }
})