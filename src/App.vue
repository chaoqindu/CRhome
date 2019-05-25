<template>
  <div id="app">
    <cHeader></cHeader>    
    <router-view/>      
    <cFooter></cFooter>
  </div>

</template>

<script>
import cHeader from  './components/main/Header.vue';
import cFooter from  './components/main/Footer.vue';
export default {
  name: 'App',
  components:{
    cHeader,cFooter
  }
}
</script>

<style>

</style>
