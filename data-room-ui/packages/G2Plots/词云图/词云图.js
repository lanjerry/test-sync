
// 配置版本号
const version = '2023071001'
// 分类
const category = 'WordCloud'
// 标题
const title = '词云图'
// 类别， new Line()
const chartType = 'WordCloud'
// 用于标识，唯一，title的中文转拼音
const name = 'CiYunTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    // 设置组件类型， select / input / colorPicker
    type: 'select',
    // 字段
    field: 'wordField',
    optionField: 'wordField', // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
    // tab页。 data: 数据， custom: 自定义
    tabName: 'data'
  },
  {
    label: '指标',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'weightField',
    // 对应options中的字段
    optionField: 'weightField',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  /** 样式配置 **/
  // 图表 graph
  {
    label: '字体颜色',
    // 设置组件类型
    type: 'colorSelect',
    // 字段
    field: 'color',
    // 对应options中的字段
    optionField: 'color',
    value: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '背景图URL',
    // 设置组件类型
    type: 'input',
    // 字段
    field: 'imageMask',
    // 对应options中的字段
    optionField: 'imageMask',
    value: '',
    tabName: 'custom',
    groupName: 'graph'
  },
  // 图例 legend
  // 边距 padding
  {
    label: '图表边距',
    type: 'padding', // 设置组件类型
    field: 'appendPadding', // 字段
    optionField: 'appendPadding', // 对应options中的字段
    value: [16, 16, 16, 16],
    tabName: 'custom',
    groupName: 'padding'
  }
]

// 模拟数据
const data = [
  {
    x: 'China',
    value: 1383220000,
    category: 'asia'
  },
  {
    x: 'India',
    value: 1316000000,
    category: 'asia'
  },
  {
    x: 'United States',
    value: 324982000,
    category: 'america'
  },
  {
    x: 'Indonesia',
    value: 263510000,
    category: 'asia'
  },
  {
    x: 'Brazil',
    value: 207505000,
    category: 'america'
  },
  {
    x: 'Pakistan',
    value: 196459000,
    category: 'asia'
  },
  {
    x: 'Nigeria',
    value: 191836000,
    category: 'africa'
  },
  {
    x: 'Bangladesh',
    value: 162459000,
    category: 'asia'
  },
  {
    x: 'Russia',
    value: 146804372,
    category: 'europe'
  },
  {
    x: 'Japan',
    value: 126790000,
    category: 'asia'
  },
  {
    x: 'Mexico',
    value: 123518000,
    category: 'america'
  },
  {
    x: 'Ethiopia',
    value: 104345000,
    category: 'africa'
  },
  {
    x: 'Philippines',
    value: 104037000,
    category: 'asia'
  },
  {
    x: 'Egypt',
    value: 93013300,
    category: 'africa'
  },
  {
    x: 'Vietnam',
    value: 92700000,
    category: 'asia'
  },
  {
    x: 'Germany',
    value: 82800000,
    category: 'europe'
  },
  {
    x: 'Democratic Republic of the Congo',
    value: 82243000,
    category: 'africa'
  },
  {
    x: 'Iran',
    value: 80135400,
    category: 'asia'
  },
  {
    x: 'Turkey',
    value: 79814871,
    category: 'asia'
  },
  {
    x: 'Thailand',
    value: 68298000,
    category: 'asia'
  },
  {
    x: 'France',
    value: 67013000,
    category: 'europe'
  },
  {
    x: 'United Kingdom',
    value: 65110000,
    category: 'europe'
  },
  {
    x: 'Italy',
    value: 60599936,
    category: 'europe'
  },
  {
    x: 'Tanzania',
    value: 56878000,
    category: 'africa'
  },
  {
    x: 'South Africa',
    value: 55908000,
    category: 'africa'
  },
  {
    x: 'Myanmar',
    value: 54836000,
    category: 'asia'
  },
  {
    x: 'South Korea',
    value: 51446201,
    category: 'asia'
  },
  {
    x: 'Colombia',
    value: 49224700,
    category: 'america'
  },
  {
    x: 'Kenya',
    value: 48467000,
    category: 'africa'
  },
  {
    x: 'Spain',
    value: 46812000,
    category: 'europe'
  },
  {
    x: 'Argentina',
    value: 43850000,
    category: 'america'
  },
  {
    x: 'Ukraine',
    value: 42541633,
    category: 'europe'
  },
  {
    x: 'Sudan',
    value: 42176000,
    category: 'africa'
  },
  {
    x: 'Uganda',
    value: 41653000,
    category: 'africa'
  },
  {
    x: 'Algeria',
    value: 41064000,
    category: 'africa'
  },
  {
    x: 'Poland',
    value: 38424000,
    category: 'europe'
  },
  {
    x: 'Iraq',
    value: 37883543,
    category: 'asia'
  },
  {
    x: 'Canada',
    value: 36541000,
    category: 'america'
  },
  {
    x: 'Morocco',
    value: 34317500,
    category: 'africa'
  },
  {
    x: 'Saudi Arabia',
    value: 33710021,
    category: 'asia'
  },
  {
    x: 'Uzbekistan',
    value: 32121000,
    category: 'asia'
  },
  {
    x: 'Malaysia',
    value: 32063200,
    category: 'asia'
  },
  {
    x: 'Peru',
    value: 31826018,
    category: 'america'
  },
  {
    x: 'Venezuela',
    value: 31431164,
    category: 'america'
  },
  {
    x: 'Nepal',
    value: 28825709,
    category: 'asia'
  },
  {
    x: 'Angola',
    value: 28359634,
    category: 'africa'
  },
  {
    x: 'Ghana',
    value: 28308301,
    category: 'africa'
  },
  {
    x: 'Yemen',
    value: 28120000,
    category: 'asia'
  },
  {
    x: 'Afghanistan',
    value: 27657145,
    category: 'asia'
  },
  {
    x: 'Mozambique',
    value: 27128530,
    category: 'africa'
  },
  {
    x: 'Australia',
    value: 24460900,
    category: 'australia'
  },
  {
    x: 'North Korea',
    value: 24213510,
    category: 'asia'
  },
  {
    x: 'Cameroon',
    value: 23248044,
    category: 'africa'
  },
  {
    x: 'Ivory Coast',
    value: 22671331,
    category: 'africa'
  },
  {
    x: 'Madagascar',
    value: 22434363,
    category: 'africa'
  },
  {
    x: 'Niger',
    value: 21564000,
    category: 'africa'
  },
  {
    x: 'Sri Lanka',
    value: 21203000,
    category: 'asia'
  },
  {
    x: 'Romania',
    value: 19760000,
    category: 'europe'
  },
  {
    x: 'Burkina Faso',
    value: 19632147,
    category: 'africa'
  },
  {
    x: 'Syria',
    value: 18907000,
    category: 'asia'
  },
  {
    x: 'Mali',
    value: 18875000,
    category: 'africa'
  },
  {
    x: 'Malawi',
    value: 18299000,
    category: 'africa'
  },
  {
    x: 'Chile',
    value: 18191900,
    category: 'america'
  },
  {
    x: 'Kazakhstan',
    value: 17975800,
    category: 'asia'
  },
  {
    x: 'Netherlands',
    value: 17121900,
    category: 'europe'
  },
  {
    x: 'Ecuador',
    value: 16737700,
    category: 'america'
  },
  {
    x: 'Guatemala',
    value: 16176133,
    category: 'america'
  },
  {
    x: 'Zambia',
    value: 15933883,
    category: 'africa'
  },
  {
    x: 'Cambodia',
    value: 15626444,
    category: 'asia'
  },
  {
    x: 'Senegal',
    value: 15256346,
    category: 'africa'
  },
  {
    x: 'Chad',
    value: 14965000,
    category: 'africa'
  },
  {
    x: 'Zimbabwe',
    value: 14542235,
    category: 'africa'
  },
  {
    x: 'Guinea',
    value: 13291000,
    category: 'africa'
  },
  {
    x: 'South Sudan',
    value: 12131000,
    category: 'africa'
  },
  {
    x: 'Rwanda',
    value: 11553188,
    category: 'africa'
  },
  {
    x: 'Belgium',
    value: 11356191,
    category: 'europe'
  },
  {
    x: 'Tunisia',
    value: 11299400,
    category: 'africa'
  },
  {
    x: 'Cuba',
    value: 11239004,
    category: 'america'
  },
  {
    x: 'Bolivia',
    value: 11145770,
    category: 'america'
  },
  {
    x: 'Somalia',
    value: 11079000,
    category: 'africa'
  },
  {
    x: 'Haiti',
    value: 11078033,
    category: 'america'
  },
  {
    x: 'Greece',
    value: 10783748,
    category: 'europe'
  },
  {
    x: 'Benin',
    value: 10653654,
    category: 'africa'
  },
  {
    x: 'Czech Republic',
    value: 10578820,
    category: 'europe'
  },
  {
    x: 'Portugal',
    value: 10341330,
    category: 'europe'
  },
  {
    x: 'Burundi',
    value: 10114505,
    category: 'africa'
  },
  {
    x: 'Dominican Republic',
    value: 10075045,
    category: 'america'
  },
  {
    x: 'Sweden',
    value: 10054100,
    category: 'europe'
  },
  {
    x: 'United Arab Emirates',
    value: 10003223,
    category: 'asia'
  },
  {
    x: 'Jordan',
    value: 9889270,
    category: 'asia'
  },
  {
    x: 'Azerbaijan',
    value: 9823667,
    category: 'asia'
  },
  {
    x: 'Hungary',
    value: 9799000,
    category: 'europe'
  },
  {
    x: 'Belarus',
    value: 9498600,
    category: 'europe'
  },
  {
    x: 'Honduras',
    value: 8866351,
    category: 'america'
  },
  {
    x: 'Austria',
    value: 8773686,
    category: 'europe'
  },
  {
    x: 'Tajikistan',
    value: 8742000,
    category: 'asia'
  },
  {
    x: 'Israel',
    value: 8690220,
    category: 'asia'
  },
  {
    x: 'Switzerland',
    value: 8417700,
    category: 'europe'
  },
  {
    x: 'Papua New Guinea',
    value: 8151300,
    category: 'australia'
  }
]

// 配置处理脚本
const optionHandler = ''

// 数据处理脚本
const dataHandler = 'let wordFieldValue = setting.find(settingItem=>settingItem.field === \'wordField\').value\n' +
  'if (wordFieldValue) {\n' +
  '  option.colorField = wordFieldValue\n' +
  '}'

// 图表配置 new Line('domName', option)
const option = {
  // 数据将要放入到哪个字段中
  dataKey: 'data',
  data,
  appendPadding: [16, 16, 16, 16], // 设置图标的边距
  wordField: 'x',
  weightField: 'value',
  colorField: 'category',
  color: ['#5B8FF9', '#61DDAA', '#5D7092', '#F6BD16', '#6F5EF9', '#6DC8EC', '#945FB9', '#FF9845', '#1E9493', '#FF99C3'],
  wordStyle: {
    fontFamily: 'Verdana',
    fontSize: [24, 80]
  },
  imageMask: '',
  // 设置交互类型
  interactions: [{ type: 'element-active' }],
  state: {
    active: {
      // 这里可以设置 active 时的样式
      style: {
        lineWidth: 3
      }
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
  optionHandler,
  dataHandler
}
