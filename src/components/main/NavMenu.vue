<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#66ccff"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">我的小窝</el-menu-item>
    <el-submenu index="2">
      <template slot="title">时光留影</template>
      <el-menu-item index="2-1">时光漫步</el-menu-item>
      <el-menu-item index="2-2">休闲旅游</el-menu-item>
      <el-menu-item index="2-3">娱乐影视</el-menu-item>      
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">充电站</template>
      <el-menu-item index="3-1">Web开发</el-menu-item>
      <el-menu-item index="3-2">数据与算法</el-menu-item>
      <el-menu-item index="3-3">读书笔记</el-menu-item>  
    </el-submenu>    
    <el-submenu index="4">
      <template slot="title">喜爱的地方</template>
      <el-menu-item index="4-1">
        <a href="https://www.baidu.com" target="_blank">百度一下</a>
      </el-menu-item>
      <el-menu-item index="4-2">
        <a href="https://www.bilibili.com" target="_blank">哔哩哔哩</a>
      </el-menu-item>
      <el-menu-item index="4-3">
        <a href="https://www.bilibili.com" target="_blank">剁手快乐</a>
      </el-menu-item>      
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

