<template>
    <CardModel>
        <header>
            <slot></slot>
        </header>
    </CardModel>
</template>

<style scoped>
    div{
        border-radius: 4rem;
        padding: 1rem 1.5rem;
    }
    header{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
</style>