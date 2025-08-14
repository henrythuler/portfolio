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
                homeDesc: `Desde o início da minha carreira, sou movido por esse pensamento: a tecnologia é uma das ferramentas mais poderosas para resolver problemas reais e gerar mudanças significativas. <br><br>
                            Atuo em toda a stack: no back-end com Java e Spring Boot, no front-end com Vue.js e Nuxt.js; desenvolvendo APIs RESTful escaláveis, aprimorando a experiência do usuário e utilizando tecnologias como PostgreSQL, Kafka, AWS e Kubernetes. <br><br>
                            Um dos destaques da minha trajetória foi contribuir para uma Prova de Conceito do projeto DREX do Banco Central do Brasil: uma iniciativa baseada em blockchain para a tokenização do Real. Desenvolvi microsserviços em NestJS integrados a smart contracts, entregando um fluxo funcional de câmbio entre Real Tokenizado e USD. Posteriormente, compartilhei essa experiência no palco do evento Imersão Dev25K com a comunidade Web3. <br><br>
                            Ao longo dessa jornada, fui reconhecido pela minha capacidade de aprendizado rápido, adaptabilidade e liderança; além da habilidade em produzir documentação técnica clara, desde diagramas de banco de dados até especificações de APIs com Swagger.
                            Fora do trabalho, sou envolvido no ecossistema Web3, explorando como essas tecnologias podem transformar as finanças, os negócios e a sociedade.`,
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
                homeDesc: `Since the beginning of my career, I’ve been driven by this thought: technology is one of the most powerful tools to solve real-world problems and create meaningful change. <br><br>
                            I work across the stack: back-end with Java and Spring Boot, front-end with Vue.js and Nuxt.js; building scalable RESTful APIs, improving user experiences, using technologies like PostgreSQL, Kafka, AWS, and Kubernetes. <br><br>
                            One of my journey's highlight was contributing to a Proof of Concept for the Central Bank of Brazil’s DREX project: a blockchain-based initiative for Brazilian Real tokenization. I developed microservices in NestJS integrated with smart contracts, delivering a functional currency exchange flow between tokenized Brazilian Real and USD. Later I shared that experience on stage at the Imersão Dev25K event with the Web3 community. <br><br>
                            Along the way, I’ve been recognized for my quick learning, adaptability, and leadership; as well as for creating clear technical documentation, from database diagrams to detailed Swagger API docs.
                            Beyond my professional work, I am engaged in the Web3 ecosystem, exploring how these technologies can transform finance, business, and society.`,
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