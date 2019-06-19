<template>
  <div id="app">
    <cHeader></cHeader>   
    <cNavMenu></cNavMenu>
    <router-view/>      
    <cFooter></cFooter>
  </div>

</template>

<script>
import cHeader from  './components/main/Header.vue';
import cFooter from  './components/main/Footer.vue';
import cNavMenu from "./components/main/NavMenu";
export default {
  name: 'App',
  components:{
    cHeader,cFooter,cNavMenu
  }
}
</script>

<style>

</style>
