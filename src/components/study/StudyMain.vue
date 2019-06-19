<template>
  <div>
    {{text}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:"充电吧"
    };
  }
};
</script>
<style>

</style>
