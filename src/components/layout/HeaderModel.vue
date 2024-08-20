<template>
    <header>
        <slot></slot>
    </header>
</template>

<style>
    header{
        background-color: #171718;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        padding: 1rem 1.5rem;
        margin-top: 1.25rem;
        color: white;
        border: 1px solid #ccc;
        border-radius: 4rem;
    }
</style>