<script>
    import TheButton from './TheButton.vue';
    export default {
        components: {
            TheButton
        },
        data(){
            return{
                isMenuVisible: false
            }
        },
        methods: {
            showMenu(){
                this.isMenuVisible = true
            },
            hideMenu(){
                this.isMenuVisible = false
            }
        }
    }
</script>

<template>
    <div class="container">
        <HeaderModel class="main-header">
            <nav class="desktop-menu">
                <ul>
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/skills">Habilidades</router-link></li>
                </ul>
            </nav>
            <h1>THULER</h1>
            <nav class="desktop-menu">
                <ul>
                    <li><router-link to="/projects">Projetos</router-link></li>
                    <li><a target="_blank" href="https://professional-thuler.s3.sa-east-1.amazonaws.com/curriculo_henry_thuler.pdf">Currículo</a></li>
                </ul>
            </nav>
            <img @click="showMenu" class="menu-button" src="/menu-icon.png" alt="Menu Icon">
            <teleport to="body">
                <transition name="mobile-menu-animation">
                <nav v-if="isMenuVisible" class="mobile-menu">
                    <TheButton class="close-menu-button" @click="hideMenu">X</TheButton>
                    <ul>
                        <li><router-link to="/home">Home</router-link></li>
                        <li><router-link to="/skills">Habilidades</router-link></li>
                        <li><router-link to="/projects">Projetos</router-link></li>
                        <li><a target="_blank" href="https://professional-thuler.s3.sa-east-1.amazonaws.com/curriculo_henry_thuler.pdf">Currículo</a></li>
                    </ul>
                </nav>
                </transition>
            </teleport>
        </HeaderModel>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
    }
    .main-header{
        position: relative;
        width: 100%;
        animation: loadDown ease-in 1s forwards;
        z-index: 999;
    }
    header{
        width: 100%;
    }
    h1{
        font-size: 2.5rem;
        font-family: "Jost", sans-serif;
    }
    nav{
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1
    }
    nav ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        list-style-type: none;
    }
    nav ul li a{
        text-decoration: none;
        color: white;
        font-weight: 500;
        font-size: 1.1rem;
        padding: .75rem 1.5rem;
        border-radius: 3rem;
        transition: all ease-in-out .3s;
    }
    nav ul li a.router-link-active{
        background-color: #28E98C;
    }
    nav ul li a:hover{
        background-color: #28E98C;
    }
    .mobile-menu{
        position: fixed;
        z-index: 9999;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #0E0E0E;
        padding: 3rem 1rem;
    }
    .mobile-menu ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
    .mobile-menu-animation-enter-active{
        animation: loadLeft .5s ease-in-out forwards;
    }
    .mobile-menu-animation-leave-active{
        animation: unloadRight .5s ease-in-out forwards;
    }
    .close-menu-button{
        width: max-content;
        margin-bottom: 2rem;
    }
    .menu-button{
        display: none;
        cursor: pointer;
    }
    .menu-button{
        width: 30px;
    }
    @media(max-width: 768px){
        .desktop-menu{
            display: none;
        }
        .menu-button{
            display: block;
        }
    }
</style>