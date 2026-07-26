const { coaches } = require('../../data/coaches')
const app = getApp()

Page({
  data: {
    featured: [],
    favoriteMap: {},
    resorts: [
      { name: '崇礼', icon: '🏔️', desc: '雪场集中' },
      { name: '吉林', icon: '❄️', desc: '粉雪体验' },
      { name: '新疆', icon: '🌲', desc: '超长雪季' }
    ]
  },
  onShow() {
    const favoriteMap = {}
    app.globalData.favorites.forEach(id => { favoriteMap[id] = true })
    this.setData({
      featured: coaches.slice(0, 3),
      favoriteMap
    })
  },
  goCoaches() { wx.switchTab({ url: '/pages/coaches/coaches' }) },
  chooseResort(e) {
    wx.setStorageSync('selectedCity', e.currentTarget.dataset.name)
    wx.switchTab({ url: '/pages/coaches/coaches' })
  },
  toggleFavorite(e) {
    app.toggleFavorite(e.detail.id)
    const favoriteMap = {}
    app.globalData.favorites.forEach(id => { favoriteMap[id] = true })
    this.setData({ favoriteMap })
  }
})
