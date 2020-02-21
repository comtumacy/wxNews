Component({
  // 自定义类名
    externalClasses: ['i-class'],
  // 组件间关系
    relations: {
        '../cell/index': {
            type: 'child',
            // 每次有子组件插入时执行
            linked () {
                this._updateIsLastCell();
            },
            // 每次有子组件移动时执行
            linkChanged () {
                this._updateIsLastCell();
            },
            // 每次有子组件移除时执行
            unlinked () {
                this._updateIsLastCell();
            }
        }
    },
    // 函数
    methods: {
        _updateIsLastCell() {
          // getRelationNodes获取这个关系所对应的所有关联节点
            let cells = this.getRelationNodes('../cell/index');
            const len = cells.length;

            if (len > 0) {
                let lastIndex = len - 1;

                cells.forEach((cell, index) => {
                    cell.updateIsLastCell(index === lastIndex);
                });
            }
        }
    }
});
