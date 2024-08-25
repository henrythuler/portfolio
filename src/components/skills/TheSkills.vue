<script>
    import CardSkills from '../layout/CardSkills.vue';
    export default {
        components: {
            CardSkills
        },
        data(){
            return {
                mySkills: this.$store.state.skills
            }
        }
    }
</script>

<template>
    <section id="skills">
        <div class="container">
            <div class="wrapper">
                <CardSkills class="skill" v-for="skill of mySkills" :key="skill.id">
                    <img :src="skill.image">
                    <h3>{{ skill.title }}</h3>
                </CardSkills>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #skills{
        animation: loadDown ease-in-out 1s forwards;
    }
    .wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem 5rem;
        justify-content: center;
    }
    .skill{
        gap: 1rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        width: 165px;
    }
    .skill img{
        width: 75px;
    }
    h3{
        font-size: 1.25rem;
    }
    @media(max-width: 768px){
        #skills{
            margin-top: 2rem;
        }
    }
</style>