<template>
    <CardModel class="skill">
        <slot></slot>
    </CardModel>
</template>

<style scoped>
    .skill{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        transition: all ease-in-out .3s;
        text-align: center;
    }
    .skill:hover{
        animation: scaleUp ease-in-out .3s forwards;
        box-shadow: 0px 0px 0.5rem #28E98C;
    }
</style>