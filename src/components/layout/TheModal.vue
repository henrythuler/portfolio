<script>
    import CardSkills from './CardSkills.vue';
    import TheButton from './TheButton.vue';

    export default {
        components: {
            TheButton,
            CardSkills
        },
        props: ['openModal', 'title', 'description', 'link']
    }
</script>

<template>
    <teleport to="body">
        <Transition name="modal">
            <div v-if="openModal" class="shadow">
                <dialog open>
                    <CardModel class="modal-card">
                        <div class="modal-card-header">
                            <h3>{{ title }}</h3>
                            <TheButton @click="$emit('closeModal')">X</TheButton>
                        </div>
                        <p>{{ description }}</p>
                        <a class="modal-link" :href="link" target="_blank">
                            <CardSkills class="modal-link-card">
                                <img src="/logo-github.png" alt="Github Logo">
                            </CardSkills>
                            <p>Ver repositório do projeto</p>
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
        top: 20vh;
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