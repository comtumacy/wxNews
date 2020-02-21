Component({
    // 自定义类名
    externalClasses: ['i-class'],
    // 定义和使用组件间关系
    relations: {
        '../row/index': {
            type: 'parent'
        }
    },
    // 组件的对外属性，是属性名到属性设置的映射表
    properties: {
        span: {
            value: 0,
            type: Number
        },
        offset: {
            value: 0,
            type: Number
        }
    }
});
