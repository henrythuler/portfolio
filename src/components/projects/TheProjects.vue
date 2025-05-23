<script>
    import { mapGetters } from 'vuex';
    import CardSkills from '../layout/CardSkills.vue';
    import TheModal from '../layout/TheModal.vue';

    export default {
        components: {
            CardSkills,
            TheModal
        },
        data(){
            return {
                showDescription: false,
                modalTitle: '',
            }
        },
        methods: {
            openModal(title){
                this.showDescription = true
                this.modalTitle = title
            },
            closeModal(){
                this.showDescription = false
                this.modalTitle = ''
            }
        },
        computed: {
            ...mapGetters(['currentLanguage']),
            projects(){
                if(this.currentLanguage == 'english') return this.$store.getters.englishProjects
                else return this.$store.getters.portugueseProjects
            }
        }
    }
</script>

<template>
    <section id="projects">
        <div class="container">
            <div class="wrapper">
                <CardModel v-for="(project, i) of projects" :key="i" @click="openModal(project.title)" class="project">
                    <h3>{{ project.title }}</h3>
                    <div class="project-image">
                        <img :src="project.image" :alt="project.title + 'image'">
                    </div>
                    <div class="project-used-skills">
                        <CardSkills class="skill" v-for="(image, i) of project.usedSkills" :key="i">
                            <img :src="image" alt="Skill image">
                        </CardSkills>
                    </div>
                </CardModel>
                <TheModal :openModal="showDescription" :project_title="modalTitle" @closeModal="closeModal"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #projects{
        animation: loadUp ease-in-out 1s forwards;
    }
    .wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    .project{
        width: 408px;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        color: white;
        cursor: pointer;
    }
    .project:hover{
        animation: scaleUp ease-in-out .3s forwards;
        box-shadow: 0px 0px 0.5rem #28E98C;
    }
    .project h3{
        font-size: 2rem;
    }
    .project-image img{
        max-width: 100%;
        height: 180px;
        border-radius: 1rem;
    }
    .skill{
        padding: .5rem;
    }
    .project-used-skills{
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .project-used-skills img{
        width: 40px;
    }
    .modal-card{
        width: 50%;
    }
    @media (max-width: 1300px){
        #projects{
            padding-top: 2rem;
        }
    }
    @media (max-width: 768px){
        .project-image img{
            min-width: 0;
            border-radius: 1rem;
        }
        .project{
            min-width: 300px;
        }
    }
    @media (max-width: 564px){
        #projects{
            padding: 2rem .5rem;
        }
        .project-image img{
            width: 100%;
            height: 200px;
            border-radius: 1rem;
        }
    }
</style>