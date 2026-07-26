const { getCoachById } = require('../../data/coaches')
const app = getApp()

Page({
  data: { coach: null, favorite: false },
  onLoad(options) {
    const coach = getCoachById(options.id)
    if (!coach) {
      wx.showToast({ title: '教练不存在', icon: 'none' })
      return
    }
    this.setData({
      coach,
      favorite: app.globalData.favorites.includes(coach.id)
    })
  },
  toggleFavorite() {
    const favorite = app.toggleFavorite(this.data.coach.id)
    this.setData({ favorite })
  },
  contact() {
    wx.showModal({
      title: '预约咨询',
      content: '正式版本可在此接入客服消息、手机号授权或预约表单。',
      showCancel: false
    })
  },
  previewBooking() {
    wx.showModal({
      title: '选择课程',
      content: `参考价格 ¥${this.data.coach.price}/小时，提交后由教练确认档期。`,
      confirmText: '我知道了',
      showCancel: false
    })
  },
  share() { return { title: `推荐双板教练：${this.data.coach.name}`, path: `/pages/coach-detail/coach-detail?id=${this.data.coach.id}` } }
})
