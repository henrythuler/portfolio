<script>
    import { mapGetters } from 'vuex';
    import CardSkills from './CardSkills.vue';
    import TheButton from './TheButton.vue';

    export default {
        components: {
            TheButton,
            CardSkills
        },
        props: ['openModal', 'project_title'],
        emits: ['closeModal'],
        computed: {
            ...mapGetters(["currentLanguage"]),
            buttonLabel(){
                if(this.currentLanguage === "english") return "Project Repository"
                else return "Repositório do Projeto"
            },
            project(){
                let projects = []
                if(this.currentLanguage === "english"){
                    projects = this.$store.getters.englishProjects
                }else{
                    projects = this.$store.getters.portugueseProjects
                }
                for (let p of projects) {
                    if(p.title === this.project_title){
                        return p
                    } 
                }
            }
        }
    }
</script>

<template>
    <teleport to="body">
        <Transition name="modal">
            <div v-if="openModal" class="shadow">
                <dialog open>
                    <CardModel class="modal-card">
                        <div class="modal-card-header">
                            <h3>{{ project_title }}</h3>
                            <TheButton @click="$emit('closeModal')">X</TheButton>
                        </div>
                        <p>{{ project.description }}</p>
                        <a class="modal-link" :href="project.link" target="_blank">
                            <CardSkills class="modal-link-card">
                                <img src="/logo-github.png" alt="Github Logo">
                            </CardSkills>
                            <p>{{ buttonLabel }}</p>
                        </a>
                    </CardModel>
                </dialog>
            </div>
        </Transition>
    </teleport>
</template>

<style scoped>
    .shadow{
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }
    dialog {
        position: fixed;
        background-color: transparent;
        display: flex;
        justify-content: center;
        top: 25vh;
        left: 10%;
        width: 80%;
        z-index: 100;
        border: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    .modal-card{
        width: 50%;
        border-radius: 1rem;
        padding: 2rem;
    }
    .modal-card-header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .modal-card div h3{
        font-size: 2rem;
    }
    .modal-card p{
        font-size: 1.25rem;
    }
    .modal-link{
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
        text-decoration: none;
        color: white;
    }
    .modal-link-card img{
        width: 50px;
    }
    .modal-enter-active{
        animation: loadUp .5s ease-in-out;
    }
    .modal-leave-active{
        animation: unload .5s ease-in-out;
    }
    @media (max-width: 768px){
        .modal-card{
            width: 100%;
        }
    }
</style>