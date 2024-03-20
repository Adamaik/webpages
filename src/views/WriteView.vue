<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div>
          <div id="text">标题</div>
          <el-input v-model="title" placeholder="请输入内容"></el-input>
        </div>
        <div id="text">正文</div>
        <div style="border: 1px solid #ccc;height:93.75vh;">
          <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
          <Editor style="flex:1; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
        </div>
        <div id="middle">
          <div id="child">
            <el-button type="info" @click="uploadAndPublish">发布文章</el-button><el-button type="info"
              @click="uploadWithoutPublish">保存草稿</el-button>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios'

  export default Vue.extend({
    components: { Editor, Toolbar },
    data () {
      return {
        editor: null,
        html: '',
        toolbarConfig: {},
        editorConfig: { placeholder: '请输入内容...' },
        mode: 'default', // or 'simple'
        title: ''
      }
    },
    methods: {
      onCreated (editor) {
        this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      },
      upload (input) { //1表示发布，0表示不发布
        let param = new FormData()
        console.log(this.editor.getHtml())
        param.append('file', this.editor.getHtml())
        param.append('title', this.title)
        param.append('flag', input)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'token': localStorage.getItem('jwt')
          }
        }
        axios.post("/api/upload", param, config).then((res) => {
          if (res.data.code == 1) {
            this.$message.success("提交成功")  //需要引入element
          } else {
            this.$message.warning("添加失败")
          }
          // eslint-disable-next-line no-unused-vars
        }).catch((err) => {
          this.$message.warning("上传失败，请重新上传!")
        })
      },
      uploadAndPublish () {
        this.upload(1);
      },
      uploadWithoutPublish () {
        this.upload(0);
      }
    },
    // mounted () {
    //   // 模拟 ajax 请求，异步渲染编辑器
    //   setTimeout(() => {
    //     this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    //   }, 1500)
    // },
    beforeDestroy () {
      const editor = this.editor
      if (editor == null) return
      editor.destroy() // 组件销毁时，及时销毁编辑器
    }
  })
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>

<style>
  #text {
    padding: 8px;
  }

  #middle {
    display: flex;
    justify-content: center;
  }

  #child {
    padding: 15px;
  }
</style>