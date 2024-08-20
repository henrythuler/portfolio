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
    <div class="container">
        <div class="wrapper">
            <div>
                <AboutMe />
            </div>
            <div>
                <MyPicture />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .wrapper div{
        width: 100%;
    }
</style>