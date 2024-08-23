<script>
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import CardSkills from '../layout/CardSkills.vue';

    export default {
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
            CardSkills
        },
        data(){
            return {
                myProjects: this.$store.state.projects
            }
        }
    }
</script>

<template>
    <section id="projects">
        <div class="container">
            <div class="wrapper">
                <carousel :items-to-show="1">
                    <slide v-for="(project, i) of myProjects" :key="i">
                        <CardModel class="project">
                            <a target="_blank" :href="project.link" class="project-link">
                                <div class="project-image">
                                    <img :src="project.image">
                                </div>
                                <div class="project-description">
                                    <h3>{{ project.title }}</h3>
                                    <div class="project-used-skills">
                                        <CardSkills class="skill" v-for="(image, i) of project.usedSkills" :key="i">
                                            <img :src="image">
                                        </CardSkills>
                                    </div>
                                </div>
                            </a>
                        </CardModel>
                    </slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </carousel>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .wrapper{
        display: flex;
        justify-content: center;
    }
    .project{
        width: 75%;
        border-radius: 1rem;
    }
    .project-link{
        display: flex;
        width: 100%;
        padding: 1rem;
        text-decoration: none;
        color: white;
    }
    .project-image{
        flex: 1;
    }
    .project-image img{
        height: 300px;
        border-radius: 1rem;
    }
    .project-description{
        flex: 1;
    }
    .project-description h3{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .skill{
        padding: .5rem;
    }
    .project-used-skills{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .project-used-skills img{
        width: 40px;
    }
</style>