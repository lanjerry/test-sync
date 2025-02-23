<template>
  <div
    style="width: 100%; height: 100%"
    class="bs-design-wrap bs-bar"
  >
    <div
      :id="`chart${config.code}`"
      style="width: 100%; height: 100%"
    />
  </div>
</template>
<script>
import 'insert-css'
import * as echarts from 'echarts'
import commonMixins from 'data-room-ui/js/mixins/commonMixins.js'
import paramsMixins from 'data-room-ui/js/mixins/paramsMixins'
import linkageMixins from 'data-room-ui/js/mixins/linkageMixins'
import { get } from 'data-room-ui/js/utils/http'
export default {
  name: 'MapCharts',
  mixins: [paramsMixins, commonMixins, linkageMixins],
  props: {
    id: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      charts: null,
      hasData: false
    }
  },
  computed: {
    Data () {
      return JSON.parse(JSON.stringify(this.config))
    }
  },
  watch: {
    Data: {
      handler (newVal, oldVal) {
        if (newVal.w !== oldVal.w || newVal.h !== oldVal.h) {
          this.$nextTick(() => {
            this.charts.resize()
          })
        }
      },
      deep: true
    }
  },
  mounted () {
    this.chartInit()
  },
  beforeDestroy () {
    this.charts?.clear()
  },
  methods: {
    chartInit () {
      let config = this.config
      // key和code相等，说明是一进来刷新，调用list接口
      if (this.config.code === this.config.key || this.isPreview) {
        // 改变数据
        this.changeDataByCode(config).then((res) => {
          // 改变样式
          // config = this.changeStyle(res)
          this.newChart(config)
        }).catch(() => {})
      } else {
        // 否则说明是更新，这里的更新只指更新数据（改变样式时是直接调取changeStyle方法），因为更新数据会改变key,调用chart接口
        this.changeData(config).then((res) => {
          // 初始化图表
          this.newChart(res)
        })
      }
    },
    dataFormatting (config, data) {
      const dataList = []
      data?.data?.forEach(item => {
        dataList.push({ name: item[config.customize.name], value: [item[config.customize.xaxis], item[config.customize.yaxis], item[config.customize.value]] })
      })
      config.option = {
        ...config.option,
        data: dataList
      }
      return config
    },
    async newChart (config) {
      this.charts = echarts.init(
        document.getElementById(`chart${this.config.code}`)
      )
      const option = {
        // 背景颜色
        backgroundColor: config.customize.backgroundColor,
        geo: {
          map: config.customize.scope,
          label: {
            // 通常状态下的样式
            normal: {
              show: config.customize.mapName,
              textStyle: {
                color: '#fff'
              }
            },
            // 鼠标放上去的样式
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          // 地图区域的样式设置
          itemStyle: {
            normal: {
              borderColor: config.customize.mapLineColor,
              borderWidth: 1,
              areaColor: config.customize.areaColor,
              shadowColor: 'fffff',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            // 鼠标放上去高亮的样式
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          }
        },
        // 提示浮窗样式
        tooltip: {
          show: false,
          trigger: 'item',
          alwaysShowContent: false,
          backgroundColor: config.customize.tooltipBackgroundColor,
          borderColor: config.customize.borderColor,
          hideDelay: 100,
          triggerOn: 'mousemove',
          enterable: true,
          textStyle: {
            color: '#DADADA',
            fontSize: '12',
            width: 20,
            height: 30,
            overflow: 'break'
          },
          showDelay: 100
        },
        series: config.customize.scatter
          ? [
              // {
              //   type: 'effectScatter',
              //   coordinateSystem: 'geo',
              //   effectType: 'ripple',
              //   showEffectOn: 'render',
              //   rippleEffect: {
              //     period: 10,
              //     scale: 10,
              //     brushType: 'fill'
              //   },

              //   hoverAnimation: true,
              //   itemStyle: {
              //     normal: {
              //       color: 'rgba(255, 235, 59, .7)',
              //       shadowBlur: 10,
              //       shadowColor: '#333'
              //     }
              //   },
              //   tooltip: {
              //     formatter(params) {
              //       return `<p style="text-align:center;line-height: 30px;height:30px;font-size: 14px;border-bottom: 1px solid #7A8698;">${
              //         params.name
              //       }</p>
              //   <div style="line-height:22px;margin-top:5px">GDP<span style="margin-left:12px;color:#fff;float:right">${
              //     params.data?.value[2] || '--'
              //   }</span></div>`
              //     },
              //     show: true
              //   },
              //   zlevel: 1,
              //   data: [
              //     { name: '西藏自治区', value: [91.23, 29.5, 1] },
              //     { name: '黑龙江省', value: [128.03, 47.01, 1007] },
              //     { name: '北京市', value: [116.4551, 40.2539, 5007] }
              //   ]
              // }
              {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                legendHoverLink: true,
                symbolSize: [60, 60],
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                zlevel: 1,
                // 这里渲染标志里的内容以及样式
                label: {
                  show: true,
                  formatter (value) {
                    return value.data.value[2]
                  },
                  color: config.customize.scatterColor
                },
                // 标志的样式
                itemStyle: {
                  normal: {
                    color: config.customize.scatterBackgroundColor,
                    shadowBlur: 2,
                    shadowColor: 'D8BC37'
                  }
                },
                data: config.option?.data
              }
            ]
          : [
              {
                type: 'map',
                map: config.customize.scope,
                geoIndex: 0,
                roam: false,
                zoom: 1.5,
                center: [105, 36],
                showLegendSymbol: false, // 存在legend时显示
                data: config.option?.data,
                tooltip: {
                  formatter (params) {
                    return `<p style="text-align:center;line-height: 30px;height:30px;font-size: 14px;border-bottom: 1px solid #7A8698;">${
                      params.name
                    }</p>
                <div style="line-height:22px;margin-top:5px">GDP<span style="margin-left:12px;color:#fff;float:right">${
                  params.data?.value[2] || '--'
                }</span></div>`
                  },
                  show: true
                }
              }
            ]
      }
      if (config.customize.visual) {
        option.visualMap = {
          show: true,
          min: config.customize.range[0],
          max: config.customize.range[1],
          seriesIndex: [0],
          inRange: {
            color: config.customize.rangeColor
          }
        }
      }
      const mapUrl = `${window.BS_CONFIG?.httpConfigs?.baseURL}/static/chinaMap/${config.customize.level}/${config.customize.dataMap}`
      const map = await get(decodeURI(mapUrl), {}, true)
      echarts.registerMap(config.customize.scope, map)
      this.charts.setOption(option)
      // this.charts.on('click', (params) => {
      //   get(
      //     `${window.BS_CONFIG?.httpConfigs?.baseURL}/static/chinaMap/province/${params.name}.json`,
      //     {},
      //     true
      //   ).then((res) => {
      //     option.geo.map = params.name
      //     echarts.registerMap(params.name, res)
      //     this.charts.setOption(option, true)
      //   })
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/echartStyle';
.light-theme {
  background-color: #ffffff;
  color: #000000;
}
.auto-theme {
  background-color: rgba(0, 0, 0, 0);
}
</style>
