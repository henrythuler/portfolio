<script>
    export default {
        data(){
            return {
                mySocialMedias: this.$store.state.socialMedias
            }
        }
    }
</script>

<template>
    <div>
        <CardModel class="social-card" v-for="socialMedia of mySocialMedias" :key="socialMedia.id">
            <a :href="socialMedia.link" target="_blank">
                <img :src="socialMedia.image">
            </a>
        </CardModel>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;
        transition: all ease-in-out .3s;
    }
    .social-card:hover{
        animation: slideUp ease-in-out .3s forwards;
        box-shadow: 0px 0px 0.5rem #28E98C
    }
    .social-card{
        border-radius: 1rem;
    }
    .social-card a{
        display: flex;
        align-items: center;
        padding: .25rem;
    }
    img{
        width: 50px;
    }
</style>