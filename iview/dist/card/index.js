Component({
  // 自定义类名
  externalClasses: ['i-class'],
  // 一些选项
  options: {
    // 运行多个插槽
    multipleSlots: true
  },
  // 属性
  properties: {
    full: {
      type: Boolean,
      value: false
    },
    thumb: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    extra: {
      type: String,
      value: ''
    }
  }
});