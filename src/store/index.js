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
                    id: 'node',
                    title: "Node.js",
                    image: "/logo-node.png"
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
                {
                    id: 'docker',
                    title: 'Docker',
                    image: '/logo-docker.png'
                }
            ],
            portuguese: {
                header: ["Home", "Habilidades", "Projetos"],
                homeIntro: "Olá, meu nome é Henry Thuler!",
                homeDesc: `Com um ano de experiência apaixonado por tecnologia e inovação. Tenho trabalhado e estudado o ecossistema Java, explorando POO e o Spring Framework. Minha especialidade é criar APIs RESTful e desenvolver páginas web com Vue.js.
                            Tenho também uma sólida experiência em bancos de dados relacionais (PostgreSQL, MySQL, OracleDB) e não relacionais (MongoDB). Possuo nível avançado de inglês em leitura, escrita e conversação, o que me permite colaborar em ambientes multiculturais.
                            Ao longo da minha jornada, recebi feedbacks positivos sobre minha rápida capacidade de aprendizado, flexibilidade, colaboração e liderança. Também pela qualidade da documentação técnica que produzi, incluindo diagramas de banco de dados e o uso do Swagger.
                            Movido pela curiosidade, tenho uma mentalidade autodidata, sempre buscando aprender e me desafiar, resolver problemas complexos e aplicar boas práticas. Atuar em projetos que impactem positivamente a vida das pessoas é meu objetivo e motivação diária.
                            Além disso, sou um entusiasta de blockchain e web3, temas que exploro com muito interesse. Vamos construir algo incrível juntos!`,
                projects: [
                    {
                        title: "Orange Portfolio",
                        image: "/logo-orange.png",
                        description: "App para criar seu portfólio, compartilhando e explorando projetos. A nossa API foi desenvolvida com Node.js, armazenando as informações em um banco de dados PostgreSQL e o Front-end com React.js (MaterialUI).",
                        link: "https://github.com/orgs/Squad-34-Hackaton-Orange/repositories",
                        usedSkills: ["/logo-node.png", "/logo-typescript.png", "/logo-postgre.png", "logo-react.png"]
                    },
                    {
                        title: "OrangeX API",
                        image: "/orangex.png",
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
                    },
                    {
                        title: "TranslateIt",
                        image: "/translateit.png",
                        description: "TranslateIt é uma aplicação desenvolvida para gerenciar tradutores e documentos, com detecção automática de idioma dos documentos enviados utilizando a API da OpenAI.",
                        link: "https://github.com/henrythuler/translateit_app",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-postgre.png", "/logo-vue.png", "/logo-docker.png"]
                    }
                ]
            },
            english: {
                header: ["Home", "Skills", "Projects"],
                homeIntro: "Hey, my name is Henry Thuler!",
                homeDesc: `With one year of experience and a passion for technology and innovation, I have been working and studying the Java ecosystem, exploring OOP and the Spring Framework. My expertise lies in building RESTful APIs and developing web pages with Vue.js.
                            I also have solid experience with relational databases (PostgreSQL, MySQL, OracleDB) and non-relational databases (MongoDB). With advanced English proficiency in reading, writing, and speaking, I can collaborate effectively in multicultural environments.
                            Throughout my journey, I've received positive feedback on my quick learning ability, flexibility, collaboration, and leadership skills, as well as the quality of the technical documentation I produced, including database diagrams and Swagger usage.
                            Driven by curiosity, I have a self-taught mindset, always seeking to learn, challenge myself, solve complex problems, and apply best practices. My daily motivation is to contribute to projects that positively impact people’s lives.
                            In addition, I am an enthusiast of blockchain and web3, topics I explore with great interest. Let’s build something amazing together!`,
                projects: [
                    {
                        title: "Orange Portfolio",
                        image: "/logo-orange.png",
                        description: "An app to create your portfolio, sharing and exploring projects. Our API was developed with Node.js, storing the data in a PostgreSQL database and the front-end with React.js (MaterialUI).",
                        link: "https://github.com/orgs/Squad-34-Hackaton-Orange/repositories",
                        usedSkills: ["/logo-node.png", "/logo-typescript.png", "/logo-postgre.png", "logo-react.png"]
                    },
                    {
                        title: "OrangeX API",
                        image: "/orangex.png",
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
                    },
                    {
                        title: "TranslateIt",
                        image: "/translateit.png",
                        description: "TranslateIt is an application designed for managing translators and documents, with automatic language locale detection for uploaded documents using OpenAI’s API.",
                        link: "https://github.com/henrythuler/translateit_app",
                        usedSkills: ["/logo-java.png", "/logo-spring.png", "/logo-postgre.png", "/logo-vue.png", "/logo-docker.png"]
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