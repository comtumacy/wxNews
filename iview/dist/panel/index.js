Component({
    // 自定义类名
    externalClasses: ['i-class'],
    // 属性
    properties: {
        title: {
            type: String,
            value: ''
        },
        // 标题顶部距离
        hideTop: {
            type: Boolean,
            value: false
        },
        hideBorder: {
            type: Boolean,
            value: false
        }
    }
});
