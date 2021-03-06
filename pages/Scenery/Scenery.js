// pages/Scenery/Scenery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: [
      "南宁市",
      "柳州市",
      "桂林市",
      "梧州市",
      "北海市",
      "防城港市",
      "钦州市",
      "贵港市",
      "玉林市",
      "贺州市",
      "广东省",
      "浙江省"
    ],
    name: [
      ["南宁市校友会"],
      ["柳州市校友分会"],
      ["桂林市校友分会"],
      ["梧州市校友分会"],
      ["北海市校友分会"],
      ["防城港市校友分会", 
      "防城区校友分会"],
      ["钦州市校友分会"],
      ["贵港市校友分会",
        "港北区校友分会",
        "港南区校友分会",
        "覃塘区校友分会",
        "桂平市校友分会",
        "平南县校友分会"],
      ["玉林市校友分会",
        "玉州区校友分会",
        "北流市校友分会",
        "容县校友分会",
        "陆川县校友分会",
        "博白县校友分会.",
        "兴业县校友分会",
        "福绵区校友分会"],
      ["贺州市校友分会"],
      ["广东校友工作联络站"],
      ["浙江校友工作联络站"]
    ]
  },

  clickEven: function(res) {
    wx.navigateTo({
      url: `../alumniDetails/alumniDetails?city=${res.currentTarget.dataset.cityitem}&name=${res.currentTarget.dataset.nameindex}`
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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