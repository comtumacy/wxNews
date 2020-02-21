Component({
  // 自定义类名
    externalClasses: ['i-class'],
  // 组件之间的关系
    relations: {
        '../tabs/index': {
            type: 'parent'
        }
    },
  // 属性
    properties: {
        key: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        dot: {
            type: Boolean,
            value: false
        },
        count: {
            type: Number,
            value: 0
        }
    },

    data: {
        // scroll是否横向滚动
        // current当前所在的标签的 key 值
        current: false,
        currentColor: '',
        scroll: false
    },

    methods: {
        changeCurrent (current) {
            this.setData({ current });
        },
        changeCurrentColor (currentColor) {
            this.setData({ currentColor });
        },
        changeScroll (scroll) {
            this.setData({ scroll });
        },
        // 对外点击事件
        handleClickItem () {
          // 获取这个关系所对应的所有关联节点
            const parent = this.getRelationNodes('../tabs/index')[0];
          // 把点击事件往外组件传
            parent.emitEvent(this.data.key);
        }
    }
});
