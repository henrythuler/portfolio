<script>
    import AboutMe from './AboutMe.vue'
    import MyPicture from './MyPicture.vue'
    export default {
        components: {
            AboutMe,
            MyPicture
        }
    }
</script>

<template>
    <section id="home">
        <div class="container">
            <div class="wrapper">
                <div class="about-me">
                    <AboutMe />
                </div>
                <div class="my-picture">
                    <MyPicture />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .wrapper{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .about-me{
        width: 60%;
    }
    .my-picture{
        width: 40%;
    }
</style>