// miniprogram/pages/talk/say/say.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  sayChange: function(e){

    if(e.detail&&e.detail.value.length>0){
      let message = e.detail.value
      this.setData({
        message
      })
    }    
  },

  submit: function(){
    let {message} = this.data;
    wx.cloud.callFunction({
      name: 'talk',
      data: {
        message,
        $url: 'say'
      }
    }).then(res => {
      const result = res.result.result
      if(result){
        wx.navigateBack({
          delta: 1,
        })
      }
    })

  }

})