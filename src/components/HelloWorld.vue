<template>
  <div>
    <el-container>
      <el-header>
        <cNavMenu></cNavMenu>
      </el-header>
      <el-container>       
        <el-main>
          <cTabsMain></cTabsMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import cNavMenu from "./main/NavMenu";
import cLeftMenu from "./main/LeftMenu";
import cTabsMain from "./main/TabsMain";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "欢迎来到你的VUE.JS应用"
    };
  },
  components:{cNavMenu,cLeftMenu,cTabsMain}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
