Component({
  // 自定义类名
    externalClasses: ['i-class'],
  // 组件关系
    relations: {
        '../tab/index': {
            type: 'child',
          // 在插入，移动，移除均执行changeCurrent
            linked () {
                this.changeCurrent();
            },
            linkChanged () {
                this.changeCurrent();
            },
            unlinked () {
                this.changeCurrent();
            }
        }
    },
  // 属性
    properties: {
      // 当前所在的标签的 key 值
        current: {
            type: String,
            value: '',
          // 数据监听器，绑定函数
            observer: 'changeCurrent'
        },
        // 主题色
        color: {
            type: String,
            value: ''
        },
        // 横向滚动
        scroll: {
            type: Boolean,
            value: false
        },
        // 使用fixed布局绑定在底部
        fixed: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        changeCurrent (val = this.data.current) {
          // 获取这个关系所对应的所有关联节点
            let items = this.getRelationNodes('../tab/index');
            const len = items.length;

            if (len > 0) {
                items.forEach(item => {
                  // 给父组件属性设置值
                    item.changeScroll(this.data.scroll);
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(this.data.color);
                });
            }
        },
        // 点击事件对外
        emitEvent (key) {
            this.triggerEvent('change', { key });
        }
    }
});
