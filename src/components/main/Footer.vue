<template> 
    <div class="cr-footer">
      <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '版权归杜朝钦所有（2019-2025）'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cr-footer{
    height: 200px;
    width: 100%;
    background: #6666cc;
  }
</style>
