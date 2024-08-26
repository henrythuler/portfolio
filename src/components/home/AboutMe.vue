<script>
    import MyPicture from './MyPicture.vue';
    import SocialMedias from './SocialMedias.vue';
    export default {
        components: {
            MyPicture,
            SocialMedias
        }
    }
</script>

<template>
    <div class="about-me">
        <HeaderModel>
            <h4>Olá, meu nome é Henry Thuler!</h4>
        </HeaderModel>
        <div class="introduction">
            <h2>Sou <span>Desenvolvedor Full-Stack</span></h2>
            <MyPicture class="mobile-picture"/>
        </div>
        <p>Desenvolvedor com experiência no ecossistema <span>Java (JavaEE)</span> e <span>Spring
        Framework</span>, trabalhando em ambientes de <span>metodologias ágeis</span>. Possuo sólido conhecimento no <span>desenvolvimento de APIs REST</span>, páginas web com <span>Vue.js</span> e <span>Angular</span>
        e com um perfil autodidata, proativo e disciplinado. Tenho facilidade em
        absorver novos conhecimentos e resolver problemas complexos. Busco
        constantemente aprimorar minhas habilidades e enfrentar novos
        desafios que me permitam crescer intelectualmente, acredito
        firmemente no aprendizado contínuo como um pilar essencial para um
        profissional excelente.</p>
        <SocialMedias />
    </div>
</template>

<style scoped>
    div{
        max-width: max-content;
        animation: loadUp ease-in forwards 1s;
    }
    .mobile-picture{
        display: none;
    }
    header h4{
        font-weight: 500;
    }
    h2{
        font-size: 3rem;
        color: white;
        margin: 1rem 0;
    }
    span{
        color: #28E98C;
    }
    p{
        font-size: 1rem;
        color: white;
        line-height: 1.5rem;
    }
    @media(max-width: 1024px){
        .mobile-picture{
            display: inline-block;
            padding-bottom: 1rem;
        }
        .introduction{
            display: flex;
            align-items: center;
        }
    }
    @media(max-width: 768px){
        .about-me{
            padding: 1rem .25rem;
        }
        h2{
            font-size: 2.5rem;
            margin: 1rem 0;
        }
    }
    @media(max-width: 425px){
        h2{
            font-size: 2rem;
            margin: 1rem 0;
        }
    }
</style>