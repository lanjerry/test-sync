
// 配置版本号
const version = '2023071001'
// 分类
const category = 'Progress'
// 标题
const title = '圆角进度条'
// 类别， new Gauge()
const chartType = 'Progress'
// 用于标识，唯一，和文件夹名称一致
const name = 'YuanJiaoJinDuTiao'

// 右侧配置项
const setting = [
  {
    label: '指标',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'percent',
    // 对应options中的字段
    optionField: 'percent',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  /** 样式配置 **/
  // 图表 graph
  {
    label: '进度条颜色',
    // 设置组件类型
    type: 'gradual',
    // 字段
    field: 'frontColor',
    // 对应options中的字段
    optionField: 'frontColor',
    value: 'l(0) 0:#5F92F9  1:#5F92F9',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '不透明度',
    // 设置组件类型
    type: 'slider',
    // 字段
    field: 'progressStyle_fillOpacity',
    // 对应options中的字段
    optionField: 'progressStyle.fillOpacity',
    value: 1,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '圆角',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'progressStyle_radius',
    // 对应options中的字段
    optionField: 'progressStyle.radius',
    value: 20,
    tabName: 'custom',
    groupName: 'graph'
  },
  // 边距 padding
  {
    label: '图表边距',
    type: 'padding', // 设置组件类型
    field: 'appendPadding', // 字段
    optionField: 'appendPadding', // 对应options中的字段
    value: [0, 0, 0, 0],
    tabName: 'custom',
    groupName: 'padding'
  }
]

const data = [
  {
    percent: 0.536
  }
]

// 配置处理脚本
const optionHandler = 'option.color = [option.frontColor, option.backColor]'

// 数据处理脚本
const dataHandler = '// 取返回数据列表的第一项指标值\noption.percent = data[0][setting.filter(settingItem=>settingItem.field === \'percent\')[0].value]'

// 图表配置 new Gauge('domName', option)
const option = {
  // 数据将要放入到哪个字段中
  dataKey: 'data',
  data,
  appendPadding: [0, 0, 0, 0], // 设置图标的边距
  height: 50,
  width: 400,
  autoFit: true,
  percent: 0.8,
  barWidthRatio: 0.3,
  backColor: 'rgba(255, 255, 255, 0)',
  frontColor: '#4a7af4',
  color: ['#4a7af4', 'rgba(255, 255, 255, 0)'],
  progressStyle: {
    r: 10,
    // fill: 'red',
    fillOpacity: 1,
    radius: 20,
    stroke: 'rgba(255, 255, 255, 0)',
    lineWidth: 0,
    // lineDash: [4, 5],
    // strokeOpacity: 0.7,
    shadowColor: 'black'
    // shadowBlur: 10,
    // shadowOffsetX: 5,
    // shadowOffsetY: 5,
    // cursor: 'pointer'
  }
}
export default {
  category,
  version,
  title,
  chartType,
  name,
  option,
  setting,
  optionHandler,
  dataHandler
}
