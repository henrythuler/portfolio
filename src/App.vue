<script>
  import TheHeader from './components/TheHeader.vue'
  export default {
    components: {
      TheHeader,
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
</style>
