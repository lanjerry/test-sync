/*
 * @description: 配置，参考https://g2plot.antv.antgroup.com/examples
 * @Date: 2023-03-27 14:38:23
 * @Author: xing.heng
 */

// 配置版本号
const version = '2023071001'
// 分类
const category = 'Column'
// 标题
const title = '基础柱状图'
// 类别， new Line()
const chartType = 'Column'
// 用于标识，唯一，和文件夹名称一致
const name = 'JiChuZhuZhuangTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    type: 'select', // 设置组件类型
    field: 'xField', // 字段
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '指标',
    type: 'select', // 设置组件类型
    field: 'yField', // 字段
    optionField: 'yField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  /** 样式配置 **/
  // 图表 graph
  {
    label: '柱子颜色',
    type: 'gradual', // 设置组件类型
    field: 'columnStyle_fill', // 字段
    optionField: 'columnStyle.fill', // 对应options中的字段
    value: 'l(90) 0:#5AA6AB 1:#217AB1',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签',
    type: 'switch', // 设置组件类型
    field: 'label_style_opacity', // 字段
    optionField: 'label.style.opacity', // 对应options中的字段
    value: 0,
    active: 1,
    inactive: 0,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签位置',
    type: 'select', // 设置组件类型
    field: 'label_position', // 字段
    optionField: 'label.position', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'middle',
    tabName: 'custom',
    options: [
      {
        label: '顶部',
        value: 'top'
      },
      {
        label: '居中',
        value: 'middle'
      },
      {
        label: '底部',
        value: 'bottom'
      }
    ],
    groupName: 'graph'
  },
  {
    label: '数据标签颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'label_style_fill', // 字段
    optionField: 'label.style.fill', // 对应options中的字段
    value: '#ffffff',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签大小',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'label_style_fontSize',
    // 对应options中的字段
    optionField: 'label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'graph'
  },
  // 网格线 grid
  {
    label: '虚线',
    type: 'switch',
    field: 'yAxis_grid_line_style_lineDash',
    optionField: 'yAxis.grid.line.style.lineDash',
    value: 0,
    active: 5,
    inactive: 0,
    tabName: 'custom',
    groupName: 'grid'
  },
  {
    label: '宽度',
    type: 'inputNumber',
    field: 'yAxis_grid_line_style_lineWidth',
    optionField: 'yAxis.grid.line.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'grid'
  },
  {
    label: '颜色',
    type: 'colorPicker',
    field: 'yAxis_grid_line_style_stroke',
    optionField: 'yAxis.grid.line.style.stroke',
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'grid'
  },
  // X轴 xAxis
  {
    label: '标题',
    type: 'input',
    field: 'xAxis_title_text',
    optionField: 'xAxis.title.text',
    value: '',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标题位置',
    type: 'select',
    field: 'xAxis_title_position',
    optionField: 'xAxis.title.position',
    value: 'end',
    tabName: 'custom',
    options: [
      {
        label: '左',
        value: 'start'
      },
      {
        label: '中',
        value: 'center'
      },
      {
        label: '右',
        value: 'end'
      }],
    groupName: 'xAxis'
  },
  {
    label: '标题字体大小',
    type: 'inputNumber',
    field: 'xAxis_title_style_fontSize',
    optionField: 'xAxis.title.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标题颜色',
    type: 'colorPicker',
    field: 'xAxis_title_style_fill',
    optionField: 'xAxis.title.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标签大小',
    type: 'inputNumber',
    field: 'xAxis_label_style_fontSize',
    optionField: 'xAxis.label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标签颜色',
    type: 'colorPicker',
    field: 'xAxis_label_style_fill',
    optionField: 'xAxis.label.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '轴线宽度',
    type: 'inputNumber',
    field: 'xAxis_line_style_lineWidth',
    optionField: 'xAxis.line.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '轴线颜色',
    type: 'colorPicker',
    field: 'xAxis_line_style_stroke',
    optionField: 'xAxis.line.style.stroke',
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '刻度线宽度',
    type: 'inputNumber',
    field: 'xAxis_tickLine_style_lineWidth',
    optionField: 'xAxis.tickLine.style.lineWidth',
    value: 1,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '刻度线颜色',
    type: 'colorPicker',
    field: 'xAxis_tickLine_style_stroke',
    optionField: 'xAxis.tickLine.style.stroke',
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标签过多时旋转',
    type: 'switch',
    field: 'xAxis_label_autoRotate',
    optionField: 'xAxis.label.autoRotate',
    value: false,
    active: true,
    inactive: false,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标签过多时隐藏',
    type: 'switch',
    field: 'xAxis_label_autoHide',
    optionField: 'xAxis.label.autoHide',
    value: true,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  {
    label: '标签过长时省略',
    type: 'switch',
    field: 'xAxis_label_autoEllipsis',
    optionField: 'xAxis.label.autoEllipsis',
    value: true,
    tabName: 'custom',
    groupName: 'xAxis'
  },
  // Y轴 yAxis
  {
    label: '标题',
    type: 'input',
    field: 'yAxis_title_text',
    optionField: 'yAxis.title.text',
    value: '',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '标题位置',
    type: 'select',
    field: 'yAxis_title_position',
    optionField: 'yAxis.title.position',
    value: 'end',
    tabName: 'custom',
    options: [
      {
        label: '上',
        value: 'end'
      },
      {
        label: '中',
        value: 'center'
      },
      {
        label: '下',
        value: 'start'
      }],
    groupName: 'yAxis'
  },
  {
    label: '标题字体大小',
    type: 'inputNumber',
    field: 'yAxis_title_style_fontSize',
    optionField: 'yAxis.title.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '标题颜色',
    type: 'colorPicker',
    field: 'yAxis_title_style_fill',
    optionField: 'yAxis.title.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '显示标签',
    type: 'switch',
    field: 'yAxis_label_style_opacity',
    optionField: 'yAxis.label.style.opacity',
    value: 1,
    active: 1,
    inactive: 0,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '标签字体大小',
    type: 'inputNumber',
    field: 'yAxis_label_style_fontSize',
    optionField: 'yAxis.label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '标签字体颜色',
    type: 'colorPicker',
    field: 'yAxis_label_style_fill',
    optionField: 'yAxis.label.style.fill',
    // 是否多选
    multiple: false,
    value: '#8C8C8C',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '轴线宽度',
    type: 'inputNumber',
    field: 'yAxis_line_lineWidth',
    optionField: 'yAxis.line.style.lineWidth',
    value: 0,
    tabName: 'custom',
    groupName: 'yAxis'
  },
  {
    label: '轴线颜色',
    type: 'colorPicker',
    field: 'yAxis_line_stroke',
    optionField: 'yAxis.line.style.stroke',
    // 是否多选
    multiple: false,
    value: '#d0d0d0',
    tabName: 'custom',
    groupName: 'yAxis'
  },
  // 边距 padding
  {
    label: '图表边距',
    type: 'padding',
    field: 'appendPadding',
    optionField: 'appendPadding',
    value: [16, 16, 16, 16],
    tabName: 'custom',
    groupName: 'padding'
  }
]

// 模拟数据
const data = [
  {
    type: '家具家电',
    sales: 38
  },
  {
    type: '粮油副食',
    sales: 52
  },
  {
    type: '生鲜水果',
    sales: 61
  },
  {
    type: '美容洗护',
    sales: 145
  },
  {
    type: '母婴用品',
    sales: 48
  },
  {
    type: '进口食品',
    sales: 38
  },
  {
    type: '食品饮料',
    sales: 38
  },
  {
    type: '家庭清洁',
    sales: 38
  }
]
// 配置处理脚本
const optionHandler = 'option.yAxis.grid.line.style.lineDash = [4,setting.find(settingItem=>settingItem.field === \'yAxis_grid_line_style_lineDash\').value]'

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  // 数据将要放入到哪个字段中
  dataKey: 'data',
  data,
  appendPadding: [16, 16, 16, 16], // 设置图标的边距
  xField: 'type',
  yField: 'sales',
  color: '',
  columnStyle: { // 设置柱子渐变色
    fill: 'l(90) 0:#5AA6AB 1:#217AB1'
  },
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle', // 'top', 'bottom', 'middle',
    // 配置样式
    style: {
      fill: '#8C8C8C',
      opacity: 0,
      fontSize: 12
    }
  },
  xAxis: {
    title: {
      text: '',
      position: 'end',
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
    label: {
      autoRotate: false,
      autoHide: true,
      autoEllipsis: true,
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
    line: {
      style: {
        stroke: '#d0d0d0',
        lineWidth: 1
      }
    },
    tickLine: {
      style: {
        stroke: '#d0d0d0',
        lineWidth: 1
      }
    }
  },
  yAxis: {
    title: {
      text: '',
      position: 'end',
      autoRotate: false,
      // rotation: Math.PI / 2,
      style: {
        fill: '#8C8C8C',
        fontSize: 12
      }
    },
    grid: {
      line: {
        style: {
          stroke: '#d0d0d0',
          lineWidth: 1,
          lineDash: [4, 5],
          strokeOpacity: 0.7
        }
      }
    },
    label: {
      formatter: (v) => {
        if (v < 1e3) return v
        // 数值格式化为千分位
        if (v >= 1e3 && v < 1e6) return `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
        if (v >= 1e6 && v < 1e9) return `${(v / 1e6).toFixed(1)} M`
        if (v >= 1e9 && v < 1e12) return `${(v / 1e9).toFixed(1)} B`
        return `${(v / 10e8).toFixed(1)} B`
      },
      style: {
        fill: '#8C8C8C',
        fontSize: 12,
        opacity: 1
      }
    },
    line: {
      style: {
        stroke: '#d0d0d0',
        lineWidth: 0
      }
    }
  },
  // 背景图设置
  // columnBackground: {
  //   style: {
  //     fill: '#569EA4',
  //     fillOpacity: 0.1
  //   }
  // },
  meta: {
    type: {
      alias: '类别'
    },
    sales: {
      alias: '销售额'
    }
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
  dataHandler,
  optionHandler
}
