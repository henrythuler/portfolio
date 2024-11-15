<script>
    import { mapGetters } from 'vuex';
import MyPicture from './MyPicture.vue';
    import SocialMedias from './SocialMedias.vue';
    export default {
        components: {
            MyPicture,
            SocialMedias
        },
        computed: {
            ...mapGetters(['currentLanguage']),
            homeIntro(){
                if(this.currentLanguage == 'english') return this.$store.getters.englishHomeIntro
                else return this.$store.getters.portugueseHomeIntro
            },
            homeDesc(){
                if(this.currentLanguage == 'english') return this.$store.getters.englishHomeDesc
                else return this.$store.getters.portugueseHomeDesc
            },
        }
    }
</script>

<template>
    <div class="about-me">
        <HeaderModel>
            <h4>{{ homeIntro }}</h4>
        </HeaderModel>
        <div class="introduction">
            <h2 v-show="currentLanguage == 'portuguese'">Sou <span>Desenvolvedor Full Stack</span></h2>
            <h2 v-show="currentLanguage == 'english'">I am a <span>Full Stack Developer</span></h2>
            <MyPicture class="mobile-picture"/>
        </div>
        <p>{{ homeDesc }}</p>
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
        font-size: 1.1rem;
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