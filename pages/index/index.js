//index.js
const { $Toast } = require('../../iview/dist/base/index');
Page({
  data: {
    content: [],
    current: 'news'
  },

  tabBarClick: function (res) {
    this.setData({
      current: res.detail.key
    });
  },

  getContent: function () {
    wx.request({
      url: 'https://yitongli.cn/newsApi/get/news_get',
      header: {
        'content-type': 'application/json',
        'page': 0
      },
      success: (res) => {
        this.setData({
          content: res.data.content
        })
      }
    })
  },

  contentClick: function (res) {
    wx.navigateTo({
      url: `../content/content?id=${res.currentTarget.dataset.item.id}&url=${res.currentTarget.dataset.item.photo_url}&title=${res.currentTarget.dataset.item.title}&fromNews=${res.currentTarget.dataset.item.from}&read=${res.currentTarget.dataset.item.read_numbers}`
    })
  },

  onLoad: function () {
    this.getContent()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getContent()
    setTimeout(() => {
      wx.stopPullDownRefresh()
      $Toast({
        content: '刷新成功',
        type: 'success'
      });
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    setTimeout(() => {
      wx.stopPullDownRefresh()
      $Toast({
        content: '获取新数据成功',
        type: 'success'
      });
    }, 200)
    wx.request({
      url: 'https://yitongli.cn/newsApi/get/news_get',
      header: {
        'content-type': 'application/json',
        'page': 0
      },
      success: (res) => {
        for (let i = 0; i < res.data.content.length; i++){
          this.setData({
            content: this.data.content.concat(res.data.content[i])
          })
        }
      },
    })
  }
})