// pages/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    url: '',
    title: '',
    read: '',
    fromNews: '',
    contentFirst: [],
    contentLast: []
  },

  handleClick: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    this.setData({
      id: res.id,
      url: res.url,
      title: res.title,
      read: res.read,
      fromNews: res.fromNews
    })
    wx.request({
      url: 'https://yitongli.cn/newsApi/get/content_get',
      header: { 'id': res.id },
      success: (res) => {
        this.setData({
          contentFirst: res.data.content[0],
        })
        for (let i=1; i<res.data.content.length; i++){
          this.setData({
            contentLast: this.data.contentLast.concat(res.data.content[i])
          })
        }
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})