<script>
    export default {
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
                <CardModel class="skill" v-for="skill of mySkills" :key="skill.id">
                    <img :src="skill.image">
                    <h3>{{ skill.title }}</h3>
                </CardModel>
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        transition: all ease-in-out .3s;
        text-align: center;
        width: 165px;
    }
    .skill:hover{
        animation: scaleUp ease-in-out .3s forwards;
        box-shadow: 0px 0px 0.5rem #28E98C;
    }
    .skill img{
        width: 75px;
    }
    h3{
        font-size: 1.25rem;
    }
</style>