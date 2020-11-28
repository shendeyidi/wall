// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

cloud.init()

const db = cloud.database()

exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })
  app.router('list', async (ctx, next) => {
    let talks = await db.collection('talk').get()
    ctx.body = talks
  })

  app.router('say', async (ctx, next) => {
    let {
      message,
      userInfo
    } = ctx._req.event
    let {
      openId
    } = userInfo;

    await db.collection('talk').add({
      data: {
        message,
        openId
      }
    })
    ctx.body = {
      'result':true
    }
  })


  return app.serve();
}