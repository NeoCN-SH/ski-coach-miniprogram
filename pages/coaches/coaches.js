const { coaches } = require('../../data/coaches')
const app = getApp()

Page({
  data: {
    keyword: '',
    activeCity: '全部',
    activeLevel: '全部',
    onlyAvailable: false,
    cities: ['全部', '张家口', '吉林'],
    levels: ['全部', '入门', '进阶'],
    list: [],
    favoriteMap: {}
  },
  onShow() {
    const selected = wx.getStorageSync('selectedCity')
    wx.removeStorageSync('selectedCity')
    if (selected) this.setData({ activeCity: selected === '崇礼' ? '张家口' : selected })
    const favoriteMap = {}
    app.globalData.favorites.forEach(id => { favoriteMap[id] = true })
    this.setData({ favoriteMap })
    this.filter()
  },
  onInput(e) { this.setData({ keyword: e.detail.value }); this.filter() },
  selectCity(e) { this.setData({ activeCity: e.currentTarget.dataset.value }); this.filter() },
  selectLevel(e) { this.setData({ activeLevel: e.currentTarget.dataset.value }); this.filter() },
  toggleAvailable() { this.setData({ onlyAvailable: !this.data.onlyAvailable }); this.filter() },
  filter() {
    const { keyword, activeCity, activeLevel, onlyAvailable } = this.data
    const list = coaches.filter(item => {
      const text = `${item.name}${item.resort}${item.city}${item.specialties.join('')}`
      const keywordMatch = !keyword || text.includes(keyword)
      const cityMatch = activeCity === '全部' || item.city === activeCity
      const levelMatch = activeLevel === '全部' ||
        (activeLevel === '入门' ? item.specialties.some(v => v.includes('入门')) : !item.specialties.some(v => v.includes('入门')))
      return keywordMatch && cityMatch && levelMatch && (!onlyAvailable || item.available)
    })
    this.setData({ list })
  },
  toggleFavorite(e) {
    app.toggleFavorite(e.detail.id)
    const favoriteMap = {}
    app.globalData.favorites.forEach(id => { favoriteMap[id] = true })
    this.setData({ favoriteMap })
  }
})
