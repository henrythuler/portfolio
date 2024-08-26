<template>
    <CardModel class="custom-button">
        <button>
            <slot></slot>
        </button>
    </CardModel>
</template>

<style scoped>
    .custom-button{
        display: flex;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        transition: all ease-in-out .3s;
    }
    .custom-button:hover{
        animation: scaleUp ease-in-out .3s forwards;
        box-shadow: 0px 0px 0.5rem #28E98C;
    }
    .custom-button button{
        background-color: transparent;
        border: none;
        text-align: center;
        color: white;
    }
</style>