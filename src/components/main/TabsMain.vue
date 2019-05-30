<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">        
        <el-button slot="append" type="primary" icon="el-icon-search" @click="searchImgs"></el-button>
      </el-input>
    </div>
    <waterfall :line-gap="200" :watch="imgurls">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in imgurls"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
      >        
      </waterfall-slot>
    </waterfall>
    <el-row>
      <el-col :span="6" v-for="item in imgurls" :key="item">
        <el-card :body-style="{ padding: '10px' }">
          <img
            :src="item"
            class="image"
          >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      input3:"旅游",
      imgurls:[]
    };
  },
  methods: {
    setimgdata(info){
      let imgs= info.data;
      let urlList=[];
      for(let i=0;i<imgs.length;i++){
        urlList.push(imgs[i].share_url);
      }
      this.imgurls=urlList;
    },
    searchImgs() {
      this.axios({
        method: 'get',
        url: '/baidu/channel/listjson?pn=0&rn=32&tag1='+this.input3+'&tag2=全部&ie=utf8',        
        dataType:'text/html'
        
      }).then((response) => {
        this.setimgdata(response.data);
      }).catch(function(error) {
          console.log(error);
      });
          
    }
  },
  created(){
    this.searchImgs();
  }
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
