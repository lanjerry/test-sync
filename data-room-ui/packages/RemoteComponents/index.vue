<template>
  <div
    v-loading="loading"
    class="bs-remote-wrap"
    element-loading-text="远程组件加载中..."
  >
    <component
      :is="remoteComponent"
      :config="config"
      @linkage="linkEvent"
    />
  </div>
</template>
<script>
import linkageMixins from 'data-room-ui/js/mixins/linkageMixins'
import commonMixins from 'data-room-ui/js/mixins/commonMixins'
import remoteVueLoader from 'remote-vue2-loader'
import { mapMutations, mapState } from 'vuex'
import _ from 'lodash'
import innerRemoteComponents, { getRemoteComponents } from 'data-room-ui/RemoteComponents/remoteComponentsList'
import { getBizComponentInfo } from 'data-room-ui/js/api/bigScreenApi'
export default {
  name: 'LcdpRemoteComponent',
  mixins: [linkageMixins, commonMixins],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState('bigScreen', {
      pageInfo: state => state.pageInfo,
      customTheme: state => state.pageInfo.pageConfig.customTheme
    }),
    isPreview () {
      return (this.$route.path === window?.BS_CONFIG?.routers?.previewUrl) || (this.$route.path === '/big-screen/preview')
    }
  },
  data () {
    return {
      loading: false,
      remoteComponent: null
    }
  },
  created () {
    this.getRemoteComponent()
  },
  mounted () {
    this.chartInit()
  },
  methods: {
    ...mapMutations('bigScreen', ['changeChartConfig']),
    // 尝试渲染远程文件或远程字符串
    getRemoteComponent () {
      this.loading = true
      // 1. 系统组件 通过配置获取
      if (this.config.customize.vueSysComponentDirName) {
        const remoteComponentList = [...innerRemoteComponents, ...getRemoteComponents()]
        // 获得系统组件最新的配置, 同步
        const config = remoteComponentList?.find(item => item.customize.vueSysComponentDirName === this.config.customize.vueSysComponentDirName)
        const vueFile = config?.customize?.vueFile
        const option = config?.option
        const setting = config?.setting
        // 同步配置
        this.synchConfig(option, setting)
        this.remoteComponent = vueFile
        this.loading = false
        return
      }
      // 2. 业务组件 通过请求获取
      if (this.config.customize.vueBizComponentCode) {
        getBizComponentInfo(this.config.customize.vueBizComponentCode).then(data => {
          const vueContent = data.vueContent
          const settingContent = data.settingContent
          if (!this.config?.option?.data) {
            this.resolveStrSetting(settingContent)
            this.config = this.dataFormatting(this.config, { success: false })
          }

          this.remoteComponent = remoteVueLoader('data:text/plain,' + encodeURIComponent(vueContent))
        }).finally(() => {
          this.loading = false
        })
      }
    },
    async chartInit () {
      let config = this.config
      // key和code相等，说明是一进来刷新，调用list接口
      if (this.config.code === this.config.key || this.isPreview) {
        // 改变样式
        config = this.changeStyle(config) ? this.changeStyle(config) : config
        // 改变数据
        config = await this.changeDataByCode(config)
      } else {
        // 否则说明是更新，这里的更新只指更新数据（改变样式时是直接调取changeStyle方法），因为更新数据会改变key,调用chart接口
        // TODO 直接改变prop控制台会报错，待优化
        try {
          this.config = await this.changeData(config)
        } catch (e) {
          console.error(e)
        }
      }
    },
    linkEvent (formData) {
      this.linkage(formData)
    },
    /**
     * 处理当前组件的字符串配置
     */
    resolveStrSetting (settingContent) {
      // eslint-disable-next-line prefer-const
      let option = {}
      // eslint-disable-next-line prefer-const
      let setting = []
      // eslint-disable-next-line prefer-const, no-unused-vars
      let title = []
      // eslint-disable-next-line prefer-const, no-unused-vars
      let data = []
      // eslint-disable-next-line prefer-const
      settingContent = settingContent.replaceAll('const ', '')
      // 去掉 export default及后面代码
      settingContent = settingContent.replace(/export default[\s\S]*/, '')
      eval(settingContent)
      this.config.option = {
        ...this.config.option,
        ...option
      }
      this.config.setting = setting
      return {
        option,
        setting
      }
    },
    /**
     * 组件的配置
     * @returns {Promise<unknown>}
     */
    // 将config.setting的配置转化为option里的配置，这里之所以将转化的方法提出来，是因为在改变维度指标和样式的时候都需要转化
    transformSettingToOption (config, type) {
      let option = null
      config.setting.forEach(set => {
        if (set.optionField) {
          const optionField = set.optionField.split('.')
          option = config.option
          optionField.forEach((field, index) => {
            if (index === optionField.length - 1) {
              // 数据配置时，必须有值才更新
              if ((set.tabName === type && type === 'data' && set.value) || (set.tabName === type && type === 'custom')) {
                option[field] = set.value
              }
            } else {
              option = option[field]
            }
          })
        }
      })
      config.option = { ...config.option, ...option }
      return config
    },
    dataFormatting (config, data) {
      // 数据返回成功则赋值
      if (data.success) {
        data = data.data
        config = this.transformSettingToOption(config, 'data')
        // 获取到后端返回的数据，有则赋值
        const option = config.option
        const setting = config.setting
        if (config.dataHandler) {
          try {
            // 此处函数处理data
            eval(config.dataHandler)
          } catch (e) {
            console.error(e)
          }
        }
        config.option.data = data
      } else {
        // 数据返回失败则赋前端的模拟数据
        config.option.data = this.plotList?.find(plot => plot.name === config.name)?.option?.data
      }
      return config
    },
    // 组件的样式改变，返回改变后的config
    changeStyle (config) {
      config = { ...this.config, ...config }
      config = this.transformSettingToOption(config, 'custom')
      // 这里定义了option和setting是为了保证在执行eval时,optionHandler、dataHandler里面可能会用到，
      const option = config.option
      const setting = config.setting
      if (this.config.optionHandler) {
        try {
          // 此处函数处理config
          eval(this.config.optionHandler)
        } catch (e) {
          console.error(e)
        }
      }
      if (this.chart) {
        this.chart.update(config.option)
      }
      this.changeChartConfig(config)
      return config
    },
    // 同步配置
    synchConfig (option, setting) {
      // 对比this.config.setting 和 setting，进行合并，数据以this.config.option对象的value为准
      // TODO
    }
  }
}
</script>

<style lang="scss" scoped>
.bs-remote-wrap {
  width: 100%;
}
</style>
