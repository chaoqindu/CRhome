<template>
  <div>
    <el-carousel :interval="5000" :height="height"  :type="type" arrow="always">
      <el-carousel-item v-for="src in picPaths" :key="src">
        <el-image :src="src">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      height:"380px",
      type:"card",
      picPaths:[
        require("../../assets/home/home01.jpeg"),
        require("../../assets/home/home02.jpeg"),
        require("../../assets/home/home03.jpeg"),
        require("../../assets/home/home04.jpeg")
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
