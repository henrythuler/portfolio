<script>
    import SocialMedias from './SocialMedias.vue';
    export default {
        components: {
            SocialMedias
        }
    }
</script>

<template>
    <div>
        <HeaderModel>
            <h4>Hello, I'm Henry Thuler!</h4>
        </HeaderModel>
        <h2>I am a <span>Full-Stack Developer</span> Based In Brazil</h2>
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
</style>