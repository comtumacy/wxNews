Component({
  // 自定义类名
    externalClasses: ['i-class'],
  // 定义和使用组件间关系
    relations: {
        '../col/index': {
            type: 'child'
        }
    }
});
