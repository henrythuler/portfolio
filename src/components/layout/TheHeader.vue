<script>
    import { mapGetters } from 'vuex';
import TheButton from './TheButton.vue';
    export default {
        components: {
            TheButton
        },
        data(){
            return{
                isMenuVisible: false,
                isPt: false,
                isEng: true,
            }
        },
        methods: {
            showMenu(){
                this.isMenuVisible = true
            },
            hideMenu(){
                this.isMenuVisible = false
            },
            changeLanguage(){
                this.$store.commit('changeLanguage')
            }
        },
        computed: {
            ...mapGetters(['currentLanguage']),
            header(){
                if(this.currentLanguage == 'english') return this.$store.getters.englishHeader
                else return this.$store.getters.portugueseHeader
            },
            showLanguage(){
                if(this.currentLanguage == 'english') return true
                else return false
            }
        }
    }
</script>

<template>
    <div class="container">
        <HeaderModel class="main-header">
            <nav class="desktop-menu">
                <ul>
                    <li><router-link to="/home">{{ header[0] }}</router-link></li>
                    <li><router-link to="/skills">{{ header[1] }}</router-link></li>
                </ul>
            </nav>
            <h1>THULER</h1>
            <nav class="desktop-menu">
                <ul>
                    <li><router-link to="/projects">{{ header[2] }}</router-link></li>
                    <li>
                        <div class="language-switch">
                            <input type="checkbox" id="languageToggle" />
                            <label for="languageToggle" class="toggle-label" @click="changeLanguage">
                                <span v-show="!showLanguage" class="flag flag-en"><img src="/flag-usa.png" alt="USA Flag"></span>
                                <span v-show="showLanguage" class="flag flag-br"><img src="/flag-brazil.png" alt="Brazil Flag"></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </nav>
            <img @click="showMenu" class="menu-button" src="/menu-icon.png" alt="Menu Icon">
            <teleport to="body">
                <transition name="mobile-menu-animation">
                <nav v-if="isMenuVisible" class="mobile-menu">
                    <TheButton class="close-menu-button" @click="hideMenu">X</TheButton>
                    <ul>
                        <li><router-link to="/home">{{ header[0] }}</router-link></li>
                        <li><router-link to="/skills">{{ header[1] }}</router-link></li>
                        <li><router-link to="/projects">{{ header[2] }}</router-link></li>
                        <li>
                            <div class="language-switch">
                                <input type="checkbox" id="languageToggle" />
                                <label for="languageToggle" class="toggle-label" @click="changeLanguage">
                                    <span v-show="!showLanguage" class="flag flag-en"><img src="/flag-usa.png" alt="USA Flag"></span>
                                    <span v-show="showLanguage" class="flag flag-br"><img src="/flag-brazil.png" alt="Brazil Flag"></span>
                                </label>
                            </div>
                        </li>
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
    nav ul li{
        display: flex;
        align-items: center;
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
        margin-bottom: 2rem;
    }
    .menu-button{
        display: none;
        cursor: pointer;
    }
    .menu-button{
        width: 30px;
    }
    .language-switch {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input[type="checkbox"] {
        display: none;
    }
    .toggle-label {
        display: flex;
        height: 40px;
        align-items: center;
        cursor: pointer;
        width: 82px;
        background-color: none;
        border: 1px solid #28E98C;
        border-radius: 30px;
        position: relative;
        padding: 0 .25rem;
    }
    .toggle-label::after {
        content: "";
        width: 30px;
        height: 30px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        transition: transform 0.3s;
    }
    input[type="checkbox"]:checked + .toggle-label::after {
        transform: translateX(140%);
    }
    .flag {
        position: absolute;
        font-size: 2rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        width: fit-content;
    }
    .flag img{
        width: 75%;
    }
    .flag-en {
        left: 5px;
    }
    .flag-br {
        right: -7px;
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