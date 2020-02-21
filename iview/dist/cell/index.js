const warn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};

Component({
  // 自定义类名
  externalClasses: ['i-class'],

  options: {
    multipleSlots: true
  },
  // 组件间关系
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  // 属性
  properties: {
    // 左侧内标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 只有点击 footer 区域才触发 tab 事件
    onlyTapFooter: {
      type: Boolean
    },
    // 是否展示右侧箭头并开启尝试以 url 跳转
    isLink: {
      type: null,
      value: ''
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    url: {
      type: String,
      value: ''
    }
  },

  // 私有变量
  data: {
    isLastCell: true
  },

  methods: {
    // 跳转
    navigateTo() {
      let url = this.data.url;
      const type = typeof this.data.isLink;

      this.triggerEvent('click', {});

      // 是否展示右侧箭头为否或url不存在或url为Ture与False，直接结束函数
      if (!this.data.isLink || !url || url === 'true' || url === 'false') return;

      // 检验
      if (type !== 'boolean' && type !== 'string') {
        warn('isLink 属性值必须是一个字符串或布尔值', this.data.isLink);
        return;
      }

      // 检验
      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
        return;
      }
      wx[this.data.linkType].call(wx, {
        url
      });
    },
    // 是否点击任意处触发跳转事件
    handleTap() {
      if (!this.data.onlyTapFooter) {
        this.navigateTo();
      }
    },

    updateIsLastCell(isLastCell) {
      this.setData({
        isLastCell
      });
    }
  }
});