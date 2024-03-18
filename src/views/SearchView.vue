<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis">作者</i>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis">作者</i>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis">作者</i>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis">作者</i>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis">作者</i>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <i class="el-icon-view" id="iconsize">浏览量</i>
        <i class="el-icon-star-on" id="iconsize">收藏量</i>
        <i class="el-icon-chat-round" id="iconsize">点评量</i>
        <i class="el-icon-user-solid" id="lastdis2">作者</i>
        <div class="block" id="selectsetting">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
 export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage3: 5,
      };
    }
  }

</script>

<style>
 #selectsetting
 {
    margin-top: 5%;
    text-align: center;
    margin: auto;
 }
 #lastdis
 {
    margin-left: 60%;
    margin-top: 0%;
    margin-bottom: 0%;
    font-size: 11px;
    font-family: 宋体;
 }
 #lastdis
 {
    margin-left: 60%;
    margin-top: 0%;
    margin-bottom: 0%;
    font-size: 11px;
    font-family: 宋体;
 }
 #lastdis2
 {
    margin-left: 60%;
    margin-top: 0%;
    margin-bottom: 5%;
    font-size: 11px;
    font-family: 宋体;
 }
  #iconsize{
    margin-top: 0%;
    margin-left: 5%;
    margin-bottom: 0%;
    font-size: 11px;
    font-family: 宋体;
  }
 .el-row {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 100%;
    aspect-ratio: 1/0.15;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>