<script>
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import CardSkills from '../layout/CardSkills.vue';
    import TheModal from '../layout/TheModal.vue';

    export default {
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
            CardSkills,
            TheModal
        },
        data(){
            return {
                myProjects: this.$store.state.projects,
                showDescription: false,
                modalTitle: '',
                modalDescription: '',
                modalLink: ''
            }
        },
        methods: {
            openModal(title, description, link){
                this.showDescription = true
                this.modalTitle = title
                this.modalDescription = description
                this.modalLink = link
            },
            closeModal(){
                this.showDescription = false
                this.modalTitle = ''
                this.modalDescription = ''
                this.modalLink = link
            }
        }
    }
</script>

<template>
    <section id="projects">
        <div class="container">
            <div class="wrapper">
                <carousel :items-to-show="1" :autoplay="3000" :pause-autoplay-on-hover="true">
                    <slide v-for="(project, i) of myProjects" :key="i">
                        <CardModel @click="openModal(project.title, project.description, project.link)" class="project">
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
                    </slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
                <TheModal :openModal="showDescription" :title="modalTitle" :description="modalDescription" :link="modalLink" @closeModal="closeModal"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #projects{
        animation: loadUp ease-in-out 1s forwards;
    }
    .wrapper{
        display: flex;
        justify-content: center;
    }
    .project{
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        color: white;
        cursor: pointer;
    }
    .project h3{
        font-size: 2rem;
    }
    .project-image img{
        height: 300px;
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
</style>