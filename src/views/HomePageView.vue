<template>
  <div>
    <div id="white"></div>
    <div id="searchsize">
      <el-input placeholder="搜索案例" v-model="input">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: ''
      }
    }

  }
</script>

<style>
  #searchsize {
    width: 50%;
    margin-left: 25%;
  }

  #blue {
    margin-left: 2%;
    background-color: #f0f4f7;
    color: #08070c;
    font-family: 楷体;
    font-size: 15px;
  }

  #white {
    height: 40px;
  }

  #blocktop {
    margin-top: 5%;
    margin-bottom: 6%;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 100px;
    height: 100%;
    aspect-ratio: 1/0.8;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>