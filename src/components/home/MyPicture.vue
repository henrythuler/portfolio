<template>
    <div>
        <img src="../../assets/images/picture.png" alt="Profile Pic">
    </div>
</template>

<style scoped>
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: loadDown ease-in 1s forwards;
    }
    img{
        width: 400px;
        filter: drop-shadow(5px 5px 0.5rem #28E98C);
    }
</style>