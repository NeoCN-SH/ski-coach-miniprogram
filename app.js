App({
  globalData: {
    favorites: [],
    userInfo: null
  },

  onLaunch() {
    const favorites = wx.getStorageSync('favorites') || []
    this.globalData.favorites = favorites
  },

  toggleFavorite(coachId) {
    const favorites = this.globalData.favorites
    const index = favorites.indexOf(coachId)
    if (index >= 0) favorites.splice(index, 1)
    else favorites.push(coachId)
    wx.setStorageSync('favorites', favorites)
    return index < 0
  }
})
