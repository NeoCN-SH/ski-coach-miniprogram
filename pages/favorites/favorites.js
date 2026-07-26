const { coaches } = require('../../data/coaches')
const app = getApp()

Page({
  data: { list: [], favorites: [] },
  onShow() { this.refresh() },
  refresh() {
    const favorites = [...app.globalData.favorites]
    this.setData({
      favorites,
      list: coaches.filter(item => favorites.includes(item.id))
    })
  },
  toggleFavorite(e) { app.toggleFavorite(e.detail.id); this.refresh() },
  goCoaches() { wx.switchTab({ url: '/pages/coaches/coaches' }) }
})
