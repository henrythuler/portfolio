<script>
  import TheHeader from './components/layout/TheHeader.vue'
  export default {
    components: {
      TheHeader
    }
  }
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style>
  body{
    background-color: #0E0E0E;
  }
  #app{
    display: grid;
    padding: 2rem 0;
    min-height: 100vh;
    grid-template-rows: auto 1fr;
  }
  #app section{
    align-self: center;
  }
  .container{
    margin: 0 auto;
    max-width: 1280px;
  }
  .carousel__icon{
    color: white;
  }
  .carousel .carousel__prev{
    left: 100px;
  }
  .carousel .carousel__next{
    right: 100px;
  }
  .carousel .carousel__prev,
  .carousel .carousel__next{
    background-color: #171718;
    padding: .5rem;
    border-radius: 50%;
  }
  @media(max-width: 1300px){
    .container{
      max-width: 960px;
    }
  }
  @media(max-width: 1024px){
    .container{
      max-width: 720px;
    }
    #app{
      padding: 1rem 0;
    }
    .carousel .carousel__prev{
      left: 0;
    }
    .carousel .carousel__next{
      right: 0;
    }
  }
  @media(max-width: 768px){
    .container{
      max-width: 540px;
    }
    .carousel .carousel__prev{
      display: none;
    }
    .carousel .carousel__next{
      display: none;
    }
  }
  @media(max-width: 564px){
    #projects{
      overflow-x: hidden;
    }
    .container{
      width: 100%;
      padding: 0 .5rem;
    }
  }
</style>
