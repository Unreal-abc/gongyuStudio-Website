<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Home/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home.vue'

export default {
  name: 'App',
  components: {
    Home
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0;
}
</style>
