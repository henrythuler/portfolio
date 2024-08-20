<script>
  import TheHeader from './components/TheHeader.vue'
  import TheHome from './components/home/TheHome.vue';
  export default {
    components: {
      TheHeader,
      TheHome
    },
    data(){
      return {

      }
    },
    methods: {

    }
  }
</script>

<template>
  <TheHeader />
  <TheHome />
</template>

<style>
  body{
    background-color: #0E0E0E;
  }
  .container{
    margin: 0 auto;
    max-width: 1280px;
  }
</style>
