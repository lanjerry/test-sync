<template>
  <div class="bs-custom-components">
    <div class="bs-custom-component-header">
      <div class="left-title">
        <div class="logo-wrap item-wrap">
          <img
            class="menu-img"
            src="../BigScreenDesign/images/app.png"
            alt="返回"
            @click="backManagement"
          >
          <span class="logo-text name-span">{{ form.name }}</span>
        </div>
      </div>
      <div class="right-btn-wrap">
        <CusBtn
          :loading="loading"
          @click.native="createdImg()"
        >
          生成图片
        </CusBtn>
        <CusBtn
          :loading="loading"
          @click="save"
        >
          保存
        </CusBtn>
      </div>
    </div>
    <div class="bs-custom-component-content">
      <div class="bs-custom-component-content-code">
        <div class="left-vue-code component-code">
          <div class="code-tab-header">
            <div class="code-tab">
              VUE组件
            </div>
            <div class="upload-btn">
              <CusBtn @click="upload('vueContent')">
                上传
              </CusBtn>
            </div>
          </div>
          <div class="code-tab-content">
            <!-- <MonacoEditor
              ref="vueContent"
              v-model="form.vueContent"
              class="editor"
              language="html"
            /> -->
            <codemirror
              v-model="form.vueContent"
              :options="vueOptions"
            />
          </div>
        </div>
        <div class="right-setting-code component-code">
          <div class="code-tab-header">
            <div class="code-tab">
              组件配置
            </div>
            <div class="upload-btn">
              <CusBtn @click="upload('settingContent')">
                上传
              </CusBtn>
            </div>
          </div>
          <div class="code-tab-content">
            <!-- <MonacoEditor
              ref="settingContent"
              v-model="form.settingContent"
              class="editor"
              language="javascript"
            /> -->
            <codemirror
              v-model="form.settingContent"
              :options="settingOptions"
            />
          </div>
        </div>
      </div>
      <div class="bs-custom-component-content-preview">
        <div class="bs-preview-inner">
          <BizComponentPreview
            :vue-content="form.vueContent"
            :setting-content="form.settingContent"
          />
        </div>
      </div>
      <!-- 通过计算属性发现accept有问题 -->
      <input
        ref="vueContentFile"
        style="display: none"
        type="file"
        name="file"
        accept=".vue"
        @change="handleBatchUpload"
      >
      <input
        ref="settingContentFile"
        style="display: none"
        type="file"
        name="file"
        accept=".js"
        @change="handleBatchUpload"
      >
    </div>
  </div>
</template>
<script>
import { toJpeg, toPng } from 'html-to-image'
import CusBtn from 'data-room-ui/BigScreenDesign/BtnLoading'
// import MonacoEditor from 'data-room-ui/MonacoEditor'
import BizComponentPreview from './Preview'
import { getBizComponentInfo, updateBizComponent } from 'data-room-ui/js/api/bigScreenApi'
import { defaultSettingContent, defaultVueContent } from './config/defaultBizConfig'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/mode/vue/vue.js'

import {
  showSize,
  dataURLtoBlob,
  translateBlobToBase64
} from 'data-room-ui/js/utils/compressImg'
import * as imageConversion from 'image-conversion'

export default {
  name: 'BizComponentDesign',
  components: {
    CusBtn,
    // MonacoEditor,
    codemirror,
    BizComponentPreview
  },
  props: {},
  data () {
    return {
      form: {
        name: '',
        coverPicture: '',
        settingContent: '',
        vueContent: ''
      },
      currentContentType: 'vueContent',
      loading: false,
      vueOptions: {
        foldGutter: true,
        lineWrapping: true,
        gutters: [
          'CodeMirror-linenumbers',
          'CodeMirror-foldgutter',
          'CodeMirror-lint-markers'
        ],
        theme: 'material-darker',
        tabSize: 4,
        lineNumbers: true,
        line: true,
        indentWithTabs: true,
        smartIndent: true,
        autofocus: false,
        matchBrackets: true,
        mode: 'text/x-vue',
        hintOptions: {
          completeSingle: false
        },
        lint: true
      },
      settingOptions: {
        foldGutter: true,
        lineWrapping: true,
        gutters: [
          'CodeMirror-linenumbers',
          'CodeMirror-foldgutter',
          'CodeMirror-lint-markers'
        ],
        theme: 'material-darker',
        tabSize: 4,
        lineNumbers: true,
        line: true,
        indentWithTabs: true,
        smartIndent: true,
        autofocus: false,
        matchBrackets: true,
        mode: 'text/javascript',
        hintOptions: {
          completeSingle: false
        },
        lint: true
      }
    }
  },
  computed: {
  },
  mounted () {
    this.getBizComponentInfo()
  },
  methods: {
    getBizComponentInfo () {
      const code = this.$route.query.code
      if (code) {
        getBizComponentInfo(code).then(data => {
          this.form = {
            ...data,
            name: data.name,
            coverPicture: data.coverPicture,
            settingContent: data.settingContent || defaultSettingContent,
            vueContent: data.vueContent || defaultVueContent
          }
          // this.$refs.vueContent.editor.setValue(this.form.vueContent)
          // this.$refs.settingContent.editor.setValue(this.form.settingContent)
        })
      }
    },
    upload (type) {
      this.currentContentType = type
      this.$refs[`${this.currentContentType}File`].click()
    },
    handleBatchUpload (source) {
      const file = source.target.files
      const reader = new FileReader() // 新建一个FileReader
      reader.readAsText(file[0], 'UTF-8') // 读取文件

      reader.onload = (event) => {
        const sileString = event.target.result // 读取文件内容
        this.form[this.currentContentType] = sileString
        // input通过onchange事件来触发js代码的，由于两次文件是重复的，所以这个时候onchange事件是没有触发到的，所以需要手动清空input的值
        source.target.value = ''
      }
    },
    backManagement () {
      this.$router.push({ path: window.BS_CONFIG?.routers?.componentUrl || '/big-screen-components' })
      const data = { componentsManagementType: 'bizComponent' }
      this.$router.app.$options.globalData = data // 将数据存储在全局变量中
    },
    save () {
      this.loading = true
      const node = document.querySelector('.bs-preview-inner')
      toJpeg(node, { quality: 0.2 })
        .then((dataUrl) => {
          const that = this
          if (showSize(dataUrl) > 200) {
            const url = dataURLtoBlob(dataUrl)
            // 压缩到500KB,这里的500就是要压缩的大小,可自定义
            imageConversion
              .compressAccurately(url, {
                size: 200, // 图片大小压缩到100kb
                width: 1280, // 宽度压缩到1280
                height: 720 // 高度压缩到720
              })
              .then((res) => {
                translateBlobToBase64(res, function (e) {
                  this.form.coverPicture = e.result
                  updateBizComponent(this.form)
                    .then((res) => {
                      that.$message.success('保存成功')
                    })
                    .finally(() => {
                      that.loading = false
                    })
                })
              })
          } else {
            this.form.coverPicture = dataUrl
            updateBizComponent(this.form)
              .then(() => {
                this.$message.success('保存成功')
              })
              .finally(() => {
                this.loading = false
              })
          }
        })
        .catch(() => {
          this.loading = false
        })
    },
    createdImg () {
      this.loading = true
      const node = document.querySelector('.bs-preview-inner')
      toPng(node)
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${this.form.name}.png`
          link.href = dataUrl
          link.click()
          link.addEventListener('click', () => {
            link.remove()
          })
          this.loading = false
        })
        .catch(() => {
          this.$message.warning('出现未知错误，请重试')
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-custom-components {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: var(--bs-el-text);
  background: var(--bs-background-2);
  overflow: hidden;

  > * {
    box-sizing: border-box;
  }

  .bs-custom-component-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px;
    border-bottom: 4px solid var(--bs-background-1);
    background: var(--bs-background-2);

    .left-title {
      font-size: 16px;
      color: var(--bs-el-title);

      .logo-wrap {
        display: flex;
        align-items: center;
      }

      .menu-img {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        margin-left: 9px;
        cursor: pointer;
      }
    }

    .right-btn-wrap {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  .bs-custom-component-content {
    flex: 1;
    background: var(--bs-background-2);
    display: flex;
    flex-direction: column;

    .bs-custom-component-content-code {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 400px;
      padding: 16px;

      .left-vue-code {
        width: 60%;
        height: 100%;
        /* background: var(--bs-background-1); */
      }

      .right-setting-code {
        width: calc(40% - 16px);
        height: 100%;
        /* background: var(--bs-background-1); */
      }

      .component-code {
        .code-tab-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;

          .code-tab {
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 100%;
            color: var(--bs-el-title);
            background: var(--bs-background-1);
          }
        }

        .code-tab-content {
          height: calc(100% - 40px);
          background: var(--bs-background-1);
        }
      }
    }

    .bs-custom-component-content-preview {
      flex: 1;
      width: 100%;
      height: 50%;
      padding: 0 16px 16px;

      .bs-preview-inner {
        width: 100%;
        height: 100%;
        background: var(--bs-background-1);
        position: relative;
      }
    }
  }
}
</style>
<style>
  .cm-s-material-darker.CodeMirror,
  .cm-s-material-darker .CodeMirror-gutters
  {
    background: var(--bs-background-1) !important;
  }
  .CodeMirror-scroll {
    background-color: var(--bs-background-1) !important;
  }
  .CodeMirror-gutters {
    border-right: 1px solid var(--bs-background-1) !important;
    background-color: var(--bs-background-1) !important;
  }
</style>
