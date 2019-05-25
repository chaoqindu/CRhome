<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in picPaths" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      picPaths:[
        "../../assets/home/home01.jpeg",
        "../../assets/home/home02.jpeg",
        "../../assets/home/home03.jpeg",
        "../../assets/home/home04.jpeg",
      ] 
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
