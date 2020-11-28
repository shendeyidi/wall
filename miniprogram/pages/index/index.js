const app = getApp()

Page({
  data: {
    messages: []
  },

  onLoad: function () {
       
  },

  onShow: function () {
    wx.cloud.callFunction({
      name: 'talk',
      data: {
        $url: 'list'
      }
    }).then(res => {
      const results = res.result.data
      this.setData({
        messages: results
      })      
    })
  },

  say: function(){
    wx.navigateTo({
      url: '/pages/talk/say/say'
    })
  },

})