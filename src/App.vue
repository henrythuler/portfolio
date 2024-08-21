<script>
  import TheHeader from './components/TheHeader.vue'
  import TheHome from './components/home/TheHome.vue';
  import TheSkills from './components/skills/TheSkills.vue';
  export default {
    components: {
      TheHeader,
      TheHome,
      TheSkills
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
</style>
